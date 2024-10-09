import React from "react";
import FormSignIn from "./FormSignIn";
import logo from '../assets/imgs/blog-web-transparent.png';

function Login() {
    return (
        <>
            <div className="relative flex w-full h-screen">
                {/* FormSignIn container */}
                <div className="relative w-full flex items-center justify-center lg:w-1/2 z-10">
                    <FormSignIn />
                </div>

                {/* Decorative right side */}
                <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center z-0">
                    <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce">
                        <div className="w-full h-full absolute bottom-0 bg-white/10 backdrop-blur-lg rounded-full flex justify-center items-center">
                            <img src={logo} className="w-30 h-20" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
