var filedialog = []; // tableau contenant les images valide
var nbrebuttonsource = 0;
var counter = 0;
var countersuppr = 1;
var lengthtext = 0;
var valuetext;
var dtext;
var intervaldiv;
var intervalsuppr;
var setTimeoutSuppr;
var nbreplayers;
var heightboxvar;
var substrtext3;
var substrtext2;
var substrtext1;
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
	substrtext3 = dtext.substring(counter - 3, counter);
	substrtext2 = dtext.substring(counter - 2, counter);
	substrtext1 = dtext.substring(counter - 1, counter);
	if(lengthtext !== counter){
	if(substrtext3 !== "<br" && substrtext2 !== "<b" && substrtext1 !== "<"){
	valuetext = dtext.substr(0, counter);
	pplayers.innerHTML = valuetext;
	
	heightboxvar = $("#divplayers").height();
	document.getElementById("divplayers").style.top = "calc(50% - " + (heightboxvar / 2)+ "px)";
	}
	}else{
	valuetext = dtext.substr(0, counter);
	pplayers.innerHTML = valuetext;
	counter = 0;
	clearInterval(intervaldiv);
	setTimeoutSuppr = setTimeout(function(){
	 countersuppr = lengthtext;
	 intervalsuppr = setInterval(TextSuppr, 50);	
	}, 3000);
	}
	counter++;
}
function TextSuppr(){
	substrtext3 = dtext.substring(countersuppr - 3, countersuppr);
	substrtext2 = dtext.substring(countersuppr - 2, countersuppr);
	substrtext1 = dtext.substring(countersuppr - 1, countersuppr);
	if(countersuppr !== 0){
	if(substrtext3 !== "<br" && substrtext2 !== "<b" && substrtext1 !== "<"){
	valuetext = dtext.substr(0, countersuppr);
	pplayers.innerHTML = valuetext;
	
	heightboxvar = $("#divplayers").height();
	document.getElementById("divplayers").style.top = "calc(50% - " + (heightboxvar / 2)+ "px)";
	}
	}else{
	valuetext = dtext.substr(0, countersuppr);
	pplayers.innerHTML = valuetext;
	clearInterval(intervalsuppr);
	clearTimeout(setTimeoutSuppr);
	}
	countersuppr--;	
}	
function playerScenar()
{
	nbreplayers = players.length;
	var divplayers = document.createElement("div");
	var pplayers = document.createElement("p");
  var backgroundplayers = document.createElement("img");
	backgroundplayers.src = "fonds/arrivee.jpg";
	backgroundplayers.id = "backgroundplayers";
	pplayers.id =  "pplayers";
	var randomplayer = Math.floor(Math.random()* nbreplayers);
	dtext = "Un de vos amis a récemment entendu parler d'une maison abandonnée.<br>il vous a convaincu, ainsi que plusieurs autres personnes d'aller l'explorer.<br>Parti en éclaireur, votre ami " + players[randomplayer] +" vous a donné rendez-vous devant le lieu en question...";
    	var page2 = " Deux heures avant le rendez-vous " + players[randomplayer] +" vous envoie par SMS l'adresse de la maison hantée.<br>Vous attrapez à la volée votre équipement et vous vous engouffrez dans votre voitures. "	// proposer les deux packs différents.
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
	divplayers.id = "divplayers";
	divplayers.className = "divplayersgroup";
	document.body.appendChild(divplayers);
	divplayers.appendChild(pplayers);
  document.body.appendChild(backgroundplayers);
}
function entreetext1()
{
	var inputGPS = document.createElement("input");
	inputGPS.id = "inputGPS";
	document.body.appendChild(inputGPS);
	if(document.getElementById("inputGPS").value == ""){
		
	}
	
	
	
}
