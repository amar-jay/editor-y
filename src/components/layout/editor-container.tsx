/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RbgCxqBqDhy
 */
import { Button } from "@/components/ui/button"
import React,{useState} from "react"

interface EditorProps {
    logs: boolean
    children: React.ReactNode
}
export default function Component({children, logs=true}: EditorProps) {
    const Logs = JSON.parse(`
    [
    {"type":"p","children":[{"text":"Hey big bro."}]},
    {"type":"h3","children":[{"text":"where to?"}]},
    {"type":"p","children":[{"text":"vim","underline":true}]},
    {"type":"p","children":[{"text":""}]}]
    `)
  const [showSettings, setShowSettings] = useState(false);
  const toggleSettings = () => setShowSettings(!showSettings);
  return (
      <div className="w-full max-w-4xl">
        <div className="flex flex-col relative min-h-screen px-6 py-5">
          <div className="flex justify-between mb-8">
            <h1 className="text-5xl font-bold">Editor</h1>
            <Button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={toggleSettings}>
              Settings
            </Button>
          </div>
          <div className="flex gap-4 mb-6">
            <Button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">B</Button>
            <Button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">I</Button>
            <Button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">U</Button>
          </div>
          <div className="flex flex-row flex-1">
            <div className="flex-grow">
              <div className="bg-gray-800 p-6 text-white rounded-lg shadow-lg min-h-full">
                <p className="mb-4">What is my name?</p>
                <p className="mb-4">fasdkdlaskfj</p>
                <p className="mb-4">fasdkdlaskfj</p>
                <p className="mb-4">fasdkdlaskfj</p>
                {children}
              </div>
            </div>
            { logs && (
            <>
            <div className="w-1/4 bg-gray-200 p-4 rounded-lg shadow-lg ml-6 min-h-full">
              <h2 className="text-2xl font-bold mb-4">Logs</h2>
              <div className="text-gray-600 break-words text-sm">
                <Logging element={{type:"body", children:Logs} as Log}/>
              </div>
            </div>
            </>
            )}
        </div>
        </div>
      </div>
  )
}

interface Log { type: string; text:string; children: Log[]}
const Logging = ({element}:{element:Log}) => {
    return (
    <>
        <h3> {element.type}</h3>
        {element.text && <span> {element?.text}</span>}
        <div className="ml-5">
            {element.children?.map((subelement:Log) => (
                (typeof subelement.children === "string") ? 
                <p> {subelement.children}</p>
                : (
                    <Logging element={subelement as Log}/>
                )
                ))
            }
        </div>
        </>
    )
    }
