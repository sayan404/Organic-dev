import { FunnelIcon } from "@heroicons/react/16/solid";
import DonorRequestCard from "./DonorRequestCard";
import { Divider } from "@nextui-org/react";

const DonorRequestsPage = () => {
  return (
    <div className="mx-[100px] my-[40px]">
      <div className="flex justify-between">
        <div className="text-4xl mb-8 font-semibold">Donor Requests</div>
        <FunnelIcon className="h-8 w-8" />
      </div>
      <Divider/>
      <div className="flex flex-wrap gap-4 mt-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <DonorRequestCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default DonorRequestsPage;
