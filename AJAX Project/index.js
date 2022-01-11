
function getInfoById() {

    var id = document.getElementById("number").value;

    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(function (response) {
            return response.json()
        })
        .then((response) => {

            document.getElementById("dataAll").innerHTML = "\"userId\": " +
                response.userId + "<br>" + "\"id\": " + response.id + "<br>" + "\"title\": " +
                response.title + "<br>" + "\"body\": " + response.body + "<br>"+
                "<button type='button' id='btn' onclick='oneComment("+response.id+")'>comment</button>"+"<br>"+"<hr>";

        })
}

function getInfo() {

    fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(function (response) {
            return response.json()
        })
        .then((response) => {
            
            var a = " ";
            for (const element of response) {
                
                a += "<br>\"userId\": " + element.userId + "<br>" + "\"id\": " + element.id + "<br>" + 
                    "\"title\": " + element.title + "<br>" + "\"body\": \"" +element.body + "\"<br>"+
                    "<button type='button' id='btn' onclick='oneComment("+element.id+")'>comment</button>"+"<br>"+"<hr>";                    
                    
                }
            document.getElementById("dataAll").innerHTML = a;

        })
}

function oneComment(cid) {
    fetch("https://jsonplaceholder.typicode.com/posts/"+cid+"/comments/")
        .then(function (response) {
            return response.json()
        })
        .then((response) => {

            var a = " ";
            for (const res of response) {

                a += "<br>\"postId\": " +
                    res.postId + "<br>" + "\"id\": " + res.id + "<br>" + "\"name\": " +res.name + "<br>" + 
                    "\"email\": " + res.email + "<br>" + "\"body\": " + res.body + "<br><br>"+"<hr>"+"<br>";
            }
            document.getElementById("dataAll").innerHTML = a;
        })
};

