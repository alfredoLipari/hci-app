import React, {useContext, useState} from 'react'
import {Header} from "../components/header";
import bg from '../assets/loginbg.png'
import user from "../icons/user.svg";
import mail from '../icons/mail.svg'
import lock from "../icons/lock.svg";import {WikiContext} from '../context/WikiContext';
import {Link, useNavigate} from "react-router-dom";
import {Toast} from "../components/toast";

export const SignupPage = () => {
    const {languages,language, setLanguage, pages, isLogged, setIsLogged, showToast, setShowToast } = useContext(WikiContext)
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [verify, setVerify] = useState('')
    return (
        <>
            {showToast.show && (
                <div className={'z-50'}> <Toast mode={showToast.mode} message={showToast.message} /></div>
            )}
            <div
                className="flex overflow-hidden relative flex-col justify-center px-8 py-20 text-sm max-w-[430px] min-h-[792px]">
                <img
                    loading="lazy"
                    src={bg}
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col pb-3 mt-4 rounded-xl bg-white bg-opacity-70">
                    <div
                        className="z-10 justify-center px-1 py-0.5 text-2xl text-center text-black bg-white rounded-xl">
                        Create an account
                    </div>
                    <div className="flex flex-col px-2.5 mt-3.5 font-medium text-neutral-900 text-opacity-90">
                        <div className="text-base text-center text-black font-[275]">
                            Fill in the form below to create your account
                        </div>
                        <div className="mt-2 tracking-wide">Email</div>
                        <div className={'relative w-full'}>
                            <div
                                className="z-50 absolute bottom-2 start-0 left-1 flex items-center pointer-events-none">
                                <img src={mail} className="z-50 w-6 h-6 flex self-center" alt='search'/>
                            </div>
                            <input type={'text'} type={'email'} placeholder={'Enter email'}
                                   className="w-full flex relative gap-2 py-2 pr-2 pl-8 mt-2 text-sm tracking-wide whitespace-nowrap rounded-lg border border-solid bg-neutral-50 border-neutral-900 border-opacity-10 text-neutral-900 text-opacity-40"/>
                        </div>
                        <div className="mt-2 tracking-wide">Password</div>
                        <div className={'relative w-full'}>
                            <div
                                className="z-50 absolute bottom-2 start-0 left-1 flex items-center pointer-events-none">
                                <img src={lock} className="z-50 w-6 h-6 flex self-center" alt='search'/>
                            </div>
                            <input
                                type={'password'}
                                placeholder={'Enter password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full flex relative gap-2 py-2 pr-2 pl-8 mt-2 text-sm tracking-wide whitespace-nowrap rounded-lg border border-solid bg-neutral-50 border-neutral-900 border-opacity-10 text-neutral-900 text-opacity-40"/>
                        </div>
                    </div>
                    <div className="flex flex-col px-2 mt-2.5 font-medium">
                        <div className="mt-2 tracking-wide">Verify password</div>
                        <div className={'relative w-full'}>
                            <div
                                className="z-50 absolute bottom-2 start-0 left-1 flex items-center pointer-events-none">
                                <img src={lock} className="z-50 w-6 h-6 flex self-center" alt='search'/>
                            </div>
                            <input type={'password'}
                                   placeholder={'Enter password'}
                                   value={verify}
                                   onChange={(e) => setVerify(e.target.value)}
                                   className="w-full flex relative gap-2 py-2 pr-2 pl-8 mt-2 text-sm tracking-wide whitespace-nowrap rounded-lg border border-solid bg-neutral-50 border-neutral-900 border-opacity-10 text-neutral-900 text-opacity-40"/>
                        </div>
                        <div className="mt-2 tracking-wide">Full name</div>
                        <div className={'relative w-full'}>
                            <div
                                className="z-50 absolute bottom-2 start-0 left-1 flex items-center pointer-events-none">
                                <img src={user} className="z-50 w-6 h-6 flex self-center" alt='search'/>
                            </div>
                            <input type={'text'}
                                   placeholder={'Enter full name'}
                                   maxLength={255}
                                   onChange={(event) => setName(event.target.value)}
                                   value={name}
                                   className="w-full flex relative gap-2 py-2 pr-2 pl-8 mt-2 text-sm tracking-wide whitespace-nowrap rounded-lg border border-solid bg-neutral-50 border-neutral-900 border-opacity-10 text-neutral-900 text-opacity-40"/>
                        </div>
                        <div className="self-end pr-2 mt-2 text-xs tracking-wide text-black">{name.length}/255</div>
                        <div
                            onClick={() => {
                                if(password !== verify) {
                                    setShowToast({
                                        "mode": "error",
                                        "message": "Passwords must match",
                                        "show": true
                                    })
                                    setTimeout(() => {
                                            setShowToast({mode: 'success', message: '', show: false});
                                        }
                                        , 3000);
                                } else {
                                    setIsLogged(true)
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
                                }
                            }}
                            className="justify-center items-center px-16 py-1.5 mt-5 max-w-full font-semibold text-center bg-white rounded-xl text-neutral-700 w-[341px]">
                            Sign up
                        </div>
                        <div className="flex gap-5 mt-5 font-semibold text-black">
                            <div className="flex-auto">Already have an account?</div>
                            <div className="underline"><Link to={'/login'}>Login instead</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}