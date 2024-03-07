import usescrollreataurent from "../Hooks/usescrollreataurent"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Shimmercards } from "./Shimmercards"
import { useState } from "react"

// Restaurants with online food delivery in Chennai

export const Restaurantcard = () => {

    const { data } = usescrollreataurent()

    const headingdata = data[2]?.card?.card

    const mapdata = data[4]?.card?.card?.gridElements?.infoWithStyle

    const [search, setsearch] = useState()

    const [originallist, setoriginallist] = useState([])
    console.log(originallist);

    return (
        <div>
            <div >
                <h1 className="max-sm:text-sm text-gray-900 text-2xl font-bold mt-10">{headingdata?.title}</h1>
            </div>
            <div className="my-5">
                <input className="outline-none border-2 rounded-lg p-2 mx-2 px-4 border-[#fca729]" type="text" name="search" id="search"
                    onChange={(e) => {
                        e.target.value === item?.info?.name
                        console.log(e.target.value);
                    }}
                />

                <button
                    onClick={() => { }}
                    className="text-white bg-[#fca729] rounded-lg px-8 text-lg py-[0.3em] hover:text-[#fca729] hover:bg-white hover:border-[#fca729] hover:border-2">Search</button>

                <button className="text-black py-1 px-4 border border-black mx-2 rounded-3xl">Offers</button>
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    data.length < 1 ? <Shimmercards /> : mapdata?.restaurants.map((item) => {
                        const { id, name, avgRatingString, cuisines, sla, cloudinaryImageId, costForTwo } = item?.info
                        return (
                            <Link key={id} to={'/home/topratedrestaurant/' + id}>
                                <div key={id} className=' my-8 transition ease-in delay-75  hover:scale-95  duration-100  
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
                            </Link>
                        )
                    })
                }
            </div>
        </div >
    )
}

const Offercart = () => {
    return (
        <div>
            <Restaurantcard />
        </div>
    )
}