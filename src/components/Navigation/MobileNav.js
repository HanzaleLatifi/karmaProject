import React from 'react'
import NavigationItems from '.'

export const MobileNav = ({isShow}) => {
  return (
    <ul className={`bg-white md:hidden z-40 absolute ${isShow ? 'left-0' : '-left-2/3'}
     top-0 p-6 gap-y-10 font-medium text-xl flex flex-col pt-20 min-h-screen w-1/2 shadow-lg transition-all duration-300 `}>
        <NavigationItems/>
    </ul>
  )
}
