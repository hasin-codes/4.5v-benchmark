import React from 'react';
import Image from 'next/image';
import { WebpageReplicationScenario } from '../data/types';
import { TestScore } from './TestScore';

export function WebpageReplicationSection({ title, subtitle, scenarios, isDarker = false }: { title: string, subtitle: string, scenarios: WebpageReplicationScenario[], isDarker?: boolean }) {
    return (
        <section className={`space-y-16 ${isDarker ? '' : ''}`}>
            <div className="space-y-4 max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl text-white">{title}</h2>
                <p className="text-lg text-white/50 font-light">{subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-32">
                {scenarios.map((scenario) => (
                    <WebpageReplicationCard key={scenario.id} scenario={scenario} />
                ))}
            </div>
        </section>
    );
}

function WebpageReplicationCard({ scenario }: { scenario: WebpageReplicationScenario }) {
    return (
        <div className="group relative">
            {/* Decorative line */}
            <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="space-y-12">
                {/* Header: Search Term */}
                <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-orange-500/80 uppercase tracking-wider">Test Case</span>
                    <h3 className="text-2xl md:text-3xl font-light text-white/90">{scenario.searchTerm}</h3>
                </div>

                {/* Two-Column Layout: Image (Left) + Stacked Outputs (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[1200px]">

                    {/* Left Column: Target Image (Scrollable) */}
                    <div className="flex flex-col h-full overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] shadow-2xl">
                        <div className="flex-none flex items-center gap-3 p-4 border-b border-white/5 bg-[#1a1a1a] z-10">
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <h4 className="text-sm font-medium tracking-widest uppercase text-white/50">Target Design</h4>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#1a1a1a]">
                            <div className="min-h-full flex items-center justify-center p-4">
                                <Image
                                    src={scenario.imagePlaceholder}
                                    alt="Target Design"
                                    className="max-w-full h-auto object-contain"
                                    width={800}
                                    height={600}
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stacked Average + Power Outputs */}
                    <div className="flex flex-col gap-8 h-full">

                        {/* Average Output */}
                        <div className="flex-1 flex flex-col overflow-hidden rounded-xl border border-blue-500/20 bg-[#1a1a1a] shadow-2xl">
                            <div className="flex-none flex items-center gap-3 p-4 border-b border-white/5 bg-[#1a1a1a]">
                                <div className="w-2 h-2 rounded-full bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
                                <h4 className="text-sm font-medium tracking-widest uppercase text-blue-400">Average Prompt</h4>
                            </div>

                            <div className="flex-1 relative w-full overflow-hidden bg-[#1a1a1a]">
                                <iframe
                                    srcDoc={scenario.averageOutput}
                                    title="Average Output"
                                    className="absolute top-0 left-0 w-[200%] h-[200%] border-none origin-top-left scale-50"
                                    sandbox="allow-scripts allow-same-origin"
                                />
                            </div>

                            <div className="flex-none flex items-center justify-between p-4 border-t border-white/5 bg-[#1a1a1a]">
                                <span className="text-[10px] text-white/20 uppercase tracking-widest">Average Output</span>
                                <TestScore
                                    score={scenario.averageTestScore}
                                    reason={scenario.averageTestReason}
                                    psychosis={scenario.averagePsychosis}
                                />
                            </div>
                        </div>

                        {/* Power Output */}
                        <div className="flex-1 flex flex-col overflow-hidden rounded-xl border border-orange-500/20 bg-[#1a1a1a] shadow-2xl">
                            <div className="flex-none flex items-center gap-3 p-4 border-b border-white/5 bg-[#1a1a1a]">
                                <div className="w-2 h-2 rounded-full bg-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
                                <h4 className="text-sm font-medium tracking-widest uppercase text-orange-400">Power Prompt</h4>
                            </div>

                            <div className="flex-1 relative w-full overflow-hidden bg-[#1a1a1a]">
                                <iframe
                                    srcDoc={scenario.powerOutput}
                                    title="Power Output"
                                    className="absolute top-0 left-0 w-[200%] h-[200%] border-none origin-top-left scale-50"
                                    sandbox="allow-scripts allow-same-origin"
                                />
                            </div>

                            <div className="flex-none flex items-center justify-between p-4 border-t border-white/5 bg-[#1a1a1a]">
                                <span className="text-[10px] text-white/20 uppercase tracking-widest">Power Output</span>
                                <TestScore
                                    score={scenario.powerTestScore}
                                    reason={scenario.powerTestReason}
                                    psychosis={scenario.powerPsychosis}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
