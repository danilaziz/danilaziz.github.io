import { HelpCircle } from "lucide-react";
import { faqs } from "../data/siteContent";

export default function FaqSection() {
  return (
    <section className="deferred-section pb-16 md:pb-20">
      <div className="shell">
        <div className="mb-7 max-w-3xl">
          <p className="section-label">FAQ</p>
          <h2 className="section-title mt-3">Pertanyaan yang sering muncul sebelum mulai.</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <article key={item.question} className="soft-card p-5 md:p-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
                  <HelpCircle size={18} />
                </div>
                <div>
                  <h3 className="heading-font text-lg font-bold text-[color:var(--text-main)]">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">{item.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
