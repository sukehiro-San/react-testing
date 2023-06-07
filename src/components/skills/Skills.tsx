import { useEffect, useState } from "react";
import { SkillProps } from "./Skills.types";

const Skills = (props: SkillProps) => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true);
    }, 1000);
  });
  return (
    <>
      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
