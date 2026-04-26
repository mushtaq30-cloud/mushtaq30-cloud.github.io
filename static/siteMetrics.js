function safeGet(k){try{return parseInt(localStorage.getItem(k)||'0',10)}catch(e){return 0}}
function safeSet(k,v){try{localStorage.setItem(k,v.toString())}catch(e){}}
safeSet('visitCount', safeGet('visitCount')+1);
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[href*="Mushtaq_Resume"]').forEach(el=>
    el.addEventListener('click',()=>safeSet('resumeDL',safeGet('resumeDL')+1)));
});
