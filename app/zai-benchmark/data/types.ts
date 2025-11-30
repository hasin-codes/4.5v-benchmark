export interface BenchmarkScenario {
    id: string;
    searchTerm: string;
    imagePlaceholder: string; // URL or path
    averagePrompt: string;
    powerPrompt: string;
    averageOutput?: string; // Markdown output for average prompt
    powerOutput?: string; // Markdown output for power prompt
    testScore?: number; // Score out of 10
    testReason?: string; // 2-3 lines explaining the score
    psychosis?: boolean; // Flag for psychosis detection
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
    testScore?: number; // Score out of 10
    testReason?: string; // 2-3 lines explaining the score
    psychosis?: boolean; // Flag for psychosis detection
}

export interface WebpageReplicationScenario {
    id: string;
    searchTerm: string;
    imagePlaceholder: string; // Long screenshot URL
    averageOutput: string; // HTML string from average prompt
    powerOutput: string; // HTML string from power prompt
    outputType: 'html';
    testScore?: number; // Score out of 10
    testReason?: string; // 2-3 lines explaining the score
    psychosis?: boolean; // Flag for psychosis detection
}
