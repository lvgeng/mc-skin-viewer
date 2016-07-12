function button_skin_update_init(character){
	button_skin_update = document.getElementById("button_skin_update");
	button_skin_update.addEventListener("click", function(){
		character.update_skin(document.getElementById("skin_path_textbox").value);
		var url = document.getElementById("skin_path_textbox").value;
		document.getElementById("skin_preview").src = url;
		});
	console.log("button_skin_update fire");
}