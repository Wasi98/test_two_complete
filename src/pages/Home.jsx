import bannerImage from '../assets/banner_image.jpg';
import serviceImage from '../assets/service.jpeg';
import { Services } from '../components/Services';

function Home() {
  const serviceItem = [
    {
      title: 'Web Application',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa nisi quasi consequuntur eos. Porro!",
      image : serviceImage
    },
    {
      title: 'Mobile Application',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa nisi quasi consequuntur eos. Porro!",
      image : serviceImage
      
    },
    {
      title: 'DevOps',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa nisi quasi consequuntur eos. Porro!",
      image : serviceImage
    },
  ]

  return (
   <>
    <div>
    <img src={bannerImage} alt="Banner" className="absolute inset-0 w-full h-80 object-cover mt-10" />
   </div>

   <div className='flex gap-4 justify-center'>
      {
        serviceItem.map((service, i) => (
          <Services key={i} title={service.title} serviceImage={service.image} description={service.description}/>  //props passing
        ))
      }
       
   </div>
   </>
  );
}

export default Home;