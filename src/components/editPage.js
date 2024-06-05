import react, {useState, useContext} from "react";
import { WikiContext } from '../context/WikiContext';
import {Link, useParams, useNavigate  } from 'react-router-dom';
import bookImage from "../icons/icon _book_open.png";

export const EditPage = () => {
    
    const navigate = useNavigate();
    const { id } = useParams();
    const { pages, updatePage, language, setShowToast } = useContext(WikiContext);
    const page = pages.find(p => (p.id === parseInt(id)) && p.language === language);
 
    const getTitleFromJSX = (jsxString) => {
        const regex = /<Hero\s+title="([^"]+)"/;
        const match = jsxString.match(regex);
        return match ? match[1] : null;  // Returns the title if matched, otherwise null
    } 

    const getSubtitleFromJSX = (jsxString) => {
        const regex = /subtitle="([^"]+)"/;
        const match = jsxString.match(regex);
        return match ? match[1] : null;  // Returns the subtitle if matched, otherwise null
    }
    
    const [title, setTile] = useState(getTitleFromJSX(page?.content));

    const [subtitle, setSubtitle] = useState(getSubtitleFromJSX(page?.content));

    const [tags, setTags] = useState(page?.tags);

    const jsxStringToComponents = (jsxString) => {
        return jsxString
          .replace(/<Hero\s*[^>]*\/>/g, '') // Remove <Hero />
          .replace(/<FirstTitle\s+title="([^"]+)"\s*\/>/g, 'h1:$1 ') // Replace FirstTitle with h1
          .replace(/<SecondTitle\s+title="([^"]+)"\s*\/>/g, 'h2:$1 ') // Replace SecondTitle with h2
          .replace(/<LinkComponent\s+title="([^"]+)"\s*\/>/g, 'link:$1 ') // Replace LinkComponent with link
          .replace(/<Paragraph\s+title="([^"]+)"\s*\/>/g, 'p:$1 ') // Replace LinkComponent with link
          .replace(/<>\s*/g, '') // Remove opening <>
          .replace(/\s*<\/>/g, ''); // Remove closing </>
      };

      const componentsToJsxString = (componentString) => {

        // Start with enclosing the overall structure.
        let transformed = `<><Hero title="${title.replace(/"/g, '&quot;')}" subtitle="${subtitle.replace(/"/g, '&quot;')}" />`;

        // Process each line individually to prevent overlaps
        const lines = componentString.split(/ (?=h1:|h2:|link:|p:)/);  // Splitting while keeping delimiters
        for (const line of lines) {
            if (line.startsWith('h1:')) {
                transformed += line.replace(/h1:([^<]+)/, (_, value) => `<FirstTitle title="${value.trim()}" />`);
            } else if (line.startsWith('h2:')) {
                transformed += line.replace(/h2:([^<]+)/, (_, value) => `<SecondTitle title="${value.trim()}" />`);
            } else if (line.startsWith('link:')) {
                transformed += line.replace(/link:([^<]+)/, (_, value) => `<LinkComponent title="${value.trim()}" />`);
            } else if (line.startsWith('p:')) {
                transformed += line.replace(/p:([^<]+)/, (_, value) => `<Paragraph title="${value.trim()}" />`);
            }
        }

        // Close the root JSX container
        transformed += '</>';
        return transformed;
      };  

    const [paragraphs, setParagraphs] = useState(jsxStringToComponents(page?.content));      

    const handleSave = () => {
        setShowToast({mode: 'success', message: 'Page saved', show: true});
        setTimeout(() => {
            setShowToast({mode: 'success', message: '', show: false});
        }
        , 3000);
        updatePage(page.id, componentsToJsxString(paragraphs));
        navigate("/page/"+ page.id);
    };

  return (
    <>
        <div className="flex flex-auto flex-col pt-3 mt-5 text-xl font-bold text-center text-black border-b border-black border-solid max-w-[600px]">
            <div className="flex self-center max-w-[404px]">
                <div className="flex flex-auto  px-3">
                    <img src={bookImage} className="w-9 h-9" alt='icon_book_open' />
                    <div className="flex self-center mx-5">Wiki for immigrants</div>
                </div>
            </div>
            <div className="mt-6 w-full bg-zinc-300 min-h-[1px]" />
        </div>
          
    <div className="mt-6 flex flex-col px-5 max-w-[600px]">
      <div className="w-full text-sm font-medium tracking-wide text-neutral-900 text-opacity-90">
        Title
      </div>
        <div className="relative">
            <input type="text" className="block w-full pl-2 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Title" value={title} onChange={e => setTile(e.target.value)} />
        </div>
      <div className="mt-5 w-full text-sm font-medium tracking-wide text-neutral-900 text-opacity-90">
        Subtitle
      </div>
      <div className="relative">
            <input type="text" className="block w-full pl-2 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Subtitle" value={subtitle} onChange={e => setSubtitle(e.target.value)} />
        </div>
      <div className="flex gap-3 self-start mt-7 text-sm font-medium tracking-wide text-neutral-900 text-opacity-90">
        <div className="my-auto">Tags list</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4faa923e8432c3cc6fdca86b327589ecfa8847ebda9e94d11dc45ca8f8e945e?"
          className="shrink-0 aspect-square w-[30px]"
        />
      </div>
      <div className="flex gap-3 self-start mt-4 text-sm font-medium tracking-wide text-center text-white whitespace-nowrap">
        {tags.map((tag) => (
            <div className="justify-center px-4 py-2.5 bg-sky-500 rounded-3xl" key={tag}>
            {tag}
            <br />
          </div>
        ))}
      </div>
      <div className="mt-10 w-full text-sm font-medium tracking-wide text-neutral-900 text-opacity-90">
        Content
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col pt-2.5 pr-0.5 pb-1 pl-4 mt-5 bg-white rounded border border-solid border-gray-700 border-opacity-20">
          <div className="text-gray-700 text-opacity-60">
          <textarea
            rows={10}
            cols={40}
            className="w-full border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
            placeholder="Enter Content" value={paragraphs} onChange={e => setParagraphs(e.target.value)} />
          </div>
        </div>
      </div>
    
      <div className="flex gap-5 justify-between px-px mt-20 w-full text-base font-semibold text-center text-neutral-100">
        <div className="justify-center px-9 py-3 whitespace-nowrap bg-red-600 rounded-xl border border-solid shadow-sm border-white border-opacity-30" onClick={() => navigate(-1)}>
          Cancel
        </div>
        <div className="justify-center px-4 py-2.5 bg-green-800 rounded-xl border border-solid shadow-sm border-white border-opacity-30" onClick={handleSave}>
          {page != null ? 'Edit page' : 'Create Page'}
        </div>
      </div>
    
    </div>
    </>
  );
}

