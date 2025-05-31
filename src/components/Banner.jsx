import React from 'react';
import team1 from '../assets/team/team1.jpg'
import team from '../assets/team/team.jpg'
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{ y: [100, 150,100] }}
                        transition={{duration:5, repeat: Infinity}}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-blue-500 border-s-8 border-b-8 shadow-2xl"
                    />
                    <motion.img
                        src={team}
                        animate={{ x: [100, 150,100] }}
                        transition={{duration:15, delay:5, repeat: Infinity}}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-blue-500 border-s-8 border-b-8 shadow-2xl"
                    />
                </div >
                <div className='flex-1'>
                    <motion.h1

                        className="text-5xl font-bold">Latest <motion.span
                            animate={
                                {
                                    color: ['#ff5733', '#33ff33', '#8a33ff'],
                                    transition: { duration: 4, repeat: Infinity }

                                }}
                        >Jobs</motion.span> For You!</motion.h1>

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;