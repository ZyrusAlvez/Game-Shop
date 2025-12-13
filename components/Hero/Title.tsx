"use client";

import "../../style/animation.css"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/navigation";

const Title = () => {
  const router = useRouter();

  return (
    <div className="h-full w-full absolute flex flex-col justify-center items-center">
      <div className="flex items-center gap-10">
        <MdOutlineArrowForwardIos className="text-9xl text-[#8C00FF] drop-shadow-[0_0_20px_#8C00FF] animate-bounce-horizontal" />
        <button onClick={() => router.push("/shop")} className='font-title bg-[#FFA500] rounded-2xl text-7xl p-5 mb-2 cursor-pointer border-[1.5px] border-white'>Shop</button>
        <MdOutlineArrowBackIos className="text-9xl text-[#8C00FF] drop-shadow-[0_0_20px_#8C00FF] animate-bounce-horizontal-reverse" />
      </div>
      <h1 className="text-xl font-tektur">Ether.it.com</h1>
    </div>
  )
}

export default Title