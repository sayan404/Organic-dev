"use client";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/16/solid";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Divider,
  Input,
} from "@nextui-org/react";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

export default function UploadDocsPage() {
  const [tab, setTab] = useState(0);
  const [deadDonor, setDeadDonor] = useState(false);
  const tabNames = useCallback(() => {
    return ["Doctor Details", "Checkup Details"];
  }, []);
  const isLastTab = useCallback(() => {
    return tab === tabNames().length - 2;
  }, [tab]);
  const handleClick = useCallback(() => {
    if (isLastTab()) {
      toast.success("Donation Request Sent Successfully!");
    } else {
      setTab((prev) => prev + 1);
    }
  }, [isLastTab, setTab]);
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col w-[600px] flex-wrap md:flex-nowrap gap-4">
        {/* <Lottie options={defaultOptions} height={200} width={200} /> */}

        <div className="p-8 rounded-xl shadow-xl flex flex-col gap-4 border-1">
          <div className="text-2xl font-semibold">Register as a Donor</div>
          <Divider />
          <Breadcrumbs>
            {tabNames()
              .slice(0, tab + 2)
              .map((name, index) => (
                <BreadcrumbItem onClick={() => setTab(Math.min(index - 1))}>
                  {name}
                </BreadcrumbItem>
              ))}
          </Breadcrumbs>
          {tab === 0 && (
            <>
              <Input type="text" label="Name" variant="faded" required />
              <Input
                type="text"
                label="Mother's Name"
                variant="faded"
                required
              />
              <Input
                type="text"
                label="Father's Name"
                variant="faded"
                required
              />
            </>
          )}
          {tab === 1 && (
            <>
              <Input type="text" label="State" variant="faded" required />
              <Input type="text" label="City" variant="faded" required />
              <Input type="text" label="District" variant="faded" required />
              <Input type="text" label="Street" variant="faded" required />
              <Input type="text" label="Pincode" variant="faded" required />
            </>
          )}
          <div className="mt-auto">
            <div className="flex gap-4 w-full">
              {tab > 0 && (
                <Button
                  color="warning"
                  variant="flat"
                  onClick={() => setTab(tab - 1)}
                  className="w-full"
                  startContent={<ArrowLeftIcon width={20} />}
                  size="lg"
                >
                  Back
                </Button>
              )}
              <Button
                color="success"
                size="lg"
                variant="flat"
                onClick={handleClick}
                className="w-full"
                endContent={
                  isLastTab() ? (
                    <CheckCircleIcon width={20} />
                  ) : (
                    <ArrowRightIcon width={20} />
                  )
                }
              >
                {isLastTab() ? "Submit" : "Next Step"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
