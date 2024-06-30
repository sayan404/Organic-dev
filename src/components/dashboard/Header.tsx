import { FC } from "react";

//asset import
import verticaDot from "../../assets/vertical-dot.png";

export const Header: FC<{ header_text: string }> = ({
  header_text,
}): JSX.Element => {
  return (
    <div className="border-b border-[#EAECF0] w-full py-4 px-4 flex justify-between">
      {/* header */}
      <div className="text-md text-[#282828] font-semibold">{header_text}</div>

      {/* menu */}
      <div className="hover:shadow-lg rounded-lg">
        <img className="cursor-pointer" src={verticaDot} width={"20px"} height={"19px"} alt="dot" />
      </div>
    </div>
  );
};
