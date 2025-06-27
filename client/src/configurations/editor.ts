import StarterKit from '@tiptap/starter-kit';
import SuperScript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import Highlight from '@tiptap/extension-highlight';
import UnderLine from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import { type Extensions } from "@tiptap/react"
import { type ToastContextProps, type DefaultoptionsType } from '../context/Toast/ToastContext';
const extensionConfiguration: (toast: ToastContextProps, defaultOptions: DefaultoptionsType) => Extensions = (toast, defaultOptions) => [
  StarterKit,
  SuperScript,
  SubScript,
  Highlight,
  UnderLine,
  Link.configure({
    openOnClick: true,
    autolink: true,
    defaultProtocol: 'https',
    isAllowedUri: (url) => {
      const allowedProtocols = ['http:', 'https:'];
      try {
        return allowedProtocols.includes((new URL(url)).protocol);
      } catch (error) {
        toast.open((error as Error).message, true, 4000, defaultOptions.error);
        return false;
      }
    },
    HTMLAttributes: { class: 'link' },
  }),]
export default extensionConfiguration;
