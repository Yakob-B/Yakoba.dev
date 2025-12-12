import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const GitHubStats = () => {
    const username = "Yakob-B";

    return (
        <div className="mt-12">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Code Journey</p>
                <h2 className={styles.sectionHeadText}>GitHub Statistics</h2>
            </motion.div>

            <div className='mt-10 flex flex-wrap gap-7 justify-center'>
                {/* GitHub Stats Card */}
                <motion.div
                    variants={fadeIn("right", "spring", 0.5, 0.75)}
                    className='w-full sm:w-[48%]'
                >
                    <img
                        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=00E5FF&icon_color=00E5FF&text_color=FFFFFF&cache_seconds=86400`}
                        alt="GitHub Stats"
                        className='w-full rounded-2xl'
                    />
                </motion.div>

                {/* GitHub Streak */}
                <motion.div
                    variants={fadeIn("left", "spring", 0.5, 0.75)}
                    className='w-full sm:w-[48%]'
                >
                    <img
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0D1117&ring=00E5FF&fire=00E5FF&currStreakLabel=00E5FF&cache_seconds=86400`}
                        alt="GitHub Streak"
                        className='w-full rounded-2xl'
                    />
                </motion.div>

                {/* Top Languages */}
                <motion.div
                    variants={fadeIn("up", "spring", 1, 0.75)}
                    className='w-full sm:w-[48%]'
                >
                    <img
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=00E5FF&text_color=FFFFFF&cache_seconds=86400`}
                        alt="Top Languages"
                        className='w-full rounded-2xl'
                    />
                </motion.div>

                {/* GitHub Activity Graph */}
                <motion.div
                    variants={fadeIn("up", "spring", 1, 0.75)}
                    className='w-full sm:w-[48%]'
                >
                    <img
                        src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true&bg_color=0D1117&color=00E5FF&line=00E5FF&point=FFFFFF&cache_seconds=86400`}
                        alt="GitHub Activity Graph"
                        className='w-full rounded-2xl'
                    />
                </motion.div>
            </div>

            {/* View Profile Button */}
            <motion.div
                variants={fadeIn("up", "spring", 1.25, 0.75)}
                className='mt-10 flex justify-center'
            >
                <a
                    href={`https://github.com/${username}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#00E5FF] hover:text-[#0D1117] transition-all duration-300'
                >
                    View Full Profile on GitHub
                </a>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(GitHubStats, "github");
