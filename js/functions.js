var nbrefiledialog = 0; // permet de compter les image valide pour les placer dans un tableau
var filedialog = []; // tableau contenant les images valide
//                                                                  Permet d'ouvrir la fenêtre de dialogue dans le but de selectionner une image de 64x64px
//                                                          et créer un événement onChange pour détécter la fermeture et executer la fonction OnOpenFileDialogChange
//                                                                                                              ↓↓↓
function FileDialog()  
{

    var openfiledialog = document.getElementById("openfiledialog");
	$("#openfiledialog").trigger('click');
	openfiledialog.addEventListener("change", OnOpenFileDialogChange);

}
//                                                                             Permet d'afficher les images valide dans les canvas prévu a cet effet
//                                                                                                              ↓↓↓
function displayImg(imgSrc)
{
	
}
//                                                                                       Permet de dérouler le scénario pour trois joueurs
//                                                                                                              ↓↓↓
function ThreePlayers()
{
	var divthreeplayers = document.createElement("div");
	var pthreeplayers = document.createElement("p");
	pthreeplayers.id =  "pthreeplayers";
	pthreeplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné <br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divthreeplayers.id = "threeplayers";
	document.body.appendChild(divthreeplayers);
	divthreeplayers.appendChild(pthreeplayers);
}
//                                                                                       Permet de dérouler le scénario pour quatre joueurs
//                                                                                                              ↓↓↓
function FourPlayers()
{
	var divfourplayers = document.createElement("div");
	var pfourplayers = document.createElement("p");
	pfourplayers.id =  "pfourplayers";
	pfourplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divfourplayers.id = "fourplayers";
	document.body.appendChild(divfourplayers);
	divfourplayers.appendChild(pfourplayers);
}
//                                                                                       Permet de dérouler le scénario pour cinq joueurs
//                                                                                                              ↓↓↓
function FivePlayers()
{
	var divfiveplayers = document.createElement("div");
	var pfiveplayers = document.createElement("p");
	pfiveplayers.id =  "pfiveplayers";
	pfiveplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divfiveplayers.id = "fiveplayers";
	document.body.appendChild(divfiveplayers);
	divfiveplayers.appendChild(pfiveplayers);
}
//                                                                                       Permet de dérouler le scénario pour six joueurs
//                                                                                                              ↓↓↓
function SixPlayers()
{
	var divsixplayers = document.createElement("div");
	var psixplayers = document.createElement("p");
	psixplayers.id =  "psixplayers";
	psixplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divsixplayers.id = "sixplayers";
	document.body.appendChild(divsixplayers);
	divsixplayers.appendChild(psixplayers);
}
//                                                                                       Permet de dérouler le scénario pour sept joueurs
//                                                                                                              ↓↓↓
function SevenPlayers()
{
    var divsevenplayers = document.createElement("div");
	var psevenplayers = document.createElement("p");
	psevenplayers.id =  "psevenplayers";
	psevenplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divsevenplayers.id = "sevenplayers";
	document.body.appendChild(divsevenplayers);
	divsevenplayers.appendChild(psevenplayers);
	
}
//                                                                                       Permet de dérouler le scénario pour huit joueurs
//                                                                                                              ↓↓↓
function EightPlayers()
{
	var diveightplayers = document.createElement("div");
	var peightplayers = document.createElement("p");
	peightplayers.id =  "peightplayers";
	peightplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	diveightplayers.id = "threeplayers";
	document.body.appendChild(diveightplayers);
	diveightplayers.appendChild(peightplayers);
}
//                                                                                       Permet de dérouler le scénario pour neuf joueurs
//                                                                                                              ↓↓↓
function NinePlayers()
{
	var divnineplayers = document.createElement("div");
	var pnineplayers = document.createElement("p");
	pnineplayers.id =  "pnineplayers";
	pnineplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divnineplayers.id = "nineplayers";
	document.body.appendChild(divnineplayers);
	divnineplayers.appendChild(pnineplayers);
}
//                                                                                       Permet de dérouler le scénario pour dix joueurs
//                                                                                                              ↓↓↓
function TenPlayers()
{
	var divtenplayers = document.createElement("div");
	var ptenplayers = document.createElement("p");
	ptenplayers.id =  "ptenplayers";
	ptenplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divtenplayers.id = "tenplayers";
	document.body.appendChild(divtenplayers);
	divtenplayers.appendChild(ptenplayers);
}
//                                                                                       Permet de dérouler le scénario pour onze joueurs
//                                                                                                              ↓↓↓
function ElevenPlayers()
{
var divelevenplayers = document.createElement("div");
	var pelevenplayers = document.createElement("p");
	pelevenplayers.id =  "pelevenplayers";
	pelevenplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divelevenplayers.id = "elevenplayers";
	document.body.appendChild(divelevenplayers);
	divelevenplayers.appendChild(pelevenplayers);
}
//                                                                                       Permet de dérouler le scénario pour douze joueurs
//                                                                                                              ↓↓↓
function TwelvePlayers()
{
	var divtwelveplayers = document.createElement("div");
	var ptwelveplayers = document.createElement("p");
	ptwelveplayers.id =  "ptwelveplayers";
	ptwelveplayers.innerHTML = "Une bande d'amis ayant entendu parlé d'une maison abandonné<br>décide de s'y aventurer afin de vérifier si elle est aussi <br>effrayante que l'on ne le dit.....<br>Mais ils ne s'attendaient pas à vivre cela... ";
	divtwelveplayers.id = "twelveplayers";
	document.body.appendChild(divtwelveplayers);
	divthreeplayers.appendChild(ptwelveplayers);
}