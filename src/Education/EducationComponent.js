import React from 'react';

function EducationComponent(props) {
    return <>
        <div class="hover:-translate-y-3 hover:cursor-pointer duration-500 hover:bg-blue-200 hover:text-white ease-in-out md:mx-10 max-w-sm rounded  overflow-hidden shadow-lg my-5">
            <div class="px-6 py-4">
                <div class="font-bold text-blue-500 text-xl mb-2">{props.title}</div>
                <p class={`text-gray-800 text-base`}>
                    {props.desc}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
               {!props.Plateform &&  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> {props.btn}
                </button>}
                {props.Plateform &&    <a href={props.link} target="_blank" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tag}</a>}
            </div>
        </div>
    </>
}

export default EducationComponent;
