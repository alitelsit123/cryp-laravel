import { RouterProvider } from 'react-router-dom'
import { router } from './routes/root'

function Index() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Index
