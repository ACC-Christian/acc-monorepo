import React from 'react';
import { AcademicImprovement } from './AcademicImprovement';

import styled from "styled-components";

const Logo = styled.svg`
`;

export default {
    //Component name needs to align with import above and the Component below
    component: AcademicImprovement,
    // Title below can be anything, this is what appears in the Storybook UI
    title: 'Sections/AcademicImprovement',
}

export const Primary = () => <AcademicImprovement copy="This is placeholder copy" image="undefined" />;

