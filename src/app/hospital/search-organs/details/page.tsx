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
  Textarea,
} from "@nextui-org/react";
import * as animationData from "../../../../../public/healthLottie.json";
// import Lottie from "react-lottie";
import { useCallback, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/16/solid";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddDonorPage = () => {
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const [clicked, setClicked] = useState(Boolean);
  const [formData, setFormData] = useState({
    patientName: "",
    patientAge: 0,
    patientCity: "",
    patientDistrict: "",
    patientPincode: 0,
    patientDOB: "",
    patientGender: "",
    patientMobileNo: 0,
    patientEmailId: "",
    patientBloodGroup: "",
    organType: "",
    patientOrgan: "kidney",
    severity: 0,
    organAlotmentStatus: "Pending",
    patientOrganRelatedDocInText: "",
    referredDoctorName: "",
    referredDoctorRegId: "",
    patientMedicalConditionExplanation: "",
    patientOrganRelatedDoc: null as File | null,
  });

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
      "Patient Basic Details",
      "Patient Address",
      "Patient Contact",
      "Medical Details",
      "Organ Details",
      "Doctor Details",
      "Checkup Results",
    ];
  }, []);

  const isLastTab = useCallback(() => {
    return tab === tabNames().length - 2;
  }, [tab]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        patientOrganRelatedDoc: e.target.files[0],
      });
    }
  };

  const handleClick = useCallback(() => {
    if (isLastTab()) {
      setClicked(true);
      setTimeout(() => {
        toast.success("Data saved Successfully!");
        router.push("/hospital/patent-requests/");
      }, 3000);
    } else {
      setTab((prev) => prev + 1);
    }
  }, [isLastTab, setTab]);

  return (
    <div className="flex h-full justify-center items-center mt-24">
      <div className="flex flex-col w-[600px] flex-wrap md:flex-nowrap gap-4">
        {/* <Lottie options={defaultOptions} height={200} width={200} /> */}

        <div className="p-8 rounded-xl shadow-xl flex flex-col gap-4 border-1">
          <div className="text-2xl font-semibold">
            Fill this form to search the organ
          </div>
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
              <Input
                type="text"
                label="Patent Name"
                variant="faded"
                required
                onChange={handleChange}
                name="patientName"
              />
              <DateInput
                label="Date of Birth"
                variant="faded"
                name="patientDOB"
                // @ts-ignore
                onChange={handleChange}
              />
              <Input
                type="Number"
                label="Patient Age"
                variant="faded"
                name="patientAge"
                required
                onChange={handleChange}
              />
              <Select
                label="Select Gender"
                name="patientGender"
                // @ts-ignore
                onChange={handleChange}
              >
                <SelectItem key={"M"}>Male</SelectItem>
                <SelectItem key={"F"}>Female</SelectItem>
              </Select>
            </>
          )}
          {tab === 1 && (
            <>
              <Input
                type="Text"
                label="Patient City"
                variant="faded"
                name="patientCity"
                required
                onChange={handleChange}
              />
              <Input
                type="Text"
                label="Patient District"
                variant="faded"
                name="patientDistrict"
                required
                onChange={handleChange}
              />
              <Input
                type="Text"
                label="Patient Pincode"
                variant="faded"
                name="patientPincode"
                required
                onChange={handleChange}
              />
              <Input
                type="Text"
                label="Patient DOBa"
                variant="faded"
                name="patientDOB"
                required
                onChange={handleChange}
              />
            </>
          )}
          {tab === 2 && (
            <>
              <Input
                type="Number"
                label="Patient Mobile Number"
                variant="faded"
                name="patientMobileNo"
                required
                onChange={handleChange}
              />
              <Input
                type="email"
                label="Patient Email ID"
                variant="faded"
                name="patientEmailId"
                required
                onChange={handleChange}
              />
            </>
          )}
          {tab === 3 && (
            <>
              {/* @ts-ignore */}
              <CheckboxGroup
                label="Patent Bloodgroup(s) to donate"
                name="organType"
                // @ts-ignore
                onChange={handleChange}
              >
                <Checkbox size="md" value={"A+"}>
                  A+
                </Checkbox>
                <Checkbox size="md" value={"A-"}>
                  A-
                </Checkbox>
                <Checkbox size="md" value={"B+"}>
                  B+
                </Checkbox>
                <Checkbox size="md" value={"B-"}>
                  B-
                </Checkbox>
                <Checkbox size="md" value={"AB+"}>
                  AB+
                </Checkbox>
                <Checkbox size="md" value={"AB-"}>
                  AB-
                </Checkbox>
                <Checkbox size="md" value={"O+"}>
                  O+
                </Checkbox>
                <Checkbox size="md" value={"O-"}>
                  O-
                </Checkbox>
              </CheckboxGroup>
            </>
          )}
          {tab === 4 && (
            <>
              <Input
                type="text"
                label="Organ Name"
                variant="faded"
                required
                name="organType"
                onChange={handleChange}
              />
              <Input
                type="Number"
                label="Organ severity"
                variant="faded"
                required
                name="severity"
                onChange={handleChange}
              />
            </>
          )}
          {tab === 5 && (
            <>
              <Input
                type="text"
                label="Referred Doctor Name"
                variant="faded"
                required
                name="referredDoctorName"
                onChange={handleChange}
              />
              <Input
                type="text"
                label="Referred Doctor Registered ID"
                variant="faded"
                required
                name="referredDoctorRegId"
                onChange={handleChange}
              />
            </>
          )}
          {tab === 6 && (
            <>
              <Textarea
                type="text"
                label="Explain patient's current Condition"
                variant="faded"
                required
                name="patientMedicalConditionExplanation"
                onChange={handleChange}
              />

              <Input
                type="file"
                label="Enter the doctor Contact Number"
                variant="faded"
                required
                name="patientOrganRelatedDoc"
                onChange={handleFileChange}
              />
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
                {isLastTab()
                  ? !clicked
                    ? "Submit"
                    : "Loading..."
                  : "Next Step"}
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
