import "server-only";

import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import type { MockRoomPreviewProduct } from "@/lib/room-preview/types";

const PRODUCTS_DIRECTORY = path.join(process.cwd(), "public", "product");
const PRODUCT_CODE_PATTERN = /\b[A-Z]{2,}\d+(?:\.\d+)?\b/;
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function isImageFile(fileName: string) {
  return IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase());
}

function buildPublicProductImageUrl(folderName: string) {
  return `/product/${encodeURIComponent(folderName)}/p.png`;
}

function buildPublicProductRoomImageUrl(folderName: string, fileName: string) {
  return `/product/${encodeURIComponent(folderName)}/${encodeURIComponent(fileName)}`;
}

function getProductCode(folderName: string) {
  return folderName.match(PRODUCT_CODE_PATTERN)?.[0] ?? folderName;
}

function getProductName(folderName: string, productCode: string) {
  const codeIndex = folderName.indexOf(productCode);
  if (codeIndex === -1) return folderName;

  const name = folderName.slice(codeIndex + productCode.length).trim();
  return name ? `${productCode} ${name}` : productCode;
}

function getProductsFromPublicDirectory(): MockRoomPreviewProduct[] {
  try {
    return readdirSync(PRODUCTS_DIRECTORY, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .filter((entry) => existsSync(path.join(PRODUCTS_DIRECTORY, entry.name, "p.png")))
      .map((entry) => {
        const productCode = getProductCode(entry.name);

        return {
          id: productCode,
          barcode: productCode,
          name: getProductName(entry.name, productCode),
          productType: "floor_material",
          imageUrl: buildPublicProductImageUrl(entry.name),
        } satisfies MockRoomPreviewProduct;
      })
      .sort((left, right) => left.id.localeCompare(right.id));
  } catch {
    return [];
  }
}

export function getRoomPreviewMockProducts(): MockRoomPreviewProduct[] {
  return getProductsFromPublicDirectory();
}

export function getRoomPreviewProductRoomImages(): string[] {
  try {
    return readdirSync(PRODUCTS_DIRECTORY, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => {
        const roomImage = readdirSync(path.join(PRODUCTS_DIRECTORY, entry.name), { withFileTypes: true })
          .filter((fileEntry) => fileEntry.isFile())
          .map((fileEntry) => fileEntry.name)
          .filter((fileName) => isImageFile(fileName) && fileName.toLowerCase() !== "p.png")
          .sort((left, right) => left.localeCompare(right))[0];

        return roomImage
          ? {
              id: getProductCode(entry.name),
              imageUrl: buildPublicProductRoomImageUrl(entry.name, roomImage),
            }
          : null;
      })
      .filter((item): item is { id: string; imageUrl: string } => item !== null)
      .sort((left, right) => left.id.localeCompare(right.id))
      .map((item) => item.imageUrl);
  } catch {
    return [];
  }
}

export function getRoomPreviewMockProductById(productId: string) {
  return getProductsFromPublicDirectory().find((p) => p.id === productId) ?? null;
}

export function getRoomPreviewMockProductByBarcode(barcode: string) {
  return getProductsFromPublicDirectory().find((p) => p.barcode === barcode) ?? null;
}
