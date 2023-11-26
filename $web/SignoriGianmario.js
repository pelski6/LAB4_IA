function alta()
    {
        document.getElementById("nume").innerHTML = "Inginer Porsche " ;// schimba in HTML propozitia pe baza de ID cu cel din ghilimele //a

        document.getElementById("disci").remove();//b
        document.getElementById("exper").innerHTML = "Bazele electronicii";

        document.getElementById("poza").src ="dusty.jpg" ;//schimba poza//c


        document.getElementById("titlu").style.color = "rgb(150,250,250)"; //d
        document.getElementById("titlu").style.font = "italic  25px arial,serif";

        document.getElementById("text").style.color = "rgb(50,250,150)"; //d
        document.getElementById("text").style.font = "italic  25px arial,serif";
        document.body.style.backgroundColor = "rgb(80,100,110)"; //schimba culoarea paginii


        document.getElementById("poza").setAttribute("style","opacity:0.45; -moz-opacity:0.45; filter:alpha(opacity=45)"); //modifica opacitatea pozei //e
        document.getElementById("poza").style.border = "5px solid red";   //adauga bordura pozei cu culoare

        
    }

























function data()
    {
     var nast = new Date("2/25/2003");
     var azi = new Date();
     var ani= azi.getFullYear()- nast.getFullYear();
     var luna= azi.getMonth()-nast.getMonth();
     if (luna < 0 || (luna === 0 && azi.getDate() < nast.getDate()))
     {
        ani--;
     }
    document.getElementById("data").innerHTML ="Am "+ ani +" de ani";
    }