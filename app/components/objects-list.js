import Ember from 'ember';
import connect from 'ember-redux/components/connect';
import {
	ActionTypes
} from 'redux-test/reducers/objects';
import hbs from 'htmlbars-inline-precompile';

/**
 * This is a  Container Component that will is redux aware.
 *
 * The component itself maps the state of redux to a computed called objects and the removeObject function to an action.
 * Notice we don’t use that array or action directly in this component.
 * Instead we pass the data and closure action down to a Presentational Component that will be responsible for rendering the html.
 *
 */

var stateToComputed = (state) => {
	return {
		objects: state.objects
	};
};

var dispatchToActions = (dispatch) => {
	return {
		addObject: (componentType) => dispatch({
			type: ActionTypes.ADD_OBJECT,
			componentType
		}),
		removeObject: (uuid) => dispatch({
			type: ActionTypes.REMOVE_OBJECT,
			uuid
		}),
		updateObject: (changeset, uuid) => {
			dispatch({
				type: ActionTypes.UPDATE_OBJECT,
				change: changeset.get('change'),
				uuid
			})
		}
	};
};

var ObjectsViewComponent = Ember.Component.extend({
	layout: hbs `
    	{{yield objects (action "addObject") (action "removeObject") (action "updateObject")}}`
});

export default connect(stateToComputed, dispatchToActions)(ObjectsViewComponent);
