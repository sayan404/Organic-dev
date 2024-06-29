"use client";

import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Checkbox,
  CheckboxGroup,
  DateInput,
  Divider,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import * as animationData from "../../../../public/healthLottie.json";
import Lottie from "react-lottie";
import { useCallback, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/16/solid";
import toast, { Toaster } from "react-hot-toast";

const AddDonorPage = () => {
  const [tab, setTab] = useState(0);
  const [deadDonor, setDeadDonor] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const tabNames = useCallback(() => {
    return [
      "Donor",
      "Basics",
      "Address",
      "Personal Details",
      "ID Proof",
      "Nominee Details",
      "Medical Details",
      "Preferences",
    ];
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
          {tab === 2 && (
            <>
              <DateInput label="Date of Birth" variant="faded" />
              <Select label="Select Gender">
                <SelectItem key={"M"}>Male</SelectItem>
                <SelectItem key={"F"}>Female</SelectItem>
              </Select>
              <Input
                type="number"
                label="Phone Number"
                variant="faded"
                required
              />
              <Input type="email" label="Email ID" variant="faded" required />
              <Input type="text" label="Occupation" variant="faded" required />
            </>
          )}
          {tab === 3 && (
            <>
              <Select label="Select ID Proof">
                <SelectItem key={"Aadhar"}>Aadhar</SelectItem>
                <SelectItem key={"PAN"}>PAN</SelectItem>
                <SelectItem key={"Voter"}>Voter ID</SelectItem>
              </Select>
              <Input type="text" label="ID Number" variant="faded" required />
            </>
          )}
          {tab === 4 && (
            <>
              <Checkbox
                size="lg"
                checked={deadDonor}
                onChange={() => setDeadDonor(!deadDonor)}
              >
                Donor is alive
              </Checkbox>
              {deadDonor && (
                <>
                  <Input
                    type="text"
                    label="Nominee Name"
                    variant="faded"
                    required={deadDonor}
                  />
                  <div>Nominee Address</div>
                  <Input
                    type="text"
                    label="State"
                    variant="faded"
                    required={deadDonor}
                  />
                  <Input
                    type="text"
                    label="City"
                    variant="faded"
                    required={deadDonor}
                  />
                  <Input
                    type="text"
                    label="District"
                    variant="faded"
                    required={deadDonor}
                  />
                  <Input
                    type="text"
                    label="Street"
                    variant="faded"
                    required={deadDonor}
                  />
                </>
              )}
            </>
          )}
          {tab === 5 && (
            <>
              <Input type="text" label="Blood Group" variant="faded" required />
              <CheckboxGroup label="Organ(s) to donate">
                <Checkbox size="md" value={"kidney"}>
                  Kidney
                </Checkbox>
                <Checkbox size="md" value={"Liver"}>
                  Liver
                </Checkbox>
                <Checkbox size="md" value={"Heart"}>
                  Heart
                </Checkbox>
                <Checkbox size="md" value={"Lungs"}>
                  Lungs
                </Checkbox>
                <Checkbox size="md" value={"Pancreas"}>
                  Pancreas
                </Checkbox>
                <Checkbox size="md" value={"Small Intestine"}>
                  Small Intestine
                </Checkbox>
              </CheckboxGroup>
            </>
          )}
          {tab === 6 && (
            <>
              <Select label="Select Hospital">
                <SelectItem key={"Apollo"}>Apollo</SelectItem>
                <SelectItem key={"Fortis"}>Fortis</SelectItem>
                <SelectItem key={"Max"}>Max</SelectItem>
              </Select>
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
      <Toaster />
    </div>
  );
};

export default AddDonorPage;
