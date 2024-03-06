import { Header } from './Header'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Contact from './Contact'
import Carts from './Carts'
import Offers from './Offers'
import { Body } from './Body'
import { SpecificDish } from './SpecificDish'
import { Restaurantcarddetails } from './Restaurantcarddetails'
import { Provider } from 'react-redux'
import reduxstore from '../utils/reduxstore'


function App() {

  return (

    // className='bg-gray-400'
    <Provider store={reduxstore}>
      <div className=''>
        <Header />
        <Outlet />
      </div>
    </Provider >
  )
}
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '/',
          element: <Body />
        },
        {
          path: '/home',
          element: <Body />
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
        },
        {
          path: `/restaurant/:resId`,
          element: <SpecificDish />
        },
        {
          path: '/home/restaurantdetails/:resId',
          element: <Restaurantcarddetails />
        },
        {
          path: '/home/topratedrestaurant/:resId',
          element: <Restaurantcarddetails />
        },
        {
          path: '/reataurantitem/:resId',
          element: <Restaurantcarddetails />
        }

      ],

      // errorElement

    },

  ])

export default router
