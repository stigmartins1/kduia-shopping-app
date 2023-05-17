import { people } from "../data.js";
import { getImageUrl } from "../utils.js";

const ArrayFilter = () => {
  const chemists = people.filter((chemist) => chemist.profession === "chemist");
  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person.imageId)} alt={person.name} />
      <p>
        <b>{person.name}: </b>
        {person.profession + " " + person.accomplishment}
      </p>
    </li>
  ));

  return (
    <div>
      <h1>The Array.filter method</h1>
      <ul>{listItems}</ul>
    </div>
  );
};

export default ArrayFilter;
