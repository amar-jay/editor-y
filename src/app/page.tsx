"use client"
//import Editor from "@/components/atoms/editor"
//import EditorContainer from "@/components/layout/editor-container"
import Settings from "@/components/layout/settings"
import React from "react"

export default function Home() {
  const [openSettings, setOpenSettings] = React.useState(true)
  const toggleSettings = () => setOpenSettings(!openSettings);
  return (
    <main className="flex flex-col items-center bg-gray-100">
    {
      openSettings && (
      <Settings toggleSettings={toggleSettings}/>
      )
      }
    {/**
    <EditorContainer logs={true} toggleSettings={toggleSettings} >
      <Editor/>
    </EditorContainer>
    */}
    </main>
  )

}
