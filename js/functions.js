var nbrefiledialog = 0;
var filedialog = [];
function FileDialog()
{

    var openfiledialog = document.getElementById("openfiledialog");
	$("#openfiledialog").trigger('click');
	openfiledialog.addEventListener("change", OnOpenFileDialogChange);

}
function OnOpenFileDialogChange()
{
		if(openfiledialog.getAttribute('height') == "" || openfiledialog.getAttribute('height') == 0){
		window.alert("votre fichier n'est pas une image ou a une hauteur égale à 0");
	}else{
	if((openfiledialog.getAttribute('height') < 64 && openfiledialog.getAttribute('width') < 64) || (openfiledialog.getAttribute('height') > 64 && openfiledialog.getAttribute('width'))){
		window.alert("votre image est inférieur à la taille requise (64x64)");
	}else{
		filedialog[nbrefiledialog] = openfiledialog;
		nbrefiledialog++;
	}
	}
}
//------------------------------------------------------
function ThreePlayers()
{
}
function FourPlayers()
{
}
function FivePlayers()
{
}
function SixPlayers()
{
}
function SevenPlayers()
{
}
function EightPlayers()
{
}
function NinePlayers()
{
}
function TenPlayers()
{
}
function ElevenPlayers()
{
}
function TwelvePlayers()
{
}