import React from 'react'
import Navbar from '../components/Navbar'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Features from '../components/Features'
import Features2 from '../components/Features2'
import Footer from '../components/Footer'
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isSignedIn) {
      navigate('/login');
    }
  }, [isSignedIn, navigate]);

  if (!isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-rose-600 rounded-2xl p-4 shadow-lg">
          <Carousel 
            showThumbs={false} 
            infiniteLoop 
            useKeyboardArrows 
            autoPlay 
            interval={5000}
            showStatus={false}
            className="rounded-xl overflow-hidden"
          >
            <div className="relative">
              <img 
                className="h-[400px] md:h-[500px] object-cover w-full" 
                src="https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/3eb6012450de9bf023168b9b543b3aa25c616ce6c2681e44ae5a877342cb446a?placeholderIfAbsent=true" 
                alt="Newly Launched" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <p className="text-3xl md:text-4xl text-white font-bold">Newly Launched</p>
              </div>
            </div>
            <div className="relative">
              <img 
                className="h-[400px] md:h-[500px] object-cover w-full" 
                src="https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/a39064cd900e884577cf7feca40415dc95a9b2f9b6971bff20463bfbf9758d28?placeholderIfAbsent=true" 
                alt="Trending" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <p className="text-3xl md:text-4xl text-white font-bold">Trending</p>
              </div>
            </div>
            <div className="relative">
              <img 
                className="h-[400px] md:h-[500px] object-cover w-full" 
                src="https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/69663fd0c199e40491bc9060cab96a6c779bff7e23e3964ec4305eb544dd6c17?placeholderIfAbsent=true" 
                alt="Best Seller" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <p className="text-3xl md:text-4xl text-white font-bold">Best Seller</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <Features/>
      <Features2/>
      <Footer/>
    </div>
  )
}

export default Shop