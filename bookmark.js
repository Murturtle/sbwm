javascript:if(document.getElementById("mymenu"))document.getElementById("mymenu").remove();else{var e,t;(e=document.createElement("div")).id="mymenu",e.innerHTML=`
    
    <center><b style="font-size:16px;">SBWM</b>
    <br>
    <button onclick="window.open('https://ee.wrya.net/leaderboards/')">EE</button>
    <p id="attacks">
    <p id="key">
    
    </center>
    <style>
    
    button{
      background:lime;
      border:none;
      color:white;
    }
    
    </style>
    `,(t=document.getElementsByTagName("body")[0]).appendChild(e),mymenu.setAttribute("style","height:25%; width:80px; background-color:rgba(0,0,0,.5); color:white; float:right; font-family:Courier New; font-size:12px; z-index:10000; display: inline-block; overflow:visible; position:fixed; top: 25%;")}var attacks=0;document.onkeydown=function(e){81===e.keyCode&&(attacks+=1,document.getElementById("attacks").innerHTML=attacks),document.getElementById("key").innerHTML=e.code};
