import { ChevronDown } from "lucide-react";
import { Restaurantgroupcard } from "./Restaurantgroupcard";
import { useState } from "react";
import { EmptyCart } from "./EmptyCart";

//*  COMMON CARD DETAILS - { TITLE , OFFER DETAILS }!!

export const Restauranttitlecard = (props) => {
  const { data } = props;

  const [showdata, setshowndata] = useState(null);

  const datashow = (index) => {
    setshowndata(index === showdata ? null : index);
  };

  const filtereditems = data?.cards.filter((item) => item?.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )

  // console.log(filtereditems);
  // console.log(data);

  return (
    <div className="my-5 mx-2 ">
      {filtereditems === undefined || filtereditems.length === 0 ? <h1 className="text-center text-xl">Sorry, there are no dishes available at the moment. Please check back later!!!!</h1> :
        filtereditems.map((item, index) => {
          return (
            <div
              key={item?.card?.card?.title}
              className=" px-8 max-sm:px-5 my-5 shadow-lg shadow-gray-300 rounded-xl py-5 "
            >
              <div
                className="flex justify-between mt-5"
                onClick={() => {
                  datashow(index);
                }}
              >
                <h1 className=" text-xl font-bold text-gray-900 max-sm:text-lg">
                  {item?.card?.card?.title}
                  {` (${item?.card?.card?.itemCards.length})`}
                </h1>
                <ChevronDown className="size-10 text-gray-900 cursor-pointer" />
              </div>
              {showdata === index && (
                <div>
                  <Restaurantgroupcard
                    key={item?.card?.info?.id}
                    data={item?.card?.card?.itemCards}
                  />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};
