import React from 'react'
import { useSwiper } from 'swiper/react'
export default function BtnSlider({ title, children }) {
    const swiper = useSwiper()
    return (
        < div className="section - header" >
            <div className="section-header_body align-items-center">
                <h2 className="section - header_title">
                    {title}
                </h2>
                <div className="section-header_arrows">
                    {children}
                    <div
                        className="arrow section-header_arrow section-header_arrow--prev arrow--prev"
                        onClick={() => swiper.slidePrev()}
                    >
                        <button className="arrow_button " type="button">
                            button
                        </button>
                    </div>
                    <div
                        className="arrow section-header_arrow section-header_arrow--next arrow--next"
                        onClick={() => swiper.slideNext()}
                    >
                        <button className="arrow_button " type="button">
                            button
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}