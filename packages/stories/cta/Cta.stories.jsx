import React from 'react';
import { Cta } from './Cta';
import styled from "styled-components";

const Logo = styled.svg`
`;

export default {
    component: Cta,
    title: 'Components/CTA',
}

export const Primary = () => <Cta campus="sdfsdf" mainText="this is written in the story" color="red" label="this is button text" />;
// export const Secondary = () => <Cta campus="sfsdfs" copy="sadasdasdskndlkgdd" color="green" />;
// export const Tertiary = () => <Cta campus="sdfsfsf" copy="jjghjghdskndlkgdd" color="blue" />;
