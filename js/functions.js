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
	pplayers.innerHTML = valuetext;
	}else{
	counter = 0;
	clearInterval(intervaldiv);
	}
	counter++;
}	
function playerScenar()
{
	nbreplayers = players.length;
	var divplayers = document.createElement("div");
	var pplayers = document.createElement("p");
	pplayers.id =  "pplayers";
	dtext = "Une bande d'amis ayant entendu parlé d'une maison abandonné <br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	lengthtext =  dtext.length;
	intervaldiv = setInterval(TextDisplay, 100);
	divplayers.id = "divplayers";
	divplayers.className = "divplayersgroup";
	document.body.appendChild(divplayers);
	divplayers.appendChild(pplayers);
}