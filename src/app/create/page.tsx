export default function CreatePage() {
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
                className="w-full rounded-xl border p-4"
              />

              <input
                type="date"
                className="w-full rounded-xl border p-4"
              />

              <textarea
                rows={8}
                placeholder="Dear Yesterday..."
                className="w-full rounded-xl border p-4"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">
              Preview
            </h2>

            <div className="rounded-2xl border border-dashed p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Your Postcard
              </h3>

              <p className="text-stone-500">
                Live preview coming next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}