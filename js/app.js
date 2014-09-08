/*************************************************************************************
ShoppingList
*************************************************************************************/
var useInput;




//object designated to handle every action related to shoppingList
var listManager = {
	userInputIsValid:function(){
		if(userInput.length > 0 && userInput !==" ")
		{
			return true;
		}
		else{
			return false;
		}
	},
	addItem:function(){
		userInput = $("#item_input").val();
		liElement = "<li" + " id='" +userInput +"'>";
		inputElement = "<input type='checkbox'>";
		content = "&ensp;" + userInput + "<button class='delete'>delete</button>";
		if(listManager.userInputIsValid()){
			$("#checklist").append(liElement + inputElement + content + "</li>");
			$("#item_input").val("");
			$("#error_msg").text("");
		}
		else{
			$("#error_msg").text("please enter a valid input");
		}
	},
	checkItem:function(event){
		$checkbox = $(this);
		$checkboxParent = $checkbox.parent();
		if($checkbox.is(':checked'))
		{
			$checkboxParent.css("background-color", "#91a3ba").css("font-style", "italic")
			.css("color", "grey").css("font-size", "0.8em");
		}
		else{
			$checkboxParent.css("background-color", "white").css("font-style", "normal")
			.css("color", "black").css("font-size", "1em");
		}
	},
	removeItem: function(even){
		$button = $(this);
		$buttonParent = $button.parent();
		$($buttonParent).remove();
	},
}

/*********************************************************
					Action Delegation
**********************************************************/
//resets game once document is ready
$("#item_add_button").click(listManager.addItem);
$("#checklist").on("change", "li input", listManager.checkItem);
$("#checklist").on("click", "li .delete", listManager.removeItem);


//prevents enter key from submitting form before user input is passed to handler
$("#item_input").keypress(function(event){
	if (event.which==13)
	{
		event.preventDefault();
		listManager.addItem();
	}
});