"use client";

import Image from "next/image";
import { useState } from "react";

export default function Features() {

  const [features] = useState([
    {
      title: "One Platform for All",
      description:
        "A single, unified space for all your announcements and updates! It brings together academic announcements, event alerts, and society recruitments in one convenient location. Whether you're a student, teacher, or administrator, access everything you need in one place-quickly and efficiently.",
      icon: "globe.svg",
    },
    {
      title: "Realtime Updates",
      description:
        "Stay ahead with instant notifications! It delivers real-time updates, ensuring users never miss an important announcement. Whether it's event schedules, academic notices or society recruitments you'll get the latest information as soon as it's published.",
      icon: "clock.svg",
    },
    {
      title: "Easy to Manage",
      description:
        "It is designed for effortless management. With a user-friendly interface, you can quickly post, edit, and organize announcements without any hassle. Whether you're an admin, teacher, or student, keeping track of important updates or announcements has never been easier.",
      icon: "settings.svg",
    },
  ]);

  return (
    <section
      id="features"
      className="relative isolate overflow-hidden px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-96"
      >
        <Image
          src="/ellipse.svg"
          alt="ellipse"
          width={1440}
          height={578}
          className="relative opacity-30 right-[calc(50%-11rem)] aspect-square w-[36.125rem] translate-x-1/2 sm:right-[calc(50%-45rem)] sm:w-[60.1875rem] "
        />
      </div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h6 className="text-base/normal font-sans mb-2 hidden md:block font-normal text-slate-600 uppercase">
            What sets us apart
          </h6>
          <h1 className="text-5xl font-semibold font-sans text-pretty">
            Features
          </h1>
          <h3 className="mt-6 text-7 font-sans text-slate-600">
            We provide a wide range of features to make your experience better.
          </h3>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center min-h-[50vh] py-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="rounded-2xl shadow-xl border border-[#6DA27D] p-8 bg-background text-center">
                <Image
                  src={feature.icon}
                  height={50}
                  width={50}
                  alt="icon"
                  className="object-contain shrink-0 p-3 bg-slate-100 shadow-inner rounded-2xl mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
      >
        <Image
          src="/ellipse.svg"
          alt="ellipse"
          width={1440}
          height={578}
          className="relative opacity-50 right-[calc(50%+3rem)] aspect-square w-[36.125rem] translate-x-1/2 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
}
