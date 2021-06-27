function doccmd(){
  var doccmd = document.getElementById("newid").value;
  var xhr = new XMLHttpRequest();
  var queryString = "http://192.168.1.102/cgi-bin/second.py?x=" + doccmd;

  xhr.open("GET", queryString , true)

  xhr.send();
  xhr.onload = function(){
      var output = xhr.responseText;
      document.getElementById('output').innerHTML = output;
  }

}