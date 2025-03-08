import React from 'react';
import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending..");
        
        const formData = new FormData(event.target);
        
        formData.append("access_key", "cc329a4e-142d-45e5-90c3-b964aa88f312");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

    return (
        <section className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 px-8 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Get in <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Let's build something amazing together
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="relative group">
                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full px-4 py-3 text-lg bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-lg peer focus:border-blue-500 focus:outline-none transition-all"
                                placeholder=" "
                            />
                            <label className="absolute left-4 top-3 px-1 text-gray-500 dark:text-gray-400 pointer-events-none 
                                transition-all duration-200 peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-focus:text-sm
                                peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base">
                                Your Name
                            </label>
                        </div>

                        <div className="relative group">
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 text-lg bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-lg peer focus:border-blue-500 focus:outline-none transition-all"
                                placeholder=" "
                            />
                            <label className="absolute left-4 top-3 px-1 text-gray-500 dark:text-gray-400 pointer-events-none 
                                transition-all duration-200 peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-focus:text-sm
                                peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base">
                                Email Address
                            </label>
                        </div>

                        <div className="relative group">
                            <textarea
                                name="message"
                                required
                                rows="5"
                                className="w-full px-4 py-3 text-lg bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-lg peer focus:border-blue-500 focus:outline-none transition-all"
                                placeholder=" "
                            ></textarea>
                            <label className="absolute left-4 top-3 px-1 text-gray-500 dark:text-gray-400 pointer-events-none 
                                transition-all duration-200 peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-focus:text-sm
                                peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base">
                                Your Message
                            </label>
                        </div>

                        <input type="hidden" name="access_key" value="cc329a4e-142d-45e5-90c3-b964aa88f312" />

                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold 
                            rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                        >
                            <FiSend className="w-5 h-5" />
                            Send Message
                        </button>

                        {result && (
                            <div className="mt-4 p-4 text-center rounded-lg bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
                                {result}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};
};

export default Contact;