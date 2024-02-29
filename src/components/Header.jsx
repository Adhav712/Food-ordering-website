import images from '../images/applogo.png'

console.log(images);

export const Header = () => {
    return (
        <div className='overflow-hidden flex justify-between items-center m-2 px-20 p-4 h-28 shadow-lg shadow-gray-300 md:px-10 sm:px-2 max-sm:px-4 max-sm:block max-sm:text-center max-sm:h-40 max-sm:py-0'>
            <div className='flex justify-center'>
                <img src={images} alt="logo" className='w-32' />
            </div>
            <ul className='inline-flex '>
                <li className='mx-4 text-xl text-gray-500 font-semibold max-sm:text-sm max-sm:mx-[0.4em] hover:text-orange-600 hover:border-b border-orange-600'>Home</li>
                <li className='mx-4 text-xl text-gray-500 font-semibold max-sm:text-sm max-sm:mx-[0.4em] hover:text-orange-600 hover:border-b border-orange-600'>About</li>
                <li className='mx-4 text-xl text-gray-500 font-semibold max-sm:text-sm max-sm:mx-[0.4em] hover:text-orange-600 hover:border-b border-orange-600'>Contact us</li>
                <li className='mx-4 text-xl text-gray-500 font-semibold max-sm:text-sm max-sm:mx-[0.4em] hover:text-orange-600 hover:border-b border-orange-600'>offers</li>
                <li className='mx-4 text-xl text-gray-500 font-semibold max-sm:text-sm max-sm:mx-[0.4em] hover:text-orange-600 hover:border-b border-orange-600'>Carts</li>
            </ul>
        </div >
    )
}