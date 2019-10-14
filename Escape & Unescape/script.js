var string = document.getElementsByTagName("h1")[0].textContent;

document.write("Escape: " + escape(string));

document.write("<br>Unescape: "+ unescape(escape(string)));
