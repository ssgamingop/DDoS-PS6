import Link from "next/link";
import { ArrowRight, Globe2, Activity, ShieldAlert } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050510] relative overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-cyan-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-700/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Pure CSS Grid Pattern with Fade-Out Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_100%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center pt-32 pb-32">

        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs mb-10 font-medium tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Engine Online
        </div>

        {/* Hero Headline */}
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-tight drop-shadow-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">SentinentalIQ</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300/90 max-w-3xl mx-auto mb-14 font-light leading-relaxed">
          Planetary-scale flood risk intelligence. Synthesize real-time satellite telemetry to detect historic anomalies and quantify environmental threats instantly.
        </p>

        {/* CTA Button */}
        <Link
          href="/dashboard"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-[0_0_40px_-10px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_-15px_rgba(34,211,238,0.7)] hover:-translate-y-1 overflow-hidden"
        >
          {/* Button inner shine effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

          <span className="text-lg tracking-wide">Launch Dashboard</span>
          <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 max-w-5xl mx-auto">
          <FeatureCard
            icon={<Globe2 className="w-7 h-7 text-cyan-400" />}
            title="Global Telemetry"
            desc="Process high-resolution Earth Engine data anywhere on the globe in real-time."
          />
          <FeatureCard
            icon={<Activity className="w-7 h-7 text-blue-400" />}
            title="Anomaly Detection"
            desc="Cross-reference deep historical baselines against current planetary events."
          />
          <FeatureCard
            icon={<ShieldAlert className="w-7 h-7 text-indigo-400" />}
            title="Risk Extraction"
            desc="Synthesize urban sprawl, geometric exposure, and topological severity instantly."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 text-left hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-500 group">
      <div className="w-14 h-14 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:bg-cyan-900/20 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-100 mb-3 tracking-wide">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed font-light">{desc}</p>
    </div>
  )
}
