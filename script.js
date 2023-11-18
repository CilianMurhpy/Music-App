const progress = document.getElementById("progress");
const playBut = document.getElementById("play");
const song = document.getElementById("song");
const thumb = document.getElementById("thumb");
const title = document.getElementById("title");
const author = document.getElementById("author");

var sn = 0;

var diction = [
    {
        name: "After Dark X Sweater Weather",
        filePath: "./assets/afterdark.mp3",
        thumb: "./assets/afterdark.jpg",
        author: "Mr.Kitty & The Neighbourhood"
    },
    {
        name: "Memory Reboot",
        filePath: "./assets/memoryreboot.mp3",
        thumb: "./assets/memoryreboot.jpg",
        author: "VOJ & Narvent"
    },
    {
        name: "Breathe",
        filePath: "./assets/breathe.mp3",
        thumb: "./assets/breathe.jpg",
        author: "Russ"
    },
];

progress.max = song.duration;
progress.value = song.currentTime;

if (song.currentTime == 0) {
    playBut.setAttribute("class", "fa-solid fa-play");
}

function playSong() {

    if (playBut.classList.contains("fa-pause")) {
        playBut.classList.add("fa-play");
        playBut.classList.remove("fa-pause");
        song.pause();
    } else {
        playBut.classList.add("fa-pause");
        playBut.classList.remove("fa-play");
        song.play();
    }

    progress.max = song.duration;
    progress.value = song.currentTime;

    setInterval(() => {
        progress.max = song.duration;
        progress.value = song.currentTime;
    }, 500)
}

function plus() {
    if (song.currentTime == song.duration) {
        return;
    }
    song.currentTime += 10;
    progress.value = song.currentTime;
    song.play();
    playBut.setAttribute("class", "fa-solid fa-pause");
}

function minus() {
    if (song.currentTime == 0) {
        playBut.setAttribute("class", "fa-solid fa-play")
        return;
    } else if (song.currentTime == song.duration) {
        return;
    } else {
        song.currentTime -= 10;
        progress.value = song.currentTime;
        song.play();
        if (song.currentTime == 0) {
            playBut.setAttribute("class", "fa-solid fa-play");
            if (song.play()) {
                song.pause();
            }
        } else {
            playBut.setAttribute("class", "fa-solid fa-pause");
        }
    }

}

if (playBut.classList.contains("fa-pause")) {

}

progress.oninput = () => {
    song.currentTime = progress.value;
    playBut.setAttribute("class", "fa-solid fa-pause");
    song.play();
    setInterval(() => {
        progress.max = song.duration;
        progress.value = song.currentTime;
    }, 500)
}

console.log(diction);

function nextSong() {
    song.pause();
    console.log(diction.length);
    while (sn < diction.length - 1){
        sn++;
    }
    song.innerHTML =
    `
    <source src="${diction[sn].filePath}">
    `;
    progress.max = song.duration;
    progress.value = song.currentTime;
    title.innerHTML = `${diction[sn].name}`;
    author.innerHTML = `${diction[sn].author}`;
    thumb.setAttribute("src", `${diction[sn].thumb}`);

    song.play();
    progress.max = song.duration;
    progress.value = song.currentTime;
    

    

}

function previousSong() {
    song.pause();
    console.log(sn)
    while (sn > 0){
        sn--;
    }
    song.innerHTML =
    `
    <source src="${diction[sn].filePath}">
    `;
    progress.max = song.duration;
    progress.value = song.currentTime;
    title.innerHTML = `${diction[sn].name}`;
    author.innerHTML = `${diction[sn].author}`;
    thumb.setAttribute("src", `${diction[sn].thumb}`);
}