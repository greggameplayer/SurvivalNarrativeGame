var listbox;
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

function OnOpenFileDialogChange()
{
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
							filedialog[nbrefiledialog] = openfiledialog;
							displayImg(image.src);
							nbrefiledialog++;
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


