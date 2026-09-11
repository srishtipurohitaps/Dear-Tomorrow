"use client";

import { useState } from "react";
import RecipeBuilder from "@/components/RecipeBuilder";
import PostcardPreview from "@/components/PostcardPreview";
import { savePostcard } from "@/lib/storage";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [letter, setLetter] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleSave = () => {
    savePostcard({
      id: crypto.randomUUID(),
      title,
      date,
      letter,
      ingredients,
    });

    alert("Postcard sealed and saved!");

    setTitle("");
    setDate("");
    setLetter("");
    setIngredients([]);
  };

  return (
    <main className="min-h-screen bg-[#F8F2E8] px-6 py-12 text-stone-800">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-5xl font-bold">
          Create Your Postcard
        </h1>

        <p className="mb-10 text-stone-600">
          Write a letter from your future perfect day and build its recipe.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">
              Letter Details
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Postcard Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border p-4"
              />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border p-4"
              />

              <textarea
                rows={8}
                placeholder="Dear Yesterday..."
                value={letter}
                onChange={(e) => setLetter(e.target.value)}
                className="w-full rounded-xl border p-4"
              />

              <div className="pt-4">
                <RecipeBuilder
                  ingredients={ingredients}
                  setIngredients={setIngredients}
                />
              </div>

              <button
                onClick={handleSave}
                className="mt-4 rounded-full bg-stone-900 px-6 py-3 text-white"
              >
                Seal Postcard
              </button>
            </div>
          </div>

          <PostcardPreview
            title={title}
            date={date}
            letter={letter}
            ingredients={ingredients}
          />
        </div>
      </div>
    </main>
  );
}