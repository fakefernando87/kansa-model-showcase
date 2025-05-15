
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import Layout from "@/components/Layout";

const Index = () => {
  // Model information
  const modelInfo = {
    name: "Nicole Kansa",
    location: "New York",
    height: "5'10\"",
    weight: "125 lbs",
    measurements: "32-24-34",
    shoes: "US 8 / EU 39",
    hair: "Brown",
    eyes: "Green"
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Model Info Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-light tracking-wider mb-4">{modelInfo.name}</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="text-gray-500">Location</p>
              <p>{modelInfo.location}</p>
            </div>
            <div>
              <p className="text-gray-500">Height</p>
              <p>{modelInfo.height}</p>
            </div>
            <div>
              <p className="text-gray-500">Weight</p>
              <p>{modelInfo.weight}</p>
            </div>
            <div>
              <p className="text-gray-500">Measurements</p>
              <p>{modelInfo.measurements}</p>
            </div>
            <div>
              <p className="text-gray-500">Shoes</p>
              <p>{modelInfo.shoes}</p>
            </div>
            <div>
              <p className="text-gray-500">Hair</p>
              <p>{modelInfo.hair}</p>
            </div>
            <div>
              <p className="text-gray-500">Eyes</p>
              <p>{modelInfo.eyes}</p>
            </div>
          </div>
        </section>

        {/* Photo Collage Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {/* Row 1 */}
          <div className="md:col-span-2 h-[500px] relative">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Nicole Portfolio 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[500px] relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Nicole Portfolio 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2 */}
          <div className="h-[350px] relative">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Nicole Portfolio 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[350px] relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Nicole Portfolio 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[350px] relative">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Nicole Portfolio 5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 3 */}
          <div className="md:col-span-3 h-[600px] relative">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Nicole Portfolio 6"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
