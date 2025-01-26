
import { FaBell } from "react-icons/fa";
import {Bell,CircleUserRound,View, Star,Heart} from "lucide-react"
import { RxAvatar } from "react-icons/rx";

export function Header(){
    return(
        <header className="container-fluid  bg-white shadow shadow-emerald-300/20 px-4 md:px-8 lg:px-8">
            <div className="flex flex-row items-center h-14 md:h-20 lg:h-20">
                <div className="basis-1/2 vq-logo-wrap">
                <div className='flex items-center font-bold p-0'>
                    <div><View className='text-sky-800' width="36" height="36"/></div>
                    <div className='text-base text-sky-800 px-1'>Vision Quest</div>
                </div>
                </div>
                <div className="basis-1/2 vq-header-content flex flex-row-reverse space-2">
                    <div><CircleUserRound className="text-sky-800" /></div>
                    <div className="px-4"><Bell className="text-yellow-500" strokeWidth={1} fill={"hsl(45.4deg 93.39% 47.45%)"}/></div>
                    <div><Star className="text-orange-700" fill="hsl(17.5 88.3% 40.4%)"/></div>
                </div>
            </div>
        </header>
    )
}