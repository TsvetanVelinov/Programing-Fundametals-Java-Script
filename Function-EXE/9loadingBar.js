function loadingBar(bar) {

    let loadingBar = bar / 10;
    let loadingDots = 10 - loadingBar;

    if (bar === 100) {
        console.log(`100% Complete!`);
        console.log(`[${`%`.repeat(loadingBar)}]`);

    } else if (bar < 100 && bar > 0) {
        console.log(`${bar}% [${`%`.repeat(loadingBar)}${'.'.repeat(loadingDots)}]`);
        console.log(`Still loading...`);
    }

}


loadingBar(50)
loadingBar(100)