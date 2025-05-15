
import React from "react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <h1 className="text-4xl font-light tracking-wider mb-12">About</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Nicole Kansa" 
              className="w-full h-[600px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg">
              Nicole Kansa is a professional model based in New York with over 5 years of experience in the fashion industry.
            </p>
            
            <p>
              Having worked with renowned brands across the globe, Nicole brings versatility and professionalism to every project. 
              Her unique look and dedicated work ethic have made her a sought-after talent in editorial, commercial, and runway modeling.
            </p>
            
            <p>
              When not in front of the camera, Nicole enjoys traveling, practicing yoga, and advocating for sustainable fashion practices.
            </p>
            
            <div className="pt-4">
              <p className="italic text-gray-600">
                "I believe modeling is not just about appearance, but about conveying emotion and story through imagery."
              </p>
              <p className="mt-2">— Nicole Kansa</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
