import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Button, { ButtonProps } from './Button'

const meta = {
    title: 'Molecules/Button',
    component: Button,
    argTypes: {
        children: {
            type: 'string',
        },
        disabled: {
            type: 'boolean',
        },
        className: {
            type: 'string',
        }
    },
} satisfies Meta<ButtonProps>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Botão',
    },
}

export const Violet: Story = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
    },
}
