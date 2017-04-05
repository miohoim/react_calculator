import * as actionTypes from '../utils';

export const onNumClick = (number) => ({
	type : actionTypes.INPUT_NUMBER,
	number,
});

export const onPlusClick = () => ({
	type: actionTypes.PLUS,
});