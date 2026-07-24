import { useState } from "react";
import { Menu, X, ArrowRight, CheckSquare } from "lucide-react";

const serif = "'Fraunces', Georgia, serif";
const sans = "'Figtree', system-ui, sans-serif";

// ── Custom SVG icons for features ──────────────────────────────────────────

function IconShieldCheck({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={className}>
      <path d="M11 2L3.5 5.5v5c0 4.14 3.08 8.01 7.5 9 4.42-.99 7.5-4.86 7.5-9v-5L11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7.5 11l2.5 2.5 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconFlameRising({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={className}>
      <path d="M11 20c4 0 7-2.69 7-6.5 0-2.5-1.5-4-3-5 .5 2-1 3.5-2 4-.5-2-2-3.5-2-6C8 8 6 10.5 6 13c0 .5.06 1 .18 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 20c-2.5 0-4.5-1.5-4.5-4 0-1.5 1-2.5 1.5-3 0 1.5 1 2.5 2 2.5-.5-1-.5-2.5.5-3.5.5 2 2.5 2.5 2.5 4.5 0 .5 0 1-.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconPhoneLock({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={className}>
      <rect x="5" y="2" width="12" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="17.5" r="1" fill="currentColor" />
      <rect x="8.5" y="8.5" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9.5 8.5V7.5a1.5 1.5 0 013 0v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconHabitLoop({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={className}>
      <path d="M11 4a7 7 0 100 14A7 7 0 0011 4z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M11 7v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 4.5l1 2.5-2.5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Logo ────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-full bg-[#3D6B58] flex items-center justify-center shadow-sm">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="4.5" y="9" width="11" height="8.5" rx="1.5" fill="white" />
          <path d="M7.5 9V7C7.5 5.34 8.62 4 10 4C11.38 4 12.5 5.34 12.5 7V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 13.5l1.5 1.5 3-3" stroke="#3D6B58" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-[17px] font-bold tracking-tight text-foreground" style={{ fontFamily: sans }}>
        Veri<span className="text-[#3D6B58]">Task</span>
      </span>
    </div>
  );
}

// ── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[68px] bg-background/90 backdrop-blur-sm border-b border-border">
      <Logo />
      <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-muted-foreground" style={{ fontFamily: sans }}>
        <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#waitlist" className="hover:text-foreground transition-colors">Early Access</a>
      </div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <div className="absolute top-[68px] left-0 right-0 bg-background border-b border-border px-6 py-5 flex flex-col gap-4 md:hidden" style={{ fontFamily: sans }}>
          <a href="#how" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>How it works</a>
          <a href="#features" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Features</a>
          <a href="#waitlist" className="text-sm font-semibold text-[#3D6B58]" onClick={() => setOpen(false)}>Get Early Access</a>
        </div>
      )}
    </nav>
  );
}

// ── App UI Mockup ────────────────────────────────────────────────────────────

