var data = 
[ {
      "name": "",
      "color": "",
      "steering wheel": "",
      "Transmission": ""
  }
]
data = JSON.parse(localStorage.getItem('data'));


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

  addCars(0);
}

function cars(){
  data = JSON.parse(localStorage.getItem('data'));
  document.write('<a href=""><button>back</button></a>');
  document.write('<button onclick="infocar()">run</button>')
  document.write('<a href="#"><button  onclick="Deletecar()">delete</button></a> <br>')
  document.write('<select name="car" id="car"> value=""');
  for(let i=0; i< data.length;i++){
    console.log(data[i].name);
    let dataName= data[i].name;
    document.write(' <option value="'+dataName+'">'+dataName+'</option>');
  }
  document.write(' </select>');
}

function infocar(){
  let car = document.getElementById('car').value;
  for(let i = 0; i< data.length;i++){
    if(car == data[i].name){
      document.write('<p>Car-'+data[i].name+'</p>');
      document.write('<p>Color-'+data[i].color+'</p>');
      document.write('<p>Steering wheel-'+data[i]["steering wheel"]+'</p>');
      document.write('<p>Transmission-'+data[i].Transmission+'</p>');
      break;
    }
  }
}
function Deletecar() {
  let car = document.getElementById('car').value;
  for(let i = 0; i< data.length;i++){
    if(car ==  data[i].name){
      data.splice(i, 1);
      console.log(data);
      break;
    }   
  }
  Deletecar2();
}
  function Deletecar2(){
  let local = JSON.stringify(data);
  localStorage.setItem('data', local);
  console.log(local);
}
//----------------------------------------
 var CarName = "";
 var ColorName = "";
 var SteeringWheelName = "";
 var TransmissionName = "";

     // ЗАПОЛНЕНИЕ
function addCars(err){

  // ИМЯ
  var doc = document.getElementById('NameCar');
   doc.addEventListener('change', function() {
   CarName = this.value;
  console.log(CarName);
   })

  //РУЛЬ 
  var doc = document.getElementById('SteeringWCar');
   doc.addEventListener('change', function() {
   SteeringWheelName = this.value;
  console.log(SteeringWheelName);
  })
  // Цвет
  var doc = document.getElementById('ColorCar');
  doc.addEventListener('change', function() {
  ColorName = this.value;
 console.log(ColorName);
 })

  // ТРАНСМИССИЯ
  var doc = document.getElementById('Transmission');
   doc.addEventListener('change', function() {
   TransmissionName = this.value;
  console.log(TransmissionName);
  })

  if(err==0){
  return
}
  //ПРОВЕРКА 
  if(CarName!="" && ColorName!="" && SteeringWheelName !="" && TransmissionName != "" ){
    newdata();
  }else{
    alert("sorry you could't write all, add all and push button again")
  }
  // ДОБАВЛЕНИЕ
  function newdata(){
    var secondData={
      "name": CarName,
      "color": ColorName,
      "steering wheel": SteeringWheelName,
      "Transmission":TransmissionName
    }
    console.log(secondData);
// Заталкиваю в основную дату
    data.push(secondData);
    console.log(data);
    let local = JSON.stringify(data);
    localStorage.setItem('data', local);
  }
} 
