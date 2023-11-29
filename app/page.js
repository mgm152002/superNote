import Footer from '@/components/Footer';
import Nav from './../components/Nav';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";
import dbConnect from '@/dbconfig';
export default function home(){
  dbConnect();

  return (
  
    <div >
    <Nav Title={"Supernote"}/>
    <div className="hero min-h-screen bg-white">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-black">SuperNote</h1>
      <p className="py-6 text-black">Best note taking app</p>
      <RegisterLink><button className="btn btn-primary">Get Started</button></RegisterLink>
    </div>
  </div>
</div>
<Footer/>

    </div>
    
  )
}