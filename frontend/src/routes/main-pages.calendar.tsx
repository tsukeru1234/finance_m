import { createFileRoute } from '@tanstack/react-router'
import CalendarPage from '../pages/main-pages/calendar/CalendarPage'

export const Route = createFileRoute('/main-pages/calendar')({
  component: () => <CalendarPage />,
})

