import { Home_Sidebar } from "./Home_Sidebar"
import { Home_Main } from "./Home_Main"
export function Home(){
    return <div className="w-full h-full flex">
        <div className=" w-[10%] h-full">
                <Home_Sidebar/>
        </div>
        <div className="w-[90%] h-full ">
                <Home_Main/>
        </div>
    </div>
}