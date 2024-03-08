import { Star } from "lucide-react"

export const Restaurantmainmenucart = ({ data }) => {
    const { name, avgRatingString, cuisines, sla, cloudinaryImageId, costForTwo } = data?.info

    return data !== undefined && (
        <div className="">
            <div className=' my-8 transition ease-in delay-75  hover:scale-95  duration-100  
                             max-sm:w-52 w-[18em]  shadow-md shadow-slate-300  rounded-xl p-4 m-3 min-h-48 h-[28em] max-h-[30em]'>
                <div className='flex justify-center items-center'>
                    <img
                        className='max-sm:w-44 max-sm:44 rounded-lg w-80 h-44 object-cover shadow-md shadow-slate-400'
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
                </div>
                <div className='mx-2 text-left'>
                    <h1 className='text-xl font-semibold my-4 text-gray-800'>{name}</h1>
                    <div className=' flex  items-center'>
                        <Star className='max-sm:size-5  size-6 mr-2 rounded-full p-1 bg-green-600 text-white' />
                        <p className='font-semibold '>{avgRatingString} </p>
                        <p className='mx-4 font-semibold'> {sla?.slaString}</p>
                    </div>
                    <div className="flex items-center ">
                        <p className='my-4 mx-1 max-sm:text-sm font-semibold '>{costForTwo}</p>
                        <p className='my-4 mx-4 max-sm:text-sm font-semibold'>{sla?.lastMileTravelString}</p>
                    </div>
                    <p className='mx-1 max-sm:text-sm font-normal'>{cuisines.length > 4 ? cuisines.splice(0, 1).join(" , ") : cuisines.join(' , ')}</p>
                </div>
            </div>
        </div >
    )
}

export const withofferlabel = (Restaurantmainmenucart) => {
    return (data) => {
        const { header, subHeader, } = data?.data.info.aggregatedDiscountInfoV3
        return <div className="text-center">
            <Restaurantmainmenucart {...data} />
            <h1 className="relative bottom-[17.9em] text-lg font-bold text-gray-100 shadow-md
           bg-gradient-to-t  from-gray-900  mx-7 rounded-b-lg py-1">{header} {subHeader}</h1>
        </div>
    }
}
