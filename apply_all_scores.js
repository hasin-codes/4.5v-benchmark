const fs = require('fs');

const filePath = 'app/zai-benchmark/data/geography.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Helper function to add scores after powerOutput
function addScoresAfterPowerOutput(scenarioId, avgScore, avgReason, avgPsychosis, powerScore, powerReason, powerPsychosis) {
    const escapedId = scenarioId.replace(/[-]/g, '\\-');
    // Match the closing of powerOutput and add scores before the closing brace
    const pattern = new RegExp(
        `(id:\\s*"${escapedId}"[\\s\\S]*?powerOutput:\\s*\`[\\s\\S]*?\`,)\\s*(\\n\\s*})`
    );

    const replacement = `$1
                averageTestScore: ${avgScore},
                averageTestReason: ${avgReason === '' ? '""' : `"${avgReason}"`},
                averagePsychosis: ${avgPsychosis},
                powerTestScore: ${powerScore},
                powerTestReason: ${powerReason === '' ? '""' : `"${powerReason}"`},
                powerPsychosis: ${powerPsychosis}$2`;

    content = content.replace(pattern, replacement);
}

// Standard scenarios (std-1 to std-12): All 10/10
for (let i = 1; i <= 12; i++) {
    addScoresAfterPowerOutput(`std-${i}`, 10, '', false, 10, '', false);
}

// Tough scenarios with specific scores
addScoresAfterPowerOutput('tough-1', 10, '', false, 10, '', false);
addScoresAfterPowerOutput('tough-2', 10, '', false, 10, '', false);
addScoresAfterPowerOutput('tough-3', 10, '', false, 10, '', false);
addScoresAfterPowerOutput('tough-4', 10, '', false, 10, '', false);
addScoresAfterPowerOutput('tough-5', 0, 'Wrong place totally', false, 9, 'Needed hint of area', false);
addScoresAfterPowerOutput('tough-6', 0, 'Wrong guess', false, 4, 'Wrong place', true);
addScoresAfterPowerOutput('tough-7', 8, '', false, 8, '', true);
addScoresAfterPowerOutput('tough-8', 10, '', false, 10, '', false);
addScoresAfterPowerOutput('tough-9', 7, 'Perfect country but a bit off by quite some margin', false, 7, 'Perfect country but a bit off by quite some margin', false);
addScoresAfterPowerOutput('tough-10', 10, '', false, 10, '', false);
addScoresAfterPowerOutput('tough-11', 10, '', false, 10, '', false);
addScoresAfterPowerOutput('tough-12', 10, '', false, 10, '', false);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('✅ All scores added successfully!');
