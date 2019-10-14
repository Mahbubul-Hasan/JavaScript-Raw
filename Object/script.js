var person = new Object();
person.name = "Mahbubul";
person.age = 21;
person.study = "Daffodil International University";

var person2 = {
  name : "Rahul",
  age : 20,
  study : "Daffodil International University",
  details : function(){
    var info = "Name: " +this.name+ "\nAge: " +this.age+"\nStudy: "+this.study;
    console.log(info);
  }
};

person2.details();
