'use client';

import { useEffect, useState } from 'react';

type Status = 'LOADING' | 'RUNNING' | 'DEGRADED' | 'UNREACHABLE';

const POLL_INTERVAL_MS = 30_000;

const STATES: Record<Status, { label: string; dot: string; ping: string; text: string }> = {
  LOADING:     { label: 'Checking…',          dot: 'bg-muted-foreground', ping: '',                            text: 'text-muted-foreground' },
  RUNNING:     { label: 'System Online',      dot: 'bg-primary',          ping: 'bg-primary',                  text: 'text-muted-foreground' },
  DEGRADED:    { label: 'System Degraded',    dot: 'bg-amber-400',        ping: 'bg-amber-400',                text: 'text-amber-300' },
  UNREACHABLE: { label: 'Gateway Unreachable', dot: 'bg-rose-500',        ping: '',                            text: 'text-rose-300' },
};

export function StatusIndicator() {
  const [status, setStatus] = useState<Status>('LOADING');

  useEffect(() => {
    let cancelled = false;

    const tick = async () => {
      try {
        const res = await fetch('/api/status', { cache: 'no-store' });
        const data: { state?: string } = await res.json();
        if (cancelled) return;
        const state = (data.state ?? '').toUpperCase();
        if (state === 'RUNNING') setStatus('RUNNING');
        else if (state === 'UNREACHABLE') setStatus('UNREACHABLE');
        else setStatus('DEGRADED');
      } catch {
        if (!cancelled) setStatus('UNREACHABLE');
      }
    };

    tick();
    const id = setInterval(tick, POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const s = STATES[status];

  return (
    <div className={`hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] sm:flex ${s.text}`}>
      <span className="relative flex h-2 w-2">
        {s.ping && (
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${s.ping}`} />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${s.dot}`} />
      </span>
      {s.label}
    </div>
  );
}
