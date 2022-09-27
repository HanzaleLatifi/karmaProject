import React from "react";
import NavigationItems from ".";

export const DesktopNav = () => {
  return (
    <ul className="md:flex items-center gap-8 text-white font-medium hidden">
      <NavigationItems />
    </ul>
  );
};
