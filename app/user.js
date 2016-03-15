/*global Ember */
/*exported User */
import Ember from 'ember';

//Notice the `nickName` property is a
//`Ember.computed.oneWay` property
export default Ember.Object.extend({
    firstName: null,
    lastName: null,
    nickName: Ember.computed.oneWay('firstName')
});
