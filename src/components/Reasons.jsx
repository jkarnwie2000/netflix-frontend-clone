import { IoTvSharp } from "react-icons/io5";
import { BsArrowDownRightCircle } from "react-icons/bs";
import { GrIceCream } from "react-icons/gr";
import { TbCookieMan } from "react-icons/tb";


function Reasons() {
  const reasons = [
    {
        "title": "Enjoy on your TV",
        "detail": "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        "icon": <IoTvSharp />
     },
    {
        "title": "Download your shows to watch offline",
        "detail": "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        "icon": <BsArrowDownRightCircle />
     },
    {
        "title": "Watch everywhere",
        "detail": "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        "icon": <GrIceCream />
     },
    {
        "title": "Create profiles for kids",
        "detail": "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        "icon": <TbCookieMan />
     },
]
  return (
    <div className="mt-5">
        <div className="font-bold text-2xl mb-5">
            Reasons to join
        </div>

        <div className="flex gap-5">
            {reasons.map((reason, index)=>{
                return (
            <div className="w-[300px] h-[320px] rounded-xl p-5 bg-gradient-to-b from-blue-950 to-gray-900 relative">
                <div className="font-bold text-[22px] mb-5">
                    {reason.title}
                </div>
                <div className="py-5 text-gray-400 text-[16px]">
                    {reason.detail}
                </div>
                <div className="text-7xl mr-10 right-0 absolute opacity-60 bottom-0 mb-5">
                {reason.icon}
                </div>
            </div>
                )
            })}
        </div>
    </div>
  )
}

export default Reasons