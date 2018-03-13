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
var page = 2;
var randomplayer;
var realtimetopbox;
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
	if(page != 3 && page != 4){
	setTimeoutSuppr = setTimeout(function(){
	 countersuppr = lengthtext;
	 intervalsuppr = setInterval(TextSuppr, 50);	
	}, 3000);
	}else if(page == 3){
	page++;
	realtimetopbox = $("#divplayers").offset().top;
	packChoice();
	}else{
	page++;
	GPS();
	}
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
	if(page == 2){
		page++;
		page2();
	}
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
	randomplayer = Math.floor(Math.random()* nbreplayers);
	dtext = "Un de vos amis a récemment entendu parler d'une maison abandonnée.<br>il vous a convaincu, ainsi que plusieurs autres personnes d'aller l'explorer.<br>Parti en éclaireur, votre ami " + players[randomplayer] +" vous a donné rendez-vous devant le lieu en question...";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
	divplayers.id = "divplayers";
	divplayers.className = "divplayersgroup";
	document.body.appendChild(divplayers);
	divplayers.appendChild(pplayers);
  document.body.appendChild(backgroundplayers);
}
function page2()
{
	dtext = " Deux heures avant le rendez-vous " + players[randomplayer] +" vous envoie par SMS l'adresse de la maison hantée.<br>Voici donc l'adresse qu'il vous a envoyé : Paris 13 rue de potier.<br>Vous attrapez à la volée l'équipement de votre choix";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
}
function packChoice()
{
  
  var submitpackbutton = document.createElement("button");
  submitpackbutton.id = "submitpackbutton";
  document.body.appendChild(submitpackbutton);
  submitpackbutton.innerHTML = "Valider";
  
  var imgpack1 = document.createElement("img");
  imgpack1.id = "imgpack1";
  imgpack1.src = "items/pack1.png";
  document.body.appendChild(imgpack1);
  
  var imgpack2 = document.createElement("img");
  imgpack2.id = "imgpack2";
  imgpack2.src = "items/pack2.png";
  document.body.appendChild(imgpack2);
  
  document.getElementById("imgpack1").style.top = "calc(" + realtimetopbox + "px" + " + 30%)"; 
  document.getElementById("imgpack2").style.top = "calc(" + realtimetopbox + "px" + " + 30%)";
  document.getElementById("submitpackbutton").style.top = "calc(" + realtimetopbox + "px" + " + 53%)";
  
  imgpack1.addEventListener("click", onClickImgpack1);
  imgpack2.addEventListener("click", onClickImgpack2);
  submitpackbutton.addEventListener("click", onClickSubmitpackbutton);
}

function page4()
{
	dtext = " Vous entrez donc dans la voiture avec le pack d'équipement n°" + packchose + " puis vous devez entrer l'adresse communiqué précedemment par " + players[randomplayer] + ", dans le GPS";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);	
}
function GPS()
{
	var inputGPS = document.createElement("input");
	inputGPS.id = "inputGPS";
	document.body.appendChild(inputGPS);
	var GPSButton = document.createElement("button");
	GPSButton.id = "GPSButton";
	document.body.appendChild(GPSButton);
	GPSButton.addEventListener("click", onClickGPSButton);
}
