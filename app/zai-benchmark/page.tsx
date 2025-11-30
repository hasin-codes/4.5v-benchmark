'use client';

import React, { useState } from 'react';
import { editorsNote } from './fonts';
import {
    standardScenarios,
    toughScenarios,
    visualPositioningScenarios,
    webpageReplicationScenarios
} from './data';
import { GeographySection } from './components/GeographySection';
import { VisualPositioningSection } from './components/VisualPositioningSection';
import { WebpageReplicationSection } from './components/WebpageReplicationSection';

type Tab = 'geography' | 'visual' | 'webpage';

export default function ZaiBenchmarkPage() {
    const [activeTab, setActiveTab] = useState<Tab>('geography');

    return (
        <div className={`min-h-screen bg-[#050505] text-[#ededed] selection:bg-white/20 selection:text-white ${editorsNote.variable} font-sans`}>


            {/* Hero Section */}
            <header className="relative px-6 py-16 md:px-12 border-b border-white/5">
                <div className="max-w-[1600px] mx-auto">
                    <h1 className="font-serif text-4xl md:text-6xl text-white tracking-tight">
                        Z.ai Model 4.5 <span className="text-white/40">Benchmark Report</span>
                    </h1>
                </div>
            </header>


            {/* Tab Navigation */}
            <div className="sticky top-0 z-40 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 mb-20">
                <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
                    <div className="flex items-center justify-start gap-12 overflow-x-auto no-scrollbar py-4">
                        <button
                            onClick={() => setActiveTab('geography')}
                            className={`text-xs font-mono uppercase tracking-widest transition-all duration-300 ${activeTab === 'geography' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                        >
                            <span className="mr-2 opacity-50">01</span>
                            Geography
                        </button>
                        <button
                            onClick={() => setActiveTab('visual')}
                            className={`text-xs font-mono uppercase tracking-widest transition-all duration-300 ${activeTab === 'visual' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                        >
                            <span className="mr-2 opacity-50">02</span>
                            Visual Positioning
                        </button>
                        <button
                            onClick={() => setActiveTab('webpage')}
                            className={`text-xs font-mono uppercase tracking-widest transition-all duration-300 ${activeTab === 'webpage' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                        >
                            <span className="mr-2 opacity-50">03</span>
                            Webpage Replication
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="relative z-10 px-4 md:px-8 lg:px-12 pb-32 max-w-[1600px] mx-auto min-h-screen">

                {activeTab === 'geography' && (
                    <div className="space-y-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <GeographySection
                            title="Geographic Guessing"
                            subtitle="Identifying locations from iconic images. Testing basic recognition capabilities."
                            scenarios={standardScenarios}
                        />
                        <GeographySection
                            title="The Edge Cases"
                            subtitle="Pushing the model with obscure, non-iconic locations and ambiguous clues."
                            scenarios={toughScenarios}
                            isDarker={true}
                        />
                    </div>
                )}

                {activeTab === 'visual' && (
                    <div className="space-y-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <VisualPositioningSection
                            title="Visual Positioning"
                            subtitle="Precise object detection and spatial reasoning within complex scenes."
                            scenarios={visualPositioningScenarios}
                        />
                    </div>
                )}

                {activeTab === 'webpage' && (
                    <div className="space-y-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <WebpageReplicationSection
                            title="Webpage Replication"
                            subtitle="Converting visual designs into pixel-perfect HTML/CSS code."
                            scenarios={webpageReplicationScenarios}
                        />
                    </div>
                )}

            </main>

            {/* Footer */}
            <footer className="py-20 border-t border-white/5 text-center text-white/40">
                <p className="font-serif text-2xl italic mb-4">Z.ai Model 4.5</p>
                <p className="text-sm mb-2">A benchmark report by <a href="https://hasin.vercel.app" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 transition-colors">Hasin Raiyan</a></p>
                <p className="text-xs">on Z.ai's 4.5v release</p>
            </footer>
        </div>
    );
}

