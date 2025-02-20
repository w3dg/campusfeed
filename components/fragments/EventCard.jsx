import Image from 'next/image'

const EventCard = () => {
  return (
    <div className="flex flex-col w-full max-w-[300px]">
      <Image
        src={'/EventDemo.svg'}
        alt="event"
        width={250}
        height={250}
        className="w-full aspect-square border-[3px] sm:border-[4px] md:border-[5px] border-[#D3DEE3] rounded-2xl object-contain"
      />
      <div className="flex mt-3 gap-2 w-full">
        <div className="flex flex-col items-center text-center rounded-md min-w-[50px]">
          <p className="text-[10px] sm:text-xs bg-[#8690B1] px-3 py-1 rounded-t-md text-[#FCFDFD] w-full">
            Sat
          </p>
          <p className="text-base sm:text-lg font-medium px-3 bg-[#E7EDF0] w-full">
            27
          </p>
          <p className="text-[10px] sm:text-xs px-3 rounded-b-md bg-[#E7EDF0] w-full">
            Mar
          </p>
        </div>
        <div className="flex flex-col justify-center flex-1">
          <p className="font-medium text-sm sm:text-base line-clamp-1">
            KODESPHERE - The Flagship Event
          </p>
          <p className="font-medium text-xs sm:text-sm text-gray-700">
            Campus 15
          </p>
          <p className="text-xs sm:text-sm text-black/60">Rs.200</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard
