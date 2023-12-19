/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RbgCxqBqDhy
 */
import { Button } from "@/components/plate-ui/button"
import React,{useState} from "react"
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons"
 
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
 

interface EditorProps {
    logs: boolean
    children: React.ReactNode,
    toggleSettings: () => void
    toolbar?: boolean
}

const Toolbar = () => (
    <ToggleGroup variant="outline" type="multiple" >
      <ToggleGroupItem value="bold" aria-label="Toggle bold" className="bg-white">
        <FontBoldIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic"  className="bg-white dark:bg-secondary">
        <FontItalicIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough"  className="bg-white dark:bg-secondary">
        <UnderlineIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
)

    const ParsedLogs= 
    [
    {"type":"p","children":[{"text":"Hey big bro."}]},
    {"type":"h3","children":[{"text":"where to?"}]},
    {"type":"p","children":[{"text":"vim","underline":true}]},
    {"type":"p","children":[{"text":""}]}]
    const Logs = {
      type: "body",
      children: ParsedLogs  
      } satisfies Loggings

export default function Component({children, toolbar, logs=true, toggleSettings}: EditorProps) {
  return (
      <div className="w-full max-w-4xl">
        <div className="flex flex-col relative min-h-screen px-6 py-5">
          <div className="flex justify-between mb-8">
            <h1 className="text-5xl font-bold">Editor</h1>
            <Button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={toggleSettings}>
              Settings
            </Button>
          </div>
<div className="px-3 py-3 gap-3">
	{!toolbar && <Toolbar/>}
</div>
          <div className="flex flex-row flex-1">
            <div className="flex-1">
                {children}
              {/* <div className="bg-gray-800 p-6 text-white rounded-lg shadow-lg min-h-full">
                <p className="mb-4">What is my name?</p>
                <p className="mb-4">fasdkdlaskfj</p>
                <p className="mb-4">fasdkdlaskfj</p>
                <p className="mb-4">fasdkdlaskfj</p>
              </div> */}
            </div>
            { logs && (
            <>
            <div className="w-1/4 bg-gray-200 p-4 rounded-lg shadow-lg ml-6 min-h-full">
              <h2 className="text-2xl font-bold mb-4">Logs</h2>
              <div className="text-gray-600 break-words text-sm">
                <Logging element={Logs}/>
              </div>
            </div>
            </>
            )}
        </div>
        </div>
      </div>
  )
}

//interface Log { type: string; text?:string; underline?: boolean;  bold?: boolean; italic?: boolean; children?: Log[]}
// a recursive function that takes in a log and returns it in p and spans as well as tags
// this is a recursive function that takes in a log and returns it in p and spans as well as tags

interface Loggings { type?: string; text?:string; underline?: boolean;  bold?: boolean; italic?: boolean; children?: Loggings[]}
const Logging = ({element}: {element: Loggings}) => {
  return (
    <>
    <p>{element.type}</p>
    {element?.children?.map((log, index) => (
        log?.type ? (
          <Logging element={log} key={index}/>
        ): (
          <p key={index} className="ml-5">
            {/* tags */}
            {log?.bold && <span className="font-bold">B</span>}
            {" "}
            {log?.italic && <span className="italic">I</span>}
            {" "}
            {log?.underline && <span className="underline">U</span>}
            {" "}
          </p>

        )
        ))}
  </>
  )

}