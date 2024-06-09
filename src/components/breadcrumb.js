import React, {useContext} from "react"
import {WikiContext} from "../context/WikiContext";

export const Breadcrumb = (props) => {
    const {pages} = useContext(WikiContext)
    const getNameFromPathname = (path) => {
        const id = path.substring(path.lastIndexOf('/') + 1)
        const name = pages.find(p => p.id === parseInt(id))?.title
        console.log('name', name)
        return <>
            >
            <span className={''}>{name}</span>

        </>
    }
    return (
        <div className="w-full flex gap-2">
            {
                props.path.map(getNameFromPathname)
            }
        </div>
    )
}