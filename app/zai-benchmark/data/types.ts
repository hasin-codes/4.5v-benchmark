export interface BenchmarkScenario {
    id: string;
    searchTerm: string;
    imagePlaceholder: string; // URL or path
    averagePrompt: string;
    powerPrompt: string;
    averageOutput?: string; // Markdown output for average prompt
    powerOutput?: string; // Markdown output for power prompt

    // Average User Metrics
    averageTestScore?: number; // Score out of 10
    averageTestReason?: string; // 2-3 lines explaining the score
    averagePsychosis?: boolean; // Flag for psychosis detection

    // Power User Metrics
    powerTestScore?: number; // Score out of 10
    powerTestReason?: string; // 2-3 lines explaining the score
    powerPsychosis?: boolean; // Flag for psychosis detection
}

export interface VisualPositioningScenario {
    id: string;
    searchTerm: string;
    imagePlaceholder: string; // URL or path
    averagePrompt: string;
    powerPrompt: string;
    averageOutput?: string; // Markdown or Image URL
    powerOutput?: string; // Markdown or Image URL
    outputType: 'markdown' | 'image';

    // Average User Metrics
    averageTestScore?: number; // Score out of 10
    averageTestReason?: string; // 2-3 lines explaining the score
    averagePsychosis?: boolean; // Flag for psychosis detection

    // Power User Metrics
    powerTestScore?: number; // Score out of 10
    powerTestReason?: string; // 2-3 lines explaining the score
    powerPsychosis?: boolean; // Flag for psychosis detection
}

export interface WebpageReplicationScenario {
    id: string;
    searchTerm: string;
    imagePlaceholder: string; // Long screenshot URL
    averageOutput: string; // HTML string from average prompt
    powerOutput: string; // HTML string from power prompt
    outputType: 'html';

    // Average User Metrics
    averageTestScore?: number; // Score out of 10
    averageTestReason?: string; // 2-3 lines explaining the score
    averagePsychosis?: boolean; // Flag for psychosis detection

    // Power User Metrics
    powerTestScore?: number; // Score out of 10
    powerTestReason?: string; // 2-3 lines explaining the score
    powerPsychosis?: boolean; // Flag for psychosis detection
}
