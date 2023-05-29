import { useState } from "react";
import { api } from "./utils/configs";

export default function App() {

  const [urls, setUrls] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileInput = e.target.querySelector("input[type=file]");

    formData.append("type", "stalls");
    formData.append("id", "asdkhjkgldsalfthisisstallid");
    [...fileInput.files].forEach((file) => formData.append("images", file));

    const { data } = await api.post("/uploads", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setUrls(data.urls)

    e.target.reset();
  };
  return (
    <div className="h-screen w-screen bg-zinc-900 text-white flex flex-col gap-10 items-center justify-center">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input type="file" accept="image/*" multiple />
        <button className="border p-2 hover:bg-zinc-800">Add Images</button>
      </form>

      <div className="mt-10 max-w-3xl mx-auto">
        {urls?.map((url) => {
          return (
            <div key={url}>
              <img src={url} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
