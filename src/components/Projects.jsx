import React from 'react';
import Card from './Card';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
    const projects = [
        {
            title: 'News-365',
            description: 'A real time application providing whole world news at one place',
            imageUrl: '/assets/News-365.png', // Update path
            link: 'https://news-365.netlify.app/',
            github: 'https://github.com/AmanKumar9958/News-365',
        },
        {
            title: 'KeyClash',
            description: "A real-time typing speed test application with a user-friendly interface",
            imageUrl: '/assets/keyClash.png/',
            link: 'https://news-365.netlify.app/',
            github: 'https://github.com/AmanKumar9958/KeyClash',
        },
        {
            title: 'Weather App',
            description: 'A real-time weather application providing city-specific weather updates.',
            imageUrl: '/assets/WeatherApp.png', // Update path
            link: 'https://amankumar9958.github.io/weatherApp',
            github: 'https://github.com/AmanKumar9958/weatherApp',
        },
        {
            title: 'QR Generator',
            description: 'Generates QR codes for text or links quickly and easily.',
            imageUrl: '/assets/QRGenerator.png', // Update path
            link: 'https://amankumar9958.github.io/QRGenerator/',
            github: 'https://github.com/AmanKumar9958/QRGenerator',
        },
        {
            title: 'Pixel Paint',
            description: 'A Chrome extension for selecting colors and enhancing creativity.',
            imageUrl: '/assets/PixelPaint.png', // Update path
            link: 'https://amankumar9958.github.io/PixelPaint',
            github: 'https://github.com/AmanKumar9958/PixelPaint',
        },
        {
            title: 'Text to Speech Converter',
            description: 'Converts any input text into clear, audible speech using modern browser-based text-to-speech APIs',
            imageUrl: '/assets/TextToSpeech.png', // Update path
            link: 'https://amankumar9958.github.io/textToSpeech/',
            github: 'https://github.com/AmanKumar9958/textToSpeech',
        },
        {
            title: 'Link Saver',
            description: 'A simple and efficient tool to save and organize important links, ensuring easy access and better productivity.',
            imageUrl: '/assets/LinkSaver.png', // Update path
            link: 'https://amankumar9958.github.io/linkSaver/',
            github: 'https://github.com/AmanKumar9958/linkSaver',
        },
        {
            title: 'Palindrome Checker',
            description: 'A lightweight executable application to check whether a given word or phrase is a palindrome, ensuring accuracy and speed.',
            imageUrl: '/assets/PalindromeChecker.png', // Update path
            link: 'https://github.com/AmanKumar9958/PalindromeChecker/releases/tag/v0.1',
            github: 'https://github.com/AmanKumar9958/PalindromeChecker',
        }
    ];

    return (
        <section className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 px-8 py-24">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 mt-4">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
                Showcasing my development journey
            </p>
            </div>

            <div className="relative space-y-24">
            {projects.map((project, index) => (
                <div 
                key={index}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 group`}
                >
                {/* Vertical connector lines */}
                {index > 0 && (
                    <div className="hidden md:block absolute top-[-50px] left-1/2 w-[2px] h-[60px] bg-gray-300 dark:bg-gray-600"></div>
                )}
                
                {/* Image Container */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-3xl relative z-10 transition-transform duration-300 group-hover:scale-105 shadow-lg w-full max-w-xl">
                    <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-64 object-cover rounded-2xl"
                    />
                </div>

                {/* Content Card */}
                <div className={`bg-white dark:bg-gray-800 p-8 rounded-3xl relative z-10 flex-1 transition-transform duration-300 group-hover:scale-105 shadow-lg ${
                    index % 2 === 0 ? 'md:ml-[-50px]' : 'md:mr-[-50px]'
                }`}>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                    </p>
                    <div className="flex gap-4">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <FiExternalLink className="w-5 h-5" />
                        Live Demo
                    </a>
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
                    >
                        <FiGithub className="w-5 h-5" />
                        Source Code
                    </a>
                    </div>
                </div>

                
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Projects;