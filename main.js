if (document.getElementById('mymenu')) {
    document.getElementById('mymenu').remove();
} else {
    var block_to_insert;
    var container_block;
    block_to_insert = document.createElement('div');
    block_to_insert.id = 'mymenu';
    block_to_insert.innerHTML = `
    
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
    `;
    
    container_block = document.getElementsByTagName('body')[0];
    container_block.appendChild(block_to_insert);
    mymenu.setAttribute('style', 'height:25%; width:80px; background-color:rgba(0,0,0,.5); color:white; float:right; font-family:Courier New; font-size:12px; z-index:10000; display: inline-block; overflow:visible; position:fixed; top: 25%;');
}

var attacks=0;

document.onkeydown = function (e) {
    switch (e.keyCode) {
    case 81:
        attacks+=1;
        document.getElementById('attacks').innerHTML=attacks;
    default:
        document.getElementById('key').innerHTML=e.code;
  }
};
