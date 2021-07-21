function father(name) {
  this.name = name;
}

function child(name) {
  this.name = name;
}

father.prototype.say = function () {
  console.log(this.name);
};

child.prototype.eat = function () {
  console.log('eat');
};

function inheritPrototype(subType, superType) {
  function F() {}
  //F()的原型指向的是superType
  F.prototype = superType.prototype;
  //subType的原型指向的是F()
  subType.prototype = new F();
  // 重新将构造函数指向自己，修正构造函数
  subType.prototype.constructor = subType;
}
inheritPrototype(child, father);

let a = new child('child')
a.say()
