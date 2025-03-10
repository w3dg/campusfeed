"use client";
import { useRef } from "react";
import {
  Button,
  Card,
  CardHeader,
  DateRangePicker,
  DatePicker,
  Divider,
  Form,
  Input,
  Textarea,
} from "@heroui/react";
import Image from "next/image";
import { EventSchema } from "../../lib/schema";

const PublisherPage = () => {
  const formRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(event);

    const formData = new FormData(formRef.current);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      position: formData.get("position"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      title: formData.get("title"),
      school: formData.get("school"),
      venue: formData.get("venue"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      socialLinks:
        formData.get("socialLinks").trim().length !== 0
          ? formData.get("socialLinks")
          : undefined,
      registrationLinks: formData.get("registrationLinks"),
      image: formData.get("image"),
      description: formData.get("description"),
    };

    console.log(data);

    // Validate on client before submitting
    const eventSubmission = EventSchema.safeParse(data);
    if (!eventSubmission.success) {
      console.log(eventSubmission.error.errors);
      return;
    } else {
      console.log("Validated", eventSubmission.data);
    }

    // Send request to server
  }

  return (
    <div
      id="publisher-page"
      className="min-h-screen w-full bg-gradient-to-br from-[#e8f5e9] via-[#e3f2fd] to-[#f3e5f5] px-2 py-10"
    >
      <Card className="mx-auto w-full max-w-4xl items-center justify-center rounded-2xl bg-[#fcfdfd] p-6 shadow-2xl backdrop-blur-sm">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <CardHeader className="items-center space-x-2 divide-x-2 divide-[#6DA27D]">
            <Image
              src="navlogo.svg"
              width={200}
              height={200}
              alt="logo"
              className="-ml-4 pr-2"
            />
            <span className="pl-3 text-base font-normal">Details Form</span>
          </CardHeader>
          <h3 className="font-medium">Publisher Details</h3>
          <Divider className="mb-4 bg-[#6DA27D]" />
          <div className="mb-4 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Input
              type="text"
              name="firstName"
              label="First Name"
              variant="bordered"
              isRequired
            />
            <Input
              type="text"
              name="lastName"
              label="Last Name"
              variant="bordered"
              isRequired
            />
            <Input
              type="text"
              name="position"
              label="Position"
              variant="bordered"
              isRequired
            />
            <Input
              type="text"
              name="phone"
              label="Phone Number"
              variant="bordered"
              isRequired
            />
            <Input
              type="email"
              name="email"
              label="Email ID"
              variant="bordered"
              className="sm:col-span-2"
              isRequired
            />
          </div>

          <h3 className="font-medium">Event Details</h3>
          <Divider className="mb-4 bg-[#6DA27D]" />
          <div className="mb-4 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Input
              type="text"
              name="title"
              label="Event Title"
              variant="bordered"
              isRequired
            />
            <Input
              type="text"
              name="school"
              label="Organising School/Society"
              variant="bordered"
              isRequired
            />
            <Input
              type="text"
              name="venue"
              label="Venue"
              variant="bordered"
              isRequired
            />
            <DatePicker
              isRequired
              name="startDate"
              label="Start date"
              variant="bordered"
            />
            <DatePicker
              isRequired
              name="endDate"
              label="End date"
              variant="bordered"
            />
            <Input
              type="text"
              name="socialLinks"
              label="Social Media Link"
              variant="bordered"
            />
          </div>
          <div className="mb-4 grid w-full grid-cols-1 gap-8 lg:grid-cols-1">
            <Input
              type="text"
              name="registrationLinks"
              label="Registration Link"
              variant="bordered"
              isRequired
            />
            <Input
              type="url"
              name="image"
              label="Poster Image URL"
              variant="bordered"
              isRequired
            />
            <Textarea
              name="description"
              label="Description"
              variant="bordered"
              isRequired
              rows="4"
            />
          </div>
          <Divider className="mb-4 bg-[#6DA27D]" />
          <div className="jsutify-between flex w-full flex-col gap-4 sm:flex-row">
            <Button type="button" variant="bordered" className="w-full">
              Cancel
            </Button>
            <Button type="submit" className="w-full bg-[#6DA27D] text-white">
              Confirm
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default PublisherPage;
