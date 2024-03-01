import usescrollreataurent from '../Hooks/usescrollreataurent'
import Slider from "react-slick";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Body = () => {

    const { header, imageGridCards } = usescrollreataurent()
    console.log(imageGridCards);

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        )
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        speed: 1000,
        slidesToShow: 8,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    return (
        <div className=" mx-40 my-10 pb-5 border-b-2 border-slate-300" >
            <div className='flex justify-between'>
                <div>
                    <h1 className="text-2xl font-bold">{header?.title}</h1>
                </div>

            </div>
            <Slider className='flex cursor-pointer' {...settings}>
                {
                    imageGridCards?.info.map((imgitem, index) => {
                        // console.log(imgitem);
                        return (
                            <div key={index} className=''>
                                <img
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



{/* <svg
                        onClick={() => {
                            return
                        }}
                        className='rounded-full bg-slate-200 p-2 mx-2 cursor-pointer'
                        xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                        viewBox="0 0 24 24">
                        <path fill="none" stroke="#000000"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="m12 5l-7 7m0 0l7 7m-7-7h14" /></svg>
 */}


// <div className='inline-flex swiper-nav-btns'>
//     <button onClick={previous}>
//         Previous
//     </button>

//     <button onClick={next}>
//         Next
//     </button>

// </div>

//  <svg
//  onClick={() => {
//      return
//  }}
//  className='rounded-full bg-slate-200 p-2 mx-2 cursor-pointer'
//  xmlns="http://www.w3.org/2000/svg"
//  width="34" height="34" viewBox="0 0 24 24">
//  <path fill="none" stroke="#000000" strokeLinejoin="round"
//      strokeLinecap="round" strokeWidth="2"
//      d="M19 12H5m7 7l7-7l-7-7" /></svg>

// };
// return (
//     <div className=" mx-10">

//         <div className='h-36  mx-4 gap-4 border-2 border-black'>
//             <h3 className='text-center'>1</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4 border-2 border-black'>
//             <h3 className='text-center'>2</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>3</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>4</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>5</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>6</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>7</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>8</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>9</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>10</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>11</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>12</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>13</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>14</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>15</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>16</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>17</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>18</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>19</h3>
//         </div>
//         <div className='h-36 bg-rose-400 mx-4'>
//             <h3 className='text-center'>20</h3>
//         </div>

//     </div>
// );
// }



// export default Body 