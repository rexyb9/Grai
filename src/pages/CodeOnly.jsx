import { useState } from "react"
import "../App.css"
import { Light as SyntaxHighlight } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { requestToGroqAI } from "../utils/groq"
import { Link } from "react-router-dom"

function CodeOnly() {
  const [data, setData] = useState("")

  async function handleSubmit() {
    const ai = await requestToGroqAI(content.value, 1)
    setData(ai)
  }

  return (
    <>
      <Link
        className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
        to="/"
      >
        <span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

        <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
          Home
        </span>
      </Link>
      <Link
        className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
        to="/global"
      >
        <span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

        <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
          Global
        </span>
      </Link>
      <main className="flex flex-col min-h-[100vh] justify-center items-center max-w-xl w-full mx-auto">
        <h1 className="text-4xl text-white font-bold">Code only</h1>
        <form className="flex flex-col gap-4 py-4 w-full">
          <textarea
            type="text"
            placeholder="ketik permintaan disini..."
            className="py-2 px-4 text-md rounded-md text-2xl"
            style={{ outline: "none" }}
            id="content"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-indigo-500 py-2 px-4 font-bold text-white rounded-md"
          >
            Kirim
          </button>
        </form>
        <div className="max-w-xl w-full mx-auto">
          {!data ? null : (
            <SyntaxHighlight
              language="javascript"
              style={oneDark}
              wrapLongLines={true}
            >
              {data}
            </SyntaxHighlight>
          )}
        </div>
      </main>
    </>
  )
}

export default CodeOnly
