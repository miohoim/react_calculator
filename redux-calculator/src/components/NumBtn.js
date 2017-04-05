import React, { PropTypes } from 'react';

const NumBtn = ({n, onClick }) => (
	<button onClick={onClick}>{n}</button>
)

NumBtn.propTypes = {
	onClick: PropTypes.func.inRequired,
};
export default NumBtn