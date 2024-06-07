import react, {useContext, useState} from "react";
import { WikiContext } from "../context/WikiContext";
import { Link, useParams } from "react-router-dom";

export const Tags = ({tags}) => {
    const { pages, addComment, language, showToast, setShowToast, isLogged } = useContext(WikiContext);
    const {id} = useParams()
    const page = pages.find(
        (p) =>
            (id == null
                ? p.id === 1
                : p.id === parseInt(id)) && p.language === language
    );

    console.log('tags', page.tags)
  return (

 
    <div className="flex flex-row items-center justify-start">
      {page?.tags.map((tag) => (
        <div className="flex items-center justify-center px-2 py-1 ml-4 mr-2 text-sm font-medium text-white bg-sky-400 rounded-md mt-4" key={tag}>
          {tag}
        </div>
      ))}
    </div>
  );
}

