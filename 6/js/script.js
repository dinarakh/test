var data = 
[
    {
      "name":"vaz 2112",
    "color":"gray",
    "steering wheel":"right",
    "Transmission":"Mechanics"
    },

    {
      "name":"vaz 2113",
      "color":"red",
      "steering wheel":"right",
      "Transmission":"Mechanics"
    }
]

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
  var d = JSON.stringify(data)
  console.log(data)

}



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

function locall(){
  let zxc=localStorage.getItem('person')
  console.log(JSON.parse(zxc));
}