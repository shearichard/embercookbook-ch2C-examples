import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import teacher from './teacher';
import student from './student';

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

console.log(joey.get('age')); //16
console.log(avery.get('homeroom')); //1075
avery.set('homeroom','2423');
console.log(joey.get('homeroom')); //2423

export default App;
