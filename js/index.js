
function onChangeListbox(){
	var participantselectiondiv = document.getElementById('participantselection');
	var selectedValue = document.getElementById('participantchoice');
	var choice = selectedValue.selectedIndex;
	var valeur_cherchee = parseInt(selectedValue.options[choice].value);
	var nbreloop = 1;
	while(nbreloop <= valeur_cherchee){
		var testfield = document.body.contains(document.getElementById("perso" + nbreloop));
		var ptestfield = document.body.contains(document.getElementById("perso" + nbreloop + "paragraph"));
		if(testfield == true && ptestfield == true){
			participantselectiondiv.removeChild(document.getElementById("perso" + nbreloop));
			participantselectiondiv.removeChild(document.getElementById("perso" + nbreloop + "paragraph"));
		}
		var ptextfield = document.createElement("p");
		var textfield = document.createElement("INPUT");
		ptextfield.id = "perso" + nbreloop + "paragraph";
		textfield.id = "perso" + nbreloop;
		ptextfield.innerHTML = "Choisir le nom du personnage n°" + nbreloop + " :";
		textfield.setAttribute('type','text');
		participantselectiondiv.appendChild(ptextfield);
		participantselectiondiv.appendChild(textfield);
		nbreloop++;
		if(nbreloop > valeur_cherchee){
			var nbreloop2 = 0;
			while((nbreloop + nbreloop2) <= 50){
		var testfieldnext = document.body.contains(document.getElementById("perso" + (nbreloop + nbreloop2)));
		var ptestfieldnext = document.body.contains(document.getElementById("perso" + (nbreloop + nbreloop2) + "paragraph"));	
		if(testfieldnext == true && ptestfieldnext == true){
			participantselectiondiv.removeChild(document.getElementById("perso" + (nbreloop + nbreloop2)));
			participantselectiondiv.removeChild(document.getElementById("perso" + (nbreloop + nbreloop2) + "paragraph"));
		}		
		nbreloop2++;
			}
		}
	}
	
	
}