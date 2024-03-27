import { Instagram, LucideTwitter, FacebookIcon, ChevronUp } from "lucide-react"
export const Footer = () => {
    return (
        // bg-[#fca729]
        <div className="bg-gray-800 text-white py-2">
            <div className="flex justify-evenly text-center max-lg:m-auto text-lg max-md:text-sm">
                <div className="m-4">
                    <a href="/" >
                        <span className="my-4 flex justify-center rounded-full ">
                            <ChevronUp className="rounded-full bg-gray-200 w-8 h-8 " color="#000000" />
                        </span>
                    </a>

                    <p className="my-2 hover:font-bold ">Follow</p>
                    <div className="inline-flex ">
                        <span className="mx-4 hover:text-[#fca729]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram "><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                        </span>
                        <span className="mx-4 hover:text-[#fca729]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter "><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </span>
                        <span className="mx-4 hover:text-[#fca729]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook "><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </span>
                    </div>
                    <p className="my-4">Copyright © 2023 - Vaikarai - All Rights Reserved</p>
                </div>
                {/* </div> */}
            </div>
        </div >
    )
}