import { api } from "./utils/configs";

export default function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileInput = e.target.querySelector("input[type=file]");

    formData.append("type", "stalls");
    formData.append("id", "asdkhjkgldsalfthisisstallid");
    [...fileInput.files].forEach((file) => formData.append("images", file));

    const res = await api.post("/uploads", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("AFTER UL", res.data);

    e.target.reset();
  };
  return (
    <div className="h-screen w-screen bg-zinc-900 text-white flex items-center justify-center">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input type="file" accept="image/*" multiple />
        <button className="border p-2 hover:bg-zinc-800">Add Images</button>
      </form>
    </div>
  );
}
