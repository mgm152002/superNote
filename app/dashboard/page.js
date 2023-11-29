import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation'
import dbConnect from '@/dbconfig';
import mongoose from 'mongoose';
import User from '@/models/user';
import Link from "next/link";
import NoteCard from "@/components/NotesCard";

export default async function dashboard(){
    dbConnect();

    
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if(!user){
       redirect('https://unistack.kinde.com/auth/cx/_:nav&m:login&psid:febdf9653e564951b4f6269be1f17c6b')

    }
    

    try{
        const doc=await User.findOne({id:user.id})
        if(!doc){
            const newuser = new User({id:user.id,email:user.email})
            await newuser.save()
        }
    }
    catch(e){
        console.log(e)
    }
    
    return(
        <div className='bg-base-100'>

        <div className="navbar bg-primary flex justify-between px-6">
          <div className="navbar-start"></div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl text-white">Docuchat</a>
          </div>
          <div className="navbar-end">
            <LogoutLink>
              <button className='btn'>Logout</button>
            </LogoutLink>
          </div>
        </div>
      
        <h1 className="text-3xl font-bold text-black px-4 mx-10 my-5">Welcome {user.given_name},</h1>
      
        <div className='flex items-center justify-center px-6 mx-10 my-10'>
          {/* Your content goes here */}
        </div>
      
        <div className='flex justify-end px-6 mx-15 my-20 absolute top-0 right-0'>
          <Link href="/Add">
            <button className="btn btn-primary px-5">Add</button>
          </Link>
        </div>
      <NoteCard uid={user.id}/>
      </div>
      

      
    )

}
