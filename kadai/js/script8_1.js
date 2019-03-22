function print(str){
    document.write(str + "<br />");
  }
  
  document.write("<p>");
  
  for (var i = 0 ; i < 5 ; i++){
    print(Math.random());
  }
  
  document.write("</p>");
  
  var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
  for (var i = 0 ; i < 8000 ; i++){
    var num = Math.floor(Math.random () * 10) ;
    count[num] += 1;
  }
  
  document.write("<p>");
  
  for (var i = 1 ; i < 4 ; i++){
    print(i + " : " + count[i] + "回");
  }
  
  document.write("</p>");