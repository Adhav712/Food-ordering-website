import usescrollreataurent from '../Hooks/usescrollreataurent'
import Slider from "react-slick";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from 'lucide-react';


export const Body = () => {

    const { data } = usescrollreataurent()

    const { header, imageGridCards } = data


    let sliderRef = useRef(null);
    console.log(sliderRef);

    const next = () => {
        sliderRef.slickNext();
        console.log(sliderRef);

    };
    const previous = () => {
        sliderRef.slickPrev();

    };


    const settings = {
        speed: 1000,
        slidesToShow: 8,
        slidesToScroll: 5,
    }

    return (
        <div className="max-md:mx-10 mx-40 my-10 pb-5 border-b-2 border-slate-300" >
            <div className='flex justify-between'>
                <div>
                    <h1 className="text-2xl font-bold">{header?.title}</h1>
                </div>
                <div className='inline-flex mx-4'>
                    <ArrowLeft className='size-7 mx-2 rounded-full p-1 bg-slate-300' onClick={previous} />
                    <ArrowRight className='size-7 rounded-full p-1 bg-slate-300' onClick={next} />
                </div>
            </div>
            <Slider className='flex cursor-pointer' ref={slider => {
                sliderRef = slider;
            }}
                {...settings}>
                {
                    imageGridCards?.info.map((imgitem, index) => {
                        return (
                            <div key={index} className='outline-none'>
                                <img
                                    className=''
                                    width={"120em"}
                                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imgitem?.imageId} alt="img-not-found" />
                            </div>
                        )
                    })
                }
            </Slider>

        </div >

    )
}
