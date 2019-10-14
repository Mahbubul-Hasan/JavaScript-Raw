var about = document.getElementById("sub");          //for select
console.log(about);

about.id = "subject";                                //replace a name
console.log(about.id);                               //id name
console.log(about.className);;                       //class name
console.log(about.tagName);                          //tag name
console.log(about.nodeName);                         //node name
console.log(about.childNodes[0].nodeName);           //child node type

about.classList.add("name", "number", "gmail");      //add class list
console.log(about.className);

about.classList.remove("name");                      //remove class list
console.log(about.className);

console.log(about.classList.contains("name"));       //check presentenc
console.log(about.classList.contains("BSc"));        //check presentenc

about.innerHTML = "<span>" + about.innerHTML + "</span>"        //add inner tag

var college = document.getElementById("college");
college.innerHTML = "<span> BAF Shaheen College </span>";
college.textContent = "BAF Shaheen College, Jessore"            //text replace

var school = document.getElementsByTagName("p")[1];
school.outerHTML = "<h3> Cantonment High school </h3>";          //replace tag

var myName = document.getElementsByClassName("head")[0];
myName.setAttribute("contenteditable", true);                   //can edit from html
//myName.removeAttribute("contenteditable");

console.log(myName.hasAttribute("contenteditable"));
