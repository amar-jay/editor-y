"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/h4DsoLoxN33
 */
import React from "react"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { ChatBubbleIcon, CursorArrowIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons"
import { Button } from "@/components/plate-ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Toggle } from "@/components/plate-ui/toggle"
import {Combobox} from "@/components/atoms/combobox"
import { EditorState, useStore } from '@/lib/store';
import {cn } from "@/lib/utils"
 import { shallow } from 'zustand/shallow';

const fonts = [
  {
    label: "Sans Serif",
    value: "sans-serif",
  },
  {
    label: "Serif",
    value: "serif",
  },
  {
    value: "monospace",
    label: "Monospace",
  },
  // more will be added later
]
export default function Component({toggleSettings}: {toggleSettings:(opened: boolean)=>void}) {
  const [fontFamily, fontSize, theme, bubble, comments,
  setfontFamily, setfontSize, settheme, toggleBubble, toggleComments] = useStore((state:EditorState) => [
  state.fontFamily, state.fontSize, state.theme, state.bubble, state.comments,
  state.setfontFamily, state.setfontSize, state.settheme, state.togglebubble, state.togglecomments], shallow)

  const saveSettings = () => {
    alert("Settings saved!")
    toggleSettings(false)
  }
  return (
    <Card className="absolute flex flex-col h-[80%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden px-5 py-5 my-auto">
      <CardHeader className="flex justify-between items-center p-6">
        <CardTitle className="text-3xl font-bold">Settings</CardTitle>
      </CardHeader>
      {fontSize}
      <CardContent className="p-6 space-y-6 flex-1">
        <div className="flex items-center space-x-2">
          <Label htmlFor="font-size">Font Size</Label>
          <Slider className="w-full rounded-md" id="font-size" value={[fontSize]} onValueChange={(e)=>setfontSize(e.pop()!)} max={100} step={1}/>
          <p>{fontSize}</p>
        </div>
        <div className="flex items-center space-x-2 justify-between">
          <Label htmlFor="font-family">Font Family</Label>
          <Combobox setFont={setfontFamily} fonts={fonts} currentFont={fontFamily}/>
        </div>
        <div className="flex justify-between items-center mb-6  space-x-2">
          <Toggle aria-label="Toggle toolbar" className="space-x-2" variant="outline">
            <MenuIcon className="mr-2 h-4 w-4" />
            Toolbar
          </Toggle>
          <Toggle aria-label="Toggle theme" className={
		cn("space-x-2",
		theme === "dark" && "bg-black text-white hover:bg-black hover:text-white")} variant="outline" onPressedChange={e => settheme(e? "dark": "light")}>
            {theme === "dark" ? <MoonIcon className="mr-2 h-4 w-4" /> : <SunIcon className="mr-2 h-4 w-4" />}
            Theme
          </Toggle>
          <Toggle aria-label="Toggle bubble" className={cn(
		"space-x-2",
		bubble && "bg-black text-white hover:bg-black hover:text-white")}
		onPressedChange={() => toggleBubble(!bubble)}
		variant="outline">
            <ChatBubbleIcon className="mr-2 h-4 w-4"  />
            Bubble
          </Toggle>

          <Toggle aria-label="Toggle comments" className={cn(
		"space-x-2",
		comments && "bg-black text-white hover:bg-black hover:text-white")}
		onPressedChange={() => toggleComments &&toggleComments(!comments)}
		variant="outline">
            <CursorArrowIcon className="mr-2 h-4 w-4" />
            Comments 
          </Toggle>
        </div>
        <div className="flex items-center justify-around space-x-2">
          <Button aria-label="Align left" variant="outline">
            <AlignLeftIcon className="w-4 h-4" />
          </Button>
          <Button aria-label="Align center" variant="outline">
            <AlignCenterIcon className="w-4 h-4" />
          </Button>
          <Button aria-label="Align right" variant="outline">
            <AlignRightIcon className="w-4 h-4" />
          </Button>
          <Button aria-label="Justify text" variant="outline">
            <AlignJustifyIcon className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="border-t p-6 flex justify-between">
        <Button variant="outline" onClick={saveSettings}>Save Settings</Button>
        <Button onClick={()=>toggleSettings(false)}>
          Close settings
        </Button>
      </CardFooter>
    </Card>
  )
}

function AlignCenterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="21" x2="3" y1="6" y2="6" />
      <line x1="17" x2="7" y1="12" y2="12" />
      <line x1="19" x2="5" y1="18" y2="18" />
    </svg>
  )
}


function AlignJustifyIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  )
}


function AlignLeftIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="21" x2="3" y1="6" y2="6" />
      <line x1="15" x2="3" y1="12" y2="12" />
      <line x1="17" x2="3" y1="18" y2="18" />
    </svg>
  )
}


function AlignRightIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="21" x2="3" y1="6" y2="6" />
      <line x1="21" x2="9" y1="12" y2="12" />
      <line x1="21" x2="7" y1="18" y2="18" />
    </svg>
  )
}



function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
