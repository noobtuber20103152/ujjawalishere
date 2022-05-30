import React from 'react'

function Button(props) {
    return (
        <>
            <button onClick={props.onClick} class="mx-5 my-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                {props.category}
            </button>
        </>
    )
}

export default Button