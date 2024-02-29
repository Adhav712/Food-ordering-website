import usescrollreataurent from '../Hooks/usescrollreataurent'
import { useState } from 'react'

const Body = () => {

    const { header, imageGridCards } = usescrollreataurent()
    console.log(imageGridCards);


    // data?.header?.title
    return (

        <div className=" mx-40 my-10 pb-5 border-b-2 border-slate-300">
            <div className='flex justify-between'>
                <div>
                    <h1 className="text-2xl font-bold">{header?.title}</h1>
                </div>
                <div className='inline-flex swiper-nav-btns'>
                    {/* <button onClick={sliderRef?.slickPrev}>
                        <FaChevronLeft />
                    </button> */}
                    <svg
                        onClick={() => {
                            return
                        }}
                        className='rounded-full bg-slate-200 p-2 mx-2 cursor-pointer'
                        xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                        viewBox="0 0 24 24">
                        <path fill="none" stroke="#000000"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="m12 5l-7 7m0 0l7 7m-7-7h14" /></svg>

                    {/* <button onClick={sliderRef?.slickNext}>
                        <FaChevronRight />
                    </button> */}
                    <svg
                        onClick={() => {
                            return
                        }}
                        className='rounded-full bg-slate-200 p-2 mx-2 cursor-pointer'
                        xmlns="http://www.w3.org/2000/svg"
                        width="34" height="34" viewBox="0 0 24 24">
                        <path fill="none" stroke="#000000" strokeLinejoin="round"
                            strokeLinecap="round" strokeWidth="2"
                            d="M19 12H5m7 7l7-7l-7-7" /></svg>
                </div>
            </div>
            <div className='flex cursor-pointer'>
                {
                    imageGridCards?.info.map((imgitem) => {
                        // console.log(imgitem);
                        return (
                            <img className='cursor-pointer'
                                key={imgitem.id}
                                width={"120em"}
                                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imgitem?.imageId} alt="img-not-found" />
                        )
                    })
                }
            </div>
        </div >
    )
}


export default Body 