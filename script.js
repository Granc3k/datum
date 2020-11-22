const Dny_v_tydnu = ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"];
const Mesice = ["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]






function poNacteni() {
  let x = new Date();
  let d = x.getDay();
  let dd = x.getDate();
  let mm = x.getMonth();
  let y = x.getFullYear();
  console.log(dd);  //test proměnných
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