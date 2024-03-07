import { ChevronDown } from "lucide-react";
import { Restaurantgroupcard } from "./Restaurantgroupcard";
import { useState } from "react";

export const Restauranttitlecard = (props) => {

    const { data } = props

    const [showdata, setshowndata] = useState(null)

    const datashow = (index) => {
        setshowndata(index === showdata ? null : index)
    }

    console.log(data?.cards.length);

    return (
        <div className="my-10  ">
            {
                data?.cards.filter((item) => item?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                    .map((item, index) => {
                        return (
                            <div key={item?.card?.card?.title}
                                className=" px-8 my-5 shadow-lg shadow-gray-300 rounded-xl py-5 ">

                                <div
                                    className="flex justify-between mt-5"
                                    onClick={() => { datashow(index) }}
                                >
                                    <h1
                                        className=" text-xl font-bold text-gray-900">
                                        {item?.card?.card?.title}{` (${item?.card?.card?.itemCards.length})`}</h1>
                                    <ChevronDown
                                        className="size-10 text-gray-900 cursor-pointer" />
                                </div>
                                {
                                    showdata === index && (
                                        < div >
                                            < Restaurantgroupcard key={item?.card?.info?.id} data={item?.card?.card?.itemCards} />
                                        </div>
                                    )
                                }
                            </div>)
                    })
            }
        </div >
    )
}