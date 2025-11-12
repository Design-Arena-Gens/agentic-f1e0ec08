import { scenes } from "@/data/scenes";
import { clsx } from "clsx";

const totalDuration = 25;

function durationPercentage(range: string) {
  const [start, end] = range
    .replace(/[^0-9–-]/g, " ")
    .split(/[–-]/)
    .map((value) => Number(value.trim()));
  if (Number.isFinite(start) && Number.isFinite(end) && totalDuration > 0) {
    return ((end - start) / totalDuration) * 100;
  }
  return 33.33;
}

export default function Page() {
  return (
    <main className="min-h-screen px-6 pb-16 pt-14 md:px-12">
      <section className="scene-card relative overflow-hidden p-10 md:p-14">
        <div className="hero-overlay pointer-events-none absolute inset-0 opacity-5" />
        <div className="relative z-10 space-y-6 text-elderBlue">
          <span className="inline-block rounded-full border border-elderTeal/40 bg-white/70 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-elderTeal">
            Video Storyboard
          </span>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-elderBlue md:text-5xl">
            “Ghar Jaisa Care” • 25-Second Brand Film
          </h1>
          <p className="max-w-2xl text-lg text-elderBlue/80">
            Crafted for Eldertex Healthcare Pvt. Ltd. A warm, reassuring
            narrative showcasing compassionate home healthcare with cinematic
            visuals, emotional piano, and gentle strings.
          </p>
          <div className="grid gap-4 text-sm font-medium text-elderBlue/70 md:grid-cols-3">
            <div>
              <h2 className="font-heading text-xs uppercase tracking-[0.2em] text-elderBlue/60">
                Duration
              </h2>
              <p className="text-base text-elderBlue">~25 seconds</p>
            </div>
            <div>
              <h2 className="font-heading text-xs uppercase tracking-[0.2em] text-elderBlue/60">
                Music Direction
              </h2>
              <p className="text-base text-elderBlue">
                Soft emotional piano with gentle string layers
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xs uppercase tracking-[0.2em] text-elderBlue/60">
                Mood
              </h2>
              <p className="text-base text-elderBlue">
                Calm • Caring • Reassuring • Home-like warmth
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-8">
        <header>
          <h2 className="font-heading text-2xl font-semibold text-elderBlue">
            Scene-by-Scene Breakdown
          </h2>
          <p className="mt-2 max-w-3xl text-base text-elderBlue/70">
            Each scene pairs evocative visuals with precise voiceover cues,
            ensuring a seamless flow that highlights Eldertex’s full spectrum of
            at-home care services.
          </p>
        </header>

        <div className="space-y-10">
          {scenes.map((scene, index) => (
            <article key={scene.id} className="scene-card relative overflow-hidden p-8 md:p-10">
              <div className="absolute inset-x-0 top-0 h-1.5">
                <div
                  className={clsx(
                    "timeline h-full rounded-b-full",
                    index === 0 && "rounded-tl-full",
                    index === scenes.length - 1 && "rounded-tr-full"
                  )}
                  style={{ width: `${durationPercentage(scene.timeRange)}%` }}
                  aria-hidden
                />
              </div>
              <div className="relative z-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
                <div className="space-y-4">
                  <span className="font-heading text-xs uppercase tracking-[0.3em] text-elderTeal">
                    {scene.timeRange}
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-elderBlue">
                    {scene.title}
                  </h3>
                  <p className="text-lg text-elderBlue/80 leading-relaxed">
                    {scene.visual}
                  </p>
                </div>
                <div className="space-y-4 rounded-2xl bg-elderCream/70 p-6 shadow-inner">
                  <div>
                    <h4 className="font-heading text-sm uppercase tracking-[0.25em] text-elderBlue/70">
                      Voiceover
                    </h4>
                    <p className="mt-2 text-base font-medium text-elderBlue">
                      {scene.voiceover}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-heading text-sm uppercase tracking-[0.25em] text-elderBlue/70">
                      Direction Notes
                    </h4>
                    <ul className="mt-2 space-y-2 text-sm text-elderBlue/80">
                      {scene.notes.map((note) => (
                        <li key={note} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-elderTeal/80" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scene-card mt-12 p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-semibold text-elderBlue">
              Audio & Delivery
            </h2>
            <p className="mt-2 text-base text-elderBlue/80">
              Maintain a calm tempo at 78–82 BPM. Let the piano lead with a
              delicate motif, while strings swell during transitions. Keep SFX
              subtle—morning ambiance, soft footsteps, a gentle whoosh for
              logo reveal.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl bg-white/80 p-6 shadow-inner">
            <div>
              <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-elderBlue/60">
                Final Slate
              </h3>
              <p className="mt-1 text-base text-elderBlue">
                Eldertex Healthcare Pvt. Ltd.
              </p>
              <p className="text-sm text-elderBlue/70">
                Helpline: +91 98765 43210 • eldertexcare.com
              </p>
            </div>
            <div>
              <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-elderBlue/60">
                CTA
              </h3>
              <p className="text-base text-elderBlue">
                “Call today for personalised home care plans.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
