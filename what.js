var textarea = document.getElementById('what');
var form = document.getElementsByTagName('form')[0];
var what = location.search;
what = what.replace('?what=','');
what = what.replace(/\+/g, ' ');
what = decodeURIComponent(what);
textarea.value = what;
//console.log(what);

textarea.addEventListener('change', function(){
  form.submit();
}, false);
