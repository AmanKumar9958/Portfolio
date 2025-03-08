import React from 'react';
import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';

const Service = () => {
    const services = [
        {
        title: "Web Development",
        icon: <FaCode className="w-16 h-16 text-blue-500" />,
        description: "Crafting modern, responsive websites using cutting-edge technologies like React, Next.js, and Tailwind CSS.",
        color: "bg-blue-100 dark:bg-blue-900"
        },
        {
        title: "Mobile App Development",
        icon: <FaMobileAlt className="w-16 h-16 text-green-500" />,
        description: "Building cross-platform mobile applications with React Native and Flutter for iOS and Android.",
        color: "bg-green-100 dark:bg-green-900"
        },
        {
        title: "API Development",
        icon: <FaServer className="w-16 h-16 text-purple-500" />,
        description: "Developing secure, scalable RESTful APIs using Node.js, Express, and MongoDB.",
        color: "bg-purple-100 dark:bg-purple-900"
        }
    ];

    return (
        <section className="w-full min-h-screen bg-gray-100 text-gray-800 dark:text-gray-200 dark:bg-gray-900 px-8 py-24">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 mt-4">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
                Digital solutions that drive success
            </p>
            </div>

            <div className="relative space-y-24">
            {services.map((service, index) => (
                <div 
                key={index}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 group`}
                >
                {/* Vertical connector lines */}
                {index > 0 && (
                    <div className="hidden md:block absolute top-[-50px] left-1/2 w-[2px] h-[60px] bg-gray-300 dark:bg-gray-600"></div>
                )}
                
                {/* Icon Container */}
                <div className={`${service.color} p-8 rounded-3xl relative z-10 transition-transform duration-300 group-hover:scale-105 shadow-lg`}>
                    <div className="w-32 h-32 flex items-center justify-center rounded-full bg-white dark:bg-gray-800">
                    {service.icon}
                    </div>
                </div>

                {/* Content Card */}
                <div className={`${service.color} p-8 rounded-3xl relative z-10 flex-1 transition-transform duration-300 group-hover:scale-105 shadow-lg ${
                    index % 2 === 0 ? 'md:ml-[-50px]' : 'md:mr-[-50px]'
                }`}>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Service;