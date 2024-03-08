import { useDispatch, useSelector } from "react-redux";
import { additems } from "../utils/Cartslice";
import { useEffect, useState } from "react";


export const Restaurantgroupcard = ({ data }) => {

    const dispatch = useDispatch()
    const selector = useSelector((store) => store.cart.items)

    const handlecheck = (item) => {
        dispatch(additems(item))
    }

    return (<div>
        {data.map((item) => {
            const { name, description, defaultPrice, imageId, id, price } = item?.card?.info

            return < div key={id + 1} className="mt-10 mb-12 max-sm:mb-1 flex justify-between items-center border-b-2 pb-8 border-gray-200" >
                <div>
                    <h1 className="text-xl mb-2 font-semibold "> {name} </h1>
                    <h1 className="text-md my-2 font-semibold">  ₹ {defaultPrice / 100 || price / 100} </h1>
                    <h1 className="text-sm my-2 text-gray-400 w-[35em]"> {description} </h1>
                </div>
                <div className="relative">
                    {imageId && <img className="object-cover size-28 rounded-xl shadow-md shadow-gray-400"
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + imageId} alt="" />
                    }
                    {imageId ? <button
                        onClick={() => { handlecheck(item) }}
                        className="hover:text-green-500 text-white bg-green-500 border border-green-400 
                                        rounded-md shadow-md w-20 py-1 absolute right-4 hover:bg-white top-24" type="button">Add</button> : <button
                        onClick={() => { handlecheck(item) }}
                        className="hover:text-green-500 text-white bg-green-500 border border-green-400 
                                                        rounded-md shadow-md w-20 py-1 absolute top-4 right-4 hover:bg-white " type="button">Add</button>}
                </div>
            </div >
        })
        }
    </div>
    )
}