/***
 * exact implementation from https://github.com/amarjay/editorx
 */

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Value } from '@udecode/plate-common';

/*
 * # States to create
 * - theme
 * - language
 * - session
 * - font size
 * - font family
 * - persistent Text storage 
 * - persistent Image storage
 * - shortcuts
 *   - headings
 *   - list
 *   - bold 
 *   - italic
 *   - underline
 *   - strikethrough
 *   - code
 *   - quote
 *   - Horizontal rule
*/

// -- types --
type Theme = (typeof options.theme)[number];
//type Language = (typeof options.language)[number];
type DND = boolean;
type Bubble = boolean;
type Comment = boolean;
type Toolbar = boolean;
type Session = string | null;
type FontSize = number;
type FontFamily = (typeof options.fontFamily)[number];
type FontTextAlign = (typeof options.fontTextAlign)[number];
type ImageStorage = null | string[];
type TextStorage = string;
type Shortcuts = {
    headings: {
        h1: string;
        h2: string;
        h3: string;
    }
    list: {
        ul: string;
        ol: string;
    },
    bold: string;
    italic: string;
    underline: string;
    strikethrough: string;
    code: string;
    quote: string;
    horizontalRule: string;
};

export const initialValue:Value = [{
    type: "h1",
    children: [{text: "Untitled"}]
},{
    type: "p",
    children: [{
      text: "enter text here",
    }]
},
  /*
  {
    type: "blockquote",
    children: [{text: " Blockquote"}]
},
  */
];

export const options = {
    theme: ['dark', 'light'],
 //   language: ['en', 'tr', 'fr'],
    fontFamily: ['sans-serif', 'serif', 'monospace'],
    fontTextAlign: [
        'left',
        'right',
        'center'
    ]
} as const

export interface EditorState {
    theme: Theme;
    DND: DND;
    bubble: Bubble;
    comments: Comment;
    toolbar: Toolbar;
//    language: Language;
    session: Session;
    fontSize: FontSize;
    fontFamily: FontFamily;
    fontTextAlign: FontTextAlign;
    settheme: (isDark: Theme) => void;
//    toggleDND: (isDND: DND) => void;
    togglebubble: (isbubble: Bubble) => void;
    togglecomments: (iscomments: Bubble) => void;
    toggletoolbar: (istoolbar: Toolbar) => void;

//    setlanguage: (language: Language) => void;
    setsession: (session: Session) => void;
    setfontSize: (fontSize: FontSize) => void;
    setfontFamily: (fontFamily: FontFamily) => void;
    setfontTextAlign: (fontTextAlign: FontTextAlign) => void;
}

export const useStore = create<EditorState>()(persist((set) => ({
    theme: 'light',
//    language: 'en',
    bubble: false,
    toolbar: true,
    comments: false,
    session: null,
    DND: false,
    fontSize: 16,
    fontFamily: 'monospace',
    fontTextAlign: 'center',
//    settheme: (theme) => set({ theme: theme!=="dark" ? 'dark': 'light' }),
    settheme: (theme) => set({ theme }),
//    toggleDND: (dnd) => set({ DND: !dnd }),
    togglebubble: (isbubble) => {
        set({ bubble: !isbubble });
    },
    togglecomments: (iscomments) => {
        set({ comments: !iscomments });
    },
    toggletoolbar: (istoolbar) => {
        set({ toolbar: !istoolbar });
    },
    // setlanguage: (language) => set({ language }),
    setsession: (session) => set({ session }),
    setfontSize: (fontSize) => set({ fontSize }),
    setfontTextAlign: (fontTextAlign) => set({ fontTextAlign }),
    setfontFamily: (fontFamily) => set({ fontFamily }),
}),
{
    name: "editor-settings",
}));

interface PersistedEditorState {
    textStorage: string;
    imageStorage: ImageStorage;
    shortcuts: Shortcuts;
    setTextStorage: (textStorage: TextStorage) => void;
    setImageStorage: (imageStorage: ImageStorage) => void;
    setShortcuts: (shortcuts: Shortcuts) => void;

}

// persistent store
//    setShortcuts: (shortcuts) => set({ shortcuts }),
export const usePersistedStore = create<PersistedEditorState>()( devtools(
        persist(
            (set) => ({
                textStorage: JSON.stringify(initialValue),
                imageStorage: [],
                shortcuts: {
                    headings: {
                        h1: 'ctrl+1',
                        h2: 'ctrl+2',
                        h3: 'ctrl+3',
                    },
                    list: {
                        ul: 'ctrl+shift+8',
                        ol: 'ctrl+shift+9',
                    },
                    bold: 'ctrl+b',
                    italic: 'ctrl+i',
                    underline: 'ctrl+u',
                    strikethrough: 'ctrl+shift+s',
                    code: 'ctrl+shift+c',
                    quote: 'ctrl+shift+q',
                    horizontalRule: 'ctrl+shift+h',
                },
                setTextStorage: (textStorage) => set({ textStorage }),
                setImageStorage: (imageStorage) => set({ imageStorage }),
                setShortcuts: (shortcuts) => set({ shortcuts }),
            }),
            {
                name: 'editor-state',
            }
        )
    )
);

