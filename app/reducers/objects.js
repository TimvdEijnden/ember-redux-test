import {
	v4
} from 'ember-uuid';

import {
	randomColor
} from 'redux-test/utils/color-util';

import _ from 'lodash';

export const ActionTypes = {
	ADD_OBJECT: 'ADD_OBJECT',
	UPDATE_OBJECT: 'UPDATE_OBJECT',
	REMOVE_OBJECT: 'REMOVE_OBJECT'
};

const initialState = [{
		uuid: v4(),
		component: 'square-view',
		styles: {
			backgroundColor: '#FF0000',
			width: 100,
			height: 100,
			left: 10,
			top: 10,
		}
	},
	{
		uuid: v4(),
		component: 'circle-view',
		styles: {
			backgroundColor: '#00FF00',
			width: 100,
			height: 100,
			left: 110,
			top: 110,
		}
	}
];

export default ((state, action) => {
	switch (action.type) {
		case ActionTypes.ADD_OBJECT:
			return [
				...state,
				{
					uuid: v4(),
					component: action.componentType,
					styles: {
						backgroundColor: randomColor(110),
						width: 100,
						height: 100,
						left: Math.round((Math.random() * 500) + 10),
						top: Math.round((Math.random() * 400) + 10),
					}
				}
			];
		case ActionTypes.UPDATE_OBJECT:
			// clone the array and objects
			state = _.cloneDeep(state);
			// get the object
			let object = state.find(object => object.uuid === action.uuid);
			// replace the styles object
			object.styles = Object.assign(object.styles, action.change);
			// return the state
			return state;
		case ActionTypes.REMOVE_OBJECT:
			return state.filter(object => object.uuid !== action.uuid);
		default:
			return state || initialState;
	}
});

export function getObjectByUuid(state, uuid) {
	const found = state.objects.find(object => object.uuid === uuid);
	return found;
}
