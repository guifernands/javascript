let playlist = ["Long Time - Intro", "Top", "TOXIC", "New Tank", "OLYMPIAN"];

console.log(playlist); // 1

[playlist[0], playlist[playlist.length - 1]] = [playlist[playlist.length - 1], playlist[0]];

console.log(playlist); // 2


function tirarPrimeirosDois () {
    console.log(playlist.slice(2)); // 3
}

tirarPrimeirosDois();

const playlist2 = playlist.slice(0, 3);

console.log(playlist2);


