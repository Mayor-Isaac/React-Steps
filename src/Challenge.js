import "./challenge.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662ea",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#efd81d",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#c3dcaf",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#e84f33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#68daf6",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#ff3b00",
  },
];
export default function Challenge() {
  return (
    <>
      <h1>Challenge Page</h1>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}
function Avatar() {
  return <img src="./pizzas/focaccia.jpg" alt="Avatar" className="avatar" />;
}

function Intro() {
  return (
    <>
      <h1>Idyllic Ogunyileka </h1>
      <Detail />
    </>
  );
}

function Detail() {
  return (
    <p className="detail">
      Full-Stack web developer and a student at Udemy. When not coding, I like
      to sleep, cook, eat or just enjoy the Futa Sun
    </p>
  );
}

function SkillList() {
  const skillsData = skills;
  return (
    <ul>
      {skillsData.map((skill) => (
        <Skill skill={skill} />
      ))}
    </ul>
  );
}

function Skill({ skill }) {
  return (
    <li className="skill" style={{ backgroundColor: skill.color }}>
      <span className="skillName">{skill.skill}</span>
      <span className="emoji">{skill.level === "advanced" && "💪"}</span>
      <span className="emoji">{skill.level === "intermediate" && "✌"}</span>
      <span className="emoji">{skill.level === "beginner" && "👶"}</span>
    </li>
  );
}
