import { useEffect, useState } from "react"
import contactimg from '../images/contactimg.jpg'
import { Linkedin } from "lucide-react"
import { Github } from "lucide-react"
import { Instagram } from "lucide-react"

export const Contact = () => {

    return (
        <div className=" flex my-10  max-lg:flex max-lg:justify-center  ">
            <div className="flex justify-center w-full max-md:block max-lg:block max-lg:mx-80 ">
                <div className="max-sm:rounded-xl max-sm:my-4 shadow-md w-[25em] max-sm:w-[20em] p-4 shadow-gray-400 rounded-s-2xl pl-8">
                    <h1 className="text-[#296dcddb] text-4xl font-semibold max-sm:text-3xl">Let's Get in Touch</h1>
                    <div>
                        <img className="w-96 h-80" src={contactimg} alt="" />
                    </div>
                    <div className="">
                        <h1 className="text-[#296dcddb] font-semibold text-xl ">Contact with us:</h1>
                        <div className="flex  my-2 items-center mx-8 justify-evenly">
                            <Github className="mx-4 my-4 text-white p-1 size-10 rounded-md bg-gray-900 hover:text-[#296dcddb] hover:bg-white hover:rounded-lg hover:shadow-sm hover:shadow-gray-600" />
                            <Linkedin className="mx-4 my-4 text-white p-1 size-10 rounded-md bg-[#296dcddb] hover:text-[#296dcddb] hover:bg-white hover:rounded-lg hover:shadow-sm hover:shadow-gray-600" />
                            <Instagram className="mx-4 my-4 text-white p-1 size-10 rounded-md bg-pink-600 hover:text-[#296dcddb] hover:bg-white hover:rounded-lg hover:shadow-sm hover:shadow-gray-600" />
                        </div>
                    </div>
                </div>
                <div className="max-sm:my-4 max-sm:rounded-xl bg-[#296dcddb] shadow-md w-[25em] max-sm:w-[20em] shadow-gray-400 p-4 rounded-e-2xl ">
                    <h1 className="text-4xl mb-5 font-semibold text-white max-sm:text-3xl">Contact Us</h1>
                    <form action="" className="block">
                        <input
                            className="outline-[#296dcddb] max-sm:w-[15em] w-80 my-4  rounded-lg py-2 px-2 m-2 border-2 border-white block"
                            type="text"
                            placeholder="Name"
                            name=""
                            id=""
                            required
                        />
                        <input
                            className="outline-[#296dcddb] max-sm:w-[15em]  w-80 my-4 rounded-lg py-2 px-2 m-2 border-2 border-white block"
                            type="email"
                            placeholder="Email"
                            name=""
                            required
                            id="" />
                        <input
                            className="outline-[#296dcddb] max-sm:w-[15em]  w-80 my-4 rounded-lg py-2 px-2 m-2 border-2 border-white block"
                            type="number"
                            name=""
                            id=""
                            required
                            placeholder="Phone" />
                        <textarea
                            className="outline-[#296dcddb] max-sm:w-[15em]  rounded-lg py-2 px-2 m-2 border-2 border-white block"
                            name="message"
                            id="message"
                            placeholder="message"
                            cols="38"
                            rows="5"
                            required
                            resize='block'
                        ></textarea>
                        <div className="flex justify-center ">
                            <button
                                className="w-36 text-white text-lg font-semibold rounded-lg
                                 py-2 px-2 m-2 border-2 border-white hover:bg-white hover:text-[#296dcddb]"
                                type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact