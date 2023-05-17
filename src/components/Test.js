import { useState } from "react";
import { Fragment } from "react";
import { people, recipes } from "../data";
import { getImageUrl } from "../utils";

const Test = (props) => {
  console.table(people);
  console.table(recipes);
  const length = people.length;
  const [clicks, setClicks] = useState(0);
  const [buttonText, setButtonText] = useState("Like");

  const person = people.map((person) => (
    <li key={person.id}>
      <b>Name:</b> {person.name}
      <b>Profession:</b> {person.profession}
    </li>
  ));

  function handleOnClick() {
    setClicks(clicks + 1);
    setButtonText(buttonText === "Like" ? "Not" : "Like");
  }

  return (
    <Fragment>
      <h2>This is the test component</h2>
      <h4>Example: The people array</h4>
      <b>JSON.stringify(people)</b>
      <p>{JSON.stringify(people, null, 4)}</p>
      <p>
        <b>Number of items:</b> {length}
      </p>
      <ol>{person}</ol>
      <h4>Example: JSON.stringify(recipes)</h4>
      <p>{JSON.stringify(recipes, null, 2)}</p>
      <button onClick={handleOnClick}>
        {buttonText} {clicks}
      </button>
    </Fragment>
  );
};

export default Test;
