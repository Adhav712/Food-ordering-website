import { Instagram, LucideTwitter, FacebookIcon } from "lucide-react"
export const Footer = () => {
    return (
        // bg-[#fca729]
        <div className="bg-[#fca729] py-10">
            <div className="flex justify-evenly">
                <div>
                    <h1>Address</h1>
                    <p>1234 Street Name</p>
                    <p>City, AA 999</p>
                    <p>Bangalore</p>
                </div>
                <div>
                    <p>Contacts</p>
                    <p>Email : support@goodfood.com</p>
                    <p>Phone : (+91)9623659856</p>
                </div>
                <div>
                    <p>Follow</p>
                    <Instagram />
                    <LucideTwitter />
                    <FacebookIcon />
                    <p></p>
                </div>
            </div>
        </div>
    )
}