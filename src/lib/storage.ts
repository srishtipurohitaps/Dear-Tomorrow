export interface Postcard {
  id: string;
  title: string;
  date: string;
  letter: string;
  ingredients: string[];
}

export function savePostcard(postcard: Postcard) {
  const postcards = JSON.parse(
    localStorage.getItem("postcards") || "[]"
  );

  postcards.push(postcard);

  localStorage.setItem(
    "postcards",
    JSON.stringify(postcards)
  );
}

export function getPostcards(): Postcard[] {
  return JSON.parse(
    localStorage.getItem("postcards") || "[]"
  );
}