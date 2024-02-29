import usescrollreataurent from '../Hooks/usescrollreataurent'

const Body = () => {

    const { header, imageGridCards } = usescrollreataurent()
    console.log(imageGridCards);


    // data?.header?.title
    return (
        <div className="mx-36 my-10">
            <div>
                <div>
                    <h1 className="text-2xl font-bold">{header?.title}</h1>
                </div>
                <div>
                    {/* icon ->     <- */}
                </div>
            </div>
            <div className='flex overflow-x-scroll cursor-pointer'>
                {
                    imageGridCards?.info.map((imgitem) => {
                        // console.log(imgitem);
                        return (
                            <img key={imgitem.id} className=' mx-2' width={"100em"} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imgitem?.imageId} alt="img-not-found" />
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Body 