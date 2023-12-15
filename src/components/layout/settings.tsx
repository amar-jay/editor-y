"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/h4DsoLoxN33
 */
import React from "react"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/plate-ui/card"
import { ChatBubbleIcon, CursorArrowIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons"
import { Button } from "@/components/plate-ui/button"
import { Label } from "@/components/plate-ui/label"
import { Slider } from "@/components/plate-ui/slider"
import { Toggle } from "@/components/plate-ui/toggle"
import {Combobox} from "@/components/atoms/combobox"
import { useStore } from '@/lib/store';
 import { shallow } from 'zustand/shallow';

const fonts = [
  {
    value: "Sans Serif",
    label: "sans-serif",
  },
  {
    value: "Serif",
    label: "serif",
  },
  {
    value: "monospace",
    label: "monospace",
  },
  // more will be added later
]
export default function Component({setOpenSettings}: {setOpenSettings:React.Dispatch<React.SetStateAction<boolean>>}) {
  const [fontFamily, fontSize, theme,
  setfontFamily, setfontSize, settheme] = useStore(state => [
  state.fontFamily, state.fontSize, state.theme,
  state.setfontFamily, state.setfontSize, state.settheme], shallow)

  const saveSettings = () => {
    alert("Settings saved!")
    setOpenSettings(false)
  }
  return (
    <Card className="absolute flex flex-col h-[80%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden px-5 py-5">
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
          <Toggle aria-label="Toggle theme" className="space-x-2" variant="outline" onPressedChange={e => settheme(e? "dark": "light")}>
            {theme === "dark" ? <MoonIcon className="mr-2 h-4 w-4" /> : <SunIcon className="mr-2 h-4 w-4" />}
            {theme.charAt(0).toUpperCase() + theme.slice(1).toLowerCase()}
            Theme
          </Toggle>
          <Toggle aria-label="Toggle bubble" className="space-x-2" variant="outline">
            <ChatBubbleIcon className="mr-2 h-4 w-4" />
            Bubble
          </Toggle>

          <Toggle aria-label="Toggle bubble" className="space-x-2" variant="outline">
            <CursorArrowIcon className="mr-2 h-4 w-4" />
            DND 
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
        <Button onClock={()=>setOpenSettings(false)}>
          Close settings
        </Button>
      </CardFooter>
    </Card>
  )
}

function AlignCenterIcon(props) {
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


function AlignJustifyIcon(props) {
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


function AlignLeftIcon(props) {
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


function AlignRightIcon(props) {
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


function BombIcon(props) {
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
      <circle cx="11" cy="13" r="9" />
      <path d="m19.5 9.5 1.8-1.8a2.4 2.4 0 0 0 0-3.4l-1.6-1.6a2.41 2.41 0 0 0-3.4 0l-1.8 1.8" />
      <path d="m22 2-1.5 1.5" />
    </svg>
  )
}


function MenuIcon(props) {
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


function PanelTopCloseIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  )
}


function TypeIcon(props) {
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
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}

