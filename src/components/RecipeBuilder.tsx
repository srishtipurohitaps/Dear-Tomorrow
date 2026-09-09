interface RecipeBuilderProps {
  ingredients: string[];
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
}

const options = [
  "Sunset",
  "Rain",
  "Bookstore",
  "Coffee",
  "Chai",
  "Adventure",
  "Friends",
  "Family",
  "Laughter",
  "Travel",
];

export default function RecipeBuilder({
  ingredients,
  setIngredients,
}: RecipeBuilderProps) {
  const toggleIngredient = (item: string) => {
    if (ingredients.includes(item)) {
      setIngredients(
        ingredients.filter((ingredient) => ingredient !== item)
      );
    } else {
      setIngredients([...ingredients, item]);
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">
        Recipe Ingredients
      </h2>

      <div className="flex flex-wrap gap-3">
        {options.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => toggleIngredient(item)}
            className={`rounded-full px-4 py-2 transition ${
              ingredients.includes(item)
                ? "bg-stone-900 text-white"
                : "bg-stone-100 text-stone-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}