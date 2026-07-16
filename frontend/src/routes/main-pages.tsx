import { createFileRoute } from '@tanstack/react-router'
import RouteMainPage from './page/-RouteMainPage'

export const Route = createFileRoute('/main-pages')({
  component: RouteMainPage,
})

