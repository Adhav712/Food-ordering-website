import images from '../images/goodfoodlogo.png'
import { Link } from 'react-router-dom'
import { BadgePercent, Home, Contact, ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';

export const Header = () => {

    const selector = useSelector((store) => store.cart.items)

    return (
        <div className='overflow-hidden flex justify-between items-center m-2
          max-sm:block max-md:px-1 max-lg:block  
      shadow-lg shadow-gray-300 px-32'>

            <div className='flex justify-center'>
                <Link to={'/home'}> <img src={images} alt="logo" className='w-72  mx-5 ' /></Link>
            </div>

            <ul className='flex items-center justify-center'>
                <Link to={'/home'}>
                    <li className=' flex justify-center items-center outline-none mx-2 text-[1.4em] 
                     text-gray-500 font-semibold  max-sm:text-sm  max-xl:text-md  max-sm:mx-[0.4em] hover:text-[#fca729] '>

                        <Home className='mx-1 text-gray-500 hover:text-[#fca729] w-[24px] max-sm:w-[15px] max-sm:mx-0' />
                        Home</li></Link>
                <Link className='flex items-center ' to={'/contact'}>
                    <li
                        className=' flex justify-center items-center mx-4 outline-none text-[1.4em] text-gray-500 font-semibold max-sm:text-md max-sm:text-sm max-sm:mx-[0.4em] hover:text-[#fca729]' >

                        <Contact className='mx-1 text-gray-500 hover:text-[#fca729] w-[24px] max-sm:w-[15px] max-sm:mx-0' />
                        Contact us</li></Link>
                <Link
                    to={'/offers'}>
                    <li
                        className='flex justify-center items-center outline-none text-[1.4em] text-gray-500 font-semibold max-sm:text-md max-sm:text-sm max-sm:mx-[0.4em] hover:text-[#fca729]'>
                        <BadgePercent className='mx-1 text-gray-500 hover:text-[#fca729] w-[24px] max-sm:w-[15px] max-sm:mx-0' />
                        Offers</li></Link>
                <Link to={'/carts'}> <li
                    className=' flex justify-center items-center outline-none  mx-4 text-[1.4em] text-gray-500 max-sm:text-sm font-semibold max-sm:text-md max-sm:mx-[0.4em] hover:text-[#fca729]'>

                    <ShoppingCart className='mx-2 text-gray-500 hover:text-[#fca729] w-[24px] max-sm:w-[15px] max-sm:mx-0' />
                    Carts :  <span className='text-[#fca729] mx-1 '> {selector.length}</span></li>
                </Link>

            </ul>
        </div >
    )
}
