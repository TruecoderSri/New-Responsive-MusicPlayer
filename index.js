console.log("welcome to tuneify");

// variables
let songIndex = 1;
let audioElement = new Audio("./audio files/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let ProgressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songRender = document.getElementById("songRender");
let song_img = document.getElementById("imgRender");

let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    id: 1,
    songName: "Hymn for the weekend",
    audioSrc: "./audio files/1.mp3",
    imageSrc: "images/hymn.jpg",
  },
  {
    id: 2,
    songName: "Perfect",
    audioSrc: "./audio files/2.mp3",
    imageSrc: "images/perfect.jpg",
  },
  {
    id: 3,
    songName: "Say u Wont Let Go",
    audioSrc: "3.mp3",
    imageSrc: "images/wontLetGo.jpg",
  },
  {
    id: 4,
    songName: "Good Life",
    udioSrc: "4.mp3",
    imageSrc: "images/goodLife.jpg",
  },

  {
    id: 5,
    songName: "Kesariya",
    audioSrc: "5.mp3",
    imageSrc: "images/kesariya.jpg",
  },
  {
    id: 6,
    songName: "Khair Mangdi",
    audioSrc: "6.mp3",
    imageSrc: "images/khairMangdi.jpg",
  },
  {
    id: 7,
    songName: "Lat Lag Gayi",
    audioSrc: "7.mp3",
    imageSrc: "images/LLG.jpg",
  },
  {
    id: 8,
    songName: "Positions",
    audioSrc: "8.mp3",
    imageSrc: "images/positons.jpg",
  },
  {
    id: 9,
    songName: "Aziyat",
    audioSrc: "9.mp3",
    imageSrc: "images/aziyat.jpg",
  },
  {
    id: 10,
    songName: "PayPhone",
    audioSrc: "10.mp3",
    imageSrc: "images/download.jpg",
  },
  {
    id: 11,
    songName: "Angel Baby",
    audioSrc: "11.mp3",
    imageSrc: "./images/angelBaby.jpg",
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].imageSrc;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// handle play/pause click

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
  }
});
// event handler

audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //   update seekbar i.e the range of the song

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  ProgressBar.value = progress;
});

ProgressBar.addEventListener("change", () => {
  audioElement.currentTime = (ProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.add("fa-play-circle");
      element.classList.remove("fa-pause-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.add("fa-pause-circle");
      e.target.classList.remove("fa-play-circle");
      audioElement.src = `./audio files/${songIndex}.mp3`;
      songRender.innerText = songs[songIndex - 1].songName;
      song_img.src = songs[songIndex - 1].imageSrc;

      audioElement.currentTime = 0;
      // song_img.style.opacity = 1;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.target.classList.add("fa-play-circle");
      masterPlay.target.classList.remove("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", (e) => {
  if (songIndex >= 11) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }
  audioElement.src = `./audio files/${songIndex}.mp3`;
  songRender.innerText = songs[songIndex - 1].songName;

  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.target.classList.remove("fa-pause-circle");
  masterPlay.target.classList.add("fa-play-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 1) {
    songIndex = 11;
  } else {
    songIndex -= 1;
  }

  audioElement.src = `./audio files/${songIndex}.mp3`;
  songRender.innerText = songs[songIndex - 1].songName;

  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.target.classList.remove("fa-pause-circle");
  masterPlay.target.classList.add("fa-play-circle");
});

const makeAllPause = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.add("fa-play-circle");
      element.classList.remove("fa-pause-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("dblclick", (e) => {
      console.log(e.target);
      makeAllPause();
      songIndex = parseInt(e.target.id);
      e.target.classList.add("fa-play-circle");
      e.target.classList.remove("fa-pause-circle");
      audioElement.src = `./audio files/${songIndex}.mp3`;
      // the song reflect in bottom banner

      songRender.innerText = songs[songIndex - 1].songName;

      audioElement.currentTime = 0;
      audioElement.pause();
      gif.style.opacity = 0;
      masterPlay.target.classList.remove("fa-pause-circle");
      masterPlay.target.classList.add("fa-play-circle");
    });
  }
);
