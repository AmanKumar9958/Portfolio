import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact, FaAndroid, FaApple, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { SiExpo, SiFirebase } from "react-icons/si";

const ProjectCard = ({ project }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl h-[400px] w-full group shadow-2xl"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-black group-hover:scale-110 transition-transform duration-700 ease-out" />
            
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/20 transition-colors duration-500" />

            {/* Default Visible Title (Blur on Hover) */}
            <div className="absolute top-1/3 left-8 right-8 z-10 transition-all duration-500 group-hover:blur-sm group-hover:opacity-40 translate-y-[-50%]">
                <h3 className="text-5xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-lg max-w-xs">{project.shortDescription}</p>
            </div>

            {/* Hover Overlay Box */}
            <div className="absolute inset-x-6 bottom-6 bg-[#1a1a1a]/90 backdrop-blur-xl p-6 rounded-2xl transform translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl border border-white/10">
                <div className="flex flex-col gap-6">
                        <div>
                            <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">Used tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="bg-white/10 border border-white/5 text-gray-200 px-3 py-1 rounded-full text-sm backdrop-blur-md">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-end justify-between border-t border-white/10 pt-4">
                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Build to launch</p>
                                <p className="text-white font-bold text-xl">{project.timeline}</p>
                            </div>
                            
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                            >
                                View App 
                                <FaExternalLinkAlt className="text-sm" />
                            </a>
                        </div>
                </div>
            </div>
        </motion.div>
    );
};

const MobileProjects = () => {
    const projects = [
        {
            title: "Chai Cafeteria",
            shortDescription: "Order your favorite food from the Chai Cafeteria",
            image: "/assets/Chai_Cafeteria.png",
            tools: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "Stripe API"],
            timeline: "4 Weeks",
            link: "https://play.google.com/store/apps/details?id=com.chaicafeteriaranchi.frontend&pcampaignid=web_share"
        },
        {
            title: "Trip Genius App",
            shortDescription: "AI-powered travel planning made simple.",
            image: "/assets/Trip-Genius.png",
            tools: ["React Native", "Expo", "OpenAI API", "Firebase"],
            timeline: "4 Weeks",
            link: "https://github.com/AmanKumar9958/AI-Trip-Planner-App/releases/tag/v1"
        },
        {
            title: "Yoga Bar App",
            shortDescription: "Healthy snacks at your fingertips.",
            image: "/assets/Yoga_Bar_App.png",
            tools: ["React Native", "Expo", "Shopify API"],
            timeline: "1 Weeks",
            link: "https://github.com/AmanKumar9958/Yogabar-app"
        }
    ];

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-200 pt-24 pb-24 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Hero Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh] mb-24 pt-12 md:pt-0">
                     {/* Left Column: Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h1 className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                            Mobile App <br /> Excellence
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                            Turning ideas into powerful, pocket-sized experiences. I specialize in building cross-platform and native mobile applications that are intuitive, performant, and delightful to use.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {[
                                { name: "React Native", icon: <FaReact className="text-blue-400" />, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300" },
                                { name: "Expo", icon: <SiExpo className="text-blue-500" />, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300" },
                                { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-300" },
                                { name: "Android", icon: <FaAndroid className="text-green-500" />, color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300" },
                                { name: "iOS", icon: <FaApple className="text-gray-800 dark:text-gray-200" />, color: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200" },
                            ].map((skill, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${skill.color}`}
                                >
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex gap-6 mt-8">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">5+</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Apps Deployed</span>
                                </div>
                                <div className="w-[1px] h-12 bg-gray-300 dark:bg-gray-700" />
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">4.8/5</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Rating</span>
                                </div>
                        </div>

                        <div className="mt-8">
                            <Link 
                                to="/projects-web-development" 
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                View Web Projects <FaArrowRight />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: 3D Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center items-center relative"
                    >
                         <div className="absolute w-[80%] h-[80%] bg-blue-500/20 blur-3xl rounded-full -z-10 animate-pulse" />
                         <motion.img 
                            src="/3D_Figure_Mobile.webp" 
                            alt="Mobile Development 3D" 
                            className="w-full max-w-md object-contain drop-shadow-2xl z-10"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>

                {/* Featured Projects Grid */}
                <div className="mt-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                        Featured <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Mobile Projects</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-600 pt-10 text-gray-600 text-lg font-medium flex justify-center">
                    <h1 className="font-bold text-center">More Soon</h1>
                </div>
            </div>
        </div>
    )
}

export default MobileProjects
