import {useState} from "react";
import { AiOutlineSetting } from "react-icons/ai";
import {DesktopNav }from "../components/Navigation/DesktopNav";
import { MobileNav } from "../components/Navigation/MobileNav";
import {BiMenuAltLeft} from  "react-icons/bi";
import {VscChromeClose} from "react-icons/vsc"

function Header() {

    const [isShow, setIsShow] = useState(false)

  return (
    <header className="bg-primary-purple shadow-md  w-full flex justify-between items-center px-4 md:px-6 py-3 md:py-2 z-50 mb-6 md:mb-12   ">
   
      {/* mobile navigation */}
      <span onClick={()=>setIsShow(prev => !prev )} className="md:hidden block z-50">{isShow ? <VscChromeClose className="text-2xl"/> : <BiMenuAltLeft className="text-3xl text-white"/>}</span>
      <MobileNav isShow={isShow}/>

      {/* Desktop Navigation */}
      <nav className="w-full  items-center md:flex hidden">
        <div className="font-serif font-bold w-12 h-12 mr-6 ">
          <img src="/images/eye-logo.webp" alt="logo"/>
        </div>
       <DesktopNav/>
      </nav>

      {/* profile & setting */}
      <div className="flex items-center gap-4">
        <AiOutlineSetting  className="text-3xl text-white cursor-pointer "/>
        <span className="font-serif block font-bold w-10 h-10 border-2 border-white rounded-full overflow-hidden  ">
          <img src="/images/myprofile.jpg" className="h-full w-full  " alt="profile" />
        </span>
      </div>

    </header>
  );
}

export default Header;
