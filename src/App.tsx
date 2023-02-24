import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterPage from '@/routes'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <RouterPage />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
