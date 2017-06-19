	


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
var SE = [];
var cell = 0; /* kintamasis cell rasomas virs funkciju kad galiotu abiem, 
o ne tik vienai. parasyta viduje funkcijos veiks tik toje funkcijoje.*/
function random_spalvos() {
	 cell = Math.floor(Math.random()*8) +1;

	 for (a = 1; a <= 9; ++a) {
	 	document.getElementById(a).style.backgroundColor = "red";
	 } 
	 document.getElementById(cell).style.backgroundColor = random_color();
	 document.getElementById("numeris").innerHTML = "<h1>" + cell + "</h1>";
	 numeris.style.backgroundColor = random_color();

	 SE.push(cell);				/* prideda isrinkta sakiciu prie eiles galo */
	 sarasas.innerHTML = SE;
}

function iseiles_spalvos() {
	if (cell >= 9) {
		cell = 1;
	} else {
		cell = cell + 1;
	}
	for (a = 1; a <= 9; ++a) {
	 	document.getElementById(a).style.backgroundColor = "red";
	 } 
	 document.getElementById(cell).style.backgroundColor = random_color();
		var numeris = document.getElementById("numeris");
	 			numeris.innerHTML = "<h1>" + cell + "</h1>"; /* uzduotis: kad isrinkto langelio skaicius 
	 			butu parasytas atskirame div'e - kodo eilute pakeicia div'o reiksme i cell kintamojo reiksme */
			numeris.style.backgroundColor = random_color();
	 	SE.push(cell);				/* prideda isrinkta sakiciu prie eiles galo */
	    sarasas.innerHTML = SE;
}



function random_color() {
        var letters = '0123456789ABCDEF'; // masyve yra 16 simboliu
        var color = '#';
        for (var i = 0; i < 6; i++ ) { /* ++i pirmiausia prides vieneta, 
        	o i++ prides vieneta funkcijai pasibaigus */ // var i nurodo simbolio pozicija
            color += letters[Math.floor(Math.random() * 16)]; /* += lieka groteles ir prie ju prisideda letters reiksme
            jei butu tik = pakeistume color kintamojo reiksme */
        }
        return color;
    }


	//return color_string; // "rgb([0-255], [0-255], [0-255])" pvz: "rgb(128, 128, 128)"
//}

// ND gali iskristi tik 6 skaiciai, po sesiu skaiciu atsiranda lentele kad zaidimas baigtas
// panaudoti bootstrap
// prideti mygtuka Nasujas zaidimas, kuris viska isvalo ir prasideda is naujo
// paspaudus Naujas zaidimas apacioje sugeneruoja sesis skaitmenis kurie lieka (turetu patikrinti ar iskrite skaiciai sutampa su bilieto skaiciais)



