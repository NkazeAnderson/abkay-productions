"use client";

import Image from "next/image";
import { X } from "lucide-react";

type LightboxImage = {
  src: string;
  alt: string;
};

type ImageLightboxProps = {
  image: LightboxImage | null;
  onClose: () => void;
};

export default function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-10000 bg-black/90 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <div
        className="relative w-full max-w-6xl h-[82vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute z-20 bottom-5 left-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-red-200/95 border border-red-300 text-red-700 hover:bg-red-100 transition-colors flex items-center justify-center shadow-lg"
      >
        <X size={18} />
      </button>
    </div>
  );
}
