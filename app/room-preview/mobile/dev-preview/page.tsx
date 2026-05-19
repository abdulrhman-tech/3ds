import { redirect } from "next/navigation";
import MobileSessionClient from "@/components/room-preview/MobileSessionClient";
import { getRoomPreviewMockProducts } from "@/data/room-preview/mock-products";

const DEV_PREVIEW_SESSION_ID = "dev-preview-session";
const DEV_PREVIEW_TOKEN = "dev-preview-token";

type DevPreviewPageProps = {
  searchParams: Promise<{ token?: string }>;
};

export default async function DevPreviewMobilePage({ searchParams }: DevPreviewPageProps) {
  const { token } = await searchParams;
  const canUseDevPreview =
    process.env.NODE_ENV === "development" && !process.env.DATABASE_URL;

  if (!canUseDevPreview) {
    redirect("/room-preview");
  }

  if (token !== DEV_PREVIEW_TOKEN) {
    redirect(`/room-preview/mobile/dev-preview?token=${DEV_PREVIEW_TOKEN}`);
  }

  const products = getRoomPreviewMockProducts();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-4 py-10">
        <MobileSessionClient
          devPreviewMode
          sessionId={DEV_PREVIEW_SESSION_ID}
          products={products}
        />
      </div>
    </main>
  );
}
