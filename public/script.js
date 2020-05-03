document.addEventListener("DOMContentLoaded", () => {
  play_music();
});

var play_1_at_time = () => {
  const sounds = document.querySelectorAll(".sound");
  sounds.forEach(el => {
    el.pause();
  });
};

var change_height = (min,max)=> {
  let divs = document.querySelectorAll('.chart_part');
  for(let i=0; i<divs.length ;i++) {
    divs[i].style.height = `${Math.floor(Math.random() * (max - min + 1)) + min}px`;
  }
};

var play_music = () => {
  window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pad div");

    pads.forEach((pad, index) => {
      pad.addEventListener("click", () => {
        sounds[index].currentTime = 0;
        sounds[index].play();
        change_height(10,90);
      });
    });
  });
};