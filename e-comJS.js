
      let imgArray=[];
      let prdName=[];
      let prdPrice=[];
      let prdItemCount=[];
      let prdNameArr=[];
 
    function addcart(strNo)
    {
       document.getElementById('btnBuy').disabled=false;
        let newStrno=strNo;
        
        if (newStrno == 1)
        {
        prdName.push(document.getElementById('travelBag').title);
           
    prdPrice.push(parseInt(document.getElementById('price2').title));
    prdNameArr.push(prdName);
    
        }
        else if(newStrno==2)
        {
           
            prdName.push(document.getElementById('imgName2').title);
            prdPrice.push(parseInt(document.getElementById('price3').title));
            prdNameArr.push(prdName);
        }
        else if(newStrno==3)
        {
           
            prdName.push(document.getElementById('imgName3').title);
            prdPrice.push(parseInt(document.getElementById('price4').title));
        }
        else if (newStrno==4)
        {
           
            prdName.push(document.getElementById('imgName4').title);
            prdPrice.push(parseInt(document.getElementById('price5').title));
        }
        else if (newStrno==5)
        {
           
            prdName.push(document.getElementById('imgName5').title);
            prdPrice.push(parseInt(document.getElementById('price6').title));
        }
        else if (newStrno==6)
        {
          
            prdName.push(document.getElementById('imgName6').title);
            prdPrice.push(parseInt(document.getElementById('price7').title));
        }
        else if (newStrno==7)
        {
          
            prdName.push(document.getElementById('imgName7').title);
            prdPrice.push(parseInt(document.getElementById('price8').title));
        }
        else if (newStrno==8)
        {
          
            prdName.push(document.getElementById('imgName8').title);
            prdPrice.push(parseInt(document.getElementById('price9').title));
            prdNameArr.push(prdName);
        }
        else if (newStrno==9)
        {
           
            prdName.push(document.getElementById('imgName9').title);
            prdPrice.push(parseInt(document.getElementById('price10').title));
            prdNameArr.push(prdName);
        }
        let itemCount=prdName.length;
        let msg;
        
        alert( itemCount +" Item added to the cart!Click Buy to proceed further");
       
    }
    for (i=0;i<prdName.length;i++){
        prdNameArr=prdName.slice(i);
    }
       console.log(prdNameArr);
      
    function alertfunc()
    {
        let alertlines="";
        alertlines+=" <strong>Success!</strong> This alert box could indicate a successful or positive action."
      
      return alertlines;
    }
    function showTable()
{
    
    var newWin=window.open();
    newWin.document.open();
  
  console.log(prdName.length);
   var sum = prdPrice.reduce((x, y) => x + y);
  


          
    var lines="";    
        lines+="<HTML><HEAD>";
        lines+="<TITLE>Any Title</TITLE>";
        lines+="<link rel='stylesheet' href='e-com.css'>";
        lines+="<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO' crossorigin='anonymous'></link>";
        lines+="<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'></link>";
        lines+="<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>";  
        lines+="<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' integrity='sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy' crossorigin='anonymous'></script>";
        lines+="</HEAD>";
        lines+="<BODY>"; 
        lines+="<header>";
        lines+="<h2 class='headerStyle'>Cool Bags</h2>";
        lines+="</header>";   
        lines+="<section>";
        lines+="<nav class='navbar navbar-expand-md bg-dark navbar-dark'></nav>";         
        lines+="</section>";
       
        lines+="<table class='tableStyle' id='cartTable'>";
        lines+= "<thead>";
    lines+="<tr>";
    lines+= "<th>#</th>";
    lines+= "<th>Product name</th>";
    lines+= "<th>Price</th>";
    lines+="</tr>";
    lines+="</thead>";
   
   
        for(let y=0;y<prdName.length;y++)
        {
         
         lines+="<tr>";
         lines+="<td >";
        lines+="<div class='desc' >"+(y+1)+"</div>";
        lines+="</td>";
        lines+="<td >";
        lines+="<div class='desc' >"+prdName[y]+"</div>";
        lines+="</td>";
        lines+="<td >";
        lines+="<div class='desc'>"+prdPrice[y] +'kr'+"</div>";
        lines+="</td>";
        //lines+="<td>";
        //lines+="<button id='deleted' onclick='javascript:deletedMe();'>delete</button>";
        //lines+="</td>";
        lines+="</tr>";
       
       
        }
    
        
        
        lines+="<tr>";
        lines+="<td >";
        lines+="</td>";
        lines+="<td >";
        lines+="<div class='desc'>Total</div>";
        lines+="</td>";
        lines+="<td >";
        lines+="<div class='desc'>"+sum+'kr'+"</div>";
        lines+="</td>";
        lines+="</tr>";
       lines+="</table>";
      
       //var el = document.getElementById("deleted");
       //console.log(el);
//el.addEventListener("click", deletedMe, false);

     // document.getElementById('deleted').addEventListener('click', deletedMe);
     lines+="<div class='alignRow'>";
       lines+="<div class='alignButton'>";
       lines+="<button type='button' class='btn btn-danger'>Payment</button>";
       lines+="</div>"; 
       lines+="<div class='alignButton1'>"
       lines+="<a href='main.html' class='btn btn-danger'>Back to Shopping</a>";
       lines+="</div>";   
       lines+="</div>";
       lines+="</div>";
       lines+="<script src='src='e-comJS.js' type='text/javascript'></script>";      
       lines+="</BODY></HTML>";
      
      
        
        newWin.document.write(lines);
        newWin.document.close();
        newWin.focus();
        
        
             
    
}
