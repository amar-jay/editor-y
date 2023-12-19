"use client"
import { useState } from "react";
import { Editor as PlateEditor } from '@/components/plate-ui/editor';
import { usePersistedStore, useStore } from '@/lib/store';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CommentsProvider } from '@udecode/plate-comments';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { CommentsPopover } from '@/components/plate-ui/comments-popover';
import { Plate, } from '@udecode/plate-common';
import {useEditorPlugins} from '@/lib/editor/plugins';
import { cn } from "@/lib/utils";

const initialValue = [
  {
    id: '1',
    type: 'h1',
    children: [{ text: 'Hello!' }],
  },
];


export default function EditorComponent() {
  
  const [textValue, setTextValue] = usePersistedStore(state => [
      state.textStorage, state.setTextStorage 
      ]);

  const [bubble, toolbar, comments, fontFamily, fontTextAlign] = useStore(state => [state.bubble, state.toolbar, state.comments, state.fontFamily, state.fontTextAlign]);
  const setFont = (x: string) => 'font-' + x; 
const plugins = useEditorPlugins()
  
  return (
    <DndProvider backend={HTML5Backend} >
      <TooltipProvider>
      <CommentsProvider users={{}} myUserId="1">
        <Plate plugins={plugins} initialValue={initialValue}
	onChange={(text)=>setTextValue(text)}
>
          {
            !toolbar && (
          <FixedToolbar>
            <FixedToolbarButtons />
          </FixedToolbar>
            )
          }
          {/* something must be wrong with the editor here*/}
          <PlateEditor className={cn(setFont(fontFamily), fontTextAlign)} />
          {

            !bubble && (
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
      </TooltipProvider>
    </DndProvider>
  );
}
