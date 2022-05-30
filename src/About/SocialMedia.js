import React from 'react';

function SocialMedia(props) {
  return <>
   <a href={props.link} target="_blank" className='mx-2 hover:-translate-y-2 duration-500 hover:cursor-pointer'><img className='h-10 ' src={props.imgLink} alt="" /></a>
  </>
}

export default SocialMedia;
