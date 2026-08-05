import { createFileRoute } from '@tanstack/react-router'
import CategoriesPage from '../pages/main-pages/categories/CategoriesPage'

export const Route = createFileRoute('/main-pages/categories')({
  component: () => <CategoriesPage />
})

