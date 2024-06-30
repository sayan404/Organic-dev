"use client";
import { FunnelIcon } from "@heroicons/react/16/solid";
import DonorRequestCard from "../donor-requests/DonorRequestCard";
import { Divider } from "@nextui-org/react";

enum DonorTypes {
  Live = "Live Donor",
  Deceased = "Deceased Donor",
}

const DonorCardDetails = [
  {
    organ: "Heart",
    type: DonorTypes.Live,
    name: "John Doe",
    Blood: "O+",
    age: "25",
    Address: "Kolkata, Pin-700001, WB"
  },
  {
    organ: "Kidney",
    type: DonorTypes.Deceased,
    name: "Soham Das",
    Blood: "O+",
    age: "22",
    Address: "Kolkata, Pin-700152, WB"
  },
  {
    organ: "Liver",
    type: DonorTypes.Live,
    name: "Sayan Majumdar",
    Blood: "B+",
    age: "22",
    Address: "Howrah, Pin-700152, WB"
  },
  {
    organ: "Heart",
    type: DonorTypes.Live,
    name: "Animesh Bag",
    Blood: "A+",
    age: "27",
    Address: "Medinipur, Pin-700152, WB"
  },
  {
    organ: "Liver",
    type: DonorTypes.Deceased,
    name: "Alex",
    Blood: "A+",
    age: "30",
    Address: "Medinipur, Pin-700152, WB"
  },
];


const DonorRequestsPage = () => {
  return (
    <div className="mx-[100px] my-[40px]">
      <div className="flex justify-between">
        <div className="text-4xl mb-8 font-semibold">Potential Donors List</div>
        <FunnelIcon className="h-8 w-8" />
      </div>
      <Divider />
      <div className="flex flex-wrap gap-4 mt-8">
        {DonorCardDetails.map((item, index) => (
          <DonorRequestCard key={index} organ={item.organ} blood={item.Blood} type={item.type} name={item.name} age={item.age} address={item.Address}/>
        ))}
      </div>
    </div>
  );
};

export default DonorRequestsPage;
