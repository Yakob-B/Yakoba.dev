import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 50 }}
                    className="bg-tertiary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white hover:text-[#00E5FF] transition-colors"
                    >
                        <X size={28} />
                    </button>

                    {/* Project Image */}
                    <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Project Title */}
                    <h2 className="text-white font-black text-[32px] mb-4">
                        {project.name}
                    </h2>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag.name}
                                className={`text-[14px] ${tag.color} px-3 py-1 rounded-full bg-black-200`}
                            >
                                #{tag.name}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-secondary text-[16px] leading-[30px] mb-6">
                        {project.description}
                    </p>

                    {/* Case Study Content */}
                    {project.caseStudy && (
                        <div className="space-y-6">
                            {/* Problem Statement */}
                            {project.caseStudy.problem && (
                                <div>
                                    <h3 className="text-white font-bold text-[24px] mb-3">
                                        🎯 Problem Statement
                                    </h3>
                                    <p className="text-secondary text-[14px] leading-[24px]">
                                        {project.caseStudy.problem}
                                    </p>
                                </div>
                            )}

                            {/* Solution */}
                            {project.caseStudy.solution && (
                                <div>
                                    <h3 className="text-white font-bold text-[24px] mb-3">
                                        💡 Solution
                                    </h3>
                                    <p className="text-secondary text-[14px] leading-[24px]">
                                        {project.caseStudy.solution}
                                    </p>
                                </div>
                            )}

                            {/* Key Features */}
                            {project.caseStudy.features && (
                                <div>
                                    <h3 className="text-white font-bold text-[24px] mb-3">
                                        ⚡ Key Features
                                    </h3>
                                    <ul className="list-disc list-inside text-secondary text-[14px] leading-[24px] space-y-2">
                                        {project.caseStudy.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technical Stack */}
                            {project.caseStudy.techStack && (
                                <div>
                                    <h3 className="text-white font-bold text-[24px] mb-3">
                                        🛠️ Technical Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.caseStudy.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-black-200 text-white px-3 py-1 rounded-lg text-[14px]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Challenges & Solutions */}
                            {project.caseStudy.challenges && (
                                <div>
                                    <h3 className="text-white font-bold text-[24px] mb-3">
                                        🚧 Challenges & Solutions
                                    </h3>
                                    <ul className="list-disc list-inside text-secondary text-[14px] leading-[24px] space-y-2">
                                        {project.caseStudy.challenges.map((challenge, index) => (
                                            <li key={index}>{challenge}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Results */}
                            {project.caseStudy.results && (
                                <div>
                                    <h3 className="text-white font-bold text-[24px] mb-3">
                                        📊 Results & Impact
                                    </h3>
                                    <p className="text-secondary text-[14px] leading-[24px]">
                                        {project.caseStudy.results}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-4 mt-8">
                        {project.source_code_link && (
                            <a
                                href={project.source_code_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black-200 py-3 px-6 rounded-xl text-white font-bold hover:bg-[#00E5FF] hover:text-black transition-all"
                            >
                                View Code
                            </a>
                        )}
                        {project.demo_link && (
                            <a
                                href={project.demo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#00E5FF] py-3 px-6 rounded-xl text-black font-bold hover:bg-white transition-all"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
