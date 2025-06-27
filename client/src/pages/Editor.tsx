import { useCallback, useEffect, type FC } from 'react';
import setTitle from '../utility/set-title';
import { useModal } from '../context/Dialog/DialogContext';
import { useToast, DefaultOptions } from '../context/Toast/ToastContext';
import extensionConfiguration from '../configurations/editor';
import { ToolbarButton } from '../components/EditorToolbarButton';
import { EditorContent, useEditor } from '@tiptap/react';
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaSubscript, FaSuperscript, FaHighlighter, FaCode, FaLink } from 'react-icons/fa';
const EditorToolbar: FC = () => {

  useEffect(() => setTitle("create blog"), []);
  const toast = useToast(), modal = useModal();
  const editor = useEditor({
    content: '',
    extensions: extensionConfiguration(toast, DefaultOptions)
  });

  if (!editor) return null; // Initialize the editor with an empty content and no extensions

  const setLink = useCallback(
    () => {
      const previousUrl = editor.getAttributes('link').href;
      modal.setMessage({ heading: "Set URL", text: "" });
      modal.show();
      modal.getPrompt(
        (url: string) => {
          const extendMarkRangeLink = editor.chain().focus().extendMarkRange('link');
          (url === '') ? extendMarkRangeLink.unsetLink().run() : extendMarkRangeLink.setLink({ href: url }).run();
        },
        (previousUrl !== undefined) ? previousUrl : ""
      )
    },
    [editor]
  );

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
                <ToolbarButton id='ToggleBold' label="Bold" dataTip='Toggle bold' icon={FaBold}
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  disabled={!editor.can().chain().focus().toggleBold().run()}
                />

                {/* Italic Button */}
                <ToolbarButton id='ToggleItalic' label='Italic' dataTip='Toggle italic' icon={FaItalic}
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  disabled={!editor.can().chain().focus().toggleItalic().run()}
                />

                {/* Underline Button */}
                <ToolbarButton id="ToggleUnderline" label='Underline' dataTip='Toggle underline' icon={FaUnderline}
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                  disabled={!editor.can().chain().focus().toggleUnderline().run()}
                />

                {/* Strike Button */}
                <ToolbarButton id='ToggleStrike' label='strike' dataTip='Toggle strike' icon={FaStrikethrough}
                  onClick={() => editor.chain().focus().toggleStrike().run()}
                  disabled={!editor.can().chain().focus().toggleStrike().run()}
                />
                {/* Subscript Button */}
                <ToolbarButton id="ToggleSubscript" label='Subscript' dataTip='Toggle subscript' icon={FaSubscript}
                  onClick={() => editor.chain().focus().toggleSubscript().run()}
                  disabled={!editor.can().chain().focus().toggleSubscript().run()}
                />

                {/* Superscript Button */}
                <ToolbarButton id='ToggleSuperscript' label='Superscript' dataTip='Toggle superscript' icon={FaSuperscript}
                  onClick={() => editor.chain().focus().toggleSuperscript().run()}
                  disabled={!editor.can().chain().focus().toggleSuperscript().run()}
                />

                {/* Highlight Button */}
                <ToolbarButton id="ToggleHighltght" label='Highlight' dataTip='Toggle highlight' icon={FaHighlighter}
                  onClick={() => editor.chain().focus().toggleHighlight().run()}
                  disabled={!editor.can().chain().focus().toggleHighlight().run()}
                />
                {/* Link Button */}
                <ToolbarButton id='SetLink' label='Link' dataTip='Set link' icon={FaLink}
                  onClick={setLink}
                />
                {/* Code Button */}
                <ToolbarButton id='ToggleCode' label='Code' dataTip='Toggle code' icon={FaCode}
                  onClick={() => editor.chain().focus().toggleCode().run()}
                  disabled={!editor.can().chain().focus().toggleCode().run()}
                />

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
