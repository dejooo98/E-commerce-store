// flatten products
export function flattenProducts(data) {
  return data.map((item) => {
    let image = item.image;
    return { ...item, image };
  });
}
