import { useState } from "react";
import { Menu } from "./Menu"; //data
import { menuData } from "@/src/data/menuData";

//asset import
import Link from "next/link";

export const Sidebar = () => {
  const [data] = useState(menuData);

  return (
    <div className="bg-white w-full border-s border-1 border-[#EAECF0] flex flex-col justify-between">
      {/* main panel */}
      <div className="flex flex-col gap-8">
        {/* logo */}
        <div className="p-4">
          <p className="font-bold text-xl"><Link href="/home">Organic</Link></p>
        </div>

        {/* menu */}
        <div className="flex flex-col gap-4">
          {data.map((item, index) => {
            return (
              <Menu
                key={index}
                section_title={item.section_title}
                section_items={item.section_items}
              />
            );
          })}
        </div>
      </div>

      {/* footer */}
      {/* <div className="py-3 px-4 h-[44px] border-t border-[#EAECF0] flex justify-between items-center">
        <div className="cursor-pointer hover:shadow-lg rounded-lg p-1">
          <img src={settings} width={"20px"} height={"20px"} alt="settings" />
        </div>
        <div className="cursor-pointer hover:shadow-lg rounded-lg p-1">
          <img src={logOutIcon} width={"20px"} height={"20px"} alt="logout" />
        </div>
        <div className="cursor-pointer hover:shadow-lg rounded-lg p-1">
          <img src={globIcon} width={"20px"} height={"20px"} alt="glob" />
        </div>
      </div> */}
    </div>
  );
};
