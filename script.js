var gitUser;
var userRepos;
var updateProjects = function(){
	var projectList = prompt("Projects:");
	projectList = projectList.split(",");
	var userName = prompt("GitHub Username:");
	var urlUser = "https://api.github.com/users/" + userName;
	var urlUserRepos = "https://api.github.com/users/" + userName + "/repos";

	
	var gitUser = JSON.parse(userReq.response);
	var userRepos = JSON.parse(repoReq.response);

	var apiCall = function( urlUserRepos, urlUser, callback){

		var repoReq = new XMLHttpRequest();

		//Sending Preflight header
		repoReq.open("POST", urlUserRepos, true);
		repoReq.setRequestHeader("Access-Control-Allow-Origin", "*");

		//Creating GET request to GitHub API
		repoReq.open("GET", urlUserRepos, true);
		repoReq.send();

		var userReq = new XMLHttpRequest();

		//Sending Preflight header
		userReq.open("POST", urlUser, true);
		userReq.setRequestHeader("Access-Control-Allow-Origin", "*");

		//Creating GET request to GitHub API
		userReq.open("GET", urlUser, true);
		userReq.send();

	}
	apiCall()
	


	console.log(gitUser);
	console.log(userRepos);
	for(let x of projectList){
			
	}


}
