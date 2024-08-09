import React from "react";
import FormSearchUser from "./components/FormSearchUser";
import UserCardInfo from "./components/UserCardInfo";

const  getUser =  async (username: string)=>{

  const res = await fetch(`https://api.github.com/users/${username}`)
  const data = await res.json()

  return data
} 

const Home = async () => {

  const data = await getUser("lormanrg")


  
  return (
    <>
    <FormSearchUser/>
    <UserCardInfo/>
    </>
  );
};

export default Home;
