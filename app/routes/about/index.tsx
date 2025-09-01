import { Link } from 'react-router';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="text-center py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        About Me
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Hi! I'm Alex, a passionate developer who loves building innovative solutions and exploring new technologies.
                    </p>
                </div>
            </section>

            {/* Personal Info Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-blue-400">Who I Am</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                I'm a full-stack developer with a passion for creating meaningful digital experiences. 
                                My journey in tech started with curiosity and has grown into a deep love for problem-solving 
                                through code.
                            </p>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                                projects, or sharing knowledge with the developer community.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Facts</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>🎯 Focus: Full-stack Development</li>
                                <li>🌍 Location: Remote</li>
                                <li>💡 Passion: Building user-centric applications</li>
                                <li>📚 Always Learning: New frameworks and best practices</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 px-4 bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Skills & Technologies</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-purple-400">Frontend</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li>• React & React Router</li>
                                <li>• TypeScript</li>
                                <li>• Tailwind CSS</li>
                                <li>• Framer Motion</li>
                                <li>• Modern JavaScript</li>
                            </ul>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-green-400">Backend</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li>• Node.js</li>
                                <li>• API Development</li>
                                <li>• Database Design</li>
                                <li>• Server-Side Rendering</li>
                                <li>• RESTful Services</li>
                            </ul>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Tools & Others</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li>• Git & Version Control</li>
                                <li>• Vite & Build Tools</li>
                                <li>• Testing Frameworks</li>
                                <li>• Responsive Design</li>
                                <li>• Performance Optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Background</h2>
                    <div className="space-y-8">
                        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                            <h3 className="text-xl font-semibold mb-2 text-purple-400">Development Philosophy</h3>
                            <p className="text-gray-300 leading-relaxed">
                                I believe in writing clean, maintainable code that solves real problems. My approach focuses 
                                on user experience, performance, and scalability. I'm always eager to learn new technologies 
                                and apply best practices to deliver quality solutions.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                            <h3 className="text-xl font-semibold mb-2 text-green-400">Continuous Learning</h3>
                            <p className="text-gray-300 leading-relaxed">
                                The tech landscape is constantly evolving, and I love being part of that journey. I regularly 
                                explore new frameworks, contribute to open-source projects, and stay updated with industry 
                                trends to bring the best solutions to my work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-blue-400">Let's Work Together</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        I'm always interested in collaborating on exciting projects and connecting with fellow developers.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/projects"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                        >
                            View My Work
                        </Link>
                        <Link
                            to="/contact"
                            className="border border-blue-600 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 font-semibold"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;