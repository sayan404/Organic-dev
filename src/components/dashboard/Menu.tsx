import { FC, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface SectionItem {
  link_logo: string;
  link_title: string;
  sub_links: {name: string, navLink: string}[];
}

interface Menu {
  key?: number | string;
  section_title: string;
  section_items: SectionItem[];
}

export const Menu: FC<Menu> = ({ section_title, section_items }) => {
  return (
    <div className="mb-4">
      {/* section_title */}
      <p className="text-xs mb-2 px-4 font-semibold text-[#9D9FA1] tracking-widest">
        {section_title}
      </p>

      {/* items */}
      <div className="">
        {section_items.map((section, index) => {
          return (
            <AccordianItem
              key={index}
              link_logo={section.link_logo}
              link_title={section.link_title}
              sub_links={section.sub_links} // array of links
            />
          );
        })}
      </div>
    </div>
  );
};

export const AccordianItem: FC<SectionItem> = ({
  link_logo,
  link_title,
  sub_links,
}) => {
  const [color, setColor] = useState("#5F6980");

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={link_title}>
        <AccordionTrigger onClick={() => {color==="#282828" ? setColor("#5F6980") : setColor("#282828")}} className="px-4">
          <p className={`flex gap-2 w-full text-[${color}] hover:text-[#282828]`}>
            <p className="text-sm font-semibold">{link_title}</p>
          </p>
        </AccordionTrigger>
        {sub_links &&
          sub_links.map((linkData, index) => {
            return (
              <AccordionContent key={index}>
                <p className="w-full ps-8 cursor-pointer text-sm text-[#5F6980] hover:text-[#282828] font-semibold"><Link href={linkData?.navLink}>{linkData?.name}</Link></p>
              </AccordionContent>
            );
          })}
      </AccordionItem>
    </Accordion>
  );
};
