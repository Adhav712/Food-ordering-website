import images from '../images/applogo.png'
import { Link } from 'react-router-dom'
import { BadgePercent, Home, Contact, ShoppingCart } from 'lucide-react';

export const Header = () => {
    return (
        <div className='overflow-hidden flex justify-between items-center m-2
          max-sm:block max-md:px-1 
      shadow-lg shadow-gray-300 px-32'>

            <div className='flex justify-center'>
                <img src={images} alt="logo" className='w-36 ' />
            </div>

            <ul className='flex items-center justify-center'>
                <Link to={'/home'}>
                    <li className=' flex justify-center items-center outline-none mx-2 text-[1.4em] text-gray-500 font-semibold  max-sm:text-sm max-sm:text-md max-sm:mx-[0.4em] hover:text-[#fe8f23] '>

                        <Home className='mx-1 text-gray-500 hover:text-[#fe8f23] w-[24px] max-sm:w-[15px] max-sm:mx-0' />
                        Home</li></Link>
                <Link className='flex items-center ' to={'/contact'}>
                    <li
                        className=' flex justify-center items-center mx-4 outline-none text-[1.4em] text-gray-500 font-semibold max-sm:text-md max-sm:text-sm max-sm:mx-[0.4em] hover:text-[#fe8f23]' >

                        <Contact className='mx-1 text-gray-500 hover:text-[#fe8f23] w-[24px] max-sm:w-[15px] max-sm:mx-0' />
                        Contact us</li></Link>
                <Link
                    to={'/offers'}>
                    <li
                        className='flex justify-center items-center outline-none text-[1.4em] text-gray-500 font-semibold max-sm:text-md max-sm:text-sm max-sm:mx-[0.4em] hover:text-[#fe8f23]'>
                        <BadgePercent className='mx-1 text-gray-500 hover:text-[#fe8f23] w-[24px] max-sm:w-[15px] max-sm:mx-0' />
                        Offers</li></Link>
                <Link to={'/carts'}> <li
                    className=' flex justify-center items-center outline-none  mx-4 text-[1.4em] text-gray-500 max-sm:text-sm font-semibold max-sm:text-md max-sm:mx-[0.4em] hover:text-[#fe8f23]'>

                    <ShoppingCart className='mx-1 text-gray-500 hover:text-[#fe8f23] w-[24px] max-sm:w-[15px] max-sm:mx-0' />
                    Carts</li></Link>
            </ul>
        </div >
    )
}
