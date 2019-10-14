var devition = document.getElementsByTagName("div")[0];

console.log(devition.childNodes.length);              //total childNodes

var count = 0;
for(var i=0; i< devition.childNodes.length; i++)
{
  if(devition.childNodes[i].nodeType == 1)
  {
    console.log(devition.childNodes[i].nodeName);         //total child tag
    count++;
  }
}

console.log(count);
console.log(devition.children.length);

console.log(devition.childNodes[0].nodeName);
console.log(devition.firstChild.nodeName);
console.log(devition.children[0].nodeName);
console.log(devition.childNodes[1].nodeName);

console.log(devition.childNodes[2].parentNode.nodeName);
console.log(devition.children[2].parentNode.nodeName);

console.log(devition.childNodes[2].nextSibling.nodeName);
console.log(devition.childNodes[1].previousSibling.nodeName);
