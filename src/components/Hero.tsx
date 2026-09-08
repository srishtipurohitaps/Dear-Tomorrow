export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
        Dear Tomorrow
      </p>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
        What if your perfect day could write back?
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-stone-600">
        Write a postcard from a future memory and create a recipe from the
        moments, people, and experiences that made it unforgettable.
      </p>

      <button className="mt-8 rounded-full bg-stone-900 px-6 py-3 text-white transition hover:bg-stone-700">
        Create Postcard
      </button>
    </section>
  );
}