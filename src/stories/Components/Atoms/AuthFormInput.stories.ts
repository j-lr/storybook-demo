
import type { Meta, StoryObj } from '@storybook/react';


import AuthFormInput from './AuthFormInput';

const meta ={
    title: 'Components/AuthFormInput',  
    component:AuthFormInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AuthFormInput>;

export default meta;

type Story = StoryObj<typeof AuthFormInput>;



export const Default: Story = {
    name:'Default',
    args: {
        errorMessage: '',
    },
};
export const Error: Story = {
    name:'Error',
    args: {
        errorMessage: 'Invalid e-mail',
    },
};