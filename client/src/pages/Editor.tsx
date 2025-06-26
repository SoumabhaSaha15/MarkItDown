import React from 'react';
import setTitle from '../utility/set-title';
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaSubscript, FaSuperscript, FaHighlighter, FaCode, FaLink } from 'react-icons/fa';
import { type IconType } from 'react-icons';
import { useModal } from '../context/Dialog/DialogContext';
import { useToast, DefaultOptions } from '../context/Toast/ToastContext';
import { EditorContent, useEditor } from '@tiptap/react';
import SuperScript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import Highlight from '@tiptap/extension-highlight';
import UnderLine from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';

type ToolbarButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  icon: IconType;
  label: string;
  id?: string;
  dataTip: string;
};

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({ onClick, disabled, icon: IconType, label, id, dataTip }: ToolbarButtonProps) => (
  <div className="tooltip tooltip-bottom" data-tip={dataTip}>
    <button
      id={id}
      type="button"
      className="btn btn-ghost btn-sm btn-square"
      onClick={onClick}
      disabled={disabled}
    >
      <IconType className="w-5 h-5" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </button>
  </div>
);

const EditorToolbar:React.FC = () => {
  React.useEffect(() => setTitle("create blog"), []);
  const toast = useToast(), modal = useModal();

  const editor = useEditor({
    content: '', extensions: [StarterKit, SuperScript, SubScript, Highlight, UnderLine,
      Link.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: 'https',
        isAllowedUri: (url) => {
          const allowedProtocols = ['http:', 'https:'];
          try {
            return allowedProtocols.includes((new URL(url)).protocol);
          } catch (e) {
            toast.open((e as Error).message, true, 4000, DefaultOptions.error);
            return false;
          }
        },
        HTMLAttributes: { class: 'link' },
      }),]
  });

  if (!editor) return null; // Initialize the editor with an empty content and no extensions

  const setLink = React.useCallback(
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
                <ToolbarButton
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  disabled={!editor.can().chain().focus().toggleBold().run()}
                  icon={FaBold}
                  label="Bold"
                  id='ToggleBold'
                  dataTip='Toggle Bold'
                />

                {/* Italic Button */}
                <ToolbarButton
                  id='ToggleItalic'
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  disabled={!editor.can().chain().focus().toggleItalic().run()}
                  label='Italic'
                  icon={FaItalic}
                  dataTip='Toggle Italic'
                />

                {/* Underline Button */}
                <ToolbarButton
                  id="ToggleUnderline"
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                  disabled={!editor.can().chain().focus().toggleUnderline().run()}
                  label='Underline'
                  icon={FaUnderline}
                  dataTip='Toggle underline'
                />

                {/* Strike Button */}
                <ToolbarButton
                  id='ToggleStrike'
                  onClick={() => editor.chain().focus().toggleStrike().run()}
                  disabled={!editor.can().chain().focus().toggleStrike().run()}
                  icon={FaStrikethrough}
                  dataTip='Toggle strike'
                  label='strike'
                />
                {/* Subscript Button */}
                <ToolbarButton
                  id="ToggleSubscript"
                  onClick={() => editor.chain().focus().toggleSubscript().run()}
                  disabled={!editor.can().chain().focus().toggleSubscript().run()}
                  label='Subscript'
                  icon={FaSubscript}
                  dataTip='Toggle subscript'
                />

                {/* Superscript Button */}
                <ToolbarButton
                  id='ToggleSuperscript'
                  label='Superscript'
                  icon={FaSuperscript}
                  onClick={() => editor.chain().focus().toggleSuperscript().run()}
                  disabled={!editor.can().chain().focus().toggleSuperscript().run()}
                  dataTip='Toggle superscript'
                />

                {/* Highlight Button */}
                <ToolbarButton
                  id="ToggleHighltght"
                  onClick={() => editor.chain().focus().toggleHighlight().run()}
                  disabled={!editor.can().chain().focus().toggleHighlight().run()}
                  icon={FaHighlighter}
                  label='Highlight'
                  dataTip='Toggle highlight'
                />
                {/* Link Button */}
                <ToolbarButton
                  id='SetLink'
                  onClick={setLink}
                  label='Link'
                  dataTip='Set link'
                  icon={FaLink}
                />
                {/* Code Button */}
                <ToolbarButton
                  id='ToggleCode'
                  icon={FaCode}
                  dataTip='Toggle code'
                  label='Code'
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
