if (document.getElementById('sidemenu')) {
    document.getElementById('sidemenu').remove();
} else {
    var sidemenu;
    var bdy;
    sidemenu = document.createElement('div');
    sidemenu.id = 'sidemenu';
    sidemenu.innerHTML = `
    
    <center><b style="font-size:16px;">SBWM</b>
    <br>
    <button onclick="window.open('https://ee.wrya.net/leaderboards/')">Leaderboard</button>
    <p id="key">
    
    </center>
    <style>
    button{
      background:rgba(0,1,0,.5);
      border:none;
      color:lime;
      width:95%;
    }
    
    </style>
    `;
    
    bdy = document.getElementsByTagName('body')[0];
    bdy.appendChild(sidemenu);
    sidemenu.setAttribute('style', 'height:50%; width:100px; background:rgba(0,0,0,.5); color:white; font-family:Courier New; font-size:12px; z-index:10000; display: inline-block; overflow:visible; position:fixed; top: 25%;');
}

var gui=true;
var keys = [];

document.onkeydown = function (e) {
  key = document.getElementById("key");
  
  key.innerHTML=e.code;
  
  if (e.code=="ShiftRight"){
    if(gui==true){
        sidemenu.setAttribute('style', 'display:hidden;');
        gui=false;
    }
    else
    {
      sidemenu.setAttribute('style', 'height:50%; width:100px; background-color:rgba(0,0,0,.5); color:white; font-family:Courier New; font-size:12px; z-index:10000; display: inline-block; overflow:visible; position:fixed; top: 25%;');
      gui=true;
    };
  }
  else if(e.code=="KeyQ"){
    alert("Press ENTER to unfreeze")
  }
};
