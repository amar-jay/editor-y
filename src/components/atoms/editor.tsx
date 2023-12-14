"use client"
import { useState } from "react";
import { usePersistedStore, useStore } from '@/lib/store';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CommentsProvider } from '@udecode/plate-comments';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { CommentsPopover } from '@/components/plate-ui/comments-popover';
import { Plate, } from '@udecode/plate-common';
import {plugins} from '@/lib/editor/plugins';

const initialValue = [
  {
    id: '1',
    type: 'p',
    children: [{ text: 'Hello, World!' }],
  },
];


export default function Editor() {
  
  const [textValue, setTextValue] = usePersistedStore(state => [
      state.textStorage, state.setTextStorage 
      ]);

  const [bubble, toolbar, comments, fontFamily, fontTextAlign] = useStore(state => [state.bubble, state.toolbar, state.comments, state.fontFamily, state.fontTextAlign]);
  const setFont = (x: string) => 'font-' + x; 
  
  return (
    <DndProvider backend={HTML5Backend}>
      <CommentsProvider users={{}} myUserId="1">
        <Plate plugins={plugins} initialValue={initialValue}>
          {
            toolbar && (
          <FixedToolbar>
            <FixedToolbarButtons />
          </FixedToolbar>
            )
          }
          
          <Editor />
          
          {

            bubble && (
          <FloatingToolbar>
            <FloatingToolbarButtons />
          </FloatingToolbar>
            )
          }
          { comments && (
          <CommentsPopover />
          )
          }
        </Plate>
      </CommentsProvider>
    </DndProvider>
  );
}