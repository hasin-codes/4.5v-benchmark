import React from 'react';
import ReactMarkdown from 'react-markdown';
import { editorsNote } from './fonts';
import { standardScenarios, toughScenarios, BenchmarkScenario } from './data';

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
            <header className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

                <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-medium tracking-wider uppercase text-white/70">Model 4.5 Vision Benchmark</span>
                    </div>

                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
                        Seeing the <br />
                        <span className="italic font-light">Unseen World</span>
                    </h1>

                    <p className="max-w-xl text-lg md:text-xl text-white/60 leading-relaxed font-light">
                        Pushing the boundaries of computer vision with Z.ai Model 4.5.
                        From geographic guessing to complex scene analysis.
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 px-4 md:px-8 lg:px-12 pb-32 max-w-[1600px] mx-auto space-y-32">

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
        <section className={`space-y-16 ${isDarker ? '' : ''}`}>
            <div className="space-y-4 max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl text-white">{title}</h2>
                <p className="text-lg text-white/50 font-light">{subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-24">
                {scenarios.map((scenario) => (
                    <BenchmarkCard key={scenario.id} scenario={scenario} />
                ))}
            </div>
        </section>
    );
}

function BenchmarkCard({ scenario }: { scenario: BenchmarkScenario }) {
    const markdownComponents = {
        h1: ({ node, ...props }: any) => <h1 className="text-xl font-bold text-white mt-4 mb-2" {...props} />,
        h2: ({ node, ...props }: any) => <h2 className="text-lg font-bold text-white mt-3 mb-2" {...props} />,
        h3: ({ node, ...props }: any) => <h3 className="text-md font-bold text-white mt-3 mb-1" {...props} />,
        p: ({ node, ...props }: any) => <p className="mb-4 text-white/80 leading-relaxed" {...props} />,
        ul: ({ node, ...props }: any) => <ul className="list-disc pl-5 mb-4 space-y-1 text-white/80" {...props} />,
        ol: ({ node, ...props }: any) => <ol className="list-decimal pl-5 mb-4 space-y-1 text-white/80" {...props} />,
        li: ({ node, ...props }: any) => <li className="" {...props} />,
        strong: ({ node, ...props }: any) => <strong className="font-semibold text-white" {...props} />,
        em: ({ node, ...props }: any) => <em className="italic text-white/90" {...props} />,
    };

    return (
        <div className="group relative">
            {/* Decorative line */}
            <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="space-y-8">
                {/* Header: Search Term */}
                <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-emerald-500/80 uppercase tracking-wider">Test Case</span>
                    <h3 className="text-2xl md:text-3xl font-light text-white/90">{scenario.searchTerm}</h3>
                </div>

                {/* Chat-style Image Bubble */}
                <div className="flex justify-start pl-0 md:pl-18">
                    <div className="relative max-w-md w-full aspect-[4/3] overflow-hidden rounded-3xl rounded-tl-sm bg-[#1a1a1a] border border-white/10 group-hover:border-white/20 transition-colors duration-500 shadow-2xl shadow-black/50">
                        {/* Actual Image */}
                        <img
                            src={scenario.imagePlaceholder}
                            alt={scenario.searchTerm}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                    </div>
                </div>

                {/* Two Column Layout: Average vs Power */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

                    {/* Average User Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <h4 className="text-sm font-medium tracking-widest uppercase text-white/50">Average User</h4>
                        </div>

                        <div className="space-y-4">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                                <p className="font-serif text-lg italic text-white/80">"{scenario.averagePrompt}"</p>
                            </div>

                            {/* AI Response */}
                            <div className="relative p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 min-h-[120px] flex flex-col justify-between group/response hover:border-white/10 transition-colors">
                                {scenario.averageOutput ? (
                                    <div className="text-sm">
                                        <ReactMarkdown components={markdownComponents}>
                                            {scenario.averageOutput}
                                        </ReactMarkdown>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <div className="h-2 w-3/4 bg-white/10 rounded animate-pulse" />
                                        <div className="h-2 w-1/2 bg-white/10 rounded animate-pulse delay-75" />
                                        <div className="h-2 w-5/6 bg-white/10 rounded animate-pulse delay-150" />
                                    </div>
                                )}
                                <div className="mt-4 flex justify-between items-end">
                                    <span className="text-[10px] text-white/20 uppercase tracking-widest">Z.ai Response</span>
                                    <div className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs font-mono text-white/40">
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
                            <div className="p-6 rounded-2xl bg-purple-500/[0.03] border border-purple-500/10 backdrop-blur-sm">
                                <p className="font-serif text-lg italic text-white/90">"{scenario.powerPrompt}"</p>
                            </div>

                            {/* AI Response */}
                            <div className="relative p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 min-h-[120px] flex flex-col justify-between group/response hover:border-purple-500/20 transition-colors">
                                {scenario.powerOutput ? (
                                    <div className="text-sm">
                                        <ReactMarkdown components={markdownComponents}>
                                            {scenario.powerOutput}
                                        </ReactMarkdown>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-white/10 rounded animate-pulse" />
                                        <div className="h-2 w-11/12 bg-white/10 rounded animate-pulse delay-75" />
                                        <div className="h-2 w-4/5 bg-white/10 rounded animate-pulse delay-150" />
                                        <div className="h-2 w-full bg-white/10 rounded animate-pulse delay-200" />
                                    </div>
                                )}
                                <div className="mt-4 flex justify-between items-end">
                                    <span className="text-[10px] text-white/20 uppercase tracking-widest">Z.ai Response</span>
                                    <div className="px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-200/60">
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
