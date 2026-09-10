"use client";

import { useState } from "react";
import RecipeBuilder from "@/components/RecipeBuilder";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [letter, setLetter] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

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
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">
              Live Preview
            </h2>

            <div className="rounded-2xl border p-6">
              <h3 className="text-2xl font-bold">
                {title || "Your Perfect Day"}
              </h3>

              <p className="mt-2 text-sm text-stone-500">
                {date || "Future Date"}
              </p>

              <div className="mt-6 whitespace-pre-wrap text-stone-700">
                {letter || "Your postcard preview will appear here."}
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold">
                  Recipe for a Perfect Day
                </h3>

                <ul className="space-y-2">
                  {ingredients.map((ingredient) => (
                    <li key={ingredient}>
                      • {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}