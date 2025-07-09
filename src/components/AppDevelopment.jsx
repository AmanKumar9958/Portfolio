import { Link } from "react-router-dom";

const AppDevelopment = () => (
    <section className="w-full min-h-screen bg-gray-100 text-gray-800 dark:text-gray-200 dark:bg-gray-900 px-6 py-20 flex flex-col items-center justify-center">
        <h1 className='text-4xl font-bold mt-5 md:mt-0 mb-4 tracking-wider'>
            App <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Development</span>
        </h1>
        <p className="max-w-xl text-lg mb-8 text-center leading-relaxed">
            We create powerful, intuitive mobile and desktop applications for iOS, Android, and cross-platform needs. Our apps are designed for performance, security, and a seamless user experience.
        </p>
        <ul className="flex flex-wrap justify-center gap-8">
            <li className="bg-[#dcfce7] dark:bg-[#14532d] hover:scale-105 duration-200 transition-all rounded-xl p-6 min-w-[200px] text-center">
                <span role="img" aria-label="Mobile" className="text-3xl">📱</span>
                <h3 className="mt-4 mb-2 text-lg font-semibold">Mobile Apps</h3>
                <p className="text-base">Native and cross-platform apps for iOS & Android.</p>
            </li>
            <li className="bg-[#dcfce7] dark:bg-[#14532d] hover:scale-105 duration-200 transition-all rounded-xl p-6 min-w-[200px] text-center">
                <span role="img" aria-label="Desktop" className="text-3xl">🖥️</span>
                <h3 className="mt-4 mb-2 text-lg font-semibold">Desktop Apps</h3>
                <p className="text-base">Robust desktop solutions for Windows, Mac, and Linux.</p>
            </li>
            <li className="bg-[#dcfce7] dark:bg-[#14532d] hover:scale-105 duration-200 transition-all rounded-xl p-6 min-w-[200px] text-center">
                <span role="img" aria-label="Cloud" className="text-3xl">☁️</span>
                <h3 className="mt-4 mb-2 text-lg font-semibold">Cloud Integration</h3>
                <p className="text-base">Seamless integration with cloud services and APIs.</p>
            </li>
        </ul>
        <div className="mt-12 text-center flex gap-5">
            <Link
                to="/app-development-info"
                className="mt-10 px-8 py-3 bg-gradient-to-r bg-[#3b82f6] text-white rounded-lg font-semibold text-lg shadow-md hover:brightness-110 transition"
            >
                Get Full Info
            </Link>
            <Link
                to="/service-web-development"
                className="mt-10 px-8 py-3 bg-gradient-to-r bg-[#dbeafe] dark:bg-[#1e3a8a] text-black dark:text-white rounded-lg font-semibold text-lg shadow-md hover:brightness-110 transition"
            >
                Next: Website Development
            </Link>
        </div>
    </section>
);

export default AppDevelopment;
