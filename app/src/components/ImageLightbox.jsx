import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ImageLightbox({ images, title, activeIndex, onClose, onChange }) {
  if (activeIndex === null || activeIndex === undefined) return null;

  const safeImages = images || [];
  const activeImage = safeImages[activeIndex];
  const hasMultiple = safeImages.length > 1;

  if (!activeImage) return null;

  const showPrevious = (event) => {
    event.stopPropagation();
    onChange((activeIndex - 1 + safeImages.length) % safeImages.length);
  };

  const showNext = (event) => {
    event.stopPropagation();
    onChange((activeIndex + 1) % safeImages.length);
  };

  return (
    <div className="fixed inset-0 z-[80] bg-slate-950/92 px-4 py-5 backdrop-blur-sm md:px-8" role="dialog" aria-modal="true" aria-label={`Preview gambar ${title}`} onClick={onClose}>
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-center">
        <div className="mb-3 flex items-center justify-between gap-3 text-white" onClick={(event) => event.stopPropagation()}>
          <p className="truncate text-sm font-semibold md:text-base">{title}</p>
          <button type="button" onClick={onClose} className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-white/20" aria-label="Tutup">
            <X size={22} />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center">
          <img src={activeImage} alt={`${title} diperbesar ${activeIndex + 1}`} onClick={(event) => event.stopPropagation()} className="max-h-[78vh] w-full rounded-lg object-contain shadow-2xl md:max-h-[82vh]" />

          {hasMultiple && (
            <>
              <button type="button" onClick={showPrevious} className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-black/45 text-white transition hover:bg-black/65 md:left-4 md:h-12 md:w-12" aria-label="Gambar sebelumnya">
                <ChevronLeft size={24} />
              </button>
              <button type="button" onClick={showNext} className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-black/45 text-white transition hover:bg-black/65 md:right-4 md:h-12 md:w-12" aria-label="Gambar berikutnya">
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {hasMultiple && (
          <div className="mt-4 flex justify-center gap-2" onClick={(event) => event.stopPropagation()}>
            {safeImages.map((image, index) => (
              <button key={image} type="button" onClick={() => onChange(index)} className={`h-2.5 rounded-full transition ${index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/60"}`} aria-label={`Buka gambar ${index + 1}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
