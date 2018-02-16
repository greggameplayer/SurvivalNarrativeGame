var filedialog = []; // tableau contenant les images valide
var nbrebuttonsource = 0;
var counter = 1;
var lengthtext = 0;
var valuetext;
var dtext;
var intervaldiv;
var nbreplayers;
//                                                                  Permet d'ouvrir la fenêtre de dialogue dans le but de selectionner une image de 64x64px
//                                                          et créer un événement onChange pour détécter la fermeture et executer la fonction OnOpenFileDialogChange
//                                                                                                              ↓↓↓
function FileDialog(buttonobject)  
{
	var nbreloopbt = 1;
	while(nbreloopbt !== nbrebuttonsource)
	{
		if(buttonobject === "buttonfiledialog" + nbreloopbt){
			nbrebuttonsource = nbreloopbt;
			nbreloopbt--;
		}
		nbreloopbt++;
	}
    var openfiledialog = document.getElementById("openfiledialog");
	$("#openfiledialog").trigger('click');
openfiledialog.addEventListener("change", OnOpenFileDialogChange);

}
//                                                                             Permet d'afficher les images valide dans les canvas prévu a cet effet
//                                                                                                              ↓↓↓
function displayImg(imgSrc)
{
	var nbre = 1;
		var c=document.getElementById("canvas" + nbre);
	var context=c.getContext("2d");
	context.clearRect(0, 0, c.width, c.height);	
	var img = new Image();
	img.onload = function () {
		context.drawImage(img, 65, 65,img.width,img.height,65);
	}
	img.src = imgSrc;   
	img.id = "canvasslotimg";
}
//                                                                                       Permet de dérouler le scénario pour trois joueurs
//																												↓↓↓
function TextDisplay()
{
	if(lengthtext != counter){
	valuetext = dtext.substr(0, counter);
	if(nbreplayers == 3){
	pthreeplayers.innerHTML = valuetext;
	}else if(nbreplayers == 4){
	pfourplayers.innerHTML = valuetext;	
	}else if(nbreplayers == 5){
	pfiveplayers.innerHTML = valuetext;	
	}else if(nbreplayers == 6){
	psixplayers.innerHTML = valuetext;	
	}else if(nbreplayers == 7){
	psevenplayers.innerHTML = valuetext;	
	}else if(nbreplayers == 8){
	peightplayers.innerHTML = valuetext;	
	}else if(nbreplayers == 9){
	pnineplayers.innerHTML = valuetext;	
	}else if(nbreplayers == 10){
	ptenplayers.innerHTML = valuetext;	
	}else if(nbreplayers == 11){
	pelevenplayers.innerHTML = valuetext;	
	}else{
	ptwelveplayers.innerHTML = valuetext;	
	}
	}else{
	counter = 0;
	clearInterval(intervaldiv);
	}
	counter++;
}	
function threePlayers()
{
	nbreplayers = 3;
	var divthreeplayers = document.createElement("div");
	var pthreeplayers = document.createElement("p");
	pthreeplayers.id =  "pthreeplayers";
	dtext = "Une bande d'amis ayant entendu parlé d'une maison abandonné <br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
	divthreeplayers.id = "threeplayers";
	divthreeplayers.className = "divplayersgroup";
	document.body.appendChild(divthreeplayers);
	divthreeplayers.appendChild(pthreeplayers);
}
//                                                                                       Permet de dérouler le scénario pour quatre joueurs
//                                                                                                              ↓↓↓
function fourPlayers()
{
	nbreplayers = 4;
	var divfourplayers = document.createElement("div");
	var pfourplayers = document.createElement("p");
	pfourplayers.id =  "pfourplayers";
	dtext = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);	
	divfourplayers.id = "fourplayers";
	divfourplayers.className = "divplayersgroup";
	document.body.appendChild(divfourplayers);
	divfourplayers.appendChild(pfourplayers);
}
//                                                                                       Permet de dérouler le scénario pour cinq joueurs
//                                                                                                              ↓↓↓
function fivePlayers()
{
	nbreplayers = 5;
	var divfiveplayers = document.createElement("div");
	var pfiveplayers = document.createElement("p");
	pfiveplayers.id =  "pfiveplayers";
	dtext = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
	divfiveplayers.id = "fiveplayers";
	divfiveplayers.className = "divplayersgroup";
	document.body.appendChild(divfiveplayers);
	divfiveplayers.appendChild(pfiveplayers);
}
//                                                                                       Permet de dérouler le scénario pour six joueurs
//                                                                                                              ↓↓↓
function sixPlayers()
{
	nbreplayers = 6;
	var divsixplayers = document.createElement("div");
	var psixplayers = document.createElement("p");
	psixplayers.id =  "psixplayers";
	dtext = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
	divsixplayers.id = "sixplayers";
	divsixplayers.className = "divplayersgroup";
	document.body.appendChild(divsixplayers);
	divsixplayers.appendChild(psixplayers);
}
//                                                                                       Permet de dérouler le scénario pour sept joueurs
//                                                                                                              ↓↓↓
function sevenPlayers()
{
	nbreplayers = 7;
	var divsevenplayers = document.createElement("div");
	var psevenplayers = document.createElement("p");
	psevenplayers.id =  "psevenplayers";
	dtext = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
	divsevenplayers.id = "sevenplayers";
	divsevenplayers.className = "divplayersgroup";
	document.body.appendChild(divsevenplayers);
	divsevenplayers.appendChild(psevenplayers);
}
//                                                                                       Permet de dérouler le scénario pour huit joueurs
//                                                                                                              ↓↓↓
function eightPlayers()
{
	nbreplayers = 8;
	var diveightplayers = document.createElement("div");
	var peightplayers = document.createElement("p");
	peightplayers.id =  "peightplayers";
	dtext = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
	diveightplayers.id = "eightplayers";
	diveightplayers.className = "divplayersgroup";
	document.body.appendChild(diveightplayers);
	diveightplayers.appendChild(peightplayers);
}
//                                                                                       Permet de dérouler le scénario pour neuf joueurs
//                                                                                                              ↓↓↓
function ninePlayers()
{
	nbreplayers = 9;
	var divnineplayers = document.createElement("div");
	var pnineplayers = document.createElement("p");
	pnineplayers.id =  "pnineplayers";
	dtext = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
	divnineplayers.id = "nineplayers";
	divnineplayers.className = "divplayersgroup";
	document.body.appendChild(divnineplayers);
	divnineplayers.appendChild(pnineplayers);
}
//                                                                                       Permet de dérouler le scénario pour dix joueurs
//                                                                                                              ↓↓↓
function tenPlayers()
{
	nbreplayers = 10;
	var divtenplayers = document.createElement("div");
	var ptenplayers = document.createElement("p");
	ptenplayers.id =  "ptenplayers";
	dtext = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
	divtenplayers.id = "tenplayers";
	divtenplayers.className = "divplayersgroup";
	document.body.appendChild(divtenplayers);
	divtenplayers.appendChild(ptenplayers);
}
//                                                                                       Permet de dérouler le scénario pour onze joueurs
//                                                                                                              ↓↓↓
function elevenPlayers()
{
	nbreplayers = 11;
	var divelevenplayers = document.createElement("div");
	var pelevenplayers = document.createElement("p");
	pelevenplayers.id =  "pelevenplayers";
	dtext = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
	divelevenplayers.id = "elevenplayers";
	divelevenplayers.className = "divplayersgroup";
	document.body.appendChild(divelevenplayers);
	divelevenplayers.appendChild(pelevenplayers);
}
//                                                                                       Permet de dérouler le scénario pour douze joueurs
//                                                                                                              ↓↓↓
function twelvePlayers()
{
	nbreplayers = 12;
	var divtwelveplayers = document.createElement("div");
	var ptwelveplayers = document.createElement("p");
	ptwelveplayers.id =  "ptwelveplayers";
	dtext = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
	divtwelveplayers.id = "twelveplayers";
	divtwelveplayers.className = "divplayersgroup";
	document.body.appendChild(divtwelveplayers);
	divthreeplayers.appendChild(ptwelveplayers);
}