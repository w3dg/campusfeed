import Image from 'next/image'

const EventCard = () => {
  return (
    <div className="flex flex-col border-2 border-black">
      <Image
        src={'/EventDemo.svg'}
        alt="event"
        width={150}
        height={150}
        className="h-[150px] w-[150px] md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px] object-contain border-[5px] border-[D3DEE3] rounded-2xl"
      />
      <div className="flex  mt-2 gap-1">
        <div className="flex flex-col items-center text-center  rounded-md ">
          <p className="text-[9px] bg-[#8690B1] px-3 py-1 rounded-t-md text-[#FCFDFD] min-w-full">
            Sat
          </p>
          <p className="text-[14px] px-3 bg-[#E7EDF0] min-w-fit">27</p>
          <p className="text-[10px] px-3 rounded-b-md bg-[#E7EDF0] min-w-full">
            Mar
          </p>
        </div>
        <div className="flex flex-col text-[12px] ">
          <p className="font-medium line-clamp-1 pr-3">
            KODESPHERE - The Flagship Event
          </p>
          <p className="font-medium">Campus 15</p>
          <p className="text-black/50"> Rs.200</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard
