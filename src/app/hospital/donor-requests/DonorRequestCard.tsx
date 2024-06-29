import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Chip,
} from "@nextui-org/react";

const DonorRequestCard = () => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-md">Heart</p>
          <Chip color="success" variant="dot" size="md">
            Live Donor
          </Chip>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>John Doe</p>
        <p>
          <span className="font-semibold">Blood Group:</span> O+
          <br />
          <span className="font-semibold">Age:</span> 25
          <br />
          <span className="font-semibold">Address:</span>Kolkata, Pin-700001, WB
          <br />
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Upload Documents
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DonorRequestCard;
