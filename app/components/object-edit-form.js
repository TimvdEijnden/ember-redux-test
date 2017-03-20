import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['object-edit-form'],

	actions: {
		removeObject(uuid){
			this.sendAction('removeObject', uuid);
		}
	}
});
