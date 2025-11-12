import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Input, { InputProps } from './Input'

const meta = {
    title: 'Molecules/Input',
    component: Input,
    argTypes: {},
} satisfies Meta<InputProps>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        value: 'Input',
    },
}

export const Disabled: Story = {
    args: {
        value: 'Input',
        disabled: true,
    },
}
