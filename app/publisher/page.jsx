import Image from 'next/image'
import React from 'react'

export const page = () => {
  return (
    <section id="publisher" className="relative isolate overflow-hidden px-6 lg:px-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-96"
        >
              <Image
                src="/ellipse.svg"
                alt="ellipse"
                width={1440}
                height={578}
                className="relative opacity-50 right-[calc(50%-11rem)] aspect-square w-[36.125rem] translate-x-[100%] sm:right-[calc(50%-45rem)] sm:w-[60.1875rem] "
              />
            </div>
            <div></div>
      </section>
  )
}

export default page
