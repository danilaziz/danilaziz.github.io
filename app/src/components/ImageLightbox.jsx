import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../context/useLanguage";

export default function ImageLightbox({ images, title, activeIndex, onClose, onChange }) {
  const { isEnglish } = useLanguage();
  const safeImages = images || [];
  const activeImage = safeImages[activeIndex];
  const hasMultiple = safeImages.length > 1;

  useEffect(() => {
    if (activeIndex === null || activeIndex === undefined) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft" && hasMultiple) {
        onChange((activeIndex - 1 + safeImages.length) % safeImages.length);
      }
      if (event.key === "ArrowRight" && hasMultiple) {
        onChange((activeIndex + 1) % safeImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, hasMultiple, onChange, onClose, safeImages.length]);

  if (activeIndex === null || activeIndex === undefined || !activeImage) return null;

  const showPrevious = (event) => {
    event.stopPropagation();
    onChange((activeIndex - 1 + safeImages.length) % safeImages.length);
  };

  const showNext = (event) => {
    event.stopPropagation();
    onChange((activeIndex + 1) % safeImages.length);
  };

  return createPortal(
    <div className="fixed inset-0 z-[80] h-[100dvh] w-screen bg-slate-950/96 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${isEnglish ? "Image preview" : "Preview gambar"} ${title}`} onClick={onClose}>
      <div className="absolute left-3 right-3 top-3 z-20 flex items-center justify-between gap-3 text-white md:left-5 md:right-5 md:top-5" onClick={(event) => event.stopPropagation()}>
        <p className="max-w-[calc(100vw-5.5rem)] truncate rounded-md bg-black/35 px-3 py-2 text-sm font-semibold shadow-lg md:text-base">{title}</p>
        <button type="button" onClick={onClose} className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/70 bg-white text-slate-950 shadow-lg transition hover:bg-slate-100 md:h-12 md:w-12" aria-label={isEnglish ? "Close" : "Tutup"}>
          <X size={22} />
        </button>
      </div>

      <div className="flex h-[100dvh] w-screen items-center justify-center p-2 pb-12 pt-16 md:p-6 md:pb-16 md:pt-20">
        <img src={activeImage} alt={`${title} ${isEnglish ? "enlarged" : "diperbesar"} ${activeIndex + 1}`} onClick={(event) => event.stopPropagation()} className="h-full max-h-full w-full max-w-full object-contain shadow-2xl" />

        {hasMultiple && (
          <>
            <button type="button" onClick={showPrevious} className="absolute left-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-black/45 text-white shadow-lg transition hover:bg-black/65 md:left-5 md:h-12 md:w-12" aria-label={isEnglish ? "Previous image" : "Gambar sebelumnya"}>
              <ChevronLeft size={24} />
            </button>
            <button type="button" onClick={showNext} className="absolute right-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-black/45 text-white shadow-lg transition hover:bg-black/65 md:right-5 md:h-12 md:w-12" aria-label={isEnglish ? "Next image" : "Gambar berikutnya"}>
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 justify-center gap-2 rounded-full bg-black/35 px-3 py-2" onClick={(event) => event.stopPropagation()}>
          {safeImages.map((image, index) => (
            <button key={image} type="button" onClick={() => onChange(index)} className={`h-2.5 rounded-full transition ${index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/60"}`} aria-label={`${isEnglish ? "Open image" : "Buka gambar"} ${index + 1}`} />
          ))}
        </div>
      )}
    </div>,
    document.body,
  );
}
