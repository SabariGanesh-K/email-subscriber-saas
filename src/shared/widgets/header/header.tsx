import Link from "next/link";
import React from "react";
import Logo from "./logo";
import NavItems from "./nav.items";
import ToolBar from "./toolbar";

const Header = () => {
  return (
    <header className="w-full sticky top-o left-0 z-[999] border-b border-b[#000] px-10 flex items-center justify-between h-[80px] bg-white text-black">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div>
        <NavItems />
      </div>
      <div>
        <ToolBar />
      </div>
    </header>
  );
};

export default Header;
