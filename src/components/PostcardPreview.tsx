interface PostcardPreviewProps {
  title: string;
  date: string;
  letter: string;
  ingredients: string[];
}

export default function PostcardPreview({
  title,
  date,
  letter,
  ingredients,
}: PostcardPreviewProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="mb-2 text-2xl font-bold">
        {title || "Your Perfect Day"}
      </h2>

      <p className="mb-6 text-stone-500">
        {date || "Future Date"}
      </p>

      <p className="mb-8 whitespace-pre-wrap text-stone-700">
        {letter || "Your postcard preview will appear here."}
      </p>

      <div>
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
  );
}