import { useState } from 'react';
import Button from './Button';
import ProjectComponents from './ProjectComponents';

function Project(props) {
    const [select, setselect] = useState({ react: false, html: false, node: false, hackthon: false, NextJs: true });
    const All = () => {
        setselect({ react: true, html: true, node: true, hackthon: true, NextJs: true })
    }
    const Html = () => {
        setselect({ react: false, html: true, node: false, hackthon: false, NextJs: false })
    }
    const React = () => {
        setselect({ react: true, html: false, node: false, hackthon: false, NextJs: false })
    }
    const Node = () => {
        setselect({ react: false, html: false, node: true, hackthon: false, NextJs: false })
    }
    const Hackthon = () => {
        setselect({ react: false, html: false, node: false, hackthon: true, NextJs: false })
    }
    const NextJS = () => {
        setselect({ react: false, html: false, node: false, hackthon: false, NextJs: true })
    }
    return <>
        <div id='project' className={`container  py-20 lg:px-60 `}>
            <h1 className='font-bold text-center text-blue-500 text-xl md:text-2xl mt-20'>Creative Portfolio</h1>
            <h1 className={`font-bold text-center text-gray-800 text-4xl md:text-5xl my-2`}>Recent Works</h1>
            <p className='text-gray-500 text-center text-xl'>I have a lot of interest in web development so I am sharing with you all my all project which are done in different language, framework and library like tailwind-css, react, node js and JavaScript.</p>
        </div>
        <div className={`container flex-wrap flex justify-center pb-10`}>
            <Button onClick={Html} category="HTML / CSS / JS" />
            <Button onClick={React} category="React" />
            <Button onClick={Node} category=" React.js / Node.js" />
            <Button onClick={Hackthon} category="Hackathon" />
            <Button onClick={NextJS} category="NextJS" />
        </div>

        <div className={`flex justify-around flex-wrap `}>
            {select.NextJs && <ProjectComponents LinkTrue={false} tag="#NextJS" gitlink="https://github.com/noobtuber20103152/blog" title="Blog website📑" desc="It’s a blog website with user authentication, blog creation , comment section for comment on other’s blogs, separate comment page and profile page corresponding to logged in users where he/she can find blogs written by him/her." thumb="./images/17.png" />}
            {select.NextJs && <ProjectComponents LinkTrue={false} tag="#NextJS" gitlink="https://github.com/noobtuber20103152/eBook" title="eBook store 📑" desc="A Next JS  web app which looks like google book store made with google book store API. It has functionality like google authentication and save search history in mongoDB." thumb="./images/15.png" />}
            {select.NextJs && <ProjectComponents LinkTrue={false} tag="#NextJS" gitlink="https://github.com/noobtuber20103152/nextjs-blog" title="Next JS blog 📝" desc="A blog website built in using Next.JS where you can find cheat sheets about MongoDB, JavaScript, React Js etc." thumb="./images/14.png" />}
            {select.hackthon && <ProjectComponents LinkTrue={false} tag="#MERN" gitlink="https://github.com/noobtuber20103152/Hackmol-3.0" title="Animites - Hackmol 3.0 Finalist 🎆" desc="A MERN stack project made during hackmol 3.0 where you can watch anime live with live chat functionality and comment box." thumb="./images/13.png" />}
            {select.react && <ProjectComponents LinkTrue={true} tag="#React" gitlink="https://github.com/noobtuber20103152/Color-Gradient" weblink="https://noobtuber20103152.github.io/Color-Gradient/" title="Color Gradient 🧊🧊" desc="A React web app where you can create your favourite gradient colors." thumb="./images/7.png" />}
            {select.react && <ProjectComponents LinkTrue={true} tag="#React" gitlink="https://github.com/noobtuber20103152/whiteboard" weblink="https://noobtuber20103152.github.io/whiteboard/" title="Whiteboard 🖋️" desc="A React web app whiteboard where you can teach students in online mode." thumb="./images/8.png" />}
            {select.react && <ProjectComponents LinkTrue={false} tag="#React" gitlink="https://github.com/noobtuber20103152/Unsplash-API-source-code" title="Unsplash ℹ️" desc="A unsplash API based react web app where you can find beautiful images" thumb="./images/9.png" />}
            {select.react && <ProjectComponents LinkTrue={false} tag="#React" gitlink="https://github.com/noobtuber20103152/React-YouTube-Source-Code" title="React YouTube 📺" desc="A YouTube API based react web app which shows the search result of some category video with an amazing dark mode theme." thumb="./images/10.png" />}
            {select.react && <ProjectComponents LinkTrue={false} tag="#React" gitlink="https://github.com/noobtuber20103152/NewsMoney-Source-Code" title="NewsMoney 📰" desc="NewsMoney is a news app which shows you different types of daily news with an amazing dark mode theme." thumb="./images/11.png" />}
            {select.node && <ProjectComponents LinkTrue={false} tag="#NodeJS" gitlink="https://github.com/noobtuber20103152/MERN-WEB" title="Story - Mern stack web app 🖋️" desc="A mern stack web app where you can upload your story and you can read out other stories there." thumb="./images/12.png" />}
            {select.html && <ProjectComponents LinkTrue={true} tag="#HTML/CSS" gitlink="https://github.com/noobtuber20103152/covid-19./settings/pages" weblink="https://noobtuber20103152.github.io/covid-19./" title="Corona virus website 🦠" desc="A simple HTML/CSS based website  for covid 19 information in india" thumb="./images/1.png" />}
            {select.html && <ProjectComponents LinkTrue={true} tag="#HTML/CSS" gitlink="https://github.com/noobtuber20103152/YouTube_Page" weblink="https://noobtuber20103152.github.io/YouTube_Page/" title="YouTube 📺" desc="A simple HTML/CSS based website  which is look like YouTube front page" thumb="./images/2.png" />}
            {select.html && <ProjectComponents LinkTrue={true} tag="#HTML/CSS" gitlink="https://github.com/noobtuber20103152/Apna_book" weblink="https://noobtuber20103152.github.io/Apna_book/" title="ApnaBook 📘" desc="A simple HTML/CSS based website  which is look like Facebook front page" thumb="./images/3.png" />}
            {select.html && <ProjectComponents LinkTrue={true} tag="#JavaScript" gitlink="https://github.com/noobtuber20103152/binary_hexa_decimal_calculator" weblink="https://noobtuber20103152.github.io/binary_hexa_decimal_calculator/" title="Calculator 📱" desc="A simple JavaScript based calculator which convert Hexadecimal, binary and decimal to each other." thumb="./images/4.png" />}
            {select.html && <ProjectComponents LinkTrue={true} tag="#JavaScript" gitlink="https://github.com/noobtuber20103152/Brave_Interface" weblink="https://noobtuber20103152.github.io/Brave_Interface/" title="Brave Interface 📰" desc="A website looks like a brave browser which is used for google search." thumb="./images/5.png" />}
            {select.html && <ProjectComponents LinkTrue={true} tag="#JavaScript" gitlink="https://github.com/noobtuber20103152/music" weblink="https://noobtuber20103152.github.io/music/" title="Music JS 🎶" desc="A music website build with JavaScript logic where you can listen songs" thumb="./images/6.png" />}

        </div>
    </>
}

export default Project;
