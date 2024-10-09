import React, { useState, useEffect } from "react";
import '../App.css';
import { IonIcon } from '@ionic/react';
import '@ionic/react/css/core.css';
import logoImg from '../assets/imgs/blog-web-transparent.png';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { menuOutline, closeOutline } from 'ionicons/icons';
import { useAuthContext } from "../context/AuthContext";
import axios from 'axios';

function NavBar() {
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn, loginStatus, setLoginStatus } = useAuthContext();
    const [menuName, setMenuName] = useState('menu');
    const [navLinksClass, setNavLinksClass] = useState('top-[-100%]');
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to English

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'hi', name: 'Hindi' },
        { code: 'gu', name: 'Gujarati' },
        { code: 'te', name: 'Telugu' },
        { code: 'ta', name: 'Tamil' },
        { code: 'bn', name: 'Bengali' },
        { code: 'mr', name: 'Marathi' },
        { code: 'pa', name: 'Punjabi' },
        { code: 'kn', name: 'Kannada' },
        { code: 'ml', name: 'Malayalam' },
    ];

    async function translateText(text, languageCode) {
        if (languageCode === 'en') return text;
        try {
            const data = new FormData();
            data.append('source_language', 'en');
            data.append('target_language', languageCode);
            data.append('text', text);

            const options = {
                method: 'POST',
                url: 'https://text-translator2.p.rapidapi.com/translate',
                headers: {
                    'x-rapidapi-key': '9ef83d32femsh7b272478f5f88a1p1d471ejsn22968c9fbd56',
                    'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
                },
                data: data
            };

            const response = await axios.request(options);
            if (response.data && response.data.data && response.data.data.translatedText) {
                return response.data.data.translatedText;
            }
            return text;
        } catch (error) {
            console.error("Error fetching translation:", error);
            return text;
        }
    }

    async function translatePage(languageCode) {
        const elementsToTranslate = document.querySelectorAll("body *:not(script):not(style)");
        
        for (let element of elementsToTranslate) {
            if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
                const originalText = element.getAttribute('data-original-text') || element.textContent.trim();
                if (originalText) {
                    if (!element.getAttribute('data-original-text')) {
                        element.setAttribute('data-original-text', originalText);
                    }
                    const translatedText = await translateText(originalText, languageCode);
                    element.textContent = translatedText;
                }
            }
        }
    }
    
    function handleLanguageChange(event) {
        const newLanguage = event.target.value;
        setSelectedLanguage(newLanguage);
    }

    useEffect(() => {
        translatePage(selectedLanguage);
    }, [selectedLanguage]);

    function onToggleMenu() {
        setMenuName(prevMenuName => prevMenuName === 'menu' ? 'close' : 'menu');
        setNavLinksClass(prevNavLinksClass => prevNavLinksClass === 'top-[-100%]' ? 'top-[9%]' : 'top-[-100%]');
    }

    function closeMenu() {
        setMenuName('menu');
        setNavLinksClass('top-[-100%]');
    }

    const handleLogout = () => {
        sessionStorage.removeItem('accessToken');
        setIsLoggedIn(false);
        setLoginStatus('Login');
        navigate('/login');
    };

    return (
        <div className="bg-slate-900 text-gray-300">
            <nav className="flex justify-between items-center w-[92%] mx-auto h-16">
                <div>
                    <NavLink to="/"> 
                        <img className="w-20 h-9 cursor-pointer" src={logoImg} alt="logo" />
                    </NavLink>
                </div>
                <div className={`nav-links duration-500 md:static absolute bg-slate-900 md:min-h-fit min-h-[80vh] left-0 ${navLinksClass} md:w-auto w-full flex items-center px-5`} style={{ zIndex: 50 }}>
                    <ul className="text-lg flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <NavLink className="hover:text-gray-500" to="/" onClick={closeMenu}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:text-gray-500" to="/blogcreate" onClick={closeMenu}>Create Blog</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:text-gray-500" to="/blog" onClick={closeMenu}>Blog View</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:text-gray-500" to="/profile" onClick={closeMenu}>Profile</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="bg-[#6693e2] text-white px-3 py-1 rounded-full hover:bg-[#7587a5]">{loginStatus}</button>
                    ) : (
                        <NavLink to="/login">
                            <button className="bg-[#6693e2] text-white px-3 py-1 rounded-full hover:bg-[#7587a5]">{loginStatus}</button>
                        </NavLink>
                    )}
                    <select
                        className="bg-[#6693e2] text-white px-2 py-1 rounded-full hover:bg-[#7587a5]"
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                    >
                        {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>{lang.name}</option>
                        ))}
                    </select>
                    <IonIcon 
                        icon={menuName === 'menu' ? menuOutline : closeOutline} 
                        className="text-3xl cursor-pointer md:hidden" 
                        color="white" 
                        onClick={onToggleMenu}
                    />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;