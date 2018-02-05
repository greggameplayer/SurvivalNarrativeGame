var listbox;// initialisation de la variable listbox servant à stocker l'élément #participantchoice
//                                          Fonction effectué au chargement permettant de créer toutes les options de choix de la listbox et de rediriger vers un événement détectant
//                                                                       					un changement de selection dans la listbox 
//                                                                                                              ↓↓↓
function onLoad(){
	
	var nbreloop = 2;
	var nbreloop2 = 3;
	listbox = document.getElementById('participantchoice');
	var plistbox = document.createElement("p");
	plistbox.id = "participantchoiceparagraph";
	plistbox.innerHTML = "Choisir le nombre de participants :";
	while(nbreloop <= 11){
		var addoption = document.createElement("option");
		addoption.id = "optionparticipant" + (nbreloop + 1);
		addoption.text = nbreloop + 1;
		addoption.value = nbreloop + 1;
		listbox.add(addoption);
		nbreloop++;
	}
	document.body.appendChild(plistbox);
	while(nbreloop2 <= 12){
		var optionparticipant = document.getElementById("optionparticipant" + nbreloop);
		nbreloop2++;		
	}
	onChangeListbox();
	listbox.addEventListener("change", onChangeListbox);
}
window.addEventListener("load", onLoad);

//                                              Fonction permettant de restreindre le choix d'une extension du fichier à .jpg ou .png ou .gif mais aussi de restreindre la taille
//                                                    à une image de 64 pixels x 64 pixels et de récupérer le fichier dans un tableau si les conditions requise sont valide
//                                                                                                              ↓↓↓
function OnOpenFileDialogChange()
{
	var canvas  = document.getElementById("canvas" + nbrebuttonsource);
var context = canvas.getContext("2d");
context.clearRect(0, 0, context.width, context.height);
	var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.jpg|.png|.gif)$");
    if (regex.test(openfiledialog.value.toLowerCase())) {
		if (typeof (openfiledialog.files) != "undefined") {
		var reader = new FileReader();
		reader.readAsDataURL(openfiledialog.files[0]);
			reader.onload = function (e) {
				var image = new Image();
				image.src = e.target.result;
					image.onload = function(){
						var height = this.height;
						var width = this.width;
						if(height != 64 || width != 64 || (height != 64 && width != 64)){
							if((height > 64 && width > 64) || (height < 64 && width < 64)){
								window.alert("Votre image n'a pas une taille égale à 64x64px");
								return false;
							}else{
								if(height > 64 || height < 64){
									window.alert("Votre image n'a pas une hauteur égale à 64px");
									return false;
								}else{
									if(width > 64 || width < 64){
										window.alert("Votre image n'a pas une largeur égale à 64px");
										return false;
									}
								}	
							}
						}else{
							window.alert("l'image est valide et a été upload");						
							filedialog[nbrebuttonsource - 1] = openfiledialog.files[0];
							nbrebuttonsource = 0;
							context.drawImage(image, 0, 0);
							return true;
						}
					};
				}
			} else {
				window.alert("Ce navigateur ne supporte pas le HTML5 !");
				return false;
			}
		}else{
			window.alert("Selectionner un fichier avec une extension .jpg ou .png ou .gif s'il vous plaît");
			return false;
		}

		
	
}

function OnSubmitbuttonClick(){
	var nbreloopsubmitbutton = 1;
	while(nbreloopsubmitbutton <= 12){
	if(document.body.contains(document.getElementById("perso" + nbreloopsubmitbutton)) == true){
	if(document.getElementById("perso" + nbreloopsubmitbutton).value == ""){
	window.alert("vous n'avez pas rentré de pseudo dans le champ du perso "+ nbreloopsubmitbutton);
	return false;
	}else{		
	nbreloopsubmitbutton++;
	if(nbreloopsubmitbutton > 12){
		document.body.removeChild(document.getElementById("participantselection"));
	}
	}
	
	}else{
		
	document.body.removeChild(document.getElementById("participantselection"));
	return true;
	}
	}

}