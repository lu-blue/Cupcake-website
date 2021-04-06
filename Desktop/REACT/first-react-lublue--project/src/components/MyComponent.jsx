export default function MyComponent({title, fileName}) {
  const imageObject = require("../images/" + fileName);
  const imageURL = imageObject.default;

  return (
    <article>
      <h2>{title}</h2>
      <img src={imageURL} alt={title} />
    </article>
  );
}