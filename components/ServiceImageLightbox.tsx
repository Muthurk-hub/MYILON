'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

type ServiceImageLightboxProps = {
  src: string;
  alt: string;
};

export default function ServiceImageLightbox({ src, alt }: ServiceImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mb-4 block w-full overflow-hidden rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      >
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          className="h-44 w-full object-cover transition-transform duration-200 hover:scale-[1.02]"
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
            onClick={() => setIsOpen(false)}
            aria-label="Close image viewer"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative max-h-[90vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={1400}
              height={900}
              className="max-h-[90vh] w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
