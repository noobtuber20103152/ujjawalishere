import React from 'react';
import EducationComponent from './EducationComponent';

function Education(props) {
    return <>
        <div id='education' className={`flex flex-wrap justify-center pt-20 pb-5 `}>
            <h1 className={`text-gray-800 text-3xl font-bold`}>Education</h1>
        </div>
        <div className={`flex flex-wrap justify-around pb-10`}>
            <EducationComponent  title="Dr B R Ambedkar National Institute Of Technology Jalandhar" desc="Pursuing b.tech study in computer science and engneering at NIT Jalandhar and now I am a 2nd year student." btn="December 2020 - present" />
            <EducationComponent   title="Saraswati Sr. Sec. school neemkathana , Sikar" desc="12th pass out from Saraswati Sr. Sec. school neemkathana , Sikar with 92% marks in end RBSE board exam. " btn="May 2018 - June 2020"  />
            <EducationComponent  title="District level kabbadi player, Manota Jatan" desc = "I am district level kabbadi player and we are the runner-up of the tournament." btn="Octomber 2018"/>
        </div>
    </>
}

export default Education;
