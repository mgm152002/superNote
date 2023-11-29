import Link from "next/link"
import about from './../app/about/page';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";
export default function Nav({Title}){
    return(
        <div className="navbar bg-primary">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52">
       <RegisterLink>Signup</RegisterLink>
       <LoginLink>Login</LoginLink>
        <Link href="/about">
  <li>About</li>
</Link>
        
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">{Title}</a>
  </div>
  <div className="navbar-end">
    <LoginLink>
    <button className="btn">
        Login
    </button>

    </LoginLink>
 
  </div>
</div>
    )
}