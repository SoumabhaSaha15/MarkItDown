import React from 'react';
import setTitle from '../utility/set-title';
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaSubscript, FaSuperscript, FaHighlighter, FaCode } from 'react-icons/fa';
// import { AiOutlineFontSize } from "react-icons/ai";
// import { MdFormatColorText } from "react-icons/md";
// import { BiFontFamily } from "react-icons/bi";
import {EditorContent,useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
const EditorToolbar = () => {
  const editor = useEditor({content:'', extensions: [StarterKit]});
  React.useEffect(() => {
    setTitle("create blog");
  }, []);
  if (!editor) return null; // Initialize the editor with an empty content and no extensions
  return (
    <>
      <div className='grid grid-cols-1 gap-4 py-2 px-4 items-center place-items-center bg-base-200 justify-center'> {/* Container for the editor toolbar, using DaisyUI's grid system */}
        <input
          type="text"
          placeholder="Title"
          className="input w-full max-w-[1024px] min-h-16 leading-[8] text-[32px] text-base-content p-4 focus:outline-none focus:bg-base-300"
        />
        {/* Main container now uses DaisyUI's `card` and theme-aware background/border */}
        <div className="card w-full max-w-[1024px] border border-base-300 rounded-box bg-base-100 shadow-xl box-border"> {/* DaisyUI card styles, bg-base-100 for background, border-base-300 for border */}
          {/* Toolbar header section */}
          <div className="px-3 py-2 border-b border-base-300">
            <div className="flex flex-wrap items-center">

              <div className="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">

                {/* Bold Button */}
                <div className="tooltip tooltip-bottom" data-tip="Toggle bold">
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm btn-square"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                  >
                    <FaBold className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Bold</span>
                  </button>
                </div>

                {/* Italic Button */}
                <div className="tooltip tooltip-bottom" data-tip="Toggle italic">
                  <button
                    id="toggleItalicButton"
                    type="button"
                    className="btn btn-ghost btn-sm btn-square"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                  >
                    <FaItalic className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Italic</span>
                  </button>
                </div>

                {/* Underline Button */}
                <div className="tooltip tooltip-bottom" data-tip="Toggle underline">
                  <button
                    id="toggleUnderlineButton"
                    type="button"
                    className="btn btn-ghost btn-sm btn-square"
                  >
                    <FaUnderline className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Underline</span>
                  </button>
                </div>

                {/* Strike Button */}
                <div className="tooltip tooltip-bottom" data-tip="Toggle strike">
                  <button
                    id="toggleStrikeButton"
                    type="button"
                    className="btn btn-ghost btn-sm btn-square"
                  >
                    <FaStrikethrough className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Strike</span>
                  </button>
                </div>

                {/* Subscript Button */}
                <div className="tooltip tooltip-bottom" data-tip="Toggle subscript">
                  <button
                    id="toggleSubscriptButton"
                    type="button"
                    className="btn btn-ghost btn-sm btn-square"
                  >
                    <FaSubscript className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Subscript</span>
                  </button>
                </div>

                {/* Superscript Button */}
                <div className="tooltip tooltip-bottom" data-tip="Toggle superscript">
                  <button
                    id="toggleSuperscriptButton"
                    type="button"
                    className="btn btn-ghost btn-sm btn-square"
                  >
                    <FaSuperscript className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Superscript</span>
                  </button>
                </div>

                {/* Highlight Button */}
                <div className="tooltip tooltip-bottom" data-tip="Toggle highlight">
                  <button
                    id="toggleHighlightButton"
                    type="button"
                    className="btn btn-ghost btn-sm btn-square"
                  >
                    <FaHighlighter className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Highlight</span>
                  </button>
                </div>

                {/* Code Button */}
                <div className="tooltip tooltip-bottom" data-tip="Format code">
                  <button
                    id="toggleCodeButton"
                    type="button"
                    className="btn btn-ghost btn-sm btn-square"
                  >
                    <FaCode className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Code</span>
                  </button>
                </div>



              </div>

            </div>
          </div>
          {/* Editor content area */}
          <div className="p-4 bg-base-100 rounded-b-box"> {/* DaisyUI base-100 for background, rounded-b-box for bottom rounding */}
            <EditorContent editor={editor} className='min-h-[80dvh]'/>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorToolbar;
