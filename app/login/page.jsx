'use client';

import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="relative flex h-screen items-center justify-center login-page">
      <Image src="/ellipse.svg" alt="Ellipse" width={200} height={200} className="w-80 sm:w-[500px] absolute top-0 left-0"/>
      <Image src="/ellipse.svg" alt="Ellipse" width={200} height={200} className="w-80 sm:w-[500px] absolute bottom-0 right-0"/>
      <div className="rounded-2xl bg-white p-8 shadow-md w-[400px] flex flex-col items-center border border-gray-200">
        <Image src="/images/campus_feed_logo.svg" alt="Campus Feed" width={200} height={200} className='mb-6'/>
        <p className="mt-1 text-gray-500 text-sm">Login to Publish</p>
        <p className="text-gray-400 text-xs">Your events in Campus Feed</p>

        <button className="mt-6 w-full login text-black py-2 rounded-md shadow-md hover:opacity-90 flex items-center justify-center">
          <Image src="/google.png" alt="Google" width={25} height={25} className="mr-2"/>
          Continue with Google
        </button>

        <p className="mt-4 text-xs text-gray-500 text-center">
          On proceeding you agree to our <span className="text-gray-800 font-medium">Terms and Conditions</span>
        </p>

        <div className="mt-3 w-full text-center text-gray-400 text-xs bg-gray-100 py-2 rounded-md cursor-not-allowed">
          Note: Only KIIT Students can login
        </div>
      </div>

      <p className="absolute text-center bottom-10 text-xs text-gray-500">
        You can publish events of your societies at one <br/> place for everyone to discover.
      </p>
    </div>
  );
}