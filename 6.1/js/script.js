class Data {
  constructor(options) {
    this.car = options.car
    this.color = options.color
    this.SteeringWCar = options.SteeringWCar
    this.Transmission = options.Transmission
    this.time = options.time;
    this.fines = options.fines;
  }
}
// localStorage.getItem('car');

let storageData = [];
if (localStorage.getItem('car') != null) {
  storageData = JSON.parse(localStorage.getItem('car'));
  console.log("storage isn't null")
}

function cars() {
  let Grn_dollar = document.getElementsByTagName('h2')[0].innerText;
  let temp = document.getElementsByTagName('h2')[2].innerText;
  if (temp <= -10) {
    alert('sorry fines x2 because temp >-10')
  }
  document.write('<div class="dd">' + document.getElementById('temp2').innerHTML + '</div>')
  document.write('<div style="display:none;" id="Grn_dollar"><h3>' + Grn_dollar + '</h3></div>')
  document.write('<div id="reset">')
  document.write('<a href=""><button>back</button></a>')
  document.write('<button onclick="SortAlf()">sort alphabetically</button>')
  document.write('<button onclick="SortSW()">sort Steering wheel</button>')
  document.write('<div style="display: flex;">');
  document.write('<p style="width:10%; border: 2px solid black; text-align:center; margin: 0;">Car</p>');
  document.write('<p style="width:10%; border: 2px solid black; text-align:center; margin: 0;">Color</p>');
  document.write('<p style="width:10%; border: 2px solid black; text-align:center; margin: 0;">Steering wheel</p>');
  document.write('<p style="width:10%; border: 2px solid black; text-align:center; margin: 0;">Transmission</p>');
  document.write('<p style="width:10%; border: 2px solid black; text-align:center; margin: 0;">time</p>');
  document.write('<p style="width:10%; border: 2px solid black; text-align:center; margin: 0;">fines</p>');
  document.write('</div>');
  for (let i = 0; i < storageData.length; i++) {
    document.write('<div style="display: flex;">');
    document.write('<p style="width:10%; border: 2px solid black; text-align:center; margin: 0;">' + storageData[i].car + '</p> ');
    document.write('<p style="width:10%; border: 2px solid black; text-align:center; margin: 0;">' + storageData[i].color + '</p>');
    document.write('<p style="width:10%; border: 2px solid black; text-align:center; margin: 0;">' + storageData[i].SteeringWCar + '</p>');
    document.write('<p style="width:10%; border: 2px solid black; text-align:center; margin: 0;">' + storageData[i].Transmission + '</p>');
    document.write('<p style="width:10%; border: 2px solid black; text-align:center; margin: 0; id" id="timer' + i + '">' + storageData[i].time + '</p>');
    document.write('<p style="width:10%; border: 2px solid black; text-align:center; margin: 0; id" id="fines' + i + '">' + storageData[i].fines + '</p>');
    document.write('<button onclick="del(' + i + ')">delete</button>');
    document.write('<button onclick="addtime(' + i + ')">add 5 second</button>');
    document.write('</div>');
  }
  document.write('</div>')
  clock();
}

function clock(stop){
  let Grn_dollar = document.getElementsByTagName('h3')[0].innerText 
  Grn_dollar = Number(Grn_dollar); 
  let temp = document.getElementsByTagName('h2')[1].innerText;
  let idtimer;
  for (let i = 0; i < storageData.length; i++) {
    idtimer = 'timer' + i;
    idfines = 'fines' + i;
    storageData[i].time -= 1;
    document.getElementById(idtimer).innerHTML = storageData[i].time;
    if (storageData[i].time < 0) {
      storageData[i].time += 11;
      if (temp <= -10) {
        storageData[i].fines += Grn_dollar+Grn_dollar;
      }
      else {
        storageData[i].fines += Grn_dollar;
      }
      document.getElementById(idtimer).innerHTML = storageData[i].time;
      document.getElementById(idfines).innerHTML = storageData[i].fines;
    }
  }
  let www = setTimeout(clock, 1000);
}
function addtime(idCar) {
  idtimer = 'timer' + idCar;
  storageData[idCar].time += 5;
  document.getElementById(idtimer).innerHTML = storageData[idCar].time;
}

function SortAlf() {
  storageData = storageData.sort(sortedAlf);
  document.getElementById('reset').innerHTML = ' ';
  cars();
}
function sortedAlf(a, b) {
  if (a.car > b.car) {
    return 1;
  }
  if (a.car < b.car) {
    return -1;
  }
  return 0;
}

function SortSW() {
  storageData = storageData.sort(sortSW);
  document.getElementById('reset').innerHTML = '  ';
  cars();
}
function sortSW(a, b) {
  if (a.SteeringWCar > b.SteeringWCar) {
    return 1;
  }
  if (a.SteeringWCar < b.SteeringWCar) {
    return -1;
  }
  return 0;
}

function del(idCar) {
  storageData.splice(idCar, 1);
  console.log(storageData);
  del2();
}
function del2() {
  let secondData = JSON.stringify(storageData);
  localStorage.setItem('car', secondData);
  console.log(secondData);
  setTimeout(() => {
    location.reload();
  }, 100)
}

setTimeout(() => {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 1; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}, 20);
function openTab(evt, tabName,) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
function addcars() {
  let nameCar = document.getElementById('NameCar').value;
  let nameColorCar = document.getElementById('ColorCar').value;
  let nameSteeringWCar = document.getElementById('SteeringWCar').value;
  let nameTransmission = document.getElementById('Transmission').value;
  let nameTime = Math.floor(Math.random() * 20);
  let namefines = 0;
  //  не понял как можно следить что пользователь не заполнил поле 
  if (nameCar == "" || nameColorCar == "" || nameSteeringWCar == "" || nameTransmission == "") {
    return (alert(("sorry you could't write all, add all and push button again")))
  }
  secondData = new Data({
    car: nameCar,
    color: nameColorCar,
    SteeringWCar: nameSteeringWCar,
    Transmission: nameTransmission,
    time: nameTime,
    fines: namefines
  },);
  alert('save');
  storageData.push(secondData);
  secondData = JSON.stringify(storageData);
  localStorage.setItem('car', secondData);
}



