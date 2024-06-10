import React, {useContext} from 'react'
import {Header} from "../components/header";
import bg from '../assets/loginbg.png'
import lock from "../icons/lock.svg";
import mail from '../icons/mail.svg'
import {WikiContext} from '../context/WikiContext';
import {Link, useNavigate} from "react-router-dom";

export const LoginPage = () => {
    const {languages,language, setLanguage, pages, isLogged, setIsLogged, setShowToast } = useContext(WikiContext)
    const navigate = useNavigate()

    return (
        <>
            <div className="flex overflow-hidden relative flex-col px-4 pt-8 pb-20 max-w-[430px] min-h-[792px]">
                <img
                    loading="lazy"
                    src={bg}
                    className="object-cover absolute inset-0 size-full"
                    alt={'not visible'}
                />
                <div className="relative text-3xl font-semibold text-white">
                    Enter your credentials
                </div>

                <div className="relative mt-5 text-sm font-medium tracking-wide text-neutral-900 text-opacity-90">
                    Email
                </div>
                <div className={'relative w-full'}>
                    <div className="z-50 absolute bottom-2 start-0 left-1 flex items-center pointer-events-none">
                        <img src={mail} className="z-50 w-6 h-6 flex self-center" alt='search'/>
                    </div>
                    <input type={'text'} placeholder={'Enter email'}
                           className="w-full flex relative gap-2 py-2 pr-2 pl-8 mt-2 text-sm tracking-wide whitespace-nowrap rounded-lg border border-solid bg-neutral-50 border-neutral-900 border-opacity-10 text-neutral-900 text-opacity-40"/>
                </div>
                <div className="relative mt-5 text-sm font-medium tracking-wide text-neutral-900 text-opacity-90">
                    Password
                </div>
                <div className={'relative w-full'}>
                    <div className="z-50 absolute bottom-2 start-0 left-1 flex items-center pointer-events-none">
                        <img src={lock} className="z-50 w-6 h-6 flex self-center" alt='search'/>
                    </div>
                    <input type={'password'} placeholder={'Enter password'}
                           className="w-full flex relative gap-2 py-2 pr-2 pl-8 mt-2 text-sm tracking-wide whitespace-nowrap rounded-lg border border-solid bg-neutral-50 border-neutral-900 border-opacity-10 text-neutral-900 text-opacity-40"/>
                </div>
                <button
                    onClick={() => {
                        setIsLogged(true);
                        setShowToast({
                            "mode": "success",
                            "message": "You successfully logged in!",
                            "show": true
                        })
                        setTimeout(() => {
                                setShowToast({mode: 'success', message: '', show: false});
                            }
                            , 3000);
                        navigate('/')
                    }}
                    className="relative justify-center items-center px-16 py-1.5 mt-8 text-sm font-semibold text-center bg-white rounded-xl text-neutral-700">
                    Log in
                </button>
                <div className="flex relative gap-px mt-5 text-white">
                    <div className="flex flex-col flex-1 items-center">
                        <div className="flex gap-0.5 text-xs text-center whitespace-nowrap">
                            <div className="shrink-0 my-auto h-px bg-white rounded-[100px] w-[178px]"/>
                            <div>or</div>
                        </div>
                        <div className="mt-7 text-base font-semibold underline"  onClick={() => navigate("/")}>
                            Go back
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 bold items-center">
                        <div className="shrink-0 my-auto h-px bg-white rounded-[100px] w-[178px]"/>
                        <div className="mt-7 text-base font-semibold underline"><Link to={'/signup'}>Create an account</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}