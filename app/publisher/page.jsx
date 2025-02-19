import { Card, CardBody, CardHeader, Form, Input } from "@heroui/react";
import Image from "next/image";

const PublisherPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#e8f5e9] via-[#e3f2fd] to-[#f3e5f5] px-4 py-16">
      <Card className="mx-auto w-full max-w-4xl items-center justify-center rounded-2xl bg-white/80 p-6 shadow-2xl backdrop-blur-sm">
        <CardHeader className="space-y-1">
          <Image src="navlogo.svg" width={200} height={200} alt="logo" />
          <span className="justify-center text-center">|</span>
          <span className="text-muted-foreground ml-2 text-base font-normal">
            Details Form
          </span>
        </CardHeader>
        <CardBody>
          <Form className="h-[200px] space-y-8">
            <h3 className="text-md font-medium">Publisher Details</h3>
            <hr className="" />
            <Input />
          </Form>
          <Form className="h-[200px] space-y-8">
            <h3 className="text-md font-medium">Details</h3>
            <hr className="" />
            <Input />
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default PublisherPage;
