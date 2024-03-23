import { Link } from "react-router-dom";
import preview from '../images/preview.png'


export const EmptyCart = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <img className='w-[26em]' src={preview} alt="imnage" />
            </div>
            <div className='text-center'>
                <h1 className='py-4 text-4xl font-semibold font-mono'>Your Cart is empty</h1>
                <Link to={'/home'}><button className='uppercase font-medium rounded-md text-lg text-center px-4 p-2 border-2 border-[#fca729] text-[#fca729] hover:bg-[#fca729] hover:text-white'>Browse Restaurent</button></Link>
            </div>
        </div>
    )
}