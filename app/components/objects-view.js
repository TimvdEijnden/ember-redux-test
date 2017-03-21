import Ember from 'ember';
import connect from 'ember-redux/components/connect';
import { ActionTypes } from 'redux-test/reducers/objects';

var stateToComputed = (state) => {
  return {
    objects: state.objects
  };
};

var dispatchToActions = (dispatch) => {
  return {
    addObject: (componentType) => dispatch({type: ActionTypes.ADD_OBJECT, componentType}),
    removeObject: (uuid) => dispatch({type: ActionTypes.REMOVE_OBJECT, uuid}),
    updateObject: (uuid, styles) => dispatch({type: ActionTypes.UPDATE_OBJECT, uuid, styles})
  };
};

var ObjectsViewComponent = Ember.Component.extend({});

export default connect(stateToComputed, dispatchToActions)(ObjectsViewComponent);
