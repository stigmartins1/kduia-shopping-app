import { getImageUrl } from "../utils.js";

const Profile = (props) => {
  let person = props.person;
  let size = person.size;

  console.log(getImageUrl("szV5sdG"));
  console.log(person.awards);

  return (
    <div>
      <h1>This is the profile component</h1>
      <h2>{person.name}</h2>
      <img
        src={getImageUrl(person.imageId)}
        alt={person.name}
        height={size}
        width={size}
      />
      <ul>
        <li>
          <b>Profession:</b> {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length}</b>
        </li>
        <ol>
          {person.awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ol>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
