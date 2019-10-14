console.log(window.sessionStorage);

window.sessionStorage.setItem("test1", 500);
window.sessionStorage.setItem("test2", "Session Storage");
window.sessionStorage.setItem("test3", true);
window.sessionStorage.setItem("test4", ["one", "two", "three"]);
window.sessionStorage.setItem("test5", JSON.stringify({prop1 : "property"}));

console.log(window.sessionStorage.getItem("test4"));

window.sessionStorage.removeItem("test4");

for (var i=0; i<window.sessionStorage.length; i++)
  console.log(window.sessionStorage.key(i));

//window.sessionStorage.clear();
