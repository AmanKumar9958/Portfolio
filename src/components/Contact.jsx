import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "cc329a4e-142d-45e5-90c3-b964aa88f312");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully!");
            setTimeout(() => setResult(""), 2000);
            event.target.reset();
        } else {
            console.error("Error:", data);
            setResult(data.message);
            setTimeout(() => setResult(""), 2000);
        }
    };

    return (
        <section className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 mt-8">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
                        Get in <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Let's build something amazing together
                    </p>
                </div>

                <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <form onSubmit={onSubmit} className="space-y-5">
                        {/* Name Input */}
                        <div className="relative">
                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full px-3 py-6 text-gray-700 dark:text-gray-200 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-md peer focus:border-blue-500 focus:outline-none"
                                placeholder=" "
                            />
                            <label className="absolute left-3 top-2 px-1 text-gray-500 dark:text-gray-400 text-sm pointer-events-none 
                                transition-all duration-200 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-blue-500 
                                peer-focus:text-xs peer-focus:bg-white dark:peer-focus:bg-gray-800 peer-placeholder-shown:top-2 
                                peer-placeholder-shown:text-sm">
                                Your Name
                            </label>
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full px-3 py-6 text-gray-700 dark:text-gray-200 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-md peer focus:border-blue-500 focus:outline-none"
                                placeholder=" "
                            />
                            <label className="absolute left-3 top-2 px-1 text-gray-500 dark:text-gray-400 text-sm pointer-events-none 
                                transition-all duration-200 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-blue-500 
                                peer-focus:text-xs peer-focus:bg-white dark:peer-focus:bg-gray-800 peer-placeholder-shown:top-2 
                                peer-placeholder-shown:text-sm">
                                Email Address
                            </label>
                        </div>

                        {/* Message Input */}
                        <div className="relative">
                            <textarea
                                name="message"
                                required
                                rows="4"
                                className="w-full px-3 py-6 text-gray-700 dark:text-gray-200 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-md peer focus:border-blue-500 focus:outline-none"
                                placeholder=" "
                            ></textarea>
                            <label className="absolute left-3 top-2 px-1 text-gray-500 dark:text-gray-400 text-sm pointer-events-none 
                                transition-all duration-200 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-blue-500 
                                peer-focus:text-xs peer-focus:bg-white dark:peer-focus:bg-gray-800 peer-placeholder-shown:top-2 
                                peer-placeholder-shown:text-sm">
                                Your Message
                            </label>
                        </div>

                        <input type="hidden" name="access_key" value="cc329a4e-142d-45e5-90c3-b964aa88f312" />

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold 
                            rounded-md flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                        >
                            <FiSend className="w-5 h-5" />
                            Send Message
                        </button>

                        {result && (
                            <div className="mt-3 p-3 text-center rounded-md bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm">
                                {result}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
