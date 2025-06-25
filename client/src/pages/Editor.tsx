import React from 'react';
import setTitle from '../utility/set-title';
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaSubscript, FaSuperscript, FaHighlighter, FaCode, FaLink } from 'react-icons/fa';
// import { AiOutlineFontSize } from "react-icons/ai";
// import { MdFormatColorText } from "react-icons/md";
// import { BiFontFamily } from "react-icons/bi";
import { useToast,DefaultOptions } from '../context/Toast/ToastContext';
import { EditorContent, useEditor } from '@tiptap/react';
import SuperScript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import Highlight from '@tiptap/extension-highlight';
import UnderLine from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
const EditorToolbar = () => {
  const toast = useToast();
  const editor = useEditor({
    content: '', extensions: [StarterKit, SuperScript, SubScript, Highlight, UnderLine, Link.configure({ // You can configure options here
      openOnClick: true, // Whether links should open on click (default: true)
      autolink: true,   // Automatically turn typed URLs into links (default: true)
      defaultProtocol: 'https', // Default protocol for autolinked URLs
      isAllowedUri: (url) => {
        const allowedProtocols = ['http:', 'https:'];
        try {
          const parsedUrl = new URL(url);
          return allowedProtocols.includes(parsedUrl.protocol);
        } catch (e) {
          toast.open((e as Error).message,true,4000,DefaultOptions.error);
          return false; // Invalid URL
        }
      },
      HTMLAttributes: { class: 'link' }, // Add custom classes or attributes
    }),]
  });

  React.useEffect(() => {
    setTitle("create blog");
  }, []);
  if (!editor) return null; // Initialize the editor with an empty content and no extensions

  const setLink = React.useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    try {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    } catch (e) {
      toast.open((e as Error).message,true,4000,DefaultOptions.error);
    }
  }, [editor])

  return (
    <>
      <div className='max-h-[calc(100vh-4rem)] min-h-[calc(100vh-4rem)] overflow-y-scroll grid grid-cols-1 gap-2 py-2 px-4 items-center place-items-center bg-base-200 justify-center'> {/* Container for the editor toolbar, using DaisyUI's grid system */}
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
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    disabled={!editor.can().chain().focus().toggleUnderline().run()}
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
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editor.can().chain().focus().toggleStrike().run()}
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
                    onClick={() => editor.chain().focus().toggleSubscript().run()}
                    disabled={!editor.can().chain().focus().toggleSubscript().run()}
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
                    onClick={() => editor.chain().focus().toggleSuperscript().run()}
                    disabled={!editor.can().chain().focus().toggleSuperscript().run()}
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
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    disabled={!editor.can().chain().focus().toggleHighlight().run()}
                  >
                    <FaHighlighter className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Highlight</span>
                  </button>
                </div>

                {/* Link Button */}
                <div className="tooltip tooltip-bottom" data-tip="Toggle link">
                  <button
                    id="toggleLinkButton"
                    type="button"
                    className="btn btn-ghost btn-sm btn-square"
                    onClick={setLink}
                  >
                    <FaLink className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Link</span>
                  </button>
                </div>

                {/* Link Button */}
                <div className="tooltip tooltip-bottom" data-tip="Code">
                  <button
                    id="toggleLinkButton"
                    type="button"
                    className="btn btn-ghost btn-sm btn-square"
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editor.can().chain().focus().toggleCode().run()}
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
            <EditorContent editor={editor} className='min-h-[75dvh]' />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorToolbar;
