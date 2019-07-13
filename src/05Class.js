class Person {
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  run(){
    console.log(`${this.name} is running!`);
  }
}

const person=new Person('eric',99)
person.run();