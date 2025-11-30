'use client';

import React, { useState } from 'react';

interface TestScoreProps {
    score?: number;
    reason?: string;
    psychosis?: boolean;
}

export const TestScore: React.FC<TestScoreProps> = ({ score, reason, psychosis }) => {
    const [showPopup, setShowPopup] = useState(false);

    if (score === undefined) return null;

    // Calculate color based on score
    const getScoreColor = (s: number) => {
        if (s >= 8) return 'from-emerald-500 to-green-400';
        if (s >= 6) return 'from-yellow-500 to-amber-400';
        return 'from-red-500 to-orange-400';
    };

    const getTextColor = (s: number) => {
        if (s >= 8) return 'text-emerald-500';
        if (s >= 6) return 'text-yellow-500';
        return 'text-red-500';
    };

    return (
        <div className="relative inline-block">
            {/* Score Badge */}
            <button
                onClick={() => setShowPopup(!showPopup)}
                className={`group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300`}
            >
                <span className={`text-sm font-bold ${getTextColor(score)}`}>
                    {score}/10
                </span>
                <svg
                    className="w-3 h-3 text-white/40 group-hover:text-white/70 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>

            {/* Psychosis Indicator */}
            {psychosis && (
                <div className="absolute -top-1 -right-1 w-3 h-3">
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-3 h-3 bg-red-500 rounded-full border-2 border-[#050505]"></div>
                </div>
            )}

            {/* Popup */}
            {showPopup && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        onClick={() => setShowPopup(false)}
                    />

                    {/* Popup Content */}
                    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md">
                        <div className="mx-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">Test Score</h3>
                                    <div className={`text-3xl font-bold bg-gradient-to-r ${getScoreColor(score)} bg-clip-text text-transparent`}>
                                        {score}/10
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="text-white/40 hover:text-white/80 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Psychosis Warning */}
                            {psychosis && (
                                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">Psychosis Detected</span>
                                    </div>
                                    <p className="text-xs text-red-300/80">
                                        The model's response exhibited hallucination or inconsistent reasoning patterns.
                                    </p>
                                </div>
                            )}

                            {/* Reason */}
                            {reason && (
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Evaluation</h4>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        {reason}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
