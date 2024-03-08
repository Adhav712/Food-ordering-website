import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

export const Topratedcart = ({ data }) => {
    const { id, name, avgRatingString, cuisines, sla, cloudinaryImageId } = data?.info

    return (
        <div>
            <Link to={'/home/restaurantdetails/' + id}>

                <div key={id} className='transition ease-in delay-75  hover:scale-95  duration-100  
w-[24em] max-sm:w-[12em] max-sm:h-[18em] max-w-64 shadow-md shadow-slate-300  rounded-xl p-4 m-2 min-h-48 h-[24em] max-h-[30em] '>
                    <div className='flex justify-center items-center'>
                        <img
                            className='max-sm:w-36 max-sm:10 max-sm:h-28 rounded-lg w-60 h-44 object-cover shadow-md shadow-slate-400'
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
                    </div>
                    <div className='mx-2 text-left'>
                        <h1 className='text-xl font-semibold my-4 text-gray-800'>{name}</h1>
                        <div className=' flex  items-center'>
                            <Star className='max-sm:size-5  size-6 mr-2 rounded-full p-1 bg-green-600 text-white' />
                            <p className='font-semibold'>{avgRatingString} </p>
                            <p className='mx-2 font-semibold'> {sla?.slaString}</p>
                        </div>
                        <p className='my-2 mx-1 max-sm:text-sm font-normal text-gray-500'>{cuisines.splice(0, 2).join(' , ')}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}


// export const withlabeltopratedcart = (Topratedcart) => {
//     return (data) => {
//         console.log(data?.data?.info);
//         // const { header, subHeader } = data
//         // console.log(header, subHeader);
//         return (
//             <div className="text-center">
//                 <Topratedcart {...data} />
//                 {/* <h1 className="relative bottom-[17.9em] text-lg font-bold text-gray-100 shadow-md */}
//                 {/* bg-gradient-to-t  from-gray-900  mx-7 rounded-b-lg py-1">{header} {subHeader}</h1> */}
//             </div>
//         )
//     }
// }