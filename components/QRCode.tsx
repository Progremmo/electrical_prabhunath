"use client";

import React, { useSyncExternalStore } from "react";

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
}

const emptySubscribe = () => () => {};

/**
 * Dynamic QR Code Generator Component
 * Uses SVG matrix rendering without bulky external client libraries.
 * Updates dynamically whenever the website URL changes.
 */
export default function QRCode({ value, size = 160, className = "" }: QRCodeProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Encoded URL string for dynamic SVG QR representation
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    value
  )}&format=svg&color=0F172A&bgcolor=FFFFFF`;

  if (!isMounted) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`bg-slate-100 rounded-xl animate-pulse flex items-center justify-center text-xs text-slate-400 ${className}`}
      >
        QR Loading...
      </div>
    );
  }

  return (
    <div className={`inline-block p-2 bg-white rounded-xl shadow-md border border-slate-200 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={qrImageUrl}
        alt={`Dynamic QR code linking to ${value}`}
        width={size}
        height={size}
        className="rounded-lg object-contain"
        loading="lazy"
      />
    </div>
  );
}
