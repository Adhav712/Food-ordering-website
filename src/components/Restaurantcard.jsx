import useScrollRestaurant from "../Hooks/useScrollRestaurant";
import { Shimmercards } from "./Shimmercards";
import { useEffect, useState } from "react";
import { Restaurantmainmenucart } from "./Restaurantmainmenucart";
import { Link } from "react-router-dom";
import { withofferlabel } from "./Restaurantmainmenucart";
import { Search } from "lucide-react";
import { Footer } from "./Footer";

//^ Restaurants with online food delivery in Chennai  [ SEARCH ]

export const Restaurantcard = () => {
  const { data } = useScrollRestaurant();

  const [originallist, setoriginallist] = useState([]);
  const [inputsearch, setinputsearch] = useState();
  const [filterarray, setfilterarray] = useState([]);

  const headingdata = data[2]?.card?.card;
  const mapdata = data[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  useEffect(() => {
    setoriginallist(mapdata);
    setfilterarray(mapdata);
  }, [mapdata]);

  const featuresbutton = (e) => {
    e.target.className =
      "text-gray-600  py-2 px-4 border  border-gray-300 mx-2 rounded-3xl";
    e.target.classList.add("bg-gray-200");
    const button = e.target.parentNode.querySelectorAll("Button");

    button.forEach((element) => {
      if (element !== e.target) {
        element.classList.remove("bg-gray-200");
      }
    });
    //(e.target.innerText);
    switch (e.target.innerText) {
      case "Rating 4+": {
        const ratings = originallist.filter((item) => {
          return item.info.avgRating >= 4.3;
        });
        setfilterarray(ratings);
        break;
      }
      case "Fast Delivery": {
        const delivery = originallist.filter((item) => {
          return item.info.sla.deliveryTime < 19;
        });
        setfilterarray(delivery);
        break;
      }
      case "Rs.250-Rs.300": {
        const pricerange = originallist.filter((item) => {
          //(item.info.costForTwo.includes("250"));
          return item.info.costForTwo.includes("250");
        });
        setfilterarray(pricerange);
        break;
      }
      default: {
        setfilterarray(originallist)
      }

    }


  };

  const Restaurantoffercart = withofferlabel(Restaurantmainmenucart);

  return originallist === undefined ? (
    <Shimmercards />
  ) : (
    <div>
      <div>
        <h1 className="max-sm:text-xl max-sm:mt-8 text-gray-900 text-2xl font-bold mt-10 ">
          {headingdata?.title}
        </h1>
      </div>
      <div className="my-5 mx-5 mt-10 max-sm:text-center ">
        <div className="inline-flex items-center relative">
          {/* //& input */}
          <input
            className="max-sm:w-48 w-64 max-sm:mx-1 outline-none border-2 rounded-lg p-2 mx-2 pl-10 border-[#fca729]"
            type="search"
            name="search"
            id="search"
            onChange={(e) => {
              const filteritem = originallist.filter((item) =>
                item?.info?.name
                  .toLocaleLowerCase()
                  .includes(e.target.value.toLocaleLowerCase())
              );
              setfilterarray(filteritem);
            }}
          />
          <Search className=" absolute left-4 size-5 text-[#fca729] mx-1" />
        </div>

        {/* //& ratings */}
        <button
          onClick={featuresbutton}
          className="text-gray-600 max-sm:text-sm max-sm:mx-1 max-sm:my-4  py-2 px-4 border border-gray-300 mx-2 ml-5 rounded-3xl"
        >
          Rating 4+
        </button>
        <button
          onClick={featuresbutton}
          className="text-gray-600 max-sm:text-sm max-sm:mx-1  max-sm:my-4 py-2 px-4 border border-gray-300 mx-2 rounded-3xl"
        >
          Fast Delivery
        </button>
        <button
          onClick={featuresbutton}
          className="text-gray-600 max-sm:text-sm max-sm:mx-1  max-sm:my-4 py-2 px-4 border border-gray-300 mx-2 rounded-3xl"
        >
          Rs.250-Rs.300
        </button>
        <button
          onClick={featuresbutton}
          className="text-gray-600 max-sm:text-sm max-sm:mx-0  max-sm:my-4 py-2 px-4 border border-gray-300 mx-2 rounded-3xl"
        >
          Reset
        </button>
      </div>
      <div className="flex flex-wrap justify-center ">
        {data.length > 0 &&
          filterarray.map((item) => {
            return (
              <Link
                key={item.info.id}
                to={"/home/topratedrestaurant/" + item.info.id}
              >
                {item.info.aggregatedDiscountInfoV3 === undefined ? (
                  <Restaurantmainmenucart data={item} />
                ) : (
                  <Restaurantoffercart data={item} />
                )}
              </Link>
            );
          })}
      </div>

    </div>
  );
};
