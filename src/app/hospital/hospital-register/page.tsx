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
  ArrowRightCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/16/solid";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
const initialState = {
  name: "",
  address: "",
  state: "",
  city: "",
  district: "",
  street: "",
  pincode: "",
  typeOfHospital: "",
  estd: 0,
  primaryMobileNo: "",
  secondaryMobileNo: "",
  primaryEmail: "",
  secondaryEmail: "",
  registeredFor: "",
  hospitalRegistrationNo: "",
  password: "",
};

const AddDonorPage = () => {
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const [deadDonor, setDeadDonor] = useState(false);
  const [hospitalData, setHospitalData] = useState(initialState);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // name,
  // address,
  // state,
  // city,
  // district,
  // street,
  // pincode,
  // typeOfHospital,
  // estd,
  // primaryMobileNo,
  // secondaryMobileNo,
  // primaryEmail,
  // secondaryEmail,
  // registeredFor,
  // hospitalRegistrationNo,
  // password: hashedPassword,
  const tabNames = useCallback(() => {
    return [
      "Hospital",
      "Basics",
      "Address",
      "Contacts",
      "ID Proof",
      "Password",
    ];
  }, []);
  const isLastTab = useCallback(() => {
    return tab === tabNames().length - 2;
  }, [tab]);
  const handleClick = useCallback(() => {
    if (isLastTab()) {
      const fetchData = async () => {
        console.log("hospitalData", hospitalData);
        try {
          if (!hospitalData.password) {
            hospitalData.password = "1234";
          }
          if (!hospitalData.address) {
            hospitalData.address = "Kolkata, West Bengal, India";
          }
          if (!hospitalData.city || !hospitalData.state || !hospitalData.name || !hospitalData.pincode || !hospitalData.primaryEmail || !hospitalData.primaryMobileNo || !hospitalData.hospitalRegistrationNo || !hospitalData.registeredFor || !hospitalData.typeOfHospital || !hospitalData.estd) {
            toast.error("Enter all the data");
          }
          const hospitalRegResponse = await axios.post(
            `/api/hospital/registration`,
            {
              name : hospitalData.name, 
              address : hospitalData.address,
              state : hospitalData.state,
              city : hospitalData.city,
              district : hospitalData.district,
              street : hospitalData.street,
              pincode : hospitalData.pincode,
              typeOfHospital : hospitalData.typeOfHospital,
              estd : hospitalData.estd,
              primaryMobileNo : hospitalData.primaryMobileNo,
              secondaryMobileNo : hospitalData.secondaryMobileNo,
              primaryEmail : hospitalData.primaryEmail,
              secondaryEmail : hospitalData.secondaryEmail,
              registeredFor : hospitalData.registeredFor,
              hospitalRegistrationNo : hospitalData.hospitalRegistrationNo,
              password : hospitalData.password
            }
          );
          console.log("hospitalRegResponse", hospitalRegResponse);

          if (
            hospitalRegResponse.status === 201 ||
            hospitalRegResponse.data.success
          ) {
            console.log("Donation Request Sent Successfully!");
            // router.push("/hospital/home");
            toast.success("Donation Request Sent Successfully!");
            router.push("/hospital/donor-requests");
          } else {
            toast.error("Something went wrong! Please try again later.");
          }
        } catch (error: any) {
          toast.error("Something went wrong!");
        }
      };
      fetchData();
      toast.success("Donation Request Sent Successfully!");
    } else {
      setTab((prev) => prev + 1);
    }
  }, [isLastTab, setTab]);

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("name, value", name, value);
    setHospitalData({
      ...hospitalData,
      [name]: value,
    });
  };

  return (
    <div className="flex h-full justify-center items-center mt-24">
      <div className="flex flex-col w-[600px] flex-wrap md:flex-nowrap gap-4">
        {/* <Lottie options={defaultOptions} height={200} width={200} /> */}

        <div className="p-8 rounded-xl shadow-xl flex flex-col gap-4 border-1">
          <div className="text-2xl font-semibold">
            Registration for Hospital
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
                name="name"
                type="text"
                label="Name"
                variant="faded"
                required
                onChange={handleChange}
              />
              <Input
                type="text"
                label="Type of Hospital (e.g. Government/Private)"
                variant="faded"
                name="typeOfHospital"
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                label="ESTD."
                variant="faded"
                name="estd"
                onChange={handleChange}
                required
              />
            </>
          )}
          {tab === 1 && (
            <>
              <Input
                type="text"
                name="state"
                label="State"
                variant="faded"
                required
                onChange={handleChange}
              />
              <Input
                type="text"
                name="city"
                label="City"
                variant="faded"
                required
                onChange={handleChange}
              />
              <Input
                type="text"
                name="district"
                label="District"
                variant="faded"
                required
                onChange={handleChange}
              />
              <Input
                type="text"
                name="street"
                label="Street"
                variant="faded"
                required
                onChange={handleChange}
              />
              <Input
                type="text"
                name="address"
                label="Address"
                variant="faded"
                required
                onChange={handleChange}
              />
              <Input
                type="text"
                name="pincode"
                label="Pincode"
                variant="faded"
                required
                onChange={handleChange}
              />
            </>
          )}
          {tab === 2 && (
            <>
              <Input
                type="number"
                label="Primary Mobile Number"
                variant="faded"
                name="primaryMobileNo"
                onChange={handleChange}
                required
              />
              <Input
                type="number"
                label="Secondary Phone Number"
                variant="faded"
                onChange={handleChange}
                name="secondaryMobileNo"
                required
              />
              <Input
                type="email"
                label="Primary Email ID"
                variant="faded"
                required
                name="primaryEmail"
                onChange={handleChange}
              />
              <Input
                type="text"
                label="Secondary Email ID"
                variant="faded"
                required
                name="secondaryEmail"
                onChange={handleChange}
              />
            </>
          )}
          {tab === 3 && (
            <>
              <Input
                type="text"
                label="Hospital Registration No (HRN No.)"
                variant="faded"
                name="hospitalRegistrationNo"
                required
                onChange={handleChange}
              />

              <Input
                type="text"
                label="It can operates on (e.g. Retrieval | Transplant | both )"
                variant="faded"
                name="registeredFor"
                required
                onChange={handleChange}
              />
            </>
          )}
          {tab === 4 && (
            <>
              <Input
                type="password"
                label="Password"
                variant="faded"
                required
                name="password"
                onChange={handleChange}
              />
              <Input
                type="password"
                label="Confirm Password"
                variant="faded"
                required
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
