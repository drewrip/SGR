var gitUser;
var userRepos;
var projectObjs = [];
var updateUser = function(){
	var userName = prompt("GitHub Username:");
	var urlUser = "https://api.github.com/users/" + userName;

	var userReq = new XMLHttpRequest();

	//Sending Preflight header
	userReq.open("POST", urlUser, true);
	userReq.setRequestHeader("Access-Control-Allow-Origin", "*");

	//Creating GET request to GitHub API
	userReq.open("GET", urlUser, true);
	userReq.send();

	userReq.onload = function(){

		var gitUser = JSON.parse(userReq.response);
		console.log(gitUser);
	}
}
var updateProjects = function(){
	var projectList = prompt("Projects:");
	projectList = projectList.split(",");
	var userName = prompt("GitHub Username:");
	var urlUser = "https://api.github.com/users/" + userName;
	var urlUserRepos = "https://api.github.com/users/" + userName + "/repos";
	
	var repoReq = new XMLHttpRequest();

	//Sending Preflight header
	repoReq.open("POST", urlUserRepos, true);
	repoReq.setRequestHeader("Access-Control-Allow-Origin", "*");

	//Creating GET request to GitHub API
	repoReq.open("GET", urlUserRepos, true);
	repoReq.send();

	repoReq.onload = function(){

		var userRepos = JSON.parse(repoReq.response);
		var projectsToShow = [];
		for(let i of userRepos){
			for(let n of projectList){
				if(i.name == n){
					projectsToShow.push(i);
				}
			}
		}
		console.log(projectsToShow);

		var styleChoice = 0;
		for(let x of projectsToShow){
			if(styleChoice % 2 == 0){
				var div = document.createElement("div");
				div.style.height = "300px";
				div.style.width = "100em";
				div.style.background = "#FFFFFF";
				div.style.align = "center";
				div.innerHTML = "<h1 id='projectTitle'>"+ x.name +"</h1><h2 id='projectDescription'>" + x.description + "</h2>";
				document.getElementById("page").appendChild(div);
				styleChoice++;
			}
			else{

				var div = document.createElement("div");
				div.style.height = "300px";
				div.style.width = "100em";
				div.style.background = "#53a8ff";
				div.style.align = "center";
				div.innerHTML = "<h1 id='projectTitle'>"+ x.name +"</h1><h2 id='projectDescription'>" + x.description + "</h2>";
				document.getElementById("page").appendChild(div);
				styleChoice++;

			}
			

		}

	}
}
