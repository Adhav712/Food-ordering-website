import usescrollreataurent from '../Hooks/usescrollreataurent'
import { Star } from 'lucide-react'
import { Link } from "react-router-dom"

export const SpecificDish = () => {

    const { restitem } = usescrollreataurent()

    const typedatas = restitem.filter(data => {
        return data?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    })

    return restitem.length < 0 ? <h1>Loading..........</h1> : (
        < div >
            < div className='mx-44 max-md:mx-20 max-lg:mx-28 max-sm:mx-10'>
                <div className='mt-20'>
                    <h1 className='text-gray-800 text-4xl font-semibold my-5'>{restitem[0]?.card?.card?.title}</h1>
                    <p className='mx-4 my-2 text-md text-slate-600 font-semibold'>{restitem[0]?.card?.card?.description}</p>
                </div>

                <div className='text-gray-800 mx-4 mt-8 text-2xl font-bold '>
                    <h1>{restitem[2]?.card?.card?.gridElements?.infoWithStyle?.text}</h1>
                </div>


                <div className='flex justify-center flex-wrap '>
                    {
                        typedatas.map(item => {
                            const { id, cloudinaryImageId, avgRatingString, sla, cuisines, name } = item?.card?.card?.info
                            console.log(cuisines.length);
                            return (
                                <Link to={"/reataurantitem/" + id}>
                                    <div key={id} className='w-72 shadow-md h-96 shadow-gray-300  rounded-xl p-4 m-2 min-h-32'>
                                        <div className='flex justify-center items-center'>
                                            <img
                                                className=' rounded-lg  w-64 h-44 object-cover shadow-md shadow-slate-400'
                                                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
                                        </div>
                                        <div className='mx-2 my-2 text-left'>
                                            <h1 className='text-xl font-semibold my-4 text-gray-800'>{name}</h1>
                                            <div className='my-2 flex  items-center'>
                                                <Star className='max-sm:size-5  size-6 mr-2 rounded-full p-1 bg-green-600 text-white' />
                                                <p className='font-semibold'>{avgRatingString} </p>
                                                <p className='mx-2 font-semibold'> {sla?.slaString}</p>
                                            </div>
                                            <p className='my-2 mx-1 max-sm:text-sm font-light'>{cuisines.length > 5 ? cuisines.splice(0, 1).join(" , ") : cuisines.join(' , ')}</p>
                                        </div>
                                    </div>

                                </Link>
                            )
                        })
                    }
                </div>
            </div >
        </div >
    )
}

