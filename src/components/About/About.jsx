import React from 'react';
import { Fade } from 'react-reveal';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <Fade right>
                <h2 className="text-4xl sm:text-5xl my-3">The Alchemist</h2>
            </Fade>
            <Fade left>
                <p className='about'>
                    The Alchemist by Paulo Coelho continues to change the lives of its readers forever. With more than two million copies sold around the world, The Alchemist has established itself as a modern classic, universally admired.
                    Paulo Coelho's masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.
                    The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts, learning to read the omens strewn along life's path, and, above all, following our dreams.
                </p>
            </Fade>
        </div>
    );
};

export default About;