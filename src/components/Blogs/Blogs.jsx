import React from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className=''>

            <h2 className="text-3xl sm:text-5xl py-8">Question & Answer</h2>
            <Accordion className='blog-contaner'>

                <AccordionItem className='my-2'>
                    <AccordionItemHeading className='border inline-block rounded px-5'>
                        <AccordionItemButton>
                            <h4 className='text-lg sm:text-2xl'>What harsh truths do you prefer to ignore?</h4>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className='inline-block rounded py-'>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className='my-2'>
                    <AccordionItemHeading className='border inline-block rounded px-5'>
                        <AccordionItemButton>
                            <h4 className='text-lg sm:text-2xl'>What harsh truths do you prefer to ignore?</h4>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className='inline-block rounded py-'>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className='my-2'>
                    <AccordionItemHeading className='border inline-block rounded px-5'>
                        <AccordionItemButton>
                            <h4 className='text-lg sm:text-2xl'>What harsh truths do you prefer to ignore?</h4>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className='inline-block rounded py-'>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>


            </Accordion>
        </div>
    );
};

export default Blogs;