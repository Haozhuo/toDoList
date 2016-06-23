var listItem = document.createElement("li");

function addTaskName(taskName){
	//add a checkbox
	var inputCheckbox = document.createElement("input");
	//set checkbox's type
	inputCheckbox.setAttribute("type","checkbox");
	//add a label
	var label = document.createElement("label");
	//set label's inner text
	label.innerText = taskName;

	listItem.appendChild(inputCheckbox);
	listItem.appendChild(label);
}

function addButtons(){
	var addEditButton = document.createElement("button");
	addEditButton.className = "edit";
	addEditButton.innerText = "edit";

	var addDeleteButton = document.createElement("button");
	addDeleteButton.className = "delete";
	addDeleteButton.innerText = "delete";

	listItem.appendChild(addEditButton);
	listItem.appendChild(addDeleteButton);
}

function addTaskNote(notes){
	var taskNote = document.createElement("p");
	taskNote.innerText = notes;

	listItem.appendChild(taskNote);
}

function taskComplete(list){
	list.setAttribute("checked", true);
	var completedTask = list.parentElement;
	list.parentElement.parentElement.removeChild(list.parentNode);
	document.getElementById("completed").querySelector("ul").appendChild(completedTask);

}

function isImportance(){	
}



function createToItem(){

}


function appendTo(){}


var addTaskButton = document.getElementById("add").querySelector("button");

addTaskButton.addEventListener("click", function(){
	var isValid = true;
	//if no task name is given
	if(document.getElementById("new_task").value == ""){
		alert("please give the task a name");
		isValid = false;
	}
		
	//if no radio button is pressed
	if($("input[name=importance]:checked").length != 1){
		alert("please denote the importance of the task");		
		isValid = false;
	}

	if(isValid){
		//add the taskName
		addTaskName(document.getElementById("new_task").value);
		//add two buttons
		addButtons();
		//note elements
		addTaskNote(document.getElementById("note").value);

		//if it is important task, add to important session
		if($("#important_task").prop("checked"))
			document.getElementById("prioritize").querySelector("ul").appendChild(listItem);
		//if not, add to normal session
		if($("#normal_task").prop("checked"))
			document.getElementById("normal").querySelector("ul").appendChild(listItem);

		document.getElementById("new_task").value = "";
		$("#important_task").prop("checked", false);
		$("#normal_task").prop("checked",false);
		document.getElementById("note").value = "";
		listItem = document.createElement("li");
	}
});


//When checkbox in to do list is clicked
document.getElementById("toDo").querySelector("input[type=checkbox]").addEventListener("click",function(){
	taskComplete(this);
});







