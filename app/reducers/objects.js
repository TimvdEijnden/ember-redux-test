import {
	v4
} from 'ember-uuid';

import {
	randomColor
} from 'redux-test/utils/color-util';

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
			state = state.concat();
			state.push({
				uuid: v4(),
				component: action.componentType,
				styles: {
					backgroundColor: randomColor(110),
					width: 100,
					height: 100,
					left: Math.round((Math.random() * 500) + 10),
					top: Math.round((Math.random() * 400) + 10),
				}
			})
			return state;
		case ActionTypes.UPDATE_OBJECT:
			state = state.concat();
			let objectIndex = state.findIndex((object) => object.uuid === action.uuid);
			let object = Object.assign({}, state[objectIndex]);
			object.styles = Object.assign({}, action.styles);
			state[objectIndex] = object;
			return state;
		case ActionTypes.REMOVE_OBJECT:
			return state.filter((object) => object.uuid !== action.uuid);
		default:
			return state || initialState;
	}
});
