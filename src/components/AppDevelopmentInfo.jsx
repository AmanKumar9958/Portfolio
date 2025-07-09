import { Link } from "react-router-dom";

const plans = [
    {
        title: "Basic App",
        price: "₹10,000",
        features: [
        "Single platform (iOS or Android)",
        "Simple UI",
        "Up to 3 screens",
        "Basic functionality"
        ],
        color: "#38bdf8"
    },
    {
        title: "Intermediate App",
        price: "₹20,000",
        features: [
        "Cross-platform (iOS & Android)",
        "Custom UI/UX",
        "Up to 8 screens",
        "API integration",
        "Push notifications"
        ],
        color: "#a78bfa"
    },
    {
        title: "Complete App",
        price: "₹35,000+",
        features: [
        "Full-featured app",
        "Unlimited screens",
        "Authentication",
        "Cloud integration",
        "App Store/Play Store deployment",
        "Ongoing support"
        ],
        color: "#f472b6"
    }
    ];

    const AppDevelopmentInfo = () => (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center px-4 py-12">
        <h1 className="text-4xl font-bold mt-20 mb-10 tracking-wider text-center">
            App Development{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Pricing
            </span>
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
        {plans.map(plan => (
            <div
            key={plan.title}
            className="bg-white/10 rounded-2xl shadow-lg p-8 min-w-[260px] max-w-xs flex flex-col items-center"
            style={{ borderTop: `6px solid ${plan.color}` }}
            >
            <h3 className="text-xl font-semibold mb-2" style={{ color: plan.color }}>{plan.title}</h3>
            <div className="text-2xl font-bold mb-4" style={{ color: plan.color }}>{plan.price}</div>
            <ul className="mb-6 text-black dark:text-white/90  text-left list-none space-y-2">
                {plan.features.map(f => (
                <li key={f} className="flex items-center">
                    <span className="mr-2" style={{ color: plan.color }}>✔️</span> {f}
                </li>
                ))}
            </ul>
            <Link
                to={'/contact'}
                className="px-6 py-2 rounded-lg font-semibold text-white"
                style={{ background: plan.color }}
            >
                Get Started
            </Link>
            </div>
        ))}
        </div>
    </section>
);

export default AppDevelopmentInfo;