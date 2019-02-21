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
        var replies =issues[i].replies;  
    //put each set of result in an html code


                    // Using the status of the issue to know the format of display to use!
                            if (status=='Closed') {

                                // Checking if there are replies to the issue, so it can also be displayed

                                if (replies==0) {
    issuesList.innerHTML += '<div class= "row">'+
                            '<div class= "col-md-6">'+
                            '<div class= "well">'+
                            '<h6> Issue ID: '+ id+ '</h6>'+
                            '<p><span class = "label label-info">'+ status+ '</span></p>'+
                            '<h3'+ desc+'</h3'+
                            '<p><span class = "glyphicon glyphicon-time"></span>'+ severity+ ' '+
                            '<span class = "glyphicon glyphicon-user"></span>'+ assignedTo + '</p>'+
                            '<a href = "#" class = "btn btn-warning" style = "display:none;" id = "close'+id+'" onclick = "setStatusClosed(\''+id+'\')">Close</a>'+
                            '<a href = "#" class = "btn btn-info"  id = "open'+id+'" onclick = "setStatusOpened(\''+id+'\')">Re-open</a>'+
                            '<a href = "#" class = "btn btn-success" style = "float:right;" id = "reply'+id+'" onclick = "replyToIssue(\''+id+'\')">Reply</a>'+

                            '<a href = "#" class = "btn btn-warning" onclick = "deleteIssue(\''+id+'\')">Delete</a>'+

                            '<br><div class = "well" style = "margin-left:20px;"> <div id = "issueReplies"><p style = "text-align:center; font-weight:bold;">No Replies To This Issue Yet!</p></div></div>'+'</div>'+
                            
                            '</div>'+
                            ' </div>';

                        } //End inner if
                        else{
    issuesList.innerHTML += '<div class= "row">'+
                            '<div class= "col-md-6">'+
                            '<div class= "well">'+
                            '<h6> Issue ID: '+ id+ '</h6>'+
                            '<p><span class = "label label-info">'+ status+ '</span></p>'+
                            '<h3'+ desc+'</h3'+
                            '<p><span class = "glyphicon glyphicon-time"></span>'+ severity+ ' '+
                            '<span class = "glyphicon glyphicon-user"></span>'+ assignedTo + '</p>'+
                            '<a href = "#" class = "btn btn-warning" style = "display:none;" id = "close'+id+'" onclick = "setStatusClosed(\''+id+'\')">Close</a>'+
                            '<a href = "#" class = "btn btn-info"  id = "open'+id+'" onclick = "setStatusOpened(\''+id+'\')">Re-open</a>'+
                            '<a href = "#" class = "btn btn-success" style = "float:right;" id = "reply'+id+'" onclick = "replyToIssue(\''+id+'\')">Reply</a>'+

                            '<a href = "#" class = "btn btn-warning" onclick = "deleteIssue(\''+id+'\')">Delete</a>'+

                            '<br><div class = "well" style = "margin-left:20px;"> <div id = "issueReplies"><p style = "text-align:center; font-weight:bold;">Replies Will Go Here, Am guessing using a loop to fetch the replies from an array!</p></div></div>'+'</div></div>'+' </div>';


                            }//End inner else
                        }//End Outer if
                            else

                            {

                            if (replies==0) {

                                
    issuesList.innerHTML += '<div class= "row">'+
                            '<div class= "col-md-6">'+
                            '<div class= "well">'+
                            '<h6> Issue ID: '+ id+ '</h6>'+
                            '<p><span class = "label label-info">'+ status+ '</span></p>'+
                            '<h3'+ desc+'</h3'+
                            '<p><span class = "glyphicon glyphicon-time"></span>'+ severity+ ' '+
                            '<span class = "glyphicon glyphicon-user"></span>'+ assignedTo + '</p>'+
                            '<a href = "#" class = "btn btn-warning" id = "close'+id+'" onclick = "setStatusClosed(\''+id+'\')">Close</a>'+
                            '<a href = "#" class = "btn btn-info" style = "display:none;" id = "open'+id+'" onclick = "setStatusOpened(\''+id+'\')">Re-open</a>'+
                            '<a href = "#" class = "btn btn-success" style = "float:right;" id = "reply'+id+'" onclick = "replyToIssue(\''+id+'\')">Reply</a>'+

                            '<a href = "#" class = "btn btn-warning" onclick = "deleteIssue(\''+id+'\')">Delete</a>'+

                            '<br><div class = "well" style = "margin-left:20px;"><div id = "issueReplies"><p style = "text-align:center; font-weight:bold;">No Replies To This Issue Yet!</p></div> </div>'+'</div></div> </div>'; 
                            } else{
        issuesList.innerHTML += '<div class= "row">'+
                            '<div class= "col-md-6">'+
                            '<div class= "well">'+
                            '<h6> Issue ID: '+ id+ '</h6>'+
                            '<p><span class = "label label-info">'+ status+ '</span></p>'+
                            '<h3'+ desc+'</h3'+
                            '<p><span class = "glyphicon glyphicon-time"></span>'+ severity+ ' '+
                            '<span class = "glyphicon glyphicon-user"></span>'+ assignedTo + '</p>'+
                            '<a href = "#" class = "btn btn-warning" id = "close'+id+'" onclick = "setStatusClosed(\''+id+'\')">Close</a>'+
                            '<a href = "#" class = "btn btn-info" style = "display:none;" id = "open'+id+'" onclick = "setStatusOpened(\''+id+'\')">Re-open</a>'+
                            '<a href = "#" class = "btn btn-success" style = "float:right;" id = "reply'+id+'" onclick = "replyToIssue(\''+id+'\')">Reply</a>'+

                            '<a href = "#" class = "btn btn-warning" onclick = "deleteIssue(\''+id+'\')">Delete</a>'+

                            '<br><div class = "well" style = "margin-left:20px;"><div id = "issueReplies"><p style = "text-align:center; font-weight:bold;">Replies Will Go Here, Am guessing using a loop to fetch the replies from an array!</p></div> </div>'+'</div></div> </div>';
                            }                          
                            }

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
        var reply_no = 0;
        //save the details as object
        var issue = {
            id: issueId,
            description: issueDesc,
            severity: issueSeverity,
            assignedTo: issueAssignedTo,
            status: issueStatus,
            replies: reply_no
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
                document.getElementById('open'+id).style.display = 'block';
                document.getElementById('close'+id).innerHTML = 'Open';
            }
        }
        localStorage.setItem('issues',JSON.stringify(issues)); 
        fetchIssues();
    }
    function setStatusOpened(id){
        var issues = JSON.parse(localStorage.getItem('issues'));
        for(var j = 0; j < issues.length;j++){
            if(issues[j].id==id){
                issues[j].status = "open";
                document.getElementById('open'+id).style.display = 'none';
                document.getElementById('close'+id).style.display = 'block';
                document.getElementById('close'+id).innerHTML = 'Open';
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