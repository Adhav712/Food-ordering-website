import { Star } from "lucide-react";
import { Info } from "lucide-react";
import { Clock4 } from "lucide-react";
import { IndianRupee } from "lucide-react";
// import { useRestaurantDetails } from "../Hooks/useRestaurantDetails";
import { Restauranttitlecard } from "./Restauranttitlecard";
import { Shimmeraccordian } from "./Shimmeraccordian";
import Scrolldishdata from '../Mock/Scrolldishdata.json'
import Accordiandata from "../Mock/Accordiandata.json";
import Accordiandatas from "../Mock/Accordiandatas.json";
import { useParams } from "react-router-dom";
export const Restaurantcarddetails = () => {
  const { resId } = useParams();

  const Accordiancard = Accordiandata.data.find(
    (item) => item.data.cards[0].card.card.info.id === resId
  );
  const Accordiancard2 = Accordiandatas.data.find(
    (item) => item.data.cards[0].card.card.info.id === resId
  );

  const Scrolldishdatas = Scrolldishdata.data.find(item => item.data.cards[0].card.card.info.id === resId)

  console.log(Scrolldishdatas);

  const headerdata =
    Scrolldishdatas?.data?.cards[0]?.card?.card?.info ||
    Accordiancard?.data?.cards[0]?.card?.card?.info ||
    Accordiancard2?.data?.cards[0]?.card?.card?.info


  const item =
    Scrolldishdatas?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  Accordiancard?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle ||
    Accordiancard2?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle

  const groupedCard =
    Scrolldishdatas?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR ||
    Accordiancard?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR ||
    Accordiancard2?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR

  return (
    <div className="mx-[17em] max-sm:mx-[1em] max-lg:mx-[2em] mt-20 max-sm:mt-10 overflow-hidden ">
      <div className=" border border-gray-300 px-8 max-sm:px-4 rounded-xl">
        <h1 className="text-gray-900 text-4xl font-bold mt-10 max-sm:text-2xl">
          {headerdata?.name}
        </h1>
        <div className="flex justify-between items-center max-sm:mt-4">
          <div>
            <h1 className="text-gray-500 mt-4">
              {headerdata?.cuisines.join(" ")}
            </h1>
            <h1 className="text-gray-500 m1-1 max-sm:text-sm">
              {headerdata?.areaName} {headerdata?.sla?.lastMileTravelString}
            </h1>
          </div>
          <div className="border-2 border-slate-300 p-2 mx-2 max-sm:border-1 ">
            <div className="flex justify-center items-center border-b-2 border-slate-300 max-sm:border-1">
              {
                <Star className="p-1 size-8 font-bold text-green-600 max-sm:size-6" />
              }
              <p className="pt-1 text-lg font-bold text-green-600 max-sm:text-sm">
                {headerdata?.avgRatingString}
              </p>
            </div>
            <p className="text-gray-500 font-semibold max-sm:text-sm ">
              {headerdata?.totalRatingsString}
            </p>
          </div>
        </div>
        <div className="border-b-[0.2em]  border-dashed items-center pt-4 pb-2 border-slate-300 flex ">
          {headerdata?.feeDetails?.message && (
            <Info className="bg-orange-500 mb-4 max-sm:w-7 size-6 text-white rounded-full mx-2" />
          )}
          <p className="text-slate-500 pb-4 max-sm:text-sm">
            {headerdata?.feeDetails?.message}
          </p>
        </div>

        {/* timing and pricing */}
        {
          <div>
            <div className="flex mx-2 items-center my-5">
              <Clock4 className=" text-gray-700 size-6  rounded-full max-sm:size-5" />
              <p className="mx-2 text-gray-700  font-bold text-lg mr-5 max-sm:text-sm">
                {headerdata?.sla?.slaString}
              </p>
              <IndianRupee className=" text-gray-700 size-7 p-[2px]  rounded-full max-sm:size-6" />
              <p className=" text-gray-700  font-bold text-lg uppercase max-sm:text-sm">
                {headerdata?.costForTwo / 100} for two
              </p>
            </div>
          </div>
        }
      </div>

      {/* flat offers */}
      <div className="inline-flex min-w-72 mx-2 mt-10 justify-center">
        {item?.offers.map((item) => {
          const { header, couponCode, description, offerLogo } = item?.info;
          return (
            couponCode && (
              <div
                key={item.info.offerIds}
                className="w-52 mx-2 border-2 border-gray-400  p-2 rounded-md "
              >
                <div className="flex">
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/" +
                      offerLogo
                    }
                    alt=""
                  />
                  <p className="text-gray-700 uppercase text-md font-bold">
                    {header}{" "}
                  </p>
                </div>
                <p className="text-gray-500 uppercase text-sm">
                  {couponCode} | {description}
                </p>
              </div>
            )
          );
        })}
      </div>
      <Restauranttitlecard data={groupedCard} />
    </div>
  );
};
