var objFreeze = {
  objectFreeze : "I want to check is it frozen???"
};

Object.freeze(objFreeze);
console.log(!Object.isFrozen(objFreeze));

if (!Object.isFrozen(objFreeze))
  objFreeze.newFreeze = "Is new freeze item added???";

console.log(objFreeze);

var FreezeAlternative = {
  newFreeze : "Is new freeze item added???"
};

Object.keys(objFreeze).forEach(function(value){
  FreezeAlternative[value] = objFreeze[value];
})
console.log(FreezeAlternative);






var objSeal = {
  objectSeal : "I want to check is it seal???"
}

// Object.seal(objSeal);

console.log(!Object.isSealed(objSeal));

if(!Object.isSealed(objSeal))
  delete objSeal.objectSeal;

console.log(objSeal);







var objExtansible = {};

console.log(Object.isExtensible(objExtansible));

Object.preventExtensions(objExtansible);

console.log(Object.isExtensible(objExtansible));
