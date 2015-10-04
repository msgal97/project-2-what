var textarea = document.getElementById('what');
var form = document.getElementByTagName('form')[0];

textarea.addEventListener('change', function(){
  form.submit();
}, false);
