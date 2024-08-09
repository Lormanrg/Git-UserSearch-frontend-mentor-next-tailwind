
"use client"
import React from 'react'
import SearchIcon from "./icons/SearchIcon"

const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  
  const username = e.currentTarget.username.value
if(!username) return
}
const FormSearchUser = () => {
  return (
    <form 
    onSubmit={handleSubmit}
     className=" gap-2 flex flex-wrap bg-blue-900 p-4 rounded-xl items-center mb-6">
    <span className="min-w-[20px]">
      <SearchIcon className="fill-sky-400" />
    </span>
    <input name='username' type="text" placeholder="Search Github Username" className=" flex-1 h-14 p-2 rounded-lg bg-transparent text-white placeholder:text-white focus:outline-none focus:ring-2 focus: ring-blue-500 " />
    <button className="bg-sky-400 rounded-lg py-4 px-4 text-white font-bold">Search</button>
  </form>
  )
}

export default FormSearchUser