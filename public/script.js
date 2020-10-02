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
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
      integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

    <script>
      // Wrap every letter in a span
      var textWrapper = document.querySelector(".ml7 .letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
      anime
        .timeline({ loop: true })
        .add({
          targets: ".ml7 .letter",
          translateY: ["1.1em", 0],
          translateX: ["0.55em", 0],
          translateZ: 0,
          rotateZ: [180, 0],
          duration: 750,
          easing: "easeOutExpo",
          delay: (el, i) => 50 * i,
        })
        .add({
          targets: ".ml7",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });