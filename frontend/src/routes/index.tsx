import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <h3>Добро пожаловать на главную страницу!</h3>,
})
