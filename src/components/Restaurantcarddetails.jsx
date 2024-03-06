import { Star } from "lucide-react"
import { Info } from "lucide-react"
import { Clock4 } from "lucide-react"
import { IndianRupee } from "lucide-react"
import { userestaurantdetails } from "../Hooks/userestaurantdetails"
import { Restauranttitlecard } from "./Restauranttitlecard"
import { Shimmeraccordian } from './Shimmeraccordian'

export const Restaurantcarddetails = () => {

    const { data } = userestaurantdetails()
    const headerdata = data?.cards[0]?.card?.card?.info
    const item = data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    const groupedCard = data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
    const datalen = data?.cards?.length
    console.log(datalen);
    
    return datalen === undefined ? <Shimmeraccordian /> : (
        < div className="mx-[17em] mt-20 overflow-hidden" >
            {console.log(datalen)}
            <div className=" border border-gray-300 px-8 rounded-xl">
                <h1 className="text-gray-900 text-4xl font-bold mt-10">{headerdata?.name}</h1>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-gray-500 mt-4">{headerdata?.cuisines.join(' ')}</h1>
                        <h1 className="text-gray-500 m1-1">{headerdata?.areaName} {headerdata?.sla?.lastMileTravelString}</h1>
                    </div>
                    <div className="border-2 border-slate-300 p-2 mx-2">
                        <div className="flex justify-center border-b-2 border-slate-300 ">
                            {
                                < Star className="p-1 size-8 font-bold text-green-600" />}
                            <p className="pt-1 text-lg font-bold text-green-600 "  >{headerdata?.avgRatingString}</p>
                        </div>
                        <p className="text-gray-500 font-semibold">{headerdata?.totalRatingsString}</p>
                    </div>
                </div>
                <div className="border-b-[0.2em]  border-dashed items-center pt-4 pb-2 border-slate-300 flex ">
                    <Info className="bg-orange-500 mb-4 size-6 text-white rounded-full mx-2" />
                    <p className="text-slate-500 pb-4">{headerdata?.feeDetails?.message}</p>
                </div>

                {/* timing and pricing */}
                {<div>
                    <div className="flex mx-2 items-center my-5">
                        <Clock4 className=" text-gray-700 size-6  rounded-full" />
                        <p className="mx-2 text-gray-700  font-bold text-lg mr-5" >{headerdata?.sla?.slaString}</p>
                        <IndianRupee className=" text-gray-700 size-7 p-[2px]  rounded-full" />
                        <p className=" text-gray-700  font-bold text-lg uppercase" >{headerdata?.costForTwo / 100} for two</p>
                    </div>
                </div>}
            </div>

            {/* flat offers */}
            <div className="inline-flex min-w-72 mt-10 ">
                {
                    item?.offers.map((item) => {
                        const { header, couponCode, description, offerLogo } = item?.info
                        return couponCode && (
                            <div key={item.info.offerIds} className="w-52 mx-2 border-2 border-gray-400  p-2 rounded-md ">
                                <div className="flex">
                                    <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/' + offerLogo} alt="" />
                                    <p className="text-gray-700 uppercase text-md font-bold">{header} </p>
                                </div>
                                <p className="text-gray-500 uppercase text-sm">{couponCode} | {description}</p>
                            </div>
                        )
                    })
                }
            </div>
            < Restauranttitlecard data={groupedCard} />
        </div >
    )
}