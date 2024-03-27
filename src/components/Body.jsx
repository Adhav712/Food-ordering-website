import useScrollRestaurant from "../Hooks/useScrollRestaurant";
import Slider from "react-slick";
import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TopRatedRestaurant } from "./TopRatedRestaurant";
import { Shimmerui } from "./Shimmerui";
import { Shimmercards } from "./Shimmercards";
import { Footer } from "./Footer";

//* What's on your mind?

export const Body = () => {
  const { data } = useScrollRestaurant();

  //console.log(data);

  const getdata = data[0]?.card?.card;
  const mapdata = data[0]?.card?.card?.gridElements?.infoWithStyle;

  let sliderRef = useRef("");

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const [show, setshow] = useState(4);
  const [scroll, setscroll] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 425) {
        setshow(4);
        setscroll(4);
      } else if (window.innerWidth < 700) {
        setshow(5);
        setscroll(5);
      } else if (window.innerWidth < 1100) {
        setshow(6);
        setscroll(6);
      } else {
        setshow(8);
        setscroll(9);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    speed: 1000,
    slidesToScroll: scroll,
    slidesToShow: show,
  };

  return data.length < 1 ? (
    <Shimmerui />
  ) : (
    <div>
      <div className=" max-md:mx-10 mx-56 mt-36 max-lg:my-56 max-sm:my-48 pb-5 max-sm:mx-4 max-lg:mx-20 max-xl:mx-28">
        <div className=" border-b-2 border-slate-200 pb-4">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold max-sm:text-lg">
                {getdata?.header?.title}
              </h1>
            </div>
            <div className="inline-flex mx-4">
              <ArrowLeft
                className="size-7 mx-2 rounded-full p-1 bg-slate-300"
                onClick={previous}
              />
              <ArrowRight
                className="size-7 rounded-full p-1 bg-slate-300"
                onClick={next}
              />
            </div>
          </div>

          <Slider className="flex cursor-pointer" ref={sliderRef} {...settings}>
            {mapdata?.info.map((imgitem) => {
              if (imgitem.entityId > 5 === false) {
                const numbersString = imgitem.entityId.replace(/\D/g, "");
                let splitnum = numbersString.split("");
                splitnum.shift();
                let id = splitnum.join("");

                return (
                  <Link
                    key={imgitem.id}
                    to={"/restaurant/" + id || imgitem.entityId}
                  >
                    <img
                      key={imgitem.id}
                      className=""
                      width={"120em"}
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                        imgitem?.imageId
                      }
                      alt="img-not-found"
                    />
                  </Link>
                );
              }
            })}
          </Slider>
        </div>
        {mapdata?.info?.length < 10 ? <Shimmercards /> : <TopRatedRestaurant />}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
