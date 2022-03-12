import {HEADER_COLOR_CHANGE,} from '../actionTypes/utilsActionTypes'

const utilsInitialState = {
	headerColor: 'transparent',
}

const utilsReducer = (state = utilsInitialState, action) => {
	switch (action.type) {
		case HEADER_COLOR_CHANGE:
			return {
				...state,
				headerColor: action.payload,
			}
		default:
			return state
	}
}

export default utilsReducer