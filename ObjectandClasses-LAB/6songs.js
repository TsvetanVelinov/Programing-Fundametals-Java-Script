function songs(array) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = array.shift();
    let typeSong = array.pop();


    for (let command of array) {
        let commands = command.split('_');

        let [typeList, name, time] = commands;

        let song = new Song (typeList, name, time);
        songs.push(song);
    }

    if (typeSong === "all") {
        songs.forEach(song => console.log(song.name));
    } else {
        songs.forEach(song => {
            if(song.typeList === typeSong)
                console.log(song.name);
        })
    }

}



songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
console.log(`----------------------------`);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
console.log(`-----------------------------`);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])