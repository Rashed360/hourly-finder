import { HEADER_COLOR_CHANGE} from '../actionTypes/utilsActionTypes'

export const headerColorChange = color => {
	return {
		type: HEADER_COLOR_CHANGE,
		payload: color,
	}
}