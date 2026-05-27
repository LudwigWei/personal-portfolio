import { X } from "lucide-react";

export function ImageModal({
  open,
  src,
  alt,
  onClose,
}: {
  open: boolean;
  src?: string;
  alt?: string;
  onClose: () => void;
}) {
  if (!open || !src) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close image"
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-neutral-50 z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full h-full">
          <img src={src} alt={alt ?? "image"} className="w-full h-auto object-contain rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