function AppMockup() {
  const tasks = [
    { label: "Exercise for 20 minutes", done: true },
    { label: "Read for 30 minutes", done: false },
    { label: "Drink 8 glasses of water", done: false },
  ];

  return (
    <div className="relative">
      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.055] pointer-events-none" style={{ width: 500, height: 500 }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.035] pointer-events-none" style={{ width: 630, height: 630 }} />

      {/* Phone shell */}
      <div className="relative mx-auto rounded-[44px] shadow-[0_32px_80px_-12px_rgba(0,0,0,0.22)] overflow-hidden bg-[#1C1C1C]" style={{ width: 258, height: 528 }}>
        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-[26px] bg-[#1C1C1C] rounded-full z-20" />
        {/* Screen */}
        <div className="absolute inset-[3px] rounded-[41px] overflow-hidden" style={{ background: "#F7F3EE" }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-10 pb-1">
            <span className="text-[11px] font-semibold text-[#1C1B18]" style={{ fontFamily: sans }}>9:41</span>
            <div className="flex items-center gap-1.5">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="#1C1B18"><rect x="0" y="5" width="2.5" height="5" rx="0.5"/><rect x="3.5" y="3" width="2.5" height="7" rx="0.5"/><rect x="7" y="1" width="2.5" height="9" rx="0.5"/><rect x="10.5" y="0" width="2.5" height="10" rx="0.5"/></svg>
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M6.5 2.5C8.16 2.5 9.66 3.16 10.76 4.24L12 3C10.57 1.57 8.63 0.67 6.5 0.67C4.37 0.67 2.43 1.57 1 3l1.24 1.24C3.34 3.16 4.84 2.5 6.5 2.5z" fill="#1C1B18"/><path d="M6.5 5C7.33 5 8.08 5.34 8.62 5.88L9.85 4.65A5 5 0 006.5 3.33a5 5 0 00-3.35 1.32L4.38 5.88C4.92 5.34 5.67 5 6.5 5z" fill="#1C1B18"/><circle cx="6.5" cy="8" r="1.5" fill="#1C1B18"/></svg>
              <div className="flex items-center gap-0.5">
                <div className="w-5 h-2.5 rounded-[2px] border border-[#1C1B18]/40 p-px"><div className="w-3/4 h-full rounded-[1px] bg-[#1C1B18]" /></div>
              </div>
            </div>
          </div>

          {/* Streak card */}
          <div className="mx-3 mt-2 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 18c3.5 0 6-2.5 6-5.5 0-2.2-1.2-3.5-2.5-4.5.5 1.8-.8 3-1.5 3.5-.5-1.5-1.5-2.8-1.5-5-2 1.8-3.5 3.8-3.5 6 0 .4.04.8.13 1.2" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round"/>
                <path d="M10 18c-2 0-3.5-1.2-3.5-3 0-1.2.8-2 1.2-2.5 0 1.2.8 2 1.5 2-.3-.8-.3-2 .5-2.8.4 1.5 2 2 2 3.5 0 .4 0 .8-.4 1.3" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="text-[18px] font-bold text-[#1C1B18] leading-none" style={{ fontFamily: serif }}>3</p>
              <p className="text-[11px] text-[#7A7068]" style={{ fontFamily: sans }}>Day Streak</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mx-3 mt-2.5 flex gap-2.5">
            <button className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-2xl" style={{ background: "#4A7C68" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="6" width="10" height="7" rx="1.5" fill="white" fillOpacity="0.9"/><path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>
              <span className="text-[12px] font-semibold text-white" style={{ fontFamily: sans }}>App Restrictions</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-2xl" style={{ background: "#B8756A" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg>
              <span className="text-[12px] font-semibold text-white" style={{ fontFamily: sans }}>Add Task</span>
            </button>
          </div>

          {/* Blocked apps banner */}
          <div className="mx-3 mt-2.5 rounded-xl px-3.5 py-2.5" style={{ background: "#EDE5D8" }}>
            <p className="text-[11px] font-semibold text-[#5C4A3A]" style={{ fontFamily: sans }}>3 apps blocked until tasks complete</p>
            <p className="text-[10px] text-[#7A6A5A] mt-0.5" style={{ fontFamily: sans }}>Complete all tasks to unlock: Instagram, TikTok, YouTube</p>
          </div>

          {/* Tasks */}
          <div className="mx-3 mt-3">
            <p className="text-[13px] font-semibold text-[#1C1B18] mb-2" style={{ fontFamily: sans }}>Today's Tasks (3)</p>
            <div className="flex flex-col gap-1.5">
              {tasks.map((t, i) => (
                <div key={i} className="flex items-center gap-3 px-3.5 py-3 rounded-xl" style={{ background: t.done ? "#E8F0EC" : "#EAF0F3" }}>
                  <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-[1.5px] ${t.done ? "bg-[#4A7C68] border-[#4A7C68]" : "border-[#B0BDC4] bg-white"}`}>
                    {t.done && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                  </div>
                  <span className={`text-[11px] font-medium ${t.done ? "line-through text-[#8A9A93]" : "text-[#1C1B18]"}`} style={{ fontFamily: sans }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Completed tasks */}
          <div className="mx-3 mt-3 flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#4A7C68] flex items-center justify-center flex-shrink-0">
              <svg width="8" height="7" viewBox="0 0 8 7" fill="none"><path d="M1 3.5l2 2L7 1" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p className="text-[12px] font-semibold text-[#1C1B18]" style={{ fontFamily: sans }}>Completed Tasks (1)</p>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute left-[-3px] top-24 w-[3px] h-7 bg-[#2A2A2A] rounded-l-sm" />
        <div className="absolute left-[-3px] top-36 w-[3px] h-10 bg-[#2A2A2A] rounded-l-sm" />
        <div className="absolute left-[-3px] top-50 w-[3px] h-10 bg-[#2A2A2A] rounded-l-sm" />
        <div className="absolute right-[-3px] top-32 w-[3px] h-14 bg-[#2A2A2A] rounded-r-sm" />
      </div>
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="pt-[100px] pb-16 md:pb-0 min-h-[88vh] flex items-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-6 items-center">
        <div className="order-2 md:order-1">
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#F2EDE4] text-[#3D6B58] text-xs font-semibold border border-[#3D6B58]/20"
            style={{ fontFamily: sans }}
          >
            <IconShieldCheck className="w-3 h-3" /> AI-verified accountability
          </div>
          <h1
            className="text-[2.6rem] md:text-[3.2rem] lg:text-[3.8rem] font-bold leading-[1.1] tracking-tight text-foreground mb-5"
            style={{ fontFamily: serif }}
          >
            Your apps stay locked until your work gets done.
          </h1>
          <p
            className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed mb-8 max-w-md"
            style={{ fontFamily: sans }}
          >
            VeriTask blocks the apps that distract you. It only unlocks them once an AI verifies you actually finished your tasks. No more "I'll just check Instagram for a second."
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background text-[14px] font-semibold hover:bg-foreground/85 transition-all shadow-sm"
              style={{ fontFamily: sans }}
            >
              Get Early Access <ArrowRight size={15} />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-[14px] font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
              style={{ fontFamily: sans }}
            >
              See how it works
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end md:pr-6">
          <AppMockup />
        </div>
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────

function StepRow({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-6 items-start py-7 border-b border-border last:border-0">
      <span
        className="flex-shrink-0 text-[13px] font-bold text-muted-foreground/40 mt-0.5 w-6 text-right tabular-nums"
        style={{ fontFamily: sans }}
      >
        {num}
      </span>
      <div>
        <h3 className="text-[18px] font-semibold text-foreground mb-1.5" style={{ fontFamily: serif }}>{title}</h3>
        <p className="text-[15px] text-muted-foreground leading-relaxed" style={{ fontFamily: sans }}>{desc}</p>
      </div>
    </div>
  );
}

function HowSection() {
  return (
    <section id="how" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="md:sticky md:top-28">
          <p className="text-[12px] uppercase tracking-widest text-[#3D6B58] font-semibold mb-4" style={{ fontFamily: sans }}>How it works</p>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-foreground leading-tight mb-5" style={{ fontFamily: serif }}>
            Three steps to a distraction-free day.
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-8" style={{ fontFamily: sans }}>
            No loopholes. No honor system. VeriTask makes accountability automatic. The only way out is through.
          </p>
          <div className="flex items-center gap-2 text-[13px] text-muted-foreground" style={{ fontFamily: sans }}>
            <IconFlameRising className="text-orange-400 w-4 h-4 flex-shrink-0" />
            <span>Streak only counts when <strong className="text-foreground">every</strong> task is verified</span>
          </div>
        </div>
        <div>
          <StepRow
            num="01"
            title="Set your tasks for the day."
            desc="Whatever you need to get done: study, work, workout, chores. Add them each morning and choose which apps get locked until you're done."
          />
          <StepRow
            num="02"
            title="Get to work."
            desc="Your chosen distracting apps stay blocked. No toggle to skip, no timer to wait out. The only unlock is finishing your list."
          />
          <StepRow
            num="03"
            title="Snap a photo to prove it."
            desc="Our AI reviews your photo and verifies the task is actually complete. Pass the check, unlock your apps. That's the deal."
          />
        </div>
      </div>
    </section>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────

function FeatureCard({
  icon,
  title,
  desc,
  inverted,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  inverted?: boolean;
}) {
  return (
    <div className={`p-6 rounded-2xl flex flex-col gap-4 ${inverted ? "bg-[#3D6B58]" : "bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)]"}`}>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${inverted ? "bg-white/15" : "bg-[#F2EDE4]"}`}>
        <span className={inverted ? "text-white" : "text-[#3D6B58]"}>{icon}</span>
      </div>
      <div>
        <h4 className={`text-[17px] font-semibold mb-1.5 ${inverted ? "text-white" : "text-foreground"}`} style={{ fontFamily: serif }}>{title}</h4>
        <p className={`text-[14px] leading-relaxed ${inverted ? "text-white/65" : "text-muted-foreground"}`} style={{ fontFamily: sans }}>{desc}</p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[#F2EDE4] px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[12px] uppercase tracking-widest text-[#3D6B58] font-semibold mb-3" style={{ fontFamily: sans }}>Features</p>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-foreground leading-tight" style={{ fontFamily: serif }}>
            Built for real accountability.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            icon={<IconShieldCheck />}
            title="Real accountability"
            desc="No marking tasks done without photo proof. The AI decides. Not you."
          />
          <FeatureCard
            icon={<IconFlameRising />}
            title="Streaks that matter"
            desc="Your streak only grows when everything gets verified. One lazy day and it resets."
            inverted
          />
          <FeatureCard
            icon={<IconPhoneLock />}
            title="Block what distracts"
            desc="Social media, games, anything that pulls your focus. You pick what gets locked."
          />
          <FeatureCard
            icon={<IconHabitLoop />}
            title="Build real habits"
            desc="Consistency over time, not just one productive day. VeriTask trains the discipline muscle."
          />
        </div>
      </div>
    </section>
  );
}

// ── Streak ────────────────────────────────────────────────────────────────────

function StreakSection() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const done = [true, true, true, true, true, false, false];
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-shrink-0">
          <div className="bg-card rounded-3xl border border-border p-8 shadow-sm text-center min-w-[220px]">
            <div className="flex justify-center mb-2">
              <IconFlameRising className="text-orange-400 w-10 h-10" />
            </div>
            <div className="text-[56px] font-bold text-foreground leading-none mb-1" style={{ fontFamily: serif }}>14</div>
            <p className="text-[13px] text-muted-foreground font-medium mb-6" style={{ fontFamily: sans }}>day streak</p>
            <div className="flex gap-2 justify-center">
              {days.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold ${done[i] ? "bg-[#3D6B58] text-white" : "bg-muted text-muted-foreground"}`}
                    style={{ fontFamily: sans }}
                  >
                    {done[i] ? (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ) : d}
                  </div>
                  <span className="text-[10px] text-muted-foreground" style={{ fontFamily: sans }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-[12px] uppercase tracking-widest text-[#3D6B58] font-semibold mb-4" style={{ fontFamily: sans }}>Streaks</p>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-foreground leading-tight mb-5" style={{ fontFamily: serif }}>
            Consistency is the real unlock.
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-sm" style={{ fontFamily: sans }}>
            Your streak grows only when every single task is verified complete. Miss a day, lose your streak. No partial credit, no exceptions.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Streak resets if even one task is skipped",
              "Daily progress reviewed by AI, no self-reporting",
              "See your consistency pattern week over week",
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-3 text-[14px] text-muted-foreground" style={{ fontFamily: sans }}>
                <CheckSquare size={15} className="text-[#3D6B58] mt-0.5 flex-shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Waitlist ──────────────────────────────────────────────────────────────────

function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const submit = async (e: React.FormEvent) => {
  e.preventDefault();

  const trimmedEmail = email.trim();

  // Check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(trimmedEmail)) {
    alert("Please enter a valid email address.");
    return;
  }

  const formData = new FormData();
  formData.append("fields[email]", trimmedEmail);
  formData.append("ml-submit", "1");
  formData.append("anticsrf", "true");

  try {
    await fetch(
      "https://assets.mailerlite.com/jsonp/2523493/forms/193621017391793766/subscribe",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );

    setSubmitted(true);
  } catch (error) {
    console.error("Subscription failed:", error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
  <section id="waitlist" className="py-20 md:py-28 px-6 bg-foreground">
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-[12px] uppercase tracking-widest text-[#8DB8A6] font-semibold mb-5" style={{ fontFamily: sans }}>
        Early Access
      </p>
      <h2
        className="text-[2.2rem] md:text-[3rem] font-bold leading-tight mb-5 text-background"
        style={{ fontFamily: serif }}
      >
        Be one of the first to build a streak that actually means something.
      </h2>
      <p className="text-[15px] text-background/50 leading-relaxed mb-10" style={{ fontFamily: sans }}>
        Join the waitlist for early access. Get notified when VeriTask launches, plus occasional behind-the-scenes updates.
      </p>

      {submitted ? (
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#3D6B58] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-background font-semibold" style={{ fontFamily: serif }}>
            You're on the list!
          </p>
          <p className="text-sm text-background/50" style={{ fontFamily: sans }}>
            We just sent you a confirmation email. Click the link inside to complete your signup. Check your spam folder if you don't see it.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-background placeholder:text-background/30 focus:outline-none focus:ring-2 focus:ring-[#3D6B58]/60 text-[14px]"
            style={{ fontFamily: sans }}
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#3D6B58] hover:bg-[#4a7e69] text-white font-semibold text-[14px] transition-colors whitespace-nowrap"
            style={{ fontFamily: sans }}
          >
            Get Early Access <ArrowRight size={15} />
          </button>
        </form>
      )}

      <p className="mt-5 text-[12px] text-background/30" style={{ fontFamily: sans }}>
        No spam. Just an email when VeriTask is ready for you.
      </p>
    </div>
  </section>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <HeroSection />
      <div className="border-t border-border mx-6 md:mx-12" />
      <HowSection />
      <FeaturesSection />
      <StreakSection />
      <WaitlistSection />
      <footer className="bg-foreground px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#3D6B58] flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 20 20" fill="none"><rect x="4.5" y="9" width="11" height="8.5" rx="1.5" fill="white"/><path d="M7.5 9V7C7.5 5.34 8.62 4 10 4C11.38 4 12.5 5.34 12.5 7V9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <span className="text-[15px] font-bold text-background" style={{ fontFamily: sans }}>VeriTask</span>
        </div>
        <p className="text-[12px] text-background/30" style={{ fontFamily: sans }}>2025 VeriTask. All rights reserved.</p>
        <div className="flex gap-5 text-[12px] text-background/30" style={{ fontFamily: sans }}>
          <a href="#" className="hover:text-background/60 transition-colors">Privacy</a>
          <a href="#" className="hover:text-background/60 transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}
