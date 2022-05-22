/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Aiswarya Francie Challat   Student ID:134229210    Date: 21/05/2022
*
********************************************************************************/ 

serverVerbs = ["GET", "GET", "GET", "POST","GET", "POST"]
serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"]
serverResponses = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by Aiswarya Francie Challat", "Aiswarya Francie Challat: afchallat@myseneca.ca", "User Logged In", "Main Panel", "Logout Complete"]

testVerbs = ["GET", "POST"]
testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"]

function httpRequest(httpVerb,path){
    for(let i=0;i<serverPaths.length;i++){
        if (serverVerbs[i] == httpVerb && serverPaths[i] == path){
            var flag = true;
            return (`200: ${serverResponses[i]}`);
        }
    }
    if(!flag){
        return(`404: Unable to process ${httpVerb} request for ${path}` );
    }
}
console.log(httpRequest("GET", "/")); 
console.log(httpRequest("GET", "/about"));
console.log(httpRequest("PUT", "/")); 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function automateTests(){
    function randomRequest(){
        var randVerb = getRandomInt(2)
        var randPath = getRandomInt(8)
        console.log(httpRequest(testVerbs[randVerb],testPaths[randPath]))
    }
    setInterval(randomRequest, 1000)
}
automateTests();