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
      className="relative isolate py-24 sm:py-32 px-6 lg:px-8"
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
          layout="responsive"
          className="relative opacity-30 right-[calc(50%-11rem)] aspect-square w-[36.125rem] translate-x-1/2 sm:right-[calc(50%-45rem)] sm:w-[60.1875rem] "
        />
      </div>
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
      <div className="flex flex-col items-center justify-center min-h-[50vh] py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg shadow-md p-6">
              <div className="rounded-lg p-2 bg-[#8690B1]">
                <img
                  src={feature.icon}
                  className="flex"
                  height={40}
                  width={40}
                  alt="icon"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-60rem)]"
      >
        <Image
          src="/ellipse.svg"
          alt="ellipse"
          width={1440}
          height={578}
          layout="responsive"
          className="relative opacity-50 right-[calc(50%+3rem)] aspect-square w-[36.125rem] translate-x-1/2 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
}
