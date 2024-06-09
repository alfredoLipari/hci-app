import {useEffect, useRef, useState} from 'react';
import { useLocation } from 'react-router-dom';

export function usePreviousRoute() {
    const location = useLocation();
    const [previousLocations, setPreviousLocations] = useState([]);

    useEffect(() => {
        if(location.pathname === '/') {
            return setPreviousLocations([])
        }
        if(location.pathname.toLowerCase().includes('/page')) {
            setPreviousLocations(prev => {
                return [
                    ...prev,
                    location.pathname
                ]
            })
        }
    }, [location]);

    return previousLocations
}