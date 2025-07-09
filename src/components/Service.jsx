import { FaCode, FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = () => {
    const services = [
        {
            title: "Web Development",
            icon: <FaCode className="w-12 h-12 text-blue-500" />,
            description: "Crafting modern, responsive websites using cutting-edge technologies like MERN, Next JS, Payment Integration, and more.",
            color: "bg-blue-100 dark:bg-blue-900",
            link: "/service-web-development"
        },
        {
            title: "Mobile App Development",
            icon: <FaMobileAlt className="w-12 h-12 text-green-500" />,
            description: "Building cross-platform mobile applications with React Native and Flutter for iOS and Android.",
            color: "bg-green-100 dark:bg-green-900",
            link: "/service-app-development"
        }
    ];

    return (
        <section className="w-full min-h-screen bg-gray-100 text-gray-800 dark:text-gray-200 dark:bg-gray-900 px-6 py-20">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12 mt-8">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
                        My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Digital solutions that drive success
                    </p>
                </div>

                <div className="relative space-y-28">
                    {services.map((service, index) => (
                        <Link
                            to={service.link}
                            key={index}
                            className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 group focus:outline-none focus:ring-4 focus:ring-blue-300`}
                        >
                            {/* Connector Line */}
                            {index > 0 && (
                                <div className="hidden md:block absolute top-[-40px] left-1/2 w-[2px] h-[50px] bg-gray-300 dark:bg-gray-600"></div>
                            )}
                            
                            {/* Icon with Hover Effect */}
                            <div className={`${service.color} p-4 rounded-2xl relative z-10 transition-transform duration-300 shadow-md w-full max-w-xs group-hover:shadow-lg group-hover:-translate-y-1`}>
                                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white dark:bg-gray-800">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Service Details */}
                            <div className={`${service.color} p-8 rounded-2xl relative z-10 flex-1 transition-transform duration-300 shadow-md group-hover:shadow-lg group-hover:-translate-y-1 ${
                                index % 2 === 0 ? 'md:ml-[-30px]' : 'md:mr-[-30px]'
                            }`}>
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Explore my works */}
            <div className="text-center mt-16">
                <Link 
                    to="/projects" 
                    className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Explore My Works
                </Link>
            </div>
        </section>
    );
};

export default Service;
