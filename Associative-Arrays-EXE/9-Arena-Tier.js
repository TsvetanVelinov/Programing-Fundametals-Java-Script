function arenaTier(input) {
    
    let gladiators = {};

    for (let line of input) {
        if (line === 'Ave Cesar') {
            break;
        } else if (line.includes(' -> ')) {
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = Number(skill);

            if (!gladiators[gladiator]) {
                gladiators[gladiator] = {};
            }
            if (!gladiators[gladiator][technique] || gladiators[gladiator][technique] < skill) {
                gladiators[gladiator][technique] = skill;
            }
        } else if (line.includes(' vs ')) {
            let [gladiator1, gladiator2] = line.split(' vs ');

            if (gladiators[gladiator1] && gladiators[gladiator2]) {
                let gladiator1Techniques = Object.keys(gladiators[gladiator1]);
                let gladiator2Techniques = Object.keys(gladiators[gladiator2]);
                let commonTechniques = gladiator1Techniques.filter(technique => gladiator2Techniques.includes(technique));

                if (commonTechniques.length > 0) {
                    let gladiator1TotalSkill = Object.values(gladiators[gladiator1]).reduce((a, b) => a + b, 0);
                    let gladiator2TotalSkill = Object.values(gladiators[gladiator2]).reduce((a, b) => a + b, 0);

                    if (gladiator1TotalSkill > gladiator2TotalSkill) {
                        delete gladiators[gladiator2];
                    } else if (gladiator1TotalSkill < gladiator2TotalSkill) {
                        delete gladiators[gladiator1];
                    }
                }
            }
        }
    }

    // Sort and print the gladiators
    let sortedGladiators = Object.keys(gladiators).sort((a, b) => {
        let aTotalSkill = Object.values(gladiators[a]).reduce((sum, skill) => sum + skill, 0);
        let bTotalSkill = Object.values(gladiators[b]).reduce((sum, skill) => sum + skill, 0);

        return bTotalSkill - aTotalSkill || a.localeCompare(b);
    });

    for (let gladiator of sortedGladiators) {
        let totalSkill = Object.values(gladiators[gladiator]).reduce((sum, skill) => sum + skill, 0);
        console.log(`${gladiator}: ${totalSkill} skill`);

        let sortedTechniques = Object.keys(gladiators[gladiator]).sort((a, b) => {
            return gladiators[gladiator][b] - gladiators[gladiator][a] || a.localeCompare(b);
        });

        for (let technique of sortedTechniques) {
            console.log(`- ${technique} <!> ${gladiators[gladiator][technique]}`);
        }
    }
}


arenaTier([ 'Peter -> Duck -> 400', 'Julius -> Shield -> 150',
     'Gladius -> Heal -> 200', 'Gladius -> Support -> 250',
     'Gladius -> Shield -> 250', 'Peter vs Gladius', 
     'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar' ])