function buildAWall(sectionHeights) {

    let concreteQtys = [];
    let totalConcrete = 0;

    while (sectionHeights.some(sectionHeights => sectionHeights < 30)) {
        let dailyConcrete = 0;

        for (const i in sectionHeights) {
            if (sectionHeights[i] < 30) {
                sectionHeights[i]++;
                dailyConcrete += 195;
            }
        }

        concreteQtys.push(dailyConcrete);
        totalConcrete += dailyConcrete;

    }

    console.log(concreteQtys.join(', '));
    console.log(`${totalConcrete * 1900} pesos`);

}


buildAWall([21, 25, 28])