/*global Ember */
/*exported Student */
import Ember from 'ember';
/*
const Student = Ember.Object.extend({
    homeroom: Ember.computed.alias('teacher.homeroom'),
    age: '',
    grade: '',
    teacher: null
});
*/
export default Ember.Object.extend({
    homeroom: Ember.computed.alias('teacher.homeroom'),
    age: '',
    grade: '',
    teacher: null
});
