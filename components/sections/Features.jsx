import Image from 'next/image';

export default function Features() {
  return (
    <section
      id='features'
      className='relative isolate py-24 sm:py-32 px-6 lg:px-8'
    >
      <div
        aria-hidden='true'
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-96'
      >
        <Image
          src='/ellipse.svg'
          alt='ellipse'
          width={1440}
          height={578}
          layout='responsive'
          className='relative opacity-60 right-[calc(50%-11rem)] aspect-square w-[36.125rem] translate-x-1/2 sm:right-[calc(50%-45rem)] sm:w-[60.1875rem] '
        />
      </div>
      <div className='mx-auto max-w-2xl text-center'>
        <h5 className='text-base/7 mb-2 hidden md:block font-semibold text-[#ABBEC9]'>
          What sets us apart
        </h5>
        <h1 className='text-5xl font-bold tracking-tight text-pretty'>
          Features
        </h1>
        <h3 className='mt-6 text-lg/8'>
          We provide a wide range of features to make your experience better.
        </h3>
      </div>
      <div className='mt-10 grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
        {/* Feature Card which are to be added */}
        <div className='h-80 bg-white ring-2 ring-[#6DA27D] rounded-xl' />
        <div className='h-80 bg-white ring-2 ring-[#6DA27D] rounded-xl' />
        <div className='h-80 bg-white ring-2 ring-[#6DA27D] rounded-xl' />
      </div>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-60rem)]'
      >
        <Image
          src='/ellipse.svg'
          alt='ellipse'
          width={1440}
          height={720}
          layout='responsive'
          className='relative opacity-60 right-[calc(50%+3rem)] aspect-square w-[36.125rem] translate-x-1/2 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]'
        />
      </div>
    </section>
  );
}
