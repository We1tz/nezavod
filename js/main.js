import { gsap } from "gsap";
import { EaselPlugin } from "gsap/EaselPlugin";
gsap.registerPlugin(EaselPlugin);



import { Application } from "@splinetool/runtime";



//LOADING
let body = document.body;
let loadingWrapper = document.querySelector('.load')

setTimeout(() => {
  loadingWrapper.style.display = 'none';
  body.style.overflowY = 'scroll';
}, 2000)


// Анимация 3D моделей
const canvas1 = document.getElementById('step1canvas');
const app1 = new Application(canvas1);
app1.load('https://prod.spline.design/ATfVpzwfJt7voTBC/scene.splinecode');

const canvas2 = document.getElementById('step2canvas');
const app2 = new Application(canvas2);
app2.load('https://prod.spline.design/CQjE7xVYxjzLWCWM/scene.splinecode');


const canvas3 = document.getElementById('step3canvas');
const app3 = new Application(canvas3);
app3.load('https://prod.spline.design/JkYDu4eQ19ALqk7h/scene.splinecode');



const canvas4 = document.getElementById('step4canvas');
const app4 = new Application(canvas4);
app4.load('https://prod.spline.design/MJ0OIhCTNQMyLNBu/scene.splinecode');


const canvas5 = document.getElementById('step5canvas');
const app5 = new Application(canvas5);
app5.load('https://prod.spline.design/HXqdpTO5Ond6Wug7/scene.splinecode');

const canvas6 = document.getElementById('step6canvas');
const app6 = new Application(canvas6);
app6.load('https://prod.spline.design/5BytDmGCh3D0aU7a/scene.splinecode');




// Mobile Model 3d
const canvas1mobile = document.getElementById('step1canvasmobile');
const app1mobile = new Application(canvas1mobile);
app1mobile.load('https://prod.spline.design/WVnW0eKW5TFEYXpW/scene.splinecode');


const canvas2mobile = document.getElementById('step2canvasmobile');
const app2mobile = new Application(canvas2mobile);
app2mobile.load('https://prod.spline.design/pkm6b4IStPsH2Nf2/scene.splinecode');


const canvas3mobile = document.getElementById('step3canvasmobile');
const app3mobile = new Application(canvas3mobile);
app3mobile.load('https://prod.spline.design/mNKqylhBbW3NA5H2/scene.splinecode');

const canvas4mobile = document.getElementById('step4canvasmobile');
const app4mobile = new Application(canvas4mobile);
app4mobile.load('https://prod.spline.design/RezrAB0lD3Vm4duu/scene.splinecode');

const canvas5mobile = document.getElementById('step5canvasmobile');
const app5mobile = new Application(canvas5mobile);
app5mobile.load('https://prod.spline.design/6eCvQgeTH02BfzFa/scene.splinecode');


const canvas6mobile = document.getElementById('step6canvasmobile');
const app6mobile = new Application(canvas6mobile);
app6mobile.load('https://prod.spline.design/znzoW6zNzpzDhrwO/scene.splinecode');









const loading = document.querySelector(".loading");

let next = document.querySelector(".modal-next");
let prev = document.querySelector(".modal-prev");

let sliderContainer = document.querySelector(".swiper");



let titleBanks_text = document.querySelector('.title_banks_text')
let titleBanksWrapper = document.querySelector('.title__banks')

let titleBanksColor = ['#F6AE3B', '#89C6B7', '#F2A286', '#141414', '#2D5F4E', '#5AC7A5']
let tbcId = 0;

titleBanksWrapper.style.background = titleBanksColor[tbcId]


let tBTexts = ['АЧОНЕТ?' , 'XYLINET', 'XYLINET COLD', 'XYLINET ТИТАНЫ', 'АЧОНЕТ? Новогодний', 'XYLINET RAZ’EB'];
let tBTextsId = 0;
titleBanks_text.textContent = tBTexts[tBTextsId];



let banksSliderId = 0;
let banksSliderIdMob = 0

next.addEventListener("click", () => {
  let bank1 = app1.findObjectByName("bank");
  let bank2 = app2.findObjectByName("bank2");
  let bank3 = app3.findObjectByName("bank3");
  let bank4 = app4.findObjectByName("bank4");
  let bank5 = app5.findObjectByName("bank5");
  let bank6 = app6.findObjectByName("bank6");
  let banksSlider = [bank1, bank2, bank3, bank4, bank5, bank6];

  let bank1mobile = app1mobile.findObjectByName("bank");
  let bank2mobile = app2mobile.findObjectByName("bank2");
  let bank3mobile = app3mobile.findObjectByName("bank3");
  let bank4mobile = app4mobile.findObjectByName("bank4");
  let bank5mobile = app5mobile.findObjectByName("bank5");
  let bank6mobile = app6mobile.findObjectByName("bank6");
  let banksSlidermobile = [bank1mobile, bank2mobile, bank3mobile, bank4mobile, bank5mobile, bank6mobile]; 

  gsap.to(banksSlider[banksSliderId].rotation, { y: 1, duration: 0.6, ease: "back.out(2)", });
  gsap.to(banksSlider[banksSliderId + 1].rotation, { y: 5.5, duration: 0.6, ease: "back.out(2)", });

  gsap.to(banksSlidermobile[banksSliderIdMob].rotation, { y: 1, duration: 0.6, ease: "back.out(2)"  });
  gsap.to(banksSlidermobile[banksSliderIdMob + 1].rotation, { y: 5.5, duration: 0.6, ease: "back.out(2)" });
  banksSliderId++;
  banksSliderIdMob++;

  tbcId++;
  titleBanksWrapper.style.background = titleBanksColor[tbcId];

  tBTextsId++;
  titleBanks_text.textContent = tBTexts[tBTextsId];

});

prev.addEventListener("click", () => {
  let bank1 = app1.findObjectByName("bank");
  let bank2 = app2.findObjectByName("bank2");
  let bank3 = app3.findObjectByName("bank3");
  let bank4 = app4.findObjectByName("bank4");
  let bank5 = app5.findObjectByName("bank5");
  let bank6 = app6.findObjectByName("bank6");
  let banksSlider = [bank1, bank2, bank3, bank4, bank5, bank6];

  let bank1mobile = app1mobile.findObjectByName("bank");
  let bank2mobile = app2mobile.findObjectByName("bank2");
  let bank3mobile = app3mobile.findObjectByName("bank3");
  let bank4mobile = app4mobile.findObjectByName("bank4");
  let bank5mobile = app5mobile.findObjectByName("bank5");
  let bank6mobile = app6mobile.findObjectByName("bank6");
  let banksSlidermobile = [bank1mobile, bank2mobile, bank3mobile, bank4mobile, bank5mobile, bank6mobile];    

  gsap.to(banksSlider[banksSliderId].rotation, { y: 1, duration: 0.6, ease: "back.out(2)" });
  gsap.to(banksSlider[banksSliderId - 1].rotation, { y: 5, duration: 0.6, ease: "back.out(2)" });

  gsap.to(banksSlidermobile[banksSliderIdMob].rotation, { y: 1, duration: 0.6, ease: "back.out(2)" });
  gsap.to(banksSlidermobile[banksSliderIdMob - 1].rotation, { y: 5, duration: 0.6, ease: "back.out(2)" });
  banksSliderId--;
  banksSliderIdMob--;


  tBTextsId--;
  titleBanks_text.textContent = tBTexts[tBTextsId];

  tbcId--;
  titleBanksWrapper.style.background = titleBanksColor[tbcId]

});

