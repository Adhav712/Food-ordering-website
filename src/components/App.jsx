import { Header } from './Header'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Carts from './Carts'
import Offers from './Offers'
import Body from './Body'

function App() {
  return (
    // className='bg-gray-400'
    <div >
      <Header />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/offers',
        element: <Offers />
      },
      {
        path: '/carts',
        element: <Carts />
      }
    ]
  },
])

export default router
