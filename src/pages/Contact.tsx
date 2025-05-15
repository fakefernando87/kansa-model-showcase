
import React from "react";
import { Mail, Phone, User } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  const contactInfo = {
    email: "nicole@kansamodels.com",
    phone: "+1 (212) 555-0123",
    agent: "Mark Wilson",
    agentEmail: "mark@modelagency.com",
    agentPhone: "+1 (212) 555-9876"
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <h1 className="text-4xl font-light tracking-wider mb-12">Contact</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-lg mb-6">
              For booking inquiries, collaborations, or any other questions, please feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <User className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Agent</p>
                  <p className="text-gray-600">{contactInfo.agent}</p>
                  <a href={`mailto:${contactInfo.agentEmail}`} className="text-gray-600 hover:underline block">
                    {contactInfo.agentEmail}
                  </a>
                  <a href={`tel:${contactInfo.agentPhone}`} className="text-gray-600 hover:underline block">
                    {contactInfo.agentPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Contact Nicole Kansa" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
