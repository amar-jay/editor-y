"use client"
import Editor from "@/components/atoms/editor"
import EditorContainer from "@/components/layout/editor-container"
//import Settings from "@/components/layout/settings"
import React from "react"

export default function Home() {
  const [openSettings, setOpenSettings] = React.useState(false)
  const toggleSettings = () => setOpenSettings(!openSettings);
  return (
    <main className="flex flex-col items-center bg-gray-100">
    <EditorContainer logs={true} toggleSettings={toggleSettings} >
      <Editor/>
    </EditorContainer>
    {/**
    {
      openSettings && (
      <Settings toggleSettings={toggleSettings}/>
      )
      }
    */}
    </main>
  )

}
