import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Button, { ButtonProps } from './Button'

const meta = {
    title: 'Molecules/Button',
    component: Button,
    argTypes: {},
} satisfies Meta<ButtonProps>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Botão',
    },
}
