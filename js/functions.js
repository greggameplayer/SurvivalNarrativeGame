var nbrefiledialog = 0; // permet de compter les image valide pour les placer dans un tableau
var filedialog = []; // tableau contenant les images valide
// 																	Permet d'ouvrir la fenêtre de dialogue dans le but de selectionner une image de 64x64px 																		 //
// 															et créer un événement onChange pour détécter la fermeture et executer la fonction OnOpenFileDialogChange																 //
//																												↓↓↓																												     //
function FileDialog()  
{

    var openfiledialog = document.getElementById("openfiledialog");
	$("#openfiledialog").trigger('click');
	openfiledialog.addEventListener("change", OnOpenFileDialogChange);

}
//																			   Permet d'afficher les images valide dans les canvas prévu a cet effet																				 //
//																												↓↓↓ 																												 //
function displayImg(imgSrc)
{
	
}

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