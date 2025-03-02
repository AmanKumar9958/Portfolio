import React from 'react';
import Card from './Card';

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
            imageUrl: '/assets/keyClash.netlify.app/',
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
    ]

    return (
        <div className='w-full min-h-screen p-8 pt-24 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'>
            <h2 className='text-center font-bold text-4xl mb-8 w-fit m-auto mt-3 p-2 rounded-lg'>Projects</h2>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mx-auto'>
                    {projects.map((eachProject, index) => (
                        <Card key={index} title={eachProject.title} description={eachProject.description} imageUrl={eachProject.imageUrl} link={eachProject.link} github={eachProject.github}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;