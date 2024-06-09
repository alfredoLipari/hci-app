import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {WikiContext} from "../context/WikiContext";

function usePreviousRoute() {
    const _navigate = useNavigate()
    const [path, setPath] = useState([])
    const {pages} = useContext(WikiContext)

    const customNavigate = (param) => {
        if(!param) {
            return -1
        }
        _navigate(param)
        if(param === -1 || param === '') {
            setPath([])
            return null;
        }
        setPath(prev => {
            return [
                ...prev,
                {
                    link: param,
                    name: 'randomName'
                }
            ]
        })
    }

    return {
        path,
        customNavigate
    }
}

export default usePreviousRoute;
