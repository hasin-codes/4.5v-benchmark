import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { BenchmarkScenario } from '../data/types';
import { TestScore } from './TestScore';

export function GeographySection({ title, subtitle, scenarios, isDarker = false }: { title: string, subtitle: string, scenarios: BenchmarkScenario[], isDarker?: boolean }) {
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
        h1: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-xl font-bold text-white mt-4 mb-2" {...props} />,
        h2: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-lg font-bold text-white mt-3 mb-2" {...props} />,
        h3: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-md font-bold text-white mt-3 mb-1" {...props} />,
        p: ({ ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mb-4 text-white/80 leading-relaxed" {...props} />,
        ul: ({ ...props }: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc pl-5 mb-4 space-y-1 text-white/80" {...props} />,
        ol: ({ ...props }: React.HTMLAttributes<HTMLOListElement>) => <ol className="list-decimal pl-5 mb-4 space-y-1 text-white/80" {...props} />,
        li: ({ ...props }: React.HTMLAttributes<HTMLLIElement>) => <li className="" {...props} />,
        strong: ({ ...props }: React.HTMLAttributes<HTMLElement>) => <strong className="font-semibold text-white" {...props} />,
        em: ({ ...props }: React.HTMLAttributes<HTMLElement>) => <em className="italic text-white/90" {...props} />,
    };

    return (
        <div className="group relative">
            {/* Decorative line */}
            <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-px bg-linear-to-b from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="space-y-8">
                {/* Header: Search Term */}
                <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-emerald-500/80 uppercase tracking-wider">Test Case</span>
                    <h3 className="text-2xl md:text-3xl font-light text-white/90">{scenario.searchTerm}</h3>
                </div>

                {/* Chat-style Image Bubble */}
                <div className="flex justify-start pl-0 md:pl-18">
                    <div className="relative max-w-md w-full aspect-4/3 overflow-hidden rounded-3xl rounded-tl-sm bg-[#1a1a1a] border border-white/10 group-hover:border-white/20 transition-colors duration-500 shadow-2xl shadow-black/50">
                        {/* Actual Image */}
                        <Image
                            src={scenario.imagePlaceholder}
                            alt={scenario.searchTerm}
                            className="w-full h-full object-cover"
                            width={400}
                            height={300}
                            unoptimized
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-60" />
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
                            <div className="p-6 rounded-2xl bg-white/2 border border-white/5 backdrop-blur-sm">
                                <p className="font-serif text-lg italic text-white/80">&ldquo;{scenario.averagePrompt}&rdquo;</p>
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
                                    <TestScore
                                        score={scenario.testScore}
                                        reason={scenario.testReason}
                                        psychosis={scenario.psychosis}
                                    />
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
                            <div className="p-6 rounded-2xl bg-purple-500/3 border border-purple-500/10 backdrop-blur-sm">
                                <p className="font-serif text-lg italic text-white/90">&ldquo;{scenario.powerPrompt}&rdquo;</p>
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
                                    <TestScore
                                        score={scenario.testScore}
                                        reason={scenario.testReason}
                                        psychosis={scenario.psychosis}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
