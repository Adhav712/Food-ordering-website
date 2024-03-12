import useScrollRestaurant from "../Hooks/useScrollRestaurant";
import { Shimmercards } from "./Shimmercards";
import { useEffect, useState } from "react";
import { Restaurantmainmenucart } from "./Restaurantmainmenucart";
import { Link } from "react-router-dom";
import { withofferlabel } from "./Restaurantmainmenucart";

//^ Restaurants with online food delivery in Chennai  [ SEARCH ]

export const Restaurantcard = () => {
  const { data } = useScrollRestaurant();

  //console.log(data);

  const [originallist, setoriginallist] = useState([]);
  const [inputsearch, setinputsearch] = useState();
  const [filterarray, setfilterarray] = useState([]);

  const headingdata = data[2]?.card?.card;
  const mapdata = data[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  useEffect(() => {
    setoriginallist(mapdata);
    setfilterarray(mapdata);
  }, [mapdata]);

  const sendinput = (e) => {
    //console.log();
    if (inputsearch !== undefined) {
      if ((e.type === "keydown" && e.key === "Enter") || e.type === "click") {
        const filteritem = originallist.filter((item) =>
          item?.info?.name
            .toLocaleLowerCase()
            .includes(inputsearch.toLocaleLowerCase())
        );
        setfilterarray(filteritem);
      }
    }
  };

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

    //console.log(originallist);
    if (e.target.innerText === "Rating 4+") {
      const ratings = originallist.filter((item) => {
        return item.info.avgRating >= 4.3;
      });
      setfilterarray(ratings);
    } else if (e.target.innerText === "Fast Delivery") {
      const delivery = originallist.filter((item) => {
        return item.info.sla.deliveryTime < 30;
      });
      setfilterarray(delivery);
    } else {
      setfilterarray(originallist);
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
      <div className="my-5 mt-10 max-sm:text-center">
        {/* //& input */}
        <input
          className="max-sm:w-48 max-sm:mx-1 outline-none border-2 rounded-lg p-2 mx-2 px-4 border-[#fca729]"
          type="search"
          name="search"
          id="search"
          onChange={(e) => {
            setinputsearch(e.target.value);
          }}
          onKeyDown={sendinput}
        />
        {/* //& search btn */}
        <button
          onClick={sendinput}
          className="text-white max-sm:mx-1 max-sm:px-4 bg-[#fca729] rounded-lg px-8 text-lg py-[0.3em] ml-3 hover:text-[#fca729] hover:bg-white hover:border-[#fca729] hover:border-2"
        >
          Search
        </button>

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
