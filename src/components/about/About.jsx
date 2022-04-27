import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=8000"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">EXECUTIVE SUMMARY</h1>
        <p className="a-desc">
          A highly resourceful professional with strong analytical, problem
          solving and critical thinking skills, adept at communicating and
          collaborating effectively in teams, with exemplary leadership skills.
          I aim to use cutting Edge Technologies to provide smart solution to
          human day to day challenges and as well as improving on the existing
          business structures so a to have an edge in the global market.
        </p>
        <p className="a-sub">SKILLS</p>
        <p className="a-desc">ReactJS, &nbsp; NodeJS, &nbsp; Javascript, &nbsp; HTML, &nbsp; CSS, &nbsp; JQuery, &nbsp; Docker</p>

        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">CERTIFICATION</h4>
            <p className="a-award-desc">FULL STACK DEVELOPMENT.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
