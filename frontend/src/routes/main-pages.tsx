import { createFileRoute } from '@tanstack/react-router'
import RouteMainPage from '../pages/main-pages/-RouteMainPage'

export const Route = createFileRoute('/main-pages')({
  component: RouteMainPage,
})

