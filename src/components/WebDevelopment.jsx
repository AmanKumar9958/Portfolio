import { Link } from 'react-router-dom';

const WebDevelopment = () => (
    <section className="w-full min-h-screen bg-gray-100 text-gray-800 dark:text-gray-200 dark:bg-gray-900 px-6 py-20 flex flex-col items-center justify-center">
        <h1 className='text-4xl font-bold mb-4 tracking-wider'>
            Web <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Development</span>
        </h1>
        <p className="max-w-xl text-xl mb-8 text-center leading-relaxed">
            We build modern, responsive, and high-performance websites tailored to your business needs. From landing pages to complex web applications, our team ensures your online presence stands out.
        </p>
        <ul className="flex flex-wrap justify-center gap-8">
            <li className="bg-[#dbeafe] dark:bg-[#1e3a8a] rounded-xl p-6 min-w-[200px] text-center  hover:scale-105 duration-200 transition-all">
                <span role="img" aria-label="Design" className="text-3xl">🎨</span>
                <h3 className="mt-4 mb-2 text-lg font-semibold">UI/UX Design</h3>
                <p className="text-base">Modern, user-friendly interfaces for the best experience.</p>
            </li>
            <li className="bg-[#dbeafe] dark:bg-[#1e3a8a] rounded-xl p-6 min-w-[200px] text-center hover:scale-105 duration-200 transition-all">
                <span role="img" aria-label="Code" className="text-3xl">💻</span>
                <h3 className="mt-4 mb-2 text-lg font-semibold">Frontend & Backend</h3>
                <p className="text-base">Robust solutions using React, Node.js, and more.</p>
            </li>
            <li className="bg-[#dbeafe] dark:bg-[#1e3a8a] rounded-xl p-6 min-w-[200px] text-center hover:scale-105 duration-200 transition-all">
                <span role="img" aria-label="Rocket" className="text-3xl">🚀</span>
                <h3 className="mt-4 mb-2 text-lg font-semibold">Performance</h3>
                <p className="text-base">Fast, SEO-optimized, and scalable web solutions.</p>
            </li>
        </ul>
        <div className="mt-12 text-center flex gap-5">
            <Link
                to="/web-development-info"
                className="mt-10 px-8 py-3 bg-gradient-to-r bg-[#3b82f6] text-white rounded-lg font-semibold text-lg shadow-md hover:brightness-110 transition"
            >
                Get Full Info
            </Link>
            <Link
                to="/service-app-development"
                className="mt-10 px-8 py-3 bg-gradient-to-r bg-[#dcfce7] dark:bg-[#14532d] text-black dark:text-white rounded-lg font-semibold text-lg shadow-md hover:brightness-110 transition"
            >
                Next: App Development
            </Link>
        </div>
    </section>
);

export default WebDevelopment;
