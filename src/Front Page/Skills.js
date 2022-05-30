import React from 'react';

function Skills(props) {
    // document.getElementsByClassName('skill').classlist.
    return <>
        <div className="w-10  h-10 mx-2 my-2">
            <img className='skill hover:-translate-y-2 duration-500 hover:cursor-pointer' src={props.link} alt="" />
        </div>
    </>
}

export default Skills;
