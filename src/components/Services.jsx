


export function Services({title, serviceImage, description}) {
  return (
<>

<div className="flex justify-evenly">

        {/* <div key={title} className=""> */}
        <div className="">
             
        <div className="relative h-[300px] w-[300px] rounded-md inset-y-[400px]">
            <img src={serviceImage} alt="" className="z-0 h-full w-full rounded-md object-cover"/>

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{title}</h1>
                <p className="mt-2 text-sm text-gray-300">
                {description}
                </p>
            </div>
        </div>
     </div>
</div>

</>
  )
}
