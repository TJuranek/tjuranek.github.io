import React from 'react';
import 'normalize.css';

export const wrapPageElement = ({ element, props }) => {
	return <div {...props}> {element} </div>;
};
