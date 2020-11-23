const Dny_v_tydnu = ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"];
const Mesice = ["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]






function poNacteni() {
  let x = new Date();
  let d = x.getDay();
  let dd = x.getDate();
  let mm = x.getMonth();
  let y = x.getFullYear();
  console.log(mm);  //test proměnných
  let vypis = "Dnes je " + Dny_v_tydnu[d] + " " + dd + ". " + Mesice[mm] + " " + y;
  console.log(vypis); // test výpisu
  setInterval(cas, 1000);
  document.getElementById("vypis").innerHTML = vypis;
}


function cas() {
  let t = new Date();
  let time = t.toLocaleTimeString();
  //console.log(time);
  document.getElementById("time").innerHTML = time;  
} 

function Patek_13(){
  let a_mes = new Date().getMonth();
  let mes = 12;
  let vypis_p = " "
  for (let i = 0; i <= mes; i++){
    let datum = new Date (2020, a_mes + i, 13).getDay();
    if(datum == 5){
      let den = new Date (2020, a_mes + i, 13).toLocaleDateString();
      vypis_p = vypis_p + den + ", ";
    }
  }
  vypis_p += "."
  document.getElementById("vypis_p").innerHTML = vypis_p;
  console.log(vypis_p);
}