import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export const Topratedcart = ({ data }) => {
  ////(data);
  const {
    id,
    name,
    avgRatingString,
    cuisines,
    sla,
    cloudinaryImageId,
    costForTwo,
  } = data?.info;

  return (
    <div className="flex justify-center">
      <Link to={"/home/restaurantdetails/" + id}>
        <div
          key={id}
          className="transition ease-in delay-75  hover:scale-95 hover:shadow-lg hover:shadow-slate-400  duration-100  
w-[24em] max-xl:w-[14em] max-sm:w-[14em] max-sm:h-[24em]  max-sm:pb-5 max-sm:mt-8 max-w-64 shadow-md shadow-slate-300  rounded-xl p-4 m-2 min-h-48 h-[26em] max-h-[35em] "
        >
          <div className="flex justify-center items-center">
            <img
              className="max-sm:w-56 max-sm:10 max-sm:h-36 rounded-lg w-60 h-44 object-cover shadow-md shadow-slate-400"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                cloudinaryImageId
              }
              alt=""
            />
          </div>
          <div className="mx-2 text-left ">
            <h1 className="text-xl font-semibold my-4 text-gray-800">{name}</h1>
            <p className=" font-semibold my-3"> {costForTwo}</p>
            <div className=" flex  items-center">
              <Star className="max-sm:size-5  size-6 mr-2 rounded-full p-1 bg-green-600 text-white" />
              <p className="font-semibold">{avgRatingString} </p>
              <p className="mx-2 font-semibold"> {sla?.slaString}</p>
            </div>
            <p className="my-2 mx-1 max-sm:text-sm font-normal text-gray-500">
              {cuisines.length >= 3
                ? cuisines.splice(0, 3).join(" , ")
                : cuisines.join(" , ")}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
