import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, BarChart3, Bell, Activity } from 'lucide-react';
import { StatusIndicator } from '@/components/status-indicator';

const WEB_LAUNCH_URL =
  'https://cerberus.tradewindcontrols.com:8043/data/perspective/client/HighPeakEnergy';

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-grid" />

      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/75 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/40">
              <Activity className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">Cerberus Watchdog</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Hosted SCADA · Tradewind Controls
              </span>
            </div>
          </div>
          <StatusIndicator />
        </div>
      </header>

      <main className="relative z-10 flex-1">
        <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-10 pt-6 text-center md:pt-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Powered by Ignition · Inductive Automation
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="flex h-20 items-center justify-center md:h-24">
              <Image
                src="/company-logo.png"
                alt="High Peak Energy"
                width={588}
                height={88}
                priority
                className="h-full w-auto object-contain"
              />
            </div>

            <div className="ring-divider h-px w-32" />

            <div className="relative flex items-center justify-center">
              <div
                aria-hidden
                className="absolute h-56 w-56 rounded-full bg-primary/20 blur-3xl"
              />
              <div className="relative animate-float">
                <Image
                  src="/cerberus-watchdog-logo.png"
                  alt="Cerberus Watchdog"
                  width={300}
                  height={318}
                  priority
                  className="h-40 w-auto object-contain drop-shadow-[0_0_40px_rgba(64,165,198,0.35)] md:h-44"
                />
              </div>
            </div>
          </div>

          <h1 className="mt-12 max-w-3xl text-balance bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
            Real-time visibility for every barrel, every well, every site.
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
            Launch the High Peak Energy Cerberus Watchdog hub to monitor operations,
            review alarms, and access live SCADA from any browser.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Link
              href={WEB_LAUNCH_URL}
              className="group glow-primary inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90"
            >
              Launch Web Hub
              <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              HTML5 · Secure · No install
            </span>
          </div>
        </section>

        <section id="features" className="relative w-full border-t border-border/60 py-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                Capabilities
              </span>
              <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Built for the field. Delivered to your browser.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <FeatureCard
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Real-time Monitoring"
                body="Watch facility performance and health live, with the ability to act on changes the moment they happen."
              />
              <FeatureCard
                icon={<Bell className="h-5 w-5" />}
                title="Instant Alerts"
                body="SMS notifications the second an alarm trips — your team is never the last to know."
              />
              <FeatureCard
                icon={<BarChart3 className="h-5 w-5" />}
                title="Detailed Reporting"
                body="Comprehensive analytics and trends to drive operational decisions with data, not guesses."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 w-full border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            © 2022–{new Date().getFullYear()} ·{' '}
            <Link
              href="https://www.tradewindcontrols.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 underline-offset-4 hover:text-primary hover:underline"
            >
              Tradewind Controls
            </Link>
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
            v1.0 · cerberus.tradewindcontrols.com
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/80 bg-card/40 p-6 backdrop-blur transition-colors hover:border-primary/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
      />
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
