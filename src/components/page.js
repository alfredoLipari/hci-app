import React, { useState, useContext } from "react";
import { WikiContext } from "../context/WikiContext";
import { Link, useParams } from "react-router-dom";
import JsxParser from "react-jsx-parser";
import { LinkComponent } from "./link.js";
import { Header } from "./header.js";
import { Hero } from "./hero.js";
import { FirstTitle } from "./firstTitle.js";
import { SecondTitle } from "./secondTitle.js";
import { Paragraph } from "./paragraph.js";
import { Toast } from "./toast.js";
import Popup from "reactjs-popup";
import { Tags } from "./tags.js";
import {Sidebar} from "./sidebar.js"

export const Page = ({ idPageOptional, openAddPagePopup }) => {
    const { id } = useParams();
    console.log('newIdCorrect', id)
    const { pages, addComment, language, showToast, setShowToast, isLogged } = useContext(WikiContext);
    const page = pages.find(
        (p) =>
            (id == null
                ? p.id === parseInt(idPageOptional)
                : p.id === parseInt(id)) && p.language === language
    );

    const [content, setContent] = useState(page.content);

    const [comment, setComment] = useState("");

    const [showCommentPopup, setShowCommentPopup] = useState(false);

    const [tags, setTags] = useState(page.tags);

    const handleComment = () => {
        addComment(page.id, comment);
        setShowToast({ mode: "success", message: "Comment added!", show: true });
        setShowCommentPopup(false);
        setComment("");
        setTimeout(() => {
            setShowToast({ mode: "success", message: "", show: false });
        }, 3000);
    }

    return (
        <div>
            <Sidebar  openAddPagePopup={openAddPagePopup}/>
            {showToast.show && (
                <Toast mode={showToast.mode} message={showToast.message} />
            )}

            <div>
                <JsxParser
                    components={{
                        Link,
                        LinkComponent,
                        Hero,
                        FirstTitle,
                        SecondTitle,
                        Paragraph,
                        Tags
                    }}
                    jsx={page.content}
                />

                <div className="flex flex-col justify-center px-3 text-sm whitespace-nowrap mt-5 ">
                    <div className="flex flex-col pb-4 w-full bg-white">
                        <div className="flex gap-1.5 px-5 font-semibold text-center text-white rounded bg-slate-500">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/36d5e774395316f45ce906a51493ed83300e0a59d7cde79c688504b17194b67f?"
                                className="shrink-0 w-6 aspect-square"
                                alt="Comments icon"
                            />
                            <div className="flex-auto my-auto">Comments</div>
                        </div>
                        <div className="justify-center shadow-sm items-start py-2 pr-2 pl-4 mt-1.5 w-full tracking-wide bg-white rounded-lg border-0 border-solid border-neutral-900 border-opacity-10 text-neutral-900 text-opacity-40">
                            {!isLogged ? (
                                "Log in to comment!"
                            ) : (
                                <textarea
                                    rows={3}
                                    cols={40}
                                    className="w-full border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
                                    placeholder="Enter a comment"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            )}
                        </div>
                    </div>
                </div>


              <Popup open={showCommentPopup} className={'addPage-popup'} onClose={() => setShowCommentPopup(false)}>     
                <h4 className={'font-bold mt-3 text-center'}>Are you sure you want to comment?</h4>
                <div className={'w-full flex align-middle justify-between mt-8'}>
                    <button onClick={() => setShowCommentPopup(false)}
                        className={'bg-red-800 text-white border border-solid shadow-sm border-white border-opacity-30 rounded-xl px-4 py-2'}>
                        Cancel
                    </button>
                    <button onClick={handleComment}
                        className={'bg-green-800 text-white border border-solid shadow-sm border-white border-opacity-30 rounded-xl px-4 py-2'}>
                        Save
                    </button>
                </div>
            </Popup>

     {isLogged &&  <div className="flex gap-5 justify-between pb-2 px-3">
          <div className="my-auto text-sm tracking-wide text-black">
            Posting as username
            <br />
          </div>
          <div className="flex flex-col justify-center text-xs text-center text-neutral-100" onClick={() => comment !== '' && setShowCommentPopup(true)}>
            <div className="flex gap-1 items-start py-1 pr-5 pl-px bg-sky-500 rounded-xl border border-solid shadow-sm border-white border-opacity-30">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/36d5e774395316f45ce906a51493ed83300e0a59d7cde79c688504b17194b67f?"
                className="shrink-0 self-start w-6 aspect-square"
                alt="post Comment"
              />
              <div className="my-auto">Comment</div>
            </div>
          </div>
        </div> }
       

                {/* Comments List */}
                {page.comments.map((comment, index) => (
                    <div className="flex flex-col justify-center px-4 text-white rounded my-3 shadow-sm" key={index}>
                        <div className="flex flex-col py-3 bg-blue-700 border border-solid shadow-sm border-white border-opacity-20  rounded shadow-sm">
                            <div className="text-xs font-light text-center text-stone-300">username esempio</div>

                            <div className="mt-2 text-xs px-5">
                                {comment}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
