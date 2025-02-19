"use client";

import { Card, CardBody, CardHeader, Form, Input } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

export const detailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    phone: "",
    title: "",
    school: "",
    venue: "",
    startDate: "",
    endDate: "",
    socialLinks: "",
    registrationLinks: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return { handleChange, handleSubmit };
};

const PublisherPage = () => {
  const { handleChange, handleSubmit } = detailsForm();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#e8f5e9] via-[#e3f2fd] to-[#f3e5f5] px-4 py-10">
      <Card className="mx-auto w-full max-w-4xl items-center justify-center rounded-2xl bg-white/80 p-6 shadow-2xl backdrop-blur-sm">
        <Form onSubmit={handleSubmit}>
          <CardHeader className="space-y-1">
            <Image src="navlogo.svg" width={200} height={200} alt="logo" />
            <span className="text-muted-foreground ml-2 text-base font-normal">
              Details Form
            </span>
          </CardHeader>
          <h3 className="mb-2 font-medium">Publisher Details</h3>
          <div className="mb-4 grid grid-cols-3 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
          </div>

          <h3 className="mb-2 font-medium">Event Details</h3>
          <div className="mb-4 grid grid-cols-3 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="school"
              placeholder="Organising School/Society"
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="date"
              name="startDate"
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="date"
              name="endDate"
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="socialLinks"
              placeholder="Social Media Links"
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="registrationLinks"
              placeholder="Registration Links"
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
          </div>

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="mb-4 w-full rounded border border-gray-300 p-2"
            rows="4"
          />

          <div className="jsutify-between flex">
            <button
              type="button"
              className="rounded border border-gray-300 p-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-green-500 p-2 text-white"
            >
              Confirm
            </button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default PublisherPage;
