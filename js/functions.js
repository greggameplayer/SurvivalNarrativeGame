var filedialog = []; // tableau contenant les images valide
var nbrebuttonsource = 0;
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
	img.src = imgSrc ;   
	img.id = "canvasslotimg";
}
//                                                                                       Permet de dérouler le scénario pour trois joueurs
//                                                                                                              ↓↓↓
function threePlayers()
{
	var divthreeplayers = document.createElement("div");
	var pthreeplayers = document.createElement("p");
	var imgthreeplayers = document.createElement("img");
	imgthreeplayers.src = "/images-fond/fonds/arrivee.jpg";
	imgthreeplayers.id = "imgthreeplayers";
	pthreeplayers.id =  "pthreeplayers";
	pthreeplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné <br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divthreeplayers.id = "threeplayers";
	document.body.appendChild(divthreeplayers);
	divthreeplayers.appendChild(pthreeplayers);
	document.body.appendChild(imgthreeplayers);
}
//                                                                                       Permet de dérouler le scénario pour quatre joueurs
//                                                                                                              ↓↓↓
function fourPlayers()
{
	var divfourplayers = document.createElement("div");
	var imgfourplayers = document.createElement ("img");
	imgfourplayers.src = "/images-fond/fonds/arrivee.jpg";
	imgfourplayers.id = "imgfourplayers";
	var pfourplayers = document.createElement("p");
	pfourplayers.id =  "pfourplayers";
	pfourplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divfourplayers.id = "fourplayers";
	document.body.appendChild(divfourplayers);
	divfourplayers.appendChild(pfourplayers);
	document.body.appendChild(imgfourplayers); 
}
//                                                                                       Permet de dérouler le scénario pour cinq joueurs
//                                                                                                              ↓↓↓
function fivePlayers()
{
	var divfiveplayers = document.createElement("div");
	var imgfiveplayers = document.createElement ("img");
	imgfiveplayers.src = "/images-fond/fonds/arrivee.jpg";
	imgfiveplayers.id = "imgfiveplayers";
	var pfiveplayers = document.createElement("p");
	pfiveplayers.id =  "pfiveplayers";
	pfiveplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divfiveplayers.id = "fiveplayers";
	document.body.appendChild(divfiveplayers);
	divfiveplayers.appendChild(pfiveplayers);
	document.body.appendChild(imgfiveplayers);
}
//                                                                                       Permet de dérouler le scénario pour six joueurs
//                                                                                                              ↓↓↓
function sixPlayers()
{
	var divsixplayers = document.createElement("div");
	var psixplayers = document.createElement("p");
	var imgsixplayers = document.createElement ("img");
	imgsixplayers.src = "/images-fond/fonds/arrivee.jpg";
	imgsixplayers.id = "imgsixplayers";
	psixplayers.id =  "psixplayers";
	psixplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divsixplayers.id = "sixplayers";
	document.body.appendChild(divsixplayers);
	divsixplayers.appendChild(psixplayers);
	document.body.appendChild(sixplayers);
}
//                                                                                       Permet de dérouler le scénario pour sept joueurs
//                                                                                                              ↓↓↓
function sevenPlayers()
{
	var divsevenplayers = document.createElement("div");
	var psevenplayers = document.createElement("p");
	var imgsevenplayers = document.createElement ("img");
	imgsevenplayers.src = "/images-fond/fonds/arrivee.jpg";
	imgsevenplayers.id = "imgsevenplayers";
	psevenplayers.id =  "psevenplayers";
	psevenplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divsevenplayers.id = "sevenplayers";
	document.body.appendChild(divsevenplayers);
	divsevenplayers.appendChild(psevenplayers);
	document.body.appendChild(sevenplayers);
}
//                                                                                       Permet de dérouler le scénario pour huit joueurs
//                                                                                                              ↓↓↓
function eightPlayers()
{
	var diveightplayers = document.createElement("div");
	var peightplayers = document.createElement("p");
	var imgeightplayers = document.createElement ("img");
	imgeightplayers.src = "/images-fond/fonds/arrivee.jpg";
	imgeightplayers.id = "imgeightplayers";
	peightplayers.id =  "peightplayers";
	peightplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	diveightplayers.id = "eightplayers";
	document.body.appendChild(diveightplayers);
	diveightplayers.appendChild(peightplayers);
	document.body.appendChild(eightplayers);
}
//                                                                                       Permet de dérouler le scénario pour neuf joueurs
//                                                                                                              ↓↓↓
function ninePlayers()
{
	var divnineplayers = document.createElement("div");
	var pnineplayers = document.createElement("p");
	var imgnineplayers = document.createElement("img");
	imgnineplayers.src ="/images-fond/fonds/arrivee.jpg";
	imgnineplayers.id = "imgnineplayers";
	pnineplayers.id =  "pnineplayers";
	pnineplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divnineplayers.id = "nineplayers";
	document.body.appendChild(divnineplayers);
	divnineplayers.appendChild(pnineplayers);
	document.body.appendChild(nineplayers);
}
//                                                                                       Permet de dérouler le scénario pour dix joueurs
//                                                                                                              ↓↓↓
function tenPlayers()
{
	var divtenplayers = document.createElement("div");
	var ptenplayers = document.createElement("p");
	var imgtenplayers = document.createElement ("img");
	imgtenplayers.src ="/images-fond/fonds/arrivee.jpg";
	imgtenplayers.id = "imgtenplayers";
	ptenplayers.id =  "ptenplayers";
	ptenplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divtenplayers.id = "tenplayers";
	document.body.appendChild(divtenplayers);
	divtenplayers.appendChild(ptenplayers);
	document.body.appendChild(tenplayers);
}
//                                                                                       Permet de dérouler le scénario pour onze joueurs
//                                                                                                              ↓↓↓
function elevenPlayers()
{
	var divelevenplayers = document.createElement("div");
	var pelevenplayers = document.createElement("p");
	var imgelevenplayers = document.createElement("img");
	imgelevenplayers.src = "/images-fond/fonds/arrivee.jpg";
	imgelevenplayers.id = "imgelevenplayers";
	pelevenplayers.id =  "pelevenplayers";
		pelevenplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divelevenplayers.id = "elevenplayers";
	document.body.appendChild(divelevenplayers);
	divelevenplayers.appendChild(pelevenplayers);
	document.body.appendChild(elevenplayers);
}
//                                                                                       Permet de dérouler le scénario pour douze joueurs
//                                                                                                              ↓↓↓
function twelvePlayers()
{
	var divtwelveplayers = document.createElement("div");
	var ptwelveplayers = document.createElement("p");
	var imgtewelveplayers = document.createElement ("img");
	imgtwelveplayers.src = "/images-fond/fonds/arrivee.jpg";
	imgtwelveplayers.id = "twelvplayers";
	ptwelveplayers.id =  "ptwelveplayers";
	ptwelveplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divtwelveplayers.id = "twelveplayers";
	document.body.appendChild(divtwelveplayers);
	divtwelveplayers.appendChild(ptwelveplayers);
	document.body.appendChild(twelvplayers); 
}