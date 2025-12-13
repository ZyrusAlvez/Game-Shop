const Divider = ({text} : {text: string}) => {
  return (
    <div className="flex px-4 gap-x-2 w-full items-center">
      <div className="border-t border-[#FFA500] w-1/2"/>
      <h1 className="font-title text-5xl text-[#FFA500]">{text}</h1>
      <div className="border-t border-[#FFA500] w-1/2"/>
    </div>
  )
}

export default Divider