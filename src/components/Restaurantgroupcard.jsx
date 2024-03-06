import { useDispatch } from "react-redux"
import { adding } from "../utils/Cartslice"

export const Restaurantgroupcard = (props) => {

    const { data } = props

    const { name, description, defaultPrice, imageId, id, price } = data?.card?.info


    const dispatch = useDispatch()

    const handlecheck = () => {
        return dispatch(adding('slice'))

    }
    return (
        <div key={id} className="mt-10 mb-12 shadow-black flex justify-between items-start">
            <div>
                <h1 className="text-xl mb-2 font-semibold "> {name} </h1>
                <h1 className="text-md my-2 font-semibold">  ₹ {defaultPrice / 100 || price / 100} </h1>
                <h1 className="text-sm my-2 text-gray-400 w-[40em]"> {description} </h1>
            </div>
            <div className="relative">
                <img className="object-cover size-28 rounded-xl shadow-md shadow-gray-400"
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + imageId} alt="" />
                <button
                    onClick={handlecheck}
                    className="hover:text-green-500 text-white bg-green-500 border border-green-400 
                                        rounded-md shadow-md w-20 py-1 absolute left-4 hover:bg-white top-24" type="button">Add</button>
            </div>
        </div>
    )
}