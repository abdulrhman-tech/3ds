-- CreateIndex
CREATE INDEX "RoomPreviewSession_status_updatedAt_idx" ON "RoomPreviewSession"("status", "updatedAt");

-- CreateIndex
CREATE INDEX "RoomPreviewSession_status_lastMobileSeenAt_idx" ON "RoomPreviewSession"("status", "lastMobileSeenAt");

-- CreateIndex
CREATE INDEX "RoomPreviewSession_status_lastScreenSeenAt_idx" ON "RoomPreviewSession"("status", "lastScreenSeenAt");
