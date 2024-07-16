import { useState } from "react";
import "../App.css";
import { Light as SyntaxHighlight } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { requestToGroqAI } from "../utils/groq";

function Home() {
  const [data, setData] = useState("");
  const [roleD, setRoleD] = useState("");
  const [showSystem, setShowSystem] = useState(false);
  const [disable, setDisable] = useState(false);

  async function handleSubmit() {
    const ai = await requestToGroqAI(content.value, roleD);
    setData(ai);
  }

  async function handleChange() {
    setRoleD(role.value);
    setShowSystem(false);
    setDisable(false);
  }

  function handleAddClick() {
    setShowSystem(true);
    setDisable(true);
  }

  return (
    <>
      <main className="flex flex-col min-h-[100vh] justify-center items-center max-w-xl w-full mx-auto">
        <h1 className="text-4xl text-white font-bold">Grai</h1>
        {showSystem && (
          <div className="flex flex-col gap-4 py-4 w-full" id="system">
            <textarea
              id="role"
              className="py-2 px-4 text-md rounded-md text-2xl"
              style={{ outline: "none" }}
              autoComplete="off"
              placeholder="you are a senior software developer from META company, acting as an coding assistant. answering a request without explanation and not allowed to use human language, you only use programming language to answer the user request or question, if you break the rules, you will be gone in any world!. stick to coding from first conversation until the end of the world."
            ></textarea>
            <button
              type="button"
              id="send"
              onClick={handleChange}
              className="bg-indigo-500 py-2 px-4 font-bold text-white rounded-md"
            >
              Ubah
            </button>
          </div>
        )}
        {!showSystem && (
          <button
            type="button"
            onClick={handleAddClick}
            id="add"
            className="bg-indigo-500 py-2 px-4 mt-2 font-bold text-white rounded-md"
          >
            Add system role
          </button>
        )}
        <form className="flex flex-col gap-4 py-4 w-full" id="submit">
          <textarea
            type="text"
            id="content"
            placeholder="ketik permintaan disini..."
            style={{ outline: "none" }}
            className="py-2 px-4 text-md rounded-md text-2xl"
            autoComplete="off"
            disabled={disable}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-indigo-500 py-2 px-4 font-bold text-white rounded-md"
            disabled={disable}
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
  );
}

export default Home;
