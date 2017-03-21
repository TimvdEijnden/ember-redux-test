import Ember from 'ember';
const { observer } = Ember;

export default Ember.Component.extend({
	classNames: ['object-edit-form'],

	observeChanges: observer('changeset.changes', function(){
		this.sendAction('updateObject', this.get('changeset'), this.get('uuid'));
	})
});

