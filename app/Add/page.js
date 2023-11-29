import { redirect } from 'next/navigation';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import AddForm from '@/components/AddForm';

export default async function Add() {
  
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if(!user){
       redirect('https://unistack.kinde.com/auth/cx/_:nav&m:login&psid:febdf9653e564951b4f6269be1f17c6b')

    }
    const user_id=user.id
    return(
      <AddForm user_id={user_id}/>
    )
}


