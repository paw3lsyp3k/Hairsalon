

  function desc(number){
    let x=0;
    for (let i = 1; i < 7; i++) {
      x++;
      document.getElementById("covidanswer"+ x).style.display = "none";
      document.getElementById("covidicon"+ x).style.display = "block";
      document.getElementById("covidicon"+ x + x).style.display = "none";
    }
    if(number!=null){
      document.getElementById("covidanswer"+number).style.display = "block";
      document.getElementById("covidicon"+number).style.display = "none";
      document.getElementById("covidicon"+number+number).style.display = "block";
    }
  }
  