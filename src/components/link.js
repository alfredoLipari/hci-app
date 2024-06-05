import React, { useState, useContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import { WikiContext } from '../context/WikiContext';


export const LinkComponent = ({title}) => {

const [isPressed, setIsPressed] = useState(false);
const { pages } = useContext(WikiContext);

const idPage = pages.find(p => p.title === title).id;

  return (
    <div className="flex justify-center w-full" onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
    onMouseLeave={() => setIsPressed(false)}>
    <div className="flex flex-col justify-center rounded shadow-sm w-[374px] my-3 self-align">
    <div className="flex gap-5 pr-5 rounded shadow-sm bg-neutral-50 ">
      <div className="flex gap-1.5">
        <div className={`shrink-0 w-2 rounded h-[49px] ${isPressed ? 'bg-blue-500' : 'bg-zinc-300 '}`} />
        
      </div>
      <div className="flex-auto my-auto text-sm font-semibold text-blue-700">
        <Link to={"/page/" + idPage }>{title}</Link>
      </div>
    </div>
  </div>
</div>
  );
}

