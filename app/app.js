import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import teacher from './teacher';
import student from './student';
import user from './user';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

const avery = teacher.create({
    age: "27",
    homeroom: "1075",
    gradeTeaching: "sophmore"
});


const joey = student.create({
    age: "16",
    grade: "sophmore",
    teacher: avery
});
  
///////////////////////////////////////////////////////////
//One way binding example - START
const the_user = user.create({
    firstName: 'Erik',
    lastName: 'Hanchett'
});
console.log("")
console.log("One way binding example   +++++++++++++++++");
console.log(the_user.get('nickName')); // 'Erik'
the_user.set('nickName', 'Bravo'); 
console.log(the_user.get('firstName')); // 'Erik'
console.log(the_user.get('nickName'));  // 'Bravo' 


//One way binding example - END  
///////////////////////////////////////////////////////////
//Arbitary binding example - START
const myName = Ember.Object.extend({
    name: 'Erik Hanchett',
      otherName: Ember.computed.alias('name')
});

console.log("")
console.log("Arbitary binding example   +++++++++++++++++");
const erik = myName.create();
console.log(erik.get('name')); //Erik Hanchett
console.log(erik.get('otherName')); //Erik Hanchett
//Arbitary binding example - END
///////////////////////////////////////////////////////////

console.log("")
console.log("Standard binding example   +++++++++++++++++");
console.log(joey.get('age')); //16
console.log(avery.get('homeroom')); //1075
avery.set('homeroom','2423');
console.log(joey.get('homeroom')); //2423
console.log("")

export default App;
