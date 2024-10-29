import React from 'react'
import Wrapper from '../../shared/wrapper/Wrapper'
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import hamza from "../../../asset/about1.jpg";
import Heading from "../../shared/heading/Heading"
const About = () => {

    const imageVariants = {
        hover: {
            scale: 1.1,
            rotate: 2,
            transition: {
                duration: 0.5,
                ease: [0.6, 0.01, -0.05, 0.95],
            }
        }
    };

    const statsVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.3 } },
    };

    const statItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div id='about' className='div-container bg-primary-gray w-full px-3 lg:px-0'>
            <Wrapper>
                <div className='flex flex-col justify-center items-center w-full min-h-screen py-20'>
                    <Heading
                        tag="h1"
                        text="About Me"
                        styleType="h1"
                    />
                    <Heading
                        tag="h2"
                        text="Unveiling the Layers of My Story"
                        styleType="h2"
                    />
                    <div className='w-full flex lg:flex-row  flex-col lg:gap-y-0 gap-y-10 md:gap-x-0 gap-x-0  lg:gap-x-6 justify-between mt-10 lg:mt-20'>
                        <motion.div
                            className='w-full lg:w-[36%] flex lg:justify-start lg:items-start justify-center items-center'
                            whileHover="hover"
                            variants={imageVariants}
                        >
                            <Image src={hamza} alt='About Image' width={1080} height={1080}
                                className='w-[600px] h-[400px] object-cover object-right transition-transform duration-500' />
                        </motion.div>
                        <motion.div
                            className='w-full lg:w-[60%] flex flex-col justify-start items-start'
                            initial="hidden"
                            animate="visible"
                            variants={statsVariants}
                        >
                            <p className='text-xl text-secondary-text font-medium'>
                             I&apos;ve grown from simply enjoying problem-solving to dedicating myself to blending design with function, crafting interfaces that are both beautiful and intuitive. Each project is a chance to exceed expectations, bring visions to life with precision and care. I believe, every remarkable product tells a story of both expertise and the unique brand identity.
                            </p>
                            <div className='flex flex-wrap gap-10 w-full my-4'>
                                <motion.div variants={statItemVariants} className='flex flex-col'>
                                    <p className='text-primary-white text-7xl font-semibold'>01+</p>
                                    <p className='text-secondary-text text-xl font-normal'>Years Experience</p>
                                </motion.div>
                                <motion.div variants={statItemVariants} className='flex flex-col'>
                                    <p className='text-primary-white text-7xl font-semibold'>20+</p>
                                    <p className='text-secondary-text text-xl font-normal'>Projects Completed</p>
                                </motion.div>
                                <motion.div variants={statItemVariants} className='flex flex-col'>
                                    <p className='text-primary-white text-7xl font-semibold'>10+</p>
                                    <p className='text-secondary-text text-xl font-normal'>Satisfied Clients</p>
                                </motion.div>
                            </div>
                            <div className="h-[2px] w-full bg-gradient-to-r from-primary-gray via-primary-green to-primary-gray rounded-full my-5"></div>
                            <div className='flex items-center gap-10 mt-4 flex-wrap w-full'>
                                <motion.div variants={statItemVariants} className='flex flex-wrap items-center gap-1 text-secondary-text font-medium text-lg'>
                                    <p>Email:</p>
                                    <a href="mailto:hamzanasim248@gmail.com" className='hover:text-primary-green ease-linear duration-200 transition-all'>hamzanasim248@gmail.com</a>
                                </motion.div>
                                <motion.div variants={statItemVariants} className='flex flex-wrap items-center gap-1 text-secondary-text font-medium text-lg'>
                                    <p>Phone:</p>
                                    <a href="tel:(+92)313-2890518" className='hover:text-primary-green ease-linear duration-200 transition-all'>+92 313 2890518</a>
                                </motion.div>
                                <motion.div variants={statItemVariants} className='flex flex-wrap items-center gap-1 text-secondary-text font-medium text-lg'>
                                    <p>Location:</p>
                                    <p className='hover:text-primary-green ease-linear duration-200 transition-all'>Pakistan</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default About;
