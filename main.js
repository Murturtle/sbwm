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
    sidemenu.setAttribute('style', 'height:25%; width:80px; background-color:rgba(0,0,0,.5); color:white; font-family:Courier New; font-size:12px; z-index:10000; display: inline-block; overflow:visible; position:fixed; top: 25%;');
}

var gui=true;

document.onkeydown = function (e) {
    switch (e.keyCode) {
    case 81:
        alert('work in progress');
    default:
        document.getElementById('key').innerHTML=e.code;
  }
};
