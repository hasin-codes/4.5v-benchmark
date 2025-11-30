const fs = require('fs');

// Read the original file
const filePath = 'app/zai-benchmark/data/geography.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Fix tough-6: Replace line with old psychosis field
content = content.replace(
    /(\s+Ecosystem Hint: Kelp forests in adjacent waters\.\s+`),\s+psychosis:\s*true(\s+},)/,
    `$1,
                averageTestScore: 0,
                averageTestReason: "Wrong guess",
                averagePsychosis: false,
                powerTestScore: 4,
                powerTestReason: "Wrong place",
                powerPsychosis: true$2`
);

// Fix tough-7: Replace line with old psychosis field
content = content.replace(
    /(Compared to similar temperate rainforests[^`]*podocarps vs\. spruces\/hemlocks\)\.\s*`),\s+psychosis:\s*true(\s+},)/,
    `$1,
                averageTestScore: 8,
                averageTestReason: "",
                averagePsychosis: false,
                powerTestScore: 8,
                powerTestReason: "",
                powerPsychosis: true$2`
);

// Write back
fs.writeFileSync(filePath, content, 'utf-8');
console.log('✅ Fixed psychosis fields in tough-6 and tough-7!');
