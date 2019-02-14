//this function reloads every time in the body tag
function fetchIssues(){
    var issues = JSON.parse(localStorage.getItem('issues'));
    if(issues != null){
    var issuesList = document.getElementById("issuesList");
    issuesList.innerHTML = "";
    for(var i = 0; i< issues.length;i++){
        var id = issues[i].id;
        var desc =issues[i].description;
        var severity =issues[i].severity;
        var assignedTo =issues[i].assignedTo;
        var status =issues[i].status;  
    //put each set of result in an html code

    issuesList.innerHTML += '<div class= "well"'+
                            '<h6> Issue ID: '+ id+ '</h6>'+
                            '<p><span class = "label label-info">'+ status+ '</span></p>'+
                            '<h3'+ desc+'</h3'+
                            '<p><span class = "glyphicon glyphicon-time"></span>'+ severity+ ' '+
                            '<span class = "glyphicon glyphicon-user"></span>'+ assignedTo + '</p>'+
                            '<a href = "#" class = "btn btn-warning" onclick = "setStatusClosed(\''+id+'\')">Close</a>'+
                            '<a href = "#" class = "btn btn-warning" onclick = "deleteIssue(\''+id+'\')">Delete</a>'

                           ' </div>';

    }//end of for loop
}
}
    //append an event listener to the form's submit

    document.getElementById('issueInputForm').addEventListener('submit',saveIssue);
    //this method saves each issue into the computer document
    function saveIssue(e){
        var issueId = chance.guid();
        var issueDesc = document.getElementById('issueDescInput').value;
        var issueSeverity = document.getElementById('issueSeverityInput').value;
        var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
        var issueStatus = 'open';
        //save the details as object
        var issue = {
            id: issueId,
            description: issueDesc,
            severity: issueSeverity,
            assignedTo: issueAssignedTo,
            status: issueStatus

        }
        //check if the local storage is empty or not before pushing issue in
        if(localStorage.getItem('issues')=== null){
            var issues = [];
            issues.push(issue);
            localStorage.setItem('issues',JSON.stringify(issues));

        }
        else{
            var issues = JSON.parse(localStorage.getItem('issues'));
            issues.push(issue);
            localStorage.setItem('issues',JSON.stringify(issues));
        }
        document.getElementById('issueInputForm').requestFullscreen();
        fetchIssues();  //reload fetchissues
        e.preventDefault();

    }
    function setStatusClosed(id){
        var issues = JSON.parse(localStorage.getItem('issues'));
        for(var j = 0; j < issues.length;j++){
            if(issues[j].id==id){
                issues[j].status = "Closed";
            }
        }
        localStorage.setItem('issues',JSON.stringify(issues)); 
        fetchIssues();
    }
    function deleteIssue(id){
        var issues = JSON.parse(localStorage.getItems('issues'));
        for(var j = 0; j < issues.length;j++){
            if(issues[j].id==id){
                issues.splice = (i,1);
            }
        }
        localStorage.setItem('issues',JSON.stringify(issues)); 
        fetchIssues();
    }