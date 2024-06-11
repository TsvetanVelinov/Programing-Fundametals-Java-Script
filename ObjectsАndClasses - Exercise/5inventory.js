function inventory(heroes) {

    let heroInfoArray = [];

    for (let heroesArrays of heroes) {
        let [heroName, levelHero, itemHero] = heroesArrays.split(' / ');

        let heroInfo = {
            hero: heroName, level: Number(levelHero), items: itemHero,
        };

        heroInfoArray.push(heroInfo);

    }

    heroInfoArray.sort((a, b) => a.level - b.level);

    // for(let heroInfo of heroInfoArray){
    // console.log(`Hero: ${hero.hero}`)
    // console.log(`level => ${hero.level}`);
    // console.log(`items => ${hero.items}`); }

    heroInfoArray.forEach(hero => {
        console.log(`Hero: ${hero.hero}`)
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}



inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])