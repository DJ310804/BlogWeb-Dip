import React from "react";
import FormSignUp from "./FormSignUp";
import logo from '../assets/imgs/blog-web-transparent.png'

function Signup(){
    return(
        <>
            <div className="flex w-full h-screen">
                <div className="hidden relative lg:flex h-full w-1/2  items-center justify-center">
                    <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce flex justify-center items-center">
                        <img src={logo} className="w-30 h-20" alt="logo" />
                    </div> 
                </div>
                <div className="w-full flex items-center justify-center lg:w-1/2 z-10">
                    <FormSignUp />
                </div>
            </div>
        </>
    );
}

export default Signup;