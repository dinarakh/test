let Gshet = 0;
let Gclick = 1;
let G_AutoClick = 0 ;


function clicker() {
  Gshet = document.getElementsByTagName('h1')[0].innerText;
  document.getElementById('i').innerHTML = Number(Gshet) + Gclick;
}
function timer(){
  Gshet = document.getElementsByTagName('h1')[0].innerText;
  document.getElementById('i').innerHTML = Number(Gshet) + G_AutoClick;
  console.log(Gshet);
  setTimeout(timer, 1000);
}

function up1(num) {
  switch (num) {
    case 1:
      if (Gshet >= 300) {
        Gclick += 3;
        Gshet -= 300;
        document.getElementById('i').innerHTML = Gshet
      }
      else {
        alert('не хватило тугриков чел (')
      }
      break;
    case 2:
      if (Gshet >= 1000) {
        Gclick += 5;
        Gshet -= 1000;
        document.getElementById('i').innerHTML = Gshet
      }
      else {
        alert('не хватило тугриков чел (');
      }
      break;
    case 3:
      if (Gshet >= 5000) {
        Gclick += 15;
        Gshet -= 5000;
        document.getElementById('i').innerHTML = Gshet
      }
      else {
        alert('не хватило тугриков чел (');
      }
      break;
    case 4:
      if (Gshet >= 20000) {
        Gclick += 30;
        Gshet -= 20000;
        document.getElementById('i').innerHTML = Gshet
      }
      else {
        alert('не хватило тугриков чел (');
      }
      break;
    case 5:
      if (Gshet >= 50000) {
        Gclick += 35;
        Gshet -= 50000;
        document.getElementById('i').innerHTML = Gshet
      }
      else {
        alert('не хватило тугриков чел (');
      }
      break;
  }
  document.getElementById('power-click').innerHTML=Gclick;
}

zzz=1;
function up2(num) {
  if(zzz==1){
    zzz=0;
    timer();
  }
  switch (num) {
    case 1:
      if (Gshet >= 300) {
        G_AutoClick += 3;
        Gshet -= 300;
        document.getElementById('i').innerHTML = Gshet;
      }
      else {
        alert('не хватило тугриков чел (')
      }
      break;
    case 2:
      if (Gshet >= 300) {
        G_AutoClick += 3;
        Gshet -= 300;
        document.getElementById('i').innerHTML = Gshet
      }
      else {
        alert('не хватило тугриков чел (')
      }
      break;
    case 3:
      if (Gshet >= 300) {
        G_AutoClick += 3;
        Gshet -= 300;
        document.getElementById('i').innerHTML = Gshet
      }
      else {
        alert('не хватило тугриков чел (')
      }
      break;
    case 4:
      if (Gshet >= 300) {
        G_AutoClick += 3;
        Gshet -= 300;
        document.getElementById('i').innerHTML = Gshet
      }
      else {
        alert('не хватило тугриков чел (')
      }
      break;
    case 5:
      if (Gshet >= 300) {
        G_AutoClick += 3;
        Gshet -= 300;
        document.getElementById('i').innerHTML = Gshet
      }
      else {
        alert('не хватило тугриков чел (')
      }
      break;
  }
  document.getElementById('power-sup').innerHTML=G_AutoClick;

}
