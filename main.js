'use strict';

{

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const nav = document.getElementById('nav');

  open.addEventListener('click', () => {
  overlay.classList.add('show');
  open.classList.add('hide');
  });

    close.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
  });

 nav.addEventListener('click', () => {
 overlay.classList.remove('show');
  open.classList.remove('hide');
 });





  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove("current");
      currentIndex++;  //この時点で画像が0から1になる。
if (currentIndex >= images.length) {
  currentIndex =0;
}
      images[currentIndex].classList.add("current");
      play();//ループ
    },5000);
   
  }
  
const images = document.querySelectorAll('.okinawa img');

let currentIndex = 0; //0番目から始まる
 play();  //ループ


function callback(entries, obs) {
  entries.forEach(entry => {
  if (!entry.isIntersecting) {
      return;    
    }

    entry.target.classList.add("appear");
    obs.unobserve(entry.target);
  });
}


const options = {
  threshold: 0.7,
}

const observer = new IntersectionObserver(callback, options);
const targets = document.querySelectorAll(".animate");


targets.forEach(target => {
  observer.observe(target);
});

}


{
 function scrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("scrolled");
        toTop.classList.add("scrolled");
      }else{
        header.classList.remove("scrolled");
        toTop.classList.remove("scrolled");
      }
    });
  }

  const toTop =document.getElementById("to_top");
  toTop.addEventListener("click",e =>{
    e.preventDefault();
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  })

  const header = document.querySelector("header");
  const scrollObserver = new IntersectionObserver(scrollCallback);
  scrollObserver.observe(document.getElementById("target-2"));
}