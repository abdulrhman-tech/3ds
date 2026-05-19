import Link from "next/link";
import { Carousel3D } from "@/components/room-preview/Carousel3D";
import { getRoomPreviewProductRoomImages } from "@/data/room-preview/mock-products";

export default function RoomPreviewLandingPage() {
  const showDevNoDbEntry =
    process.env.NODE_ENV === "development" && !process.env.DATABASE_URL;
  const carouselImages = getRoomPreviewProductRoomImages();

  return (
    <main style={{ background: "#0d1b35", minHeight: "100dvh" }}>
      {showDevNoDbEntry ? (
        <Link
          href="/room-preview/mobile/dev-preview?token=dev-preview-token"
          className="fixed left-4 top-4 z-50 rounded-lg border border-cyan-300/40 bg-black/70 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:bg-black/80"
        >
          Open Real Mobile Flow (Dev No DB)
        </Link>
      ) : null}
      <Carousel3D images={carouselImages} />
    </main>
  );
}
