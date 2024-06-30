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
import { useCallback, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/16/solid";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddDonorPage = () => {
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const [hospitalRegistrationNo, setHospitalRegistrationNo] = useState("");
  const [clicked, setClicked] = useState(Boolean);
  const [formData, setFormData] = useState({
    checkupRelatedDocument: null as File | null,
  });
  const [password, setPassword] = useState("");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const tabNames = useCallback(() => {
    return ["Hospital Login"];
  }, []);
  const isLastTab = useCallback(() => {
    return tab === tabNames().length - 2;
  }, [tab]);
  const handleClick = useCallback(() => {
    setClicked(true);
    async function fetchData() {
      setTimeout(() => {
        toast.success("Donation Request Sent Successfully!");
        router.push("/hospital/hospital-register");
      }, 3000);
    }
    fetchData();
    if (isLastTab()) {
      toast.success("Donation Request Sent Successfully!");
    }
  }, [hospitalRegistrationNo, password]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        checkupRelatedDocument: e.target.files[0],
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //   hospitalRegistrationNo, password
  return (
    <div className="flex h-full justify-center items-center mt-32">
      <div className="flex flex-col w-[600px] flex-wrap md:flex-nowrap gap-4">
        <div className="p-8 rounded-xl shadow-xl flex flex-col gap-4 border-1">
          <div className="text-2xl font-semibold">
            Upload Checkup related document in .pdf format
          </div>
          <Divider />
          <Input
            type="text"
            label="Enter the checkupResults in brief description"
            variant="faded"
            required
            name="checkupResults"
            onChange={handleChange}
          />
          <p>Enter the checkup Reports in .pdf format</p>
          <Input
          type="file"
            // label="Enter the checkup Reports in .pdf format"
            variant="faded"
            required
            name="checkupRelatedDocument"
            onChange={handleFileChange}
          />
          <div className="mt-auto">
            <div className="flex gap-4 w-full">
              <Button
                color="success"
                size="lg"
                variant="flat"
                onClick={handleClick}
                className="w-full"
                endContent={<CheckCircleIcon width={20} />}
              >
                {!clicked ? <> Submit </> : <>Uploading...</>}
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
