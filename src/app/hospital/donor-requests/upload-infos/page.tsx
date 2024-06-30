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

const AddDonorPage = () => {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    donorType: "",
    nomineeName: "",
    nomineeContactNumber: "",
    donorId: "667f51df8ad40d3996b565d1",
    donorName: "",
    hospitalId: "668068a1942c4d26bfefff37",
    organType: "",
    bloodType: "",
    organDescription: "",
    availabilityStatus: "",
    doctorName: "",
    doctorContact: "",
    doctorRegistrationNumber: "",
    checkupResults: "",
    checkupRelatedDocument: null as File | null,
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
      "Donor",
      "Nominee Details",
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
        checkupRelatedDocument: e.target.files[0],
      });
    }
  };

  const handleClick = useCallback(() => {
    if (isLastTab()) {
      setTimeout(() => {
        toast.success("Donation Request Sent Successfully!");
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
              <Input
                type="text"
                label="Donor type ( ie. Live | Deceased )"
                variant="faded"
                required
                onChange={handleChange}
                name="donorType"
              />
              <Input
                type="text"
                label="Enter the Donor Name"
                variant="faded"
                name="donorName"
                required
                onChange={handleChange}
              />
              {/* @ts-ignore */}
              <CheckboxGroup label="Bloodgroup(s) to donate"name="organType" onChange={handleChange}
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
          {tab === 1 && (
            <>
              <Input
                type="text"
                label="Enter the Nominee Name "
                name="nomineeName"
                variant="faded"
                required
                onChange={handleChange}
              />
              <Input
                type="email"
                label="Nominee Email ID"
                variant="faded"
                required
                onChange={handleChange}
              />
              <Input
                type="text"
                label="Nominee Contact Number"
                variant="faded"
                required
                name="nomineeContactNumber"
                onChange={handleChange}
              />
            </>
          )}
          {tab === 2 && (
            <>
              <Input
                type="text"
                label="Organ Description"
                variant="faded"
                required
                name="organDescription"
                onChange={handleChange}
              />
              {/* <Input
                type="text"
                label="Blood Group"
                variant="faded"
                required
                name="bloodType"
                onChange={handleChange}
              /> */}
              <CheckboxGroup
                label="Organ(s) to donate"
                name="bloodType"
              //  @ts-ignore 
                onChange={handleChange}
              >
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
          {tab === 3 && (
            <>
              <Input
                type="text"
                label="Enter the doctor name who have diagnosed"
                variant="faded"
                required
                name="doctorName"
                onChange={handleChange}
              />

              <Input
                type="text"
                label="Enter the doctor Contact Number"
                variant="faded"
                required
                name="doctorContact"
                onChange={handleChange}
              />

              <Input
                type="text"
                label="Enter the doctor Registered Number"
                variant="faded"
                required
                name="doctorRegistrationNumber"
                onChange={handleChange}
              />
            </>
          )}
          {tab === 4 && (
            <>
              <Input
                type="text"
                label="Enter the checkupResults in brief description"
                variant="faded"
                required
                name="checkupResults"
                onChange={handleChange}
              />
              <Input
                type="file"
                label="Enter the checkup Reports in .pdf format"
                variant="faded"
                required
                name="checkupRelatedDocument"
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

/*
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({
                ...formData,
                checkupRelatedDocument: e.target.files[0]
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key as keyof typeof formData] as any);
        }

        try {
            const response = await axios.post('/api/eligible-donor', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };*/
