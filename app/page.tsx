import Hero from "../components/Hero/Hero";
import Divider from "@/components/Divider";

const page = () => {
  return (
    <div>
      <Hero />
      <Divider text="FAQ" />
      <h1 className="text-[#6b7280] font-tektur text-center">
        Explore the common
        <span className="text-[#FFA500]"> questions and answers </span> 
        about celebration
      </h1>
    </div>
  )
}

export default page