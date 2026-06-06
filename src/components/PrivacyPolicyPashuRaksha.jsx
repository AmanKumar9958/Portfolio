import { motion } from 'framer-motion';
import GradientOrbs from './GradientOrbs';
import TextReveal from './TextReveal';

const PrivacyPolicyPashuRaksha = () => (
    <section className="w-full min-h-screen bg-surface px-6 py-28 relative overflow-hidden">
        <GradientOrbs variant="default" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <span className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-txt-muted mb-4">
                    Privacy Policy
                </span>
                <TextReveal className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                    PashuRaksha
                </TextReveal>
                <div className="space-y-1 text-sm text-txt-secondary">
                    <p>Effective Date: June 2, 2026</p>
                    <p>Last Updated: June 2, 2026</p>
                </div>
            </motion.div>

            <div className="space-y-10 text-sm sm:text-base text-txt-secondary leading-relaxed">
                <div className="space-y-4">
                    <p>
                        Welcome to PashuRaksha (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your
                        privacy and ensuring transparency regarding how we handle user data. This Privacy Policy
                        explains how we collect, use, disclose, and safeguard your information when you use our
                        mobile application, which is built on the React Native/Expo ecosystem.
                    </p>
                    <p>
                        By downloading, installing, or using PashuRaksha, you agree to the collection and use of
                        information in accordance with this policy. If you do not agree with the terms of this
                        privacy policy, please do not access or use the application.
                    </p>
                </div>

                <div className="space-y-6">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary">
                        1. Information We Collect and How We Use It
                    </h2>
                    <p>
                        To provide an efficient real-time animal rescue pipeline, PashuRaksha strictly collects
                        only the data necessary to coordinate incidents between citizens and verified NGOs.
                    </p>

                    <div className="space-y-4">
                        <h3 className="font-display text-xl font-semibold text-txt-primary">
                            A. Personal Authentication Data
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <span className="font-semibold text-txt-primary">What we collect:</span> Name, email address,
                                and unique user identifiers.
                            </li>
                            <li>
                                <span className="font-semibold text-txt-primary">How we collect it:</span> Securely processed
                                through our third-party authentication provider, Clerk Auth.
                            </li>
                            <li>
                                <span className="font-semibold text-txt-primary">Purpose:</span> To verify user identities,
                                prevent fraudulent incident reports, manage dual-role access (Citizen vs. NGO), and
                                accurately assign community &quot;Karma Points&quot; rewards.
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-display text-xl font-semibold text-txt-primary">
                            B. Precise Real-Time Location Data (Critical Declaration)
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <span className="font-semibold text-txt-primary">What we collect:</span> Precise geographic
                                coordinates (Latitude and Longitude).
                            </li>
                            <li>
                                <span className="font-semibold text-txt-primary">How we collect it:</span> Via the device&apos;s
                                native GPS module utilizing the expo-location framework.
                            </li>
                            <li>
                                <span className="font-semibold text-txt-primary">Purpose:</span> This app requires access to
                                precise location data to allow citizens to pin the exact location of an animal in distress
                                and render interactive incident markers on the live NGO Dashboard map. Location data is
                                collected only when the user interacts with the incident report form and is not tracked
                                persistently in the background.
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-display text-xl font-semibold text-txt-primary">
                            C. Media Assets (Camera and Image Gallery)
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <span className="font-semibold text-txt-primary">What we collect:</span> Photographic images
                                uploaded by the user during report generation.
                            </li>
                            <li>
                                <span className="font-semibold text-txt-primary">How we collect it:</span> Via device permissions
                                utilizing the expo-image-picker framework.
                            </li>
                            <li>
                                <span className="font-semibold text-txt-primary">Purpose:</span> Photos serve as vital visual
                                evidence for NGOs to judge the severity of an animal injury. Images are directly ingested
                                asynchronously to our secure cloud media delivery network, Cloudinary.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary">
                        2. Data Storage, Security, and Third-Party Sub-Processors
                    </h2>
                    <p>
                        We do not sell, rent, or trade your personal data. To maintain system performance and security,
                        your data is processed by verified, industry-standard third-party sub-processors:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Clerk Auth: Handles secure, tokenized JWT user authentication and login states.</li>
                        <li>Cloudinary CDN: Serves as our cloud asset manager, compressing and hosting submitted animal pictures securely.</li>
                        <li>Supabase (PostgreSQL): Hosts our primary relational database where report text, user profile entries, and reward balances are stored safely with explicit encryption constraints.</li>
                    </ul>
                    <p>
                        We implement structural security measures, including Row-Level Security (RLS) within Supabase,
                        to prevent unauthorized access or leakage of user records.
                    </p>
                </div>

                <div className="space-y-6">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary">
                        3. Google Play Policy Compliance & Data Retention
                    </h2>

                    <div className="space-y-4">
                        <h3 className="font-display text-xl font-semibold text-txt-primary">
                            A. Prominent Disclosure & Consent
                        </h3>
                        <p>
                            In absolute compliance with Google Play Developer Policies, PashuRaksha utilizes runtime
                            permission requests. The app will never access your location or camera without explicit,
                            affirmative consent prompted directly by your device&apos;s operating system.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-display text-xl font-semibold text-txt-primary">
                            B. User-Initiated Account and Data Deletion
                        </h3>
                        <p>
                            Google Play strictly requires apps allowing account creation to offer an easy pathway for
                            data deletion.
                        </p>
                        <p>
                            Any user can request the permanent removal of their profile, associated contact data, and
                            records.
                        </p>
                        <p>
                            To delete your account and wipe all personal identifiers from our Supabase tables, please
                            navigate to your Profile Settings inside the app and select &quot;Delete Account,&quot; or contact our
                            support team directly at [Insert Your Support Email Address]. Upon request, all data not
                            legally required for retention will be permanently erased within 30 days.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-display text-xl font-semibold text-txt-primary">
                            C. Children&apos;s Privacy
                        </h3>
                        <p>
                            PashuRaksha does not knowingly collect or solicit personal data from anyone under the age of
                            13. If we learn that we have inadvertently collected personal data from a child under 13
                            without verified parental consent, we will delete that information from our database
                            immediately.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary">
                        4. Changes to This Privacy Policy
                    </h2>
                    <p>
                        We may update our Privacy Policy from time to time to align with evolving platform guidelines
                        or technical infrastructure. We will notify you of any changes by updating the &quot;Last Updated&quot;
                        date at the top of this page.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary">
                        5. Contact Us
                    </h2>
                    <p>
                        If you have any questions, policy concerns, or data deletion requests regarding this Privacy
                        Policy, please contact us:
                    </p>
                    <div className="space-y-2">
                        <p>
                            <span className="font-semibold text-txt-primary">Developer/Entity Name:</span> [Solo Stack Dev]
                        </p>
                        <p>
                            <span className="font-semibold text-txt-primary">Email Contact:</span> [amancollege04@gmail.com]
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default PrivacyPolicyPashuRaksha;
