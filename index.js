


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
       let response = JSON.parse(xhttp.responseText);
       console.log(response);
       let people = response.people;
       var output = "";
       for(var i=0 ;i < people.length ;i++){
           output += '<li>'+people[i].name+'</li>';
       }
       document.getElementById('root').innerHTML = output;
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();