import Image from 'next/image'
import React from 'react'
import GithubIcon from '@/app/components/icons/GithuIcon'

const UserCardInfo = () => {
  return (
    <article className='grid-areas p-2 rounded-xl  bg-blue-900 text-white'>
        <div className='section-logo bg-gray-200 rounded-full h-20 w-20 grid place-content-center p-1'>
<GithubIcon className='relative top-2 h-full w-full'/>
</div>
<div className='section-title'>
    <h2>The Octocat</h2>
    <p>@octocat</p>
</div >
<p className='section-date'>Joined 25 Jan 20211</p>
<p className='section-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, officiis numquam. Odio corporis eum repellendus nobis maxime recusandae soluta architecto consectetur accusantium porro vero ipsum accusamus nostrum pariatur, aperiam odit?</p>
  <div className='section-number flex justify-around mt-4 bg-blue-950 rounded-md '>

    <article>
        <p>Repos</p>
        <p>8</p>
    </article>
    <article>
        <p>Followers
        </p>
        <p>3938</p>
    </article>
    <article>
        <p>Followings</p>
        <p>8</p>
    </article>
  </div>
  <div className='section-social md:grid grid-cols-2'>
    <article>
    <i>Icono</i>
    <p>San Francisco</p>
    </article>
    <article>
    <i>Icono</i>
    <p>San Francisco</p>
    </article>
    <article>
    <i>Icono</i>
    <p>San Francisco</p>
    </article>
    <article>
    <i>Icono</i>
    <p>San Francisco</p>
    </article>
  </div>
  
    </article>
  ) 
}

export default UserCardInfo