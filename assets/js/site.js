(function(){
  'use strict';
  var b=document.getElementById('burger'),n=document.getElementById('mnav');
  if(b&&n){
    b.addEventListener('click',function(){
      var open=n.classList.toggle('is-open');
      b.setAttribute('aria-expanded',open?'true':'false');
      b.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');
    });
    n.addEventListener('click',function(e){
      if(e.target.tagName==='A'){ n.classList.remove('is-open'); b.setAttribute('aria-expanded','false'); }
    });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&n.classList.contains('is-open')){ n.classList.remove('is-open'); b.setAttribute('aria-expanded','false'); b.focus(); }
    });
  }
  var y=document.getElementById('yr'); if(y){ y.textContent=String(new Date().getFullYear()); }
})();
