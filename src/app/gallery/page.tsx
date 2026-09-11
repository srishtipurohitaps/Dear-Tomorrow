"use client";

import { useEffect, useState } from "react";
import { getPostcards, Postcard } from "@/lib/storage";
import Navbar from "@/components/Navbar";

export default function GalleryPage() {
  const [postcards, setPostcards] = useState<Postcard[]>([]);

  useEffect(() => {
    setPostcards(getPostcards());
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F2E8] px-6 py-12 text-stone-800">
      <div className="mx-auto max-w-6xl">
        <Navbar />

        <h1 className="mb-10 text-5xl font-bold">
          Gallery
        </h1>

        {postcards.length === 0 ? (
          <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
            <p>No postcards yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {postcards.map((postcard) => (
              <div
                key={postcard.id}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <h2 className="mb-2 text-2xl font-semibold">
                  {postcard.title}
                </h2>

                <p className="mb-4 text-sm text-stone-500">
                  {postcard.date}
                </p>

                <p className="mb-6 line-clamp-4 text-stone-600">
                  {postcard.letter}
                </p>

                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">
                    Recipe
                  </h3>

                  <ul className="space-y-1 text-sm">
                    {postcard.ingredients.map((ingredient) => (
                      <li key={ingredient}>
                        • {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}