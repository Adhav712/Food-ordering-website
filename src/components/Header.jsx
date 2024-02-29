import images from '../images/applogo.png'
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <div className='overflow-hidden flex justify-between items-center m-2
          max-sm:block max-md:px-1 
      shadow-lg shadow-gray-300 px-32'>
            {/* sm:px-2 max-sm:px-4max-sm:text-center max-sm:h-40 max-sm:py-0 */}
            <div className='flex justify-center'>
                <img src={images} alt="logo" className='w-36 ' />
            </div>
            <ul className='flex items-center justify-center'>
                <Link to={'/home'}> <li className='outline-none mx-4 text-lg text-gray-500 font-semibold max-sm:text-sm max-sm:text-md max-sm:mx-[0.4em] hover:text-orange-600 hover:border-b border-orange-600'>Home</li></Link>
                <Link to={'/about'}> <li className='outline-none mx-4 text-lg text-gray-500 font-semibold max-sm:text-sm max-sm:text-md max-sm:mx-[0.4em] hover:text-orange-600 hover:border-b border-orange-600'>About</li></Link>
                <Link className='flex items-center mx-2' to={'/contact'}>
                    <li className='mx-2 outline-none text-lg text-gray-500 font-semibold max-sm:text-md max-sm:text-sm max-sm:mx-[0.4em] hover:text-orange-600 hover:border-b border-orange-600'>Contact us</li></Link>
                <Link to={'/offers'}>
                    <li className=' outline-none text-lg text-gray-500 font-semibold max-sm:text-md max-sm:text-sm max-sm:mx-[0.4em] hover:text-orange-600 hover:border-b border-orange-600'>Offers</li></Link>
                <Link to={'/carts'}> <li className='outline-none  mx-4 text-lg text-gray-500 max-sm:text-sm font-semibold max-sm:text-md max-sm:mx-[0.4em] hover:text-orange-600 hover:border-b border-orange-600'>Carts</li></Link>
            </ul>
        </div >
    )
}

{/* <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#6b7280" d="M7 20q-.825 0-1.412-.587T5 18v-7.15l-2 1.525q-.35.25-.75.213T1.6 12.2q-.25-.35-.2-.75t.4-.65l8.975-6.875q.275-.2.588-.3t.637-.1q.325 0 .638.1t.587.3L16 6.05V5.5q0-.625.438-1.062T17.5 4q.625 0 1.063.438T19 5.5v2.85l3.2 2.45q.325.25.388.65t-.188.75q-.25.35-.65.388t-.75-.213l-2-1.525V18q0 .825-.587 1.413T17 20h-2q-.825 0-1.412-.587T13 18v-4h-2v4q0 .825-.587 1.413T9 20zm0-2h2v-4q0-.825.588-1.412T11 12h2q.825 0 1.413.588T15 14v4h2V9.325l-5-3.8l-5 3.8zm3-7.975h4q0-.8-.6-1.313T12 8.2q-.8 0-1.4.513t-.6 1.312M9 18v-4q0-.825.588-1.412T11 12h2q.825 0 1.413.588T15 14v4v-4q0-.825-.587-1.412T13 12h-2q-.825 0-1.412.588T9 14z" /></svg> */ }
{/* <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#6b7280" d="M19 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1z" /></svg> */ }
{/* <svg className='ml-4 mr-1 flex items-center ' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#6b7280" d="m20.749 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1h-2.199l-1.103-1.909a1.008 1.008 0 0 0-.607-.466a.993.993 0 0 0-.759.1L12 3.251l-1.91-1.105a1 1 0 0 0-1.366.366L7.62 4.422H5.421a1 1 0 0 0-1 1v2.199l-1.91 1.104a.998.998 0 0 0-.365 1.367L3.25 12l-1.104 1.908a1.004 1.004 0 0 0 .364 1.367l1.91 1.104v2.199a1 1 0 0 0 1 1h2.2l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135l1.908-1.104l1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1v-2.199l1.91-1.104a1 1 0 0 0 .365-1.367zM9.499 6.99a1.5 1.5 0 1 1-.001 3.001a1.5 1.5 0 0 1 .001-3.001m.3 9.6l-1.6-1.199l6-8l1.6 1.199zm4.7.4a1.5 1.5 0 1 1 .001-3.001a1.5 1.5 0 0 1-.001 3.001" /></svg> */ }
{/* <svg className='ml-2 mx-2' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#6b7280" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" /></svg> */ }
