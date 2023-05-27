import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { api } from "./utils/configs";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessage();
  }, []);

  async function fetchMessage() {
    try {
      const { data } = await api.get("/hello");
      setMessages(data.data || []);
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const message = formData.get("message");

    await api.post("/hello", { message });
    e.target.reset();
    fetchMessage();
  }

  async function handleRemove(e) {
    const id = e.target.dataset.id
    if (!e || !id) return
    await api.delete("/hello/" + id)
    fetchMessage()
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Change?</h1>
      <div
        style={{
          border: "1px solid #fff",
          padding: "12px",
          display: `${messages.length > 0 ? "flex" : "none"}`,
          gap: "8px",
          borderRadius: "8px",
        }}
      >
        {messages.map((i) => {
          return (
            <div
              key={i._id}
              style={{
                background: "#ccc",
                color: "#222",
                padding: "4px 12px",
                borderRadius: "8px",
                cursor: 'pointer'
              }}
              data-id={i._id}
              onClick={handleRemove}
            >
              {i.message}
            </div>
          );
        })}
      </div>
      <div className="card">
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: "8px", justifyContent: "center" }}
        >
          <input
            style={{
              padding: "8px 12px",
              outline: "none",
              border: "none",
              borderRadius: "8px",
            }}
            placeholder="Enter your message..."
            type="text"
            name="message"
          />
          <button>Add Message</button>
        </form>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
