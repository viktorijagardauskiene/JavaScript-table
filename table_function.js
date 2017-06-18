	function random_spalvos() {
	var x = [document.getElementById("cell_1"), document.getElementById("cell_2"), document.getElementById("cell_3"), document.getElementById("cell_4"), document.getElementById("cell_5"), document.getElementById("cell_6"), document.getElementById("cell_7"), document.getElementById("cell_8"), document.getElementById("cell_9")];
	var y = x[Math.floor(Math.random()*x.length)]; // duoda bet kurią x reikšmę
			 for (i = 0; i < x.length; i++) {
			 	x[i].addEventListener("click", backToRed())
					 	function backToRed() {
					 		x[i].style.backgroundColor = "red";
					 	} // visi langeliai grįžta į raudoną spalvą
			 } 
	y.style.backgroundColor = "white"; // parenka bet kurį langelį ir pakeičia į baltą
	
	}

	
	function iseiles_spalvos() {
	var p = [document.getElementById("cell_1"), document.getElementById("cell_2"), document.getElementById("cell_3"), document.getElementById("cell_4"), document.getElementById("cell_5"), document.getElementById("cell_6"), document.getElementById("cell_7"), document.getElementById("cell_8"), document.getElementById("cell_9")];
	var z = 0;
	var r = p[z];
	
			for (i = 0; i < x.length; i++) {
			 	p[i].addEventListener("click", backToRed())
					 	function backToRed() {
					 		p[i].style.backgroundColor = "red";
					 	} // visi langeliai grįžta į raudoną spalvą
	
			 } 
	r.style.backgroundColor = "white";

	}
