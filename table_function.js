	


//	function random_spalvos() {
//	var x = [document.getElementById("cell_1"), document.getElementById("cell_2"), document.getElementById("cell_3"), document.getElementById("cell_4"), document.getElementById("cell_5"), document.getElementById("cell_6"), document.getElementById("cell_7"), document.getElementById("cell_8"), document.getElementById("cell_9")];
//	var y = x[Math.floor(Math.random()*x.length)]; // duoda bet kurią x reikšmę
//			 for (i = 0; i < x.length; i++) {
//			 	x[i].addEventListener("click", backToRed())
//					 	function backToRed() {
//					 		x[i].style.backgroundColor = "red";
//					 	} // visi langeliai grįžta į raudoną spalvą
//			 } 
//	y.style.backgroundColor = "white"; // parenka bet kurį langelį ir pakeičia į baltą
	
//	}

	
//	function iseiles_spalvos() {
//	var p = [document.getElementById("cell_1"), document.getElementById("cell_2"), document.getElementById("cell_3"), document.getElementById("cell_4"), document.getElementById("cell_5"), document.getElementById("cell_6"), document.getElementById("cell_7"), document.getElementById("cell_8"), document.getElementById("cell_9")];
//	var z = 0;
//	var r = p[z];
	
//			for (i = 0; i < x.length; i++) {
//			 	p[i].addEventListener("click", backToRed())
//					 	function backToRed() {
//					 		p[i].style.backgroundColor = "red";
//					 	} // visi langeliai grįžta į raudoną spalvą
	
//			 } 
//	r.style.backgroundColor = "white";

//	}
// cell id should be number 1-9

var cell = 0;
function random_spalvos() {
	 cell = Math.floor(Math.random()*9) +1;

	 for (a = 1; a <= 9; ++a) {
	 	document.getElementById(a).style.backgroundColor = "red";
	 } 
	 document.getElementById(cell).style.backgroundColor = "white";

}

function iseiles_spalvos() {
	if(cell >= 9) {
		cel = 1;
	} else {
		cell = cell + 1;
	}
	for (a = 1; a <= 9; ++a) {
	 	document.getElementById(a).style.backgroundColor = "red";
	 } 
	 document.getElementById(cell).style.backgroundColor = "white";

}