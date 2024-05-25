function requiredReading(pages, pagesPerHour , days) {

    let totalTime = pages / pagesPerHour;
    let limitedTimeFroRead = totalTime / days;

    console.log(limitedTimeFroRead);

}

requiredReading(212, 20, 2)
requiredReading(432, 15, 4)