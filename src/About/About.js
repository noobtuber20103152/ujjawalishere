import React from 'react';
import SocialMedia from './SocialMedia';

function About(props) {
    return <>
        <div id='about' className={`container bg-gray-700 py-6 `}>
            <div className="grid md:grid-cols-2">
                <div className="container px-5 my-5  md:px-20" >
                    <h1 className='text-xl font-bold text-blue-600'>ABOUT ME</h1>
                    <h1 className={`text-2xl font-bold text-white my-1`}>Web Developement</h1>
                    <h1 className={`text-2xl font-bold text-white my-1`}>Competitive Programming</h1>
                    <p className='text-gray-300 my-2 font-semibold' >I am building many interesting website , projects and doing competitive programming. If you have any doubt regarding this you can reach out to me.</p>
                </div>
                <div className="container px-5 my-5  md:px-20"  >
                    <h1 className='text-xl font-bold text-blue-500'>Connect on social media</h1>
                    <p className='text-gray-300 my-2 font-semibold'>If you want to connect with me and discuss about something you can follow me on social media.</p>
                    <div className="flex my-5">
                       <SocialMedia link="https://www.linkedin.com/in/ujjawal-rachhoya-054297211" imgLink="https://www.svgrepo.com/show/75820/linkedin.svg"/>
                       <SocialMedia link="https://www.instagram.com/ujjawal_r100/" imgLink="https://www.svgrepo.com/show/111199/instagram.svg"/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default About;
