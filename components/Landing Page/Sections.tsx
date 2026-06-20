import {
  Zap,
  BarChart3,
  QrCode,
  Shield,
  MousePointerClick,
  TrendingUp,
  Globe,
} from "lucide-react";

// ── Shared primitives ──────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest font-semibold text-center mb-2 text-indigo-400">
      {children}
    </p>
  );
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
      {children}
    </h2>
  );
}

// ── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
  {
    icon: MousePointerClick,
    label: "Links shortened",
    value: "2.4M+",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: TrendingUp,
    label: "Clicks tracked",
    value: "18M+",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Globe,
    label: "Countries served",
    value: "190+",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export function StatsSection() {
  return (
    <section className="bg-[#070b14] pb-16 px-5 sm:px-8">
      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl p-4 sm:p-5 text-center bg-[#0f1629] border border-white/6"
          >
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center mx-auto mb-3 ${s.bg}`}
            >
              <s.icon className={`w-4 h-4 ${s.color}`} />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-white">
              {s.value}
            </p>
            <p className="text-[11px] mt-0.5 text-white/35">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────
const features = [
  {
    icon: Zap,
    title: "Instant shortening",
    desc: "Paste any URL and get a short link in milliseconds. No account required.",
  },
  {
    icon: BarChart3,
    title: "Click analytics",
    desc: "See how many times your link was clicked, where visitors came from, and when.",
  },
  {
    icon: QrCode,
    title: "QR code generation",
    desc: "Every link gets a downloadable QR code — ready for print, slides, or anywhere offline.",
  },
  {
    icon: Shield,
    title: "Link management",
    desc: "Edit, disable, or delete your links any time from your personal dashboard.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-[#070b14] py-20 px-5 sm:px-8 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Features</SectionLabel>
        <SectionHeading>Everything you need, nothing you don't</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl p-5 sm:p-6 transition-all duration-200 bg-[#0f1629] border border-white/6 hover:border-indigo-500/35 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-indigo-500/10">
                <f.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1.5">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/40">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────
const steps = [
  {
    label: "Paste your URL",
    desc: "Drop in any long link — no sign-up required.",
  },
  {
    label: "Get your short link",
    desc: "We generate a clean snap.link/xxxxxx in under a second.",
  },
  {
    label: "Share anywhere",
    desc: "Copy and paste into messages, bios, or slides.",
  },
  {
    label: "Track performance",
    desc: "Sign in to see click counts, referrers, and more.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-[#070b14] py-20 px-5 sm:px-8 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <SectionLabel>How it works</SectionLabel>
        <SectionHeading>
          From long URL to short link in four steps
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold mb-4 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold text-white text-sm mb-1.5">
                {step.label}
              </h3>
              <p className="text-xs leading-relaxed text-white/40">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
