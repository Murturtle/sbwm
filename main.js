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
    <button onclick="window.open('https://ee.wrya.net/leaderboards/')">EE</button>
    <p id="key">
    
    </center>
    <style>
    
    button{
      background:lime;
      border:none;
      color:white;
    }
    
    </style>
    `;
    
    bdy = document.getElementsByTagName('body')[0];
    bdy.appendChild(sidemenu);
    mymenu.setAttribute('style', 'height:25%; width:80px; background-color:rgba(0,0,0,.5); color:white; font-family:Courier New; font-size:12px; z-index:10000; display: inline-block; overflow:visible; position:fixed; top: 25%;');
}

var attacks=0;

document.onkeydown = function (e) {
    switch (e.keyCode) {
    case 81:
        document.getElementById('attacks').innerHTML=attacks;
    case 16:
        if (document.getElementById('mainmenu')) {
        document.getElementById('mainmenu').remove();
        } else {
            var sidemenu;
            var bdy;
            mainmenu = document.createElement('div');
            mainmenu.id = 'mainmenu';
            mainmenu.innerHTML = `
            `;
            
            bdy = document.getElementsByTagName('body')[0];
            bdy.appendChild(mainmenu);
            mainmenu.setAttribute('style', 'height:90%; width:90%; background-color:rgba(0,0,0,.5); color:white; font-family:Courier New; font-size:12px; z-index:10000; display: inline-block; overflow:visible; position:fixed; top: 5%;');
        }
      
    default:
        document.getElementById('key').innerHTML=e.code;
  }
};
