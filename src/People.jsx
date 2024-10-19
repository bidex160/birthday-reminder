import Person from "./Person";

/* eslint-disable react/prop-types */
const People = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};
export default People;
