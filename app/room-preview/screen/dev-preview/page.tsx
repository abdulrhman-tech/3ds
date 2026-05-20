import { redirect } from "next/navigation";
import GlassBackground from "@/components/GlassBackground";
import {
  getRoomPreviewMockProducts,
  getRoomPreviewProductRoomImages,
} from "@/data/room-preview/mock-products";
import DevScreenPreviewClient from "./DevScreenPreviewClient";
import type { RoomPreviewSession } from "@/lib/room-preview/types";

function buildDevPreviewSession(): RoomPreviewSession {
  const now = new Date().toISOString();
  const product = getRoomPreviewMockProducts()[0] ?? {
    id: "dev-product",
    barcode: "DEV-PRODUCT",
    name: "Dev Preview Product",
    productType: "floor_material" as const,
    imageUrl: "/product/PQC301.006/p.png",
  };
  const roomImageUrl = getRoomPreviewProductRoomImages()[0] ?? "/rs/rs.png";

  return {
    id: "dev-preview-screen-session",
    status: "product_selected",
    createdAt: now,
    updatedAt: now,
    expiresAt: null,
    mobileConnected: true,
    selectedRoom: {
      source: "gallery",
      imageUrl: roomImageUrl,
      demoRoomId: null,
      floorQuad: null,
      previewRegion: null,
    },
    selectedProduct: {
      id: product.id,
      barcode: product.barcode,
      name: product.name,
      productType: product.productType,
      imageUrl: product.imageUrl,
    },
    renderResult: null,
  };
}

export default function DevScreenPreviewPage() {
  const canUseDevPreview =
    process.env.NODE_ENV === "development" && !process.env.DATABASE_URL;

  if (!canUseDevPreview) {
    redirect("/room-preview");
  }

  const session = buildDevPreviewSession();

  return (
    <main className="screen-kiosk-page dark relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <GlassBackground />
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] items-center px-8 py-10">
        <DevScreenPreviewClient session={session} />
      </div>
    </main>
  );
}
