//asset import
import avatarImage from "../../assets/avatar.png";
import bellIcon from "../../assets/bell.png";
import calendarIcon from "../../assets/calendar.png";
import layoutGridIcon from "../../assets/layout-grid.png";
import searchIcon from "../../assets/search.png";
import logoIcon from "../../assets/logo.png";

export const Topbar = () => {
  return (
    <div>
      {/* mobile view */}
      <div className="flex flex-col gap-6 md:hidden">
        <div className="flex justify-between items-center p-4 border-b border-[#EAECF0] ">
          {/* logo */}
          <div>
            <img width={"100px"} height={"24px"} src={logoIcon} alt="logo" />
          </div>
          {/* avatar */}
          <div>
            <img
              width={"40px"}
              height={"40px"}
              src={avatarImage}
              alt="avatar"
            />
          </div>
        </div>

        {/* search-box */}
        <div className="px-4 py-2">
          <FromInput />
        </div>
      </div>

      {/* desktopView */}
      <div className="hidden bg-white px-8 py-2 border-b border-[#EAECF0] md:flex md:justify-between gap-2">
        {/* search-box */}
        <div className="w-full">
          <FromInput />
        </div>

        {/* items */}
        <div className="w-[208px] flex gap-5 items-center justify-between">
          {/* icons */}
          <div className="w-full flex justify-between cursor-pointer">
            <div className="cursor-pointer hover:shadow-lg rounded-lg p-1">
              <img width={"24px"} height={"24px"} src={bellIcon} alt="bell" />
            </div>
            <div className="cursor-pointer hover:shadow-lg rounded-lg p-1">
              <img
                width={"24px"}
                height={"24px"}
                src={calendarIcon}
                alt="calendar"
              />
            </div>
            <div className="cursor-pointer hover:shadow-lg rounded-lg p-1">
              <img
                width={"24px"}
                height={"24px"}
                src={layoutGridIcon}
                alt="layout-grid"
              />
            </div>
          </div>

          {/* avatar */}
          <div className="cursor-pointer">
            <img
              width={"60px"}
              height={"60px"}
              src={avatarImage}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FromInput = () => {
  return (
    <>
      <form className="flex border border-[#EAECF0] gap-2 rounded-sm px-4 py-2 focus-within:shadow-lg">
        <img width={"24px"} height={"24px"} src={searchIcon} alt="searchIcon" />
        <input
          onChange={() => {}}
          type="text"
          className="w-full outline-none"
          placeholder="Search..."
        ></input>
      </form>
    </>
  );
};
