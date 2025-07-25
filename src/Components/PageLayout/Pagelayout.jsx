import Navbar from "../Navbar";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
export const AppLayout = () => {
    return <>
    <div className='relative main-container min-h-screen overflow-hidden bg-[#0F0D0D]'>
        <Navbar />
        <Outlet/>
        <Footer/>
    </div>
        
    </>
}
