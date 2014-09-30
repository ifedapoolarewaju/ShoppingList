/*************************************************************************************
ShoppingList
*************************************************************************************/
var useInput;




//object designated to handle every action related to shoppingList
var listManager = {
	
	onReady:function(){
		$("#item_add_button").click(listManager.addItem);
		$("#checklist").on("change", "li input", listManager.checkItem);
		$("#checklist").on("click", "li .delete", listManager.removeItem);

	},

	//validates user input
	userInputIsValid:function(){
		if(userInput.length > 0 && userInput.trim() !=="" && userInput.length <= 40)
		{
			return true;
		}
		else{
			return false;
		}
	},
	addItem:function(){
		userInput = $("#item_input").val();
		liElement = "<li>";
		inputElement = "<input type='checkbox'>";
		content = "&ensp;" + userInput + "<button class='delete'>delete</button>";
		if(listManager.userInputIsValid()){
			$("#checklist").append(liElement + inputElement + content + "</li>");
			$("#item_input").val("");
			$("#error_msg").text("");
		}
		else{
			$("#error_msg").text("please enter a valid input or reduce text length");
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
			$checkboxParent.css("background-color", "inherit").css("font-style", "inherit")
			.css("color", "inherit").css("font-size", "inherit");
		}
	},
	removeItem: function(even){
		$button = $(this);
		$buttonParent = $button.parent().slideUp(300, function(){
			this.remove();
		});
	},
}

/*********************************************************
					Action Delegation
**********************************************************/
//resets game once document is ready
$(document).ready(listManager.onReady)

//prevents enter key from submitting form before user input is passed to handler
$("#item_input").keypress(function(event){
	if (event.which==13)
	{
		event.preventDefault();
		listManager.addItem();
	}
});