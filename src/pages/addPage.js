import React, {useContext, useState} from "react";
import Popup from "reactjs-popup";
import './addPage.css'
import mail from "../icons/mail.svg";
import agenda from '../icons/icon.svg'
import Select from "react-select";
import {WikiContext} from "../context/WikiContext";
import {useNavigate} from "react-router-dom";
const languages = [
    {
        value: 'en',
        label: 'en',
    },
    {
        value: 'it',
        label: 'it',
    },
]
export const AddPagePopup = (props) => {
    const [selectedOption, setSelectedOption] = useState(languages[0]);
    const [title, setTitle] = useState('');
    const navigate = useNavigate()

    const {pages, setPages, setShowToast, setLanguage} = useContext(WikiContext)
    const onCreatePage = () => {
        const maxId = pages.reduce((acc, cur) => {
            if(cur.id > acc) {
                return cur.id
            }
            return acc
        }, -1)

        setPages([
            ...pages,
            { id: maxId + 1,
                tags: [],
                title: title,
                subtitle: '',
                comments: [],
                content: '',
                language: selectedOption.value,
                subPages: [2, 3] },

        ])
        navigate('/edit/' + (maxId + 1))
        props.onClose()
        setLanguage(selectedOption.value)
        setShowToast({ mode: "success", message: "Page succesfully created!", show: true });
        setTimeout(() => {
            setShowToast({ mode: "success", message: "", show: false });
        }, 3000);
    }
    return (
        <Popup open={props.open} className={'addPage-popup'} onClose={props.onClose}>
            <h1 className={'text-2xl font-bold'}>Create new page</h1>
            <h4 className={'font-bold mt-3'}>Page name</h4>
            <div className={'relative w-full'}>
                <div
                    className="z-50 absolute bottom-2 start-0 left-1 flex items-center pointer-events-none">
                    <img src={agenda} className="z-50 w-6 h-6 flex self-center ml-1" alt='search'/>
                </div>
                <input type={'text'} placeholder={'%page-name-example%'}
                       value={title}
                       onChange={(event) => setTitle(event.target.value)}
                       className="w-full flex relative gap-2 py-2 pr-2 pl-8 mt-3 text-sm tracking-wide whitespace-nowrap rounded-lg border border-solid bg-neutral-50 border-neutral-900 border-opacity-10 text-neutral-900 text-opacity-40"/>
            </div>
            <h4 className={'font-bold mt-8'}>Language</h4>
            <div className={'relative w-full'}>
                <Select className={'mt-3'}
                        placeholder={'Select a language'}
                        value={selectedOption}
                        options={languages}
                        onChange={setSelectedOption}
                />
            </div>
            <div className={'w-full flex align-middle justify-between mt-8'}>
                <button onClick={props.onClose}
                    className={'bg-red-800 text-white border border-solid shadow-sm border-white border-opacity-30 rounded-xl px-4 py-2'}>
                    Cancel
                </button>
                <button onClick={onCreatePage}
                    className={'bg-green-800 text-white border border-solid shadow-sm border-white border-opacity-30 rounded-xl px-4 py-2'}>
                    Create page
                </button>
            </div>
        </Popup>
    )
}