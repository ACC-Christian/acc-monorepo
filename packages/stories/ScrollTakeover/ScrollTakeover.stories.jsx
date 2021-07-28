import React from 'react';
import { ScrollTakeover } from './ScrollTakeover';
import styled from "styled-components";

const Logo = styled.svg`
`;

export default {
    component: ScrollTakeover,
    title: 'Components/ScrollTakeover',
}

export const Primary = () => <ScrollTakeover campus="sdfsdf" mainText="this is written in the story" color="red" label="this is button text" />;
// export const Secondary = () => <Cta campus="sfsdfs" copy="sadasdasdskndlkgdd" color="green" />;
// export const Tertiary = () => <Cta campus="sdfsfsf" copy="jjghjghdskndlkgdd" color="blue" />;
