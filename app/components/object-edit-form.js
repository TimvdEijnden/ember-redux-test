import Ember from 'ember';

const { observer } = Ember;

export default Ember.Component.extend({
	classNames: ['object-edit-form'],

	init(){
		this._super(...arguments);
		this.objectObserver();
	},

	actions: {
		removeObject(uuid){
			this.sendAction('removeObject', uuid);
		}
	},

	objectObserver: observer('object', function() {
		this.set('styles', Object.assign({}, this.get('object.styles')));
	}),

	stylesObserver: observer('styles.{backgroundColor,width,height,top,left}', function() {
		this.sendAction('updateObject', this.get('object.uuid'), this.get('styles'));
	})

});
