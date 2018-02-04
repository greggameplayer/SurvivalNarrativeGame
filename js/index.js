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
			textdivid.removeChild(document.getElementById("canvas" + nbreloop));
			textdivid.removeChild(document.getElementById("buttonfiledialog" + nbreloop));
			textdivid.removeChild(document.getElementById("separator" + nbreloop));
			textdivid.removeChild(document.getElementById("paragraphfiledialog" + nbreloop));
			textdivid.removeChild(document.getElementById("perso" + nbreloop));
			textdivid.removeChild(document.getElementById("perso" + nbreloop + "paragraph"));
			if(document.body.contains(document.getElementById("space" + nbreloop))){
			participantselectiondiv.removeChild(document.getElementById("space" + nbreloop));
			}
			participantselectiondiv.removeChild(document.getElementById("textdivparticipant" + nbreloop));
		}
		if(document.body.contains(document.getElementById("submitbutton")) == true){
			participantselectiondiv.removeChild(document.getElementById("submitbutton"));
		}
		if(document.body.contains(document.getElementById("textdivparticipant" + nbreloop)) == false){
		var textdiv2 = document.createElement("div");
		textdiv2.id = "textdivparticipant" + nbreloop;
		textdiv2.className = "textdivgroup";
		participantselectiondiv.appendChild(textdiv2);		
		textdivid = document.getElementById("textdivparticipant" + nbreloop);
		}
		var ptextfield = document.createElement("p");
		var separator = document.createElement("hr");
		var pfiledialog = document.createElement("p");
		var buttonfiledialog = document.createElement("button");
		var canvas = document.createElement("canvas");
		var space = document.createElement("div"); 
		separator.id = "separator" + nbreloop;
		separator.className = "separatorgroup";
		pfiledialog.id = "paragraphfiledialog" + nbreloop;
		pfiledialog.className = "paragraphfiledialoggroup";
		pfiledialog.innerHTML = "Choisissez une image de profil (64px X 64px) :";
		buttonfiledialog.id = "buttonfiledialog" + nbreloop;
		buttonfiledialog.className = "buttonfiledialoggroup";
		buttonfiledialog.innerHTML = "parcourir";
		canvas.id = "canvas" + nbreloop;
		canvas.className = "canvasgroup";
		canvas.height = "64";
		canvas.width = "64";
		space.id = "space" + nbreloop;
		space.className = "spacegroup";
		var textfield = document.createElement("INPUT");
		ptextfield.id = "perso" + nbreloop + "paragraph";
		ptextfield.className = "persoparagraphgroup";
		textfield.id = "perso" + nbreloop;
		textfield.className = "persogroup";
		ptextfield.innerHTML = "Choisir le nom du personnage n°" + nbreloop + " :";
		textfield.setAttribute('type','text');
		textdivid.appendChild(ptextfield);
		textdivid.appendChild(textfield);
		textdivid.appendChild(separator);
		textdivid.appendChild(pfiledialog);
		textdivid.appendChild(buttonfiledialog);
		textdivid.appendChild(canvas);
		if(nbreloop != valeur_cherchee){
			participantselectiondiv.appendChild(space);
		}
		buttonfiledialog.addEventListener("click", function(){FileDialog(this.id);});
		nbreloop++;
		if(nbreloop > valeur_cherchee){
			var nbreloop2 = 0;
			while((nbreloop + nbreloop2) <= 12){
		if(document.body.contains(document.getElementById("textdivparticipant" + (nbreloop + nbreloop2))) == true){
		var textdividtest2 = document.getElementById("textdivparticipant" + (nbreloop + nbreloop2));
		var testfieldnext = document.body.contains(document.getElementById("perso" + (nbreloop + nbreloop2)));
		var testseparator = document.body.contains(document.getElementById("separator" + (nbreloop + nbreloop2)));
		var testbuttonfiledialog = document.body.contains(document.getElementById("buttonfiledialog" + (nbreloop + nbreloop2)));
		var testpfiledialog = document.body.contains(document.getElementById("paragraphfiledialog" + (nbreloop + nbreloop2)));
		var ptestfieldnext = document.body.contains(document.getElementById("perso" + (nbreloop + nbreloop2) + "paragraph"));	
		if(testfieldnext == true && ptestfieldnext == true && testseparator == true && testpfiledialog == true && testbuttonfiledialog == true){
			textdividtest2.removeChild(document.getElementById("canvas" + (nbreloop + nbreloop2)));
			textdividtest2.removeChild(document.getElementById("buttonfiledialog" + (nbreloop + nbreloop2)));
			textdividtest2.removeChild(document.getElementById("separator" + (nbreloop + nbreloop2)));
			textdividtest2.removeChild(document.getElementById("paragraphfiledialog" + (nbreloop + nbreloop2)));
			textdividtest2.removeChild(document.getElementById("perso" + (nbreloop + nbreloop2)));
			textdividtest2.removeChild(document.getElementById("perso" + (nbreloop + nbreloop2) + "paragraph"));
			if(document.body.contains(document.getElementById("space" + (nbreloop + nbreloop2)))){
			participantselectiondiv.removeChild(document.getElementById("space" + (nbreloop + nbreloop2 )));
			}
			participantselectiondiv.removeChild(document.getElementById("textdivparticipant" + (nbreloop + nbreloop2)));
		}

		}
		nbreloop2++;
			}
		var submitbutton = document.createElement("button");
		submitbutton.id = "submitbutton";
		participantselectiondiv.appendChild(submitbutton);
		submitbutton.addEventListener("click", OnSubmitbuttonClick);
		}
	}
	
	
}