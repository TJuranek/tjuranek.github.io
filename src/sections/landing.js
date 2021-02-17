import React from 'react';
import styled from 'styled-components';
import background from '../assets/images/background.jpg';

const ContainerStyles = styled.div`
	background-image: url(${background});
	background-postion: center center;
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 100vh;
`;

export const Landing = () => {
	return <ContainerStyles></ContainerStyles>;
};
