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
    async function fetchData() {
      console.log(
        "hospitalRegistrationNo, password",
        hospitalRegistrationNo,
        password
      );
      try {
        const donorRequestDataResponse = await axios.post(
          `/api/hospital/login`,
          {
            params: {
              hospitalRegistrationNo,
              password,
            },
          }
        );

        if (
          donorRequestDataResponse.status === 200 ||
          donorRequestDataResponse.data.success
        ) {
          console.log("Donation Request Sent Successfully!");
          // router.push("/hospital/home");
          router.push("/hospital/donor-requests");
        } else {
          toast.error("Invalid hospitalRegistrationNo or password");
        }
      } catch (error: any) {
        toast.error("Invalid hospitalRegistrationNo or password");
      }
    }
    fetchData();
    if (isLastTab()) {
      toast.success("Donation Request Sent Successfully!");
    }
  }, [hospitalRegistrationNo, password]);
  //   hospitalRegistrationNo, password
  return (
    <div className="flex h-full justify-center items-center mt-32">
      <div className="flex flex-col w-[600px] flex-wrap md:flex-nowrap gap-4">
        <div className="p-8 rounded-xl shadow-xl flex flex-col gap-4 border-1">
          <div className="text-2xl font-semibold">Login for Hospital</div>
          <Divider />
          <Input type="text" label="Hospital Name" variant="faded" required />
          <Input
            type="text"
            label="hospital Registration No"
            onChange={(e) => setHospitalRegistrationNo(e.target.value)}
            variant="faded"
            required
          />
          <Input
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            variant="faded"
            required
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
                Submit
              </Button>
            </div>
          </div>
          {/* @ts-ignore */}
         <p> Donot have an account?{" "} <span onClick={() => router.push("/hospital/hospital-register")} className="font-bold text-amber-600">Register</span></p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AddDonorPage;
