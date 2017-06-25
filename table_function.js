// cell id should be number 1-9

function naujas_zaidimas() {
		for (a = 1; a <= 9; ++a) {
	 	document.getElementById(a).style.backgroundColor = "red";
	 } 
		document.getElementById("numeris").style.backgroundColor = "white";
		document.getElementById("sarasas").style.backgroundColor = "white";
		document.getElementById("sarasas").innerHTML = "Išrinktų skaičių nėra";
		document.getElementById("numeris").innerHTML = "Spausk 'Išrink skaičių'";

	var skaiciai = '123456789'; 
	var bilieto_nr = 0;
	for (var i = 0; i <7; i++) {
		bilieto_nr = skaiciai[Math.floor(Math.random()*9)];
		}
	return bilieto_nr;
	  	document.getElementById("bilieto_numeris").innerHTML = bilieto_nr;
	 }
	 
var SE = [];
var cell = 0; /* kintamasis cell rasomas virs funkciju kad galiotu abiem, 
o ne tik vienai. parasyta viduje funkcijos veiks tik toje funkcijoje.*/

function random_spalvos() {
	 cell = Math.floor(Math.random()*8) +1;

	 for (a = 1; a <= 9; ++a) {
	 	document.getElementById(a).style.backgroundColor = "red";
	 } 
	 var numeris = document.getElementById("numeris");
	 document.getElementById(cell).style.backgroundColor = random_color();
	 numeris.innerHTML = cell;
	 numeris.style.backgroundColor = random_color();

	 if (SE.length <=5) {
	 SE.push(cell);			/* prideda isrinkta sakiciu prie eiles galo */
	 sarasas.innerHTML = SE;} else {
	 	document.getElementById("numeris").innerHTML = "Žaidimas baigėsi"};

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




