var text = document.getElementsByTagName('h1')[0].textContent;

var encode = btoa(text);
document.write(encode);

var decode = atob(encode);
document.write('<br>' + decode);
