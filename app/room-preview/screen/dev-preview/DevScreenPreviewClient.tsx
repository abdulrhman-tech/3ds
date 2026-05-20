"use client";

import StatusPanel from "@/features/room-preview/screen/StatusPanel";
import type { RoomPreviewSession } from "@/lib/room-preview/types";

type DevScreenPreviewClientProps = {
  session: RoomPreviewSession;
};

export default function DevScreenPreviewClient({ session }: DevScreenPreviewClientProps) {
  return (
    <StatusPanel
      session={session}
      hasSelectedProduct={Boolean(session.selectedProduct?.id && session.selectedProduct.imageUrl)}
      hasSelectedRoom={Boolean(session.selectedRoom?.imageUrl)}
      pollError={null}
      resetCountdown={null}
      idleCountdown={null}
      onRetry={() => window.location.reload()}
    />
  );
}
