import { Link } from "react-router-dom";

const plans = [
    {
        title: "Basic Website",
        price: "₹3000",
        features: [
        "Up to 5 pages",
        "Responsive design",
        "Contact form",
        "Basic SEO setup"
        ],
        color: "#4f8cff"
    },
    {
        title: "Intermediate Website",
        price: "₹5000",
        features: [
        "Up to 8 pages",
        "Custom UI/UX",
        "Blog/News section",
        "Payment integration",
        "Advanced SEO"
        ],
        color: "#6a82fb"
    },
    {
        title: "Complete Website",
        price: "₹8000+",
        features: [
        "Unlimited pages",
        "E-commerce functionality",
        "Admin dashboard",
        "API integrations",
        "Premium support"
        ],
        color: "#669ffa"
    }
    ];

    const WebDevelopmentInfo = () => (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center px-4 py-12">
        <h1 className="text-4xl font-bold mt-20 mb-10 tracking-wider text-center">
        Web Development{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Pricing
        </span>
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
            {plans.map((plan) => (
                <div
                key={plan.title}
                className="bg-[#dbeafe] dark:bg-[#1e3a8a] text-black dark:text-white rounded-2xl shadow-lg p-8 min-w-[260px] max-w-[320px] flex flex-col items-center"
                style={{ borderTop: `6px solid ${plan.color}` }}
                >
                <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: plan.color }}
                >
                    {plan.title}
                </h3>
                <div
                    className="text-3xl font-extrabold mb-4"
                    style={{ color: plan.color }}
                >
                    {plan.price}
                </div>
                <ul className="text-left text-black dark:text-white mb-6 w-full">
                    {plan.features.map((f) => (
                    <li key={f} className="mb-2 flex items-center">
                        <span className="mr-2" style={{ color: plan.color }}>
                        ✔️
                        </span>
                        {f}
                    </li>
                    ))}
                </ul>
                <Link
                    to={'/contact'}
                    className="text-white font-semibold text-base px-6 py-2 rounded-md shadow-md hover:brightness-110 transition"
                    style={{ backgroundColor: plan.color }}
                >
                    Get Started
                </Link>
                </div>
            ))}
        </div>
    </section>
);

export default WebDevelopmentInfo;