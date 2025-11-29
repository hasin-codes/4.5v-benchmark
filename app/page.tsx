import React from 'react';
import { Metadata } from 'next';
import { editorsNote } from './blog/zai-benchmark/fonts';
import { standardScenarios, toughScenarios, BenchmarkScenario } from './blog/zai-benchmark/data';

export const metadata: Metadata = {
  title: 'Z.ai Model 4.5 Vision Benchmark | Geographic Guessing & Scene Analysis',
  description: 'Comprehensive benchmark testing of Z.ai Model 4.5 vision capabilities. Testing geographic location identification, visual positioning, and complex scene analysis across standard and edge case scenarios.',
  keywords: ['Z.ai', 'Model 4.5', 'Vision AI', 'Computer Vision', 'Benchmark', 'Geographic Guessing', 'Image Recognition'],
  openGraph: {
    title: 'Z.ai Model 4.5 Vision Benchmark',
    description: 'Pushing the boundaries of computer vision with Z.ai Model 4.5',
    type: 'website',
  },
};

export default function ZaiBenchmarkPage() {
  return (
    <div className={`min-h-screen bg-[#050505] text-[#ededed] selection:bg-white/20 selection:text-white ${editorsNote.variable} font-sans`}>
      {/* Navigation / Header Placeholder */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference">
        <div className="text-xl font-bold tracking-tighter font-serif">Z.ai</div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide opacity-80">
          <span>Benchmark</span>
          <span>Methodology</span>
          <span>Results</span>
        </div>
        <button className="px-5 py-2 text-xs font-semibold tracking-widest uppercase border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
          Read Report
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-32 overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent opacity-30 blur-3xl pointer-events-none" />

        <div className="z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium tracking-wider uppercase text-white/80">Model 4.5 Vision Benchmark</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="font-serif text-7xl md:text-8xl lg:text-[10rem] tracking-tight leading-[0.85] bg-clip-text text-transparent bg-gradient-to-b from-white via-white/95 to-white/60">
              Seeing the <br />
              <span className="italic font-light">Unseen World</span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/50 leading-relaxed font-light">
              Pushing the boundaries of computer vision with Z.ai Model 4.5.
              From geographic guessing to complex scene analysis.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">24</div>
              <div className="text-sm text-white/40 uppercase tracking-widest mt-1">Test Cases</div>
            </div>
            <div className="h-12 w-[1px] bg-white/10" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">2</div>
              <div className="text-sm text-white/40 uppercase tracking-widest mt-1">User Types</div>
            </div>
            <div className="h-12 w-[1px] bg-white/10" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">4</div>
              <div className="text-sm text-white/40 uppercase tracking-widest mt-1">Capabilities</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Explore Results</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 md:px-12 lg:px-16 pb-40 max-w-[1800px] mx-auto">

        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-32 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white/90 leading-relaxed">
            Testing the limits of visual intelligence through <span className="italic text-white">real-world scenarios</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-3xl mx-auto">
            This benchmark evaluates Z.ai Model 4.5's vision capabilities across two distinct user profiles:
            Average Users with simple prompts, and Power Users with detailed, analytical queries.
            Each test case compares performance across both approaches.
          </p>
        </section>

        {/* Section 1: Standard Scenarios */}
        <BenchmarkSection
          title="Geographic Guessing"
          subtitle="Identifying locations from iconic images. Testing basic recognition capabilities."
          scenarios={standardScenarios}
        />

        {/* Section 2: Tough Scenarios */}
        <BenchmarkSection
          title="The Edge Cases"
          subtitle="Pushing the model with obscure, non-iconic locations and ambiguous clues."
          scenarios={toughScenarios}
          isDarker={true}
        />

      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center text-white/40">
        <p className="font-serif text-2xl italic mb-4">Z.ai Model 4.5</p>
        <p className="text-sm">Designed for the future of vision.</p>
      </footer>
    </div>
  );
}

function BenchmarkSection({ title, subtitle, scenarios, isDarker = false }: { title: string, subtitle: string, scenarios: BenchmarkScenario[], isDarker?: boolean }) {
  return (
    <section className={`space-y-20 ${isDarker ? 'mt-40' : ''}`}>
      {/* Section Header */}
      <div className="relative">
        <div className="flex items-center gap-6 mb-6">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-white/20" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40">
            {isDarker ? 'Advanced Testing' : 'Standard Testing'}
          </span>
        </div>

        <div className="space-y-5 max-w-3xl">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Test Cases Grid */}
      <div className="space-y-32">
        {scenarios.map((scenario, index) => (
          <div key={scenario.id}>
            <BenchmarkCard scenario={scenario} index={index + 1} />
            {index < scenarios.length - 1 && (
              <div className="mt-32 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function BenchmarkCard({ scenario, index }: { scenario: BenchmarkScenario; index: number }) {
  return (
    <div className="group relative py-8">
      {/* Decorative line */}
      <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="space-y-8">
        {/* Header: Search Term */}
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-sm text-white/60">
            {String(index).padStart(2, '0')}
          </div>
          <div className="flex-1 space-y-2">
            <span className="font-mono text-xs text-emerald-500/80 uppercase tracking-wider">Test Case</span>
            <h3 className="text-2xl md:text-3xl font-light text-white/90 leading-tight">{scenario.searchTerm}</h3>
          </div>
        </div>

        {/* Chat-style Image Bubble */}
        <div className="flex justify-start pl-0 md:pl-18">
          <div className="relative max-w-md w-full aspect-[4/3] overflow-hidden rounded-3xl rounded-tl-sm bg-[#1a1a1a] border border-white/10 group-hover:border-white/20 transition-colors duration-500 shadow-2xl shadow-black/50">
            {/* Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
              <div className="text-center space-y-3 opacity-40 group-hover:opacity-60 transition-opacity">
                <div className="mx-auto w-16 h-16 border border-white/20 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <p className="text-xs font-mono tracking-widest uppercase text-white/50">Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout: Average vs Power */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* Average User Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <h4 className="text-sm font-medium tracking-widest uppercase text-white/50">Average User</h4>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl rounded-tl-sm bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.03] transition-colors">
                <p className="font-serif text-lg italic text-white/80 leading-relaxed">"{scenario.averagePrompt}"</p>
              </div>

              {/* AI Response Placeholder */}
              <div className="relative p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 min-h-[140px] flex flex-col justify-between group/response hover:border-white/10 transition-colors">
                <div className="space-y-2.5">
                  <div className="h-2 w-3/4 bg-white/10 rounded animate-pulse" />
                  <div className="h-2 w-1/2 bg-white/10 rounded animate-pulse delay-75" />
                  <div className="h-2 w-5/6 bg-white/10 rounded animate-pulse delay-150" />
                </div>
                <div className="mt-4 flex justify-between items-end">
                  <span className="text-[10px] text-white/20 uppercase tracking-widest">Z.ai Response</span>
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-white/40">
                    Score: <span className="text-white/80">--</span>/10
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Power User Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              <div className="w-2 h-2 rounded-full bg-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.4)]" />
              <h4 className="text-sm font-medium tracking-widest uppercase text-purple-200/70">Power User</h4>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl rounded-tl-sm bg-purple-500/[0.03] border border-purple-500/10 backdrop-blur-sm hover:bg-purple-500/[0.05] transition-colors">
                <p className="font-serif text-lg italic text-white/90 leading-relaxed">"{scenario.powerPrompt}"</p>
              </div>

              {/* AI Response Placeholder */}
              <div className="relative p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 min-h-[140px] flex flex-col justify-between group/response hover:border-purple-500/20 transition-colors">
                <div className="space-y-2.5">
                  <div className="h-2 w-full bg-white/10 rounded animate-pulse" />
                  <div className="h-2 w-11/12 bg-white/10 rounded animate-pulse delay-75" />
                  <div className="h-2 w-4/5 bg-white/10 rounded animate-pulse delay-150" />
                  <div className="h-2 w-full bg-white/10 rounded animate-pulse delay-200" />
                </div>
                <div className="mt-4 flex justify-between items-end">
                  <span className="text-[10px] text-white/20 uppercase tracking-widest">Z.ai Response</span>
                  <div className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-200/60">
                    Score: <span className="text-purple-200">--</span>/10
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
