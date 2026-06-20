import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "For anyone who needs a quick link.",
    features: [
      "Unlimited anonymous links",
      "5 managed links",
      "Basic click count",
      "QR code download",
    ],
    cta: "Get started",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$5",
    period: "/mo",
    desc: "For creators and teams who need control.",
    features: [
      "Unlimited managed links",
      "Full analytics dashboard",
      "Custom aliases",
      "Link expiry & password",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "/signup",
    highlight: true,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-[#070b14] py-20 px-5 sm:px-8 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest font-semibold text-center mb-2 text-indigo-400">
          Pricing
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">
          Simple, honest pricing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col ${
                plan.highlight
                  ? "bg-gradient-to-b from-indigo-500/14 to-violet-500/8 border border-indigo-500/30"
                  : "bg-[#0f1629] border border-white/6"
              }`}
            >
              {plan.highlight && (
                <span className="self-start text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-4 text-indigo-400 bg-indigo-500/12 border border-indigo-500/25">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
              <div className="flex items-end gap-0.5 mb-2">
                <span className="text-3xl font-extrabold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm mb-1.5 text-white/40">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="text-sm mb-5 text-white/40">{plan.desc}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-white/70"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0 text-indigo-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity ${
                  plan.highlight
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_4px_16px_rgba(99,102,241,0.25)]"
                    : "bg-white/5 border border-white/9"
                }`}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
