import { FC, useEffect, useState } from "react";
import { ChartWrapper } from "./ChartWrapper";
import { Header } from "./Header";
import { tableData } from "@/src/data/tableData";

//asset import
import leftArrow from "../../assets/arrow-left.png";
import rightArrow from "../../assets/arrow-right.png";

//enums
import { Status } from "@/src/data/tableData";
import { Colors } from "@/src/data/tableData";

export const Table = () => {
  const [data] = useState(tableData);
  return (
      <ChartWrapper>
        <>
          <Header header_text={"Installed apps"} />
          {/* ----------- table-start ---------- */}
          {/* table-wrapper */}
          <div className="overflow-x-auto whitespace-nowrap">
            <table className="md:table-fixed w-full">
              {/* table-header */}
              <tr className="text-[#5F6980] bg-[#F9FAFB]">
                <td className="ps-4 pe-12 py-3 md:w-fit">Source</td>
                <td className="pe-12">Amount</td>
                <td className="pe-12">Status</td>
                <td className="pe-12">User ID</td>
                <td className="pe-12">Joined</td>
                <td className="pe-12">Group</td>
              </tr>

              {/* table-body */}
              {data.map((item, index) => (
                <TableRowComponent
                  key={index}
                  source={item.source}
                  amount={item.amount}
                  status={item.status}
                  user_id={item.user_id}
                  joined={item.joined}
                  group={item.group}
                />
              ))}
            </table>
          </div>
          {/* ------------ table-end ------ */}

          {/* pagination */}
          <div className="flex justify-center items-center gap-3 py-5">
            <button className="hover:shadow-lg rounded-lg">
              <img src={leftArrow} width={"32px"} height={"32px"} alt="icon" />
            </button>
            <p className="text-[#282828] text-lg">1/15</p>
            <button className="hover:shadow-lg rounded-lg">
              <img src={rightArrow} width={"32px"} height={"32px"} alt="icon" />
            </button>
          </div>
        </>
      </ChartWrapper>
  );
};

interface TableRow {
  source: {
    logo: string;
    name: string;
  };
  amount: string;
  status: string;
  user_id: string;
  joined: string;
  group: string;
}

export const TableRowComponent: FC<TableRow> = ({
  source,
  amount,
  status,
  user_id,
  joined,
  group,
}) => {
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    if (status === Status.Active) {
      setColor(Colors.green_primary);
      setBgColor(Colors.green_secondary);
    } else if (status === Status.Cancelled) {
      setColor(Colors.dark_primary);
      setBgColor(Colors.dark_secondary);
    } else if (status === Status.Pending) {
      setColor(Colors.orange_primary);
      setBgColor(Colors.orange_secondary);
    }
  }, [status]);

  return (
    <tr className="border-b border-1-[#EAECF0] text-sm hover:shadow-lg rounded-lg">
      <td className="p-4">
        <div className="flex flex-col md:flex-row md:justify-start md:items-center gap-2 md:gap-4">
          <div className="px-2 py-1.5 cursor-pointer">
            <img src={source.logo} width={"25px"} height={"25px"} alt="X" />
          </div>
          <div className="text-[#282828] font-semibold">{source.name}</div>
        </div>
      </td>
      <td className="text-[#5F6980]">{amount}</td>
      <td className="text-[#5F6980]">
        <div
          className="rounded-full px-[10px] py-[2px] w-fit font-semibold"
          style={{ color: `${color}`, background: `${bgColor}` }}
        >
          {status}
        </div>
      </td>
      <td className="text-[#5F6980]">{user_id}</td>
      <td className="text-[#5F6980]">{joined}</td>
      <td className="text-[#5F6980]">{group}</td>
    </tr>
  );
};
