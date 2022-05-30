import React from 'react';

function ProjectComponents(props) {
    return <>
        <div class=" ease-in-out duration-300 hover:bg-blue-500 hover:text-white hover:cursor-pointer max-w-sm rounded overflow-hidden shadow-lg my-5">
           <img class="-z-10 duration-500 hover:scale-110" src={props.thumb} alt="Image not found" />
            <div class="px-6 py-4">
                <div class={`font-semibold text-xl  mb-2`}>{props.title}</div>
                <p class={` text-base`}>
                    {props.desc}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                {props.LinkTrue && <a href={props.weblink} target="_blank" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Go to website</a>}
                <a href={props.gitlink} target="_blank" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github Repo</a>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tag}</span>
            </div>
        </div>
    </>
}

export default ProjectComponents;
