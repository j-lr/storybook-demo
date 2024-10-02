
import type { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './Input';
import React, { useState } from 'react';

const meta ={
    title: 'Components/Input',  
    component:Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;



export const Default: Story = {
    name:'Default Text Input',
    args: {
        type: 'text',
        placeholder: 'Enter your name',
        initialValue: '',
        // onChangeListener: (event) => args.initialValue = event,
    },
};