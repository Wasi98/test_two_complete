

const locations = [
  {
    title: 'Mirpur Office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: 'Dhaka',
  },
  {
    title: 'Head office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: 'Dhaka',
  },
  {
    title: 'Chittagong office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: 'Chittagong',
  },
]



function About() {
  return (
   <>
       <div className="mx-auto max-w-7xl px-4">

        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Made with love, right here in Bangladesh
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
        </div>
        <div className="w-full space-y-4">
          <img
            className="h-[200px] w-full rounded-xl object-cover md:h-full"
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
            alt=""
          />
        </div>
        {/* locations */}
        <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
          {locations.map((location) => (
            <div key={location.title} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
              <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
              <p className="w-full text-base text-gray-700">{location.timings}</p>
              <p className="text-sm font-medium">{location.address}</p>
            </div>
          ))}
        </div>
      </div>
  
   </>
  );
}

export default About;