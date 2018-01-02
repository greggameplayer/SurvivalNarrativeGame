function onChangeListbox(){
	var participantselectiondiv = document.getElementById('participantselection');
	var selectedValue = document.getElementById('participantchoice');
	var choice = selectedValue.selectedIndex;
	var valeur_cherchee = parseInt(selectedValue.options[choice].value);
	var nbreloop = 1;
	while(nbreloop <= valeur_cherchee){
		if(document.body.contains(document.getElementById("textdivparticipant" + nbreloop)) == false){
		var textdiv = document.createElement("div");
		textdiv.id = "textdivparticipant" + nbreloop;
		textdiv.className = "textdivgroup";
		participantselectiondiv.appendChild(textdiv);
		}
		var textdivid = document.getElementById("textdivparticipant" + nbreloop);
		var textdividtest = document.body.contains(document.getElementById("textdivparticipant" + nbreloop));
		var testfield = document.body.contains(document.getElementById("perso" + nbreloop));
		var ptestfield = document.body.contains(document.getElementById("perso" + nbreloop + "paragraph"));
		if(testfield == true && ptestfield == true && textdividtest == true){
			textdivid.removeChild(document.getElementById("perso" + nbreloop));
			textdivid.removeChild(document.getElementById("perso" + nbreloop + "paragraph"));
			participantselectiondiv.removeChild(document.getElementById("textdivparticipant" + nbreloop));
		}
		if(document.body.contains(document.getElementById("textdivparticipant" + nbreloop)) == false){
		var textdiv2 = document.createElement("div");
		textdiv2.id = "textdivparticipant" + nbreloop;
		textdiv2.className = "textdivgroup";
		participantselectiondiv.appendChild(textdiv2);		
		textdivid = document.getElementById("textdivparticipant" + nbreloop);
		}
		var ptextfield = document.createElement("p");
		var textfield = document.createElement("INPUT");
		ptextfield.id = "perso" + nbreloop + "paragraph";
		ptextfield.className = "persoparagraphgroup";
		textfield.id = "perso" + nbreloop;
		textfield.className = "persogroup";
		ptextfield.innerHTML = "Choisir le nom du personnage n°" + nbreloop + " :";
		textfield.setAttribute('type','text');
		textdivid.appendChild(ptextfield);
		textdivid.appendChild(textfield);
		nbreloop++;
		if(nbreloop > valeur_cherchee){
			var nbreloop2 = 0;
			while((nbreloop + nbreloop2) <= 50){
		if(document.body.contains(document.getElementById("textdivparticipant" + (nbreloop + nbreloop2))) == true){
		var textdividtest2 = document.getElementById("textdivparticipant" + (nbreloop + nbreloop2));
		var testfieldnext = document.body.contains(document.getElementById("perso" + (nbreloop + nbreloop2)));
		var ptestfieldnext = document.body.contains(document.getElementById("perso" + (nbreloop + nbreloop2) + "paragraph"));	
		if(testfieldnext == true && ptestfieldnext == true){
			textdividtest2.removeChild(document.getElementById("perso" + (nbreloop + nbreloop2)));
			textdividtest2.removeChild(document.getElementById("perso" + (nbreloop + nbreloop2) + "paragraph"));
			participantselectiondiv.removeChild(document.getElementById("textdivparticipant" + (nbreloop + nbreloop2)));
		}		
		}
		nbreloop2++;
			}
		}
	}
	
	
}