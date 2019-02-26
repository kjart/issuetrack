//this function reloads every time in the body tag
function fetchIssues(){
    var issues = JSON.parse(localStorage.getItem('issues'));
   
    if(issues != null){
    var issuesList = document.getElementById("issuesList");
    var replyList = document.getElementById('replyList');
    replyList.innerHTML = "";
    issuesList.innerHTML = "";
    for(var i = 0; i< issues.length;i++){
        var id = issues[i].id;
        
        var result = fetchReply(id);
        for( var x = 0; x < result.length; x++){
            replyList.innerHTML += '<div class = "well"'+
                                    '<p>'+ result[x].reply+ '</p></div>';
        }
        var topic = issues[i].topic;
        var desc =issues[i].description;
        var severity =issues[i].severity;
        var assignedTo =issues[i].assignedTo;
        var status =issues[i].status; 
         
    //put each set of result in an html code

    issuesList.innerHTML += '<div class= "well"'+
                            '<h6> Issue ID: '+ id+ '</h6>'+
                            '<p><span class = "label label-info">'+ status+ '</span></p>'+
                            '<h2>'+ topic+ '</h2>'+
                            '<h3>'+ desc+'</h3>'+
                            '<p><span class = "glyphicon glyphicon-time"></span>'+ severity+ ' '+
                            '<span class = "glyphicon glyphicon-user"></span>'+ assignedTo + '</p>'+
                            '<div class = "row">'+
                            '<div class = "col-lg-12">'+
                            '<div id = "reply"></div></div></div>'+
                            '<a href = "#" class = "btn btn-warning" onclick = "showReply(\''+id+'\')">Reply</a>'+
                            '<a href = "#" class = "btn btn-warning" onclick = "setStatusClosed(\''+id+'\')">Close</a>'+
                            '<a href = "#" class = "btn btn-warning" onclick = "deleteIssue(\''+id+'\')">Delete</a>'

                           ' </div>';

    }//end of for loop
}
}
function fetchReply(id){
    var reply = JSON.parse(localStorage.getItem('replys'));
    var eachReply = [];
    for (let r = 0; r < reply.length; r++){
        //check if the id is the same thing
        if(reply[r].id === id){
            eachReply.push(reply[r]);
        }
        
    }
    return eachReply;
}
    //append an event listener to the form's submit

    document.getElementById('issueInputForm').addEventListener('submit',saveIssue);
    //using the show reply function
    
    //this method saves each issue into the computer document
    function saveIssue(e){
        var issueId = chance.guid();
        var issueTopic = document.getElementById('issueTopicInput').value;
        var issueDesc = document.getElementById('issueDescInput').value;
        var issueSeverity = document.getElementById('issueSeverityInput').value;
        var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
        var issueStatus = 'open';
        //save the details as object
        var issue = {
            id: issueId,
            topic : issueTopic,
            description: issueDesc,
            severity: issueSeverity,
            assignedTo: issueAssignedTo,
            status: issueStatus

        };
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
    /*
    *this function allows users to respon to each issue
    */
   function setReply(id){
  
        let issues = JSON.parse(localStorage.getItem('issues'));
        for(let s = 0; s < issues.length; s++){
            if(issues[s].id === id){
                var replyId = issues[s].id;
            }
        }
        var newReply = document.getElementById('Input').value;
        var reply = {
            id:replyId,
            reply : newReply
    
        };
        //check if the local storage has any reply in it
        //if it doesnt:
        if(localStorage.getItem('replys')=== null){
            var replys = [];
            replys.push(reply);
            localStorage.setItem('replys',JSON.stringify(replys));
   }

   //if it does
   else{
        var replys = JSON.parse(localStorage.getItem('replys'));
        replys.push(reply);
        localStorage.setItem('replys', JSON.stringify(replys));
   }
   fetchIssues();
}
    //this functioncloses the issue
    function setStatusClosed(id){
        var issues = JSON.parse(localStorage.getItem('issues'));
        for(var k = 0; k < issues.length;k++){
            if(issues[k].id == id){
                issues[k].status = "Closed";
            }
        }
        localStorage.setItem('issues',JSON.stringify(issues)); 
        fetchIssues();
    }
    function deleteIssue(id){
        var issues = JSON.parse(localStorage.getItem('issues'));
        for(var j = 0; j < issues.length;j++){
            if(issues[j].id == id){
                issues.splice(j,1);
            }
        }
        localStorage.setItem('issues',JSON.stringify(issues)); 
        fetchIssues();
    }
    function showReply(id){
      
           var form = document.getElementById('reply');
            form.innerHTML = '<div class = "form-group">'+ 
            '<label for = "Input">Reply to Issue</label>'+
            '<textarea class = "form-control" rows = "3" id = "Input">'+
        '</textarea>'+'</div>'+
        '<button class = "btn btn-primary" onclick = "setReply(\''+id+'\')"></button>';
        //$('#reply').toggle();
        }

    
  

