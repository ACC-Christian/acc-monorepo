import React from 'react';

import styled from "styled-components"
import { Acclogo } from './acclogo';

const Logo = styled.svg`
`;

export default {
    title: 'Visuals/Acclogo',
    component: Logo,
    argTypes: {
        color: { control: 'color' },
    },
};

const Template = (args) => <Acclogo {...args} />;

export const Campus = Template.bind({});
Campus.args = {
    primary: true,
    label: 'ACC Logo',
    campus: 'Singleton'
};

export const White = Template.bind({});
White.args = {
    color: '#fff',
    label: 'ACC Logo White',
};

export const Black = Template.bind({});
Black.args = {
    color: '#2a333c',
    label: 'ACC Logo Black',
};