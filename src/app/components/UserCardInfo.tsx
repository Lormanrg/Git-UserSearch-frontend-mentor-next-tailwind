import Image from 'next/image'
import React from 'react'
import GithubIcon from '@/app/components/icons/GithuIcon'
import Location from '@/app/components/icons/Location'
import LinkIcon from '@/app/components/icons/LinkIcon'
import Twitter from '@/app/components/icons/Twitter'
import BuildingIcon from '@/app/components/icons/BuildingIcon'

const UserCardInfo = () => {
  return (
    <article className='grid-areas p-4 rounded-xl  bg-blue-900 text-white'>
        <div className='section-logo bg-gray-200 rounded-full h-24 w-24 grid place-content-center p-1 mr-3 lg:mx-auto'>
<GithubIcon className='relative top-2 h-full w-full'/>
</div>
<div className='section-title'>
    <h2 className='font-bold text-xl'>The Octocat</h2>
    <p>@octocat</p>
</div >
<p className='section-date lg:text-right'>Joined 25 Jan 20211</p>
<p className='section-description mt-8 leading-loose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, officiis numquam. Odio corporis eum repellendus nobis maxim</p>
  <div className='section-number flex justify-around mt-4 bg-blue-950 rounded-xl p-8 text-center  '>
     <article>
        <p>Repos</p>
        <p className='font-bold text-xl'>8</p>
    </article>
    <article>
        <p>Followers
        </p>
        <p className='font-bold text-xl'>3938</p>
    </article>
    <article>
        <p>Followings</p>
        <p className='font-bold text-xl'>8</p>
    </article>
  </div>
  <div className='section-social md:grid grid-cols-2 mt-4 fill-white space-y-4'>
    <article className='flex space-x-2'>
    <i ><Location className='h-full w-full'width={"1rem"} /></i>
    <a href='#'>San Francisco</a>
    </article>
    <article className='flex space-x-2'>
    <i><LinkIcon  className='h-full w-full'width={"1rem"}/></i>
    <a href='#'>https://www.github.com</a>
    </article>
    <article className='flex space-x-2'>
    <i><Twitter  className='h-full w-full'width={"1rem"}/></i>
    <a href='#'>https://www.twitter.com</a>
    </article>
    <article className='flex space-x-2'>
    <i><BuildingIcon className='h-full w-full'width={"1rem"}/></i>
    <a href='#'>@github</a>
    </article>
  </div>
  
    </article>
  ) 
}

export default UserCardInfo