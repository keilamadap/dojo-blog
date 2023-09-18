const About = () => {
  return (
    <div className="about-me">
      <h2>About me</h2>
      <p>
        Hello there! ❤️ <br /> My name is Keila Amada, and I'm a
        thirty-one-year-old woman currently residing in Natal, RN. I take pride
        in being a Front End developer, and this app represents one of my very
        first applications created using React. I accomplished this with the
        assistance of a YouTube channel called Net Ninja, which offers a
        comprehensive Full React Tutorial playlist. This playlist proved
        immensely helpful as it covered essential topics including routes, array
        methods such as map and filter, URL parameters, and I even developed a
        JSON server to store my data. <br /> <br /> Feel free to give a look on{" "}
        <a
          href="https://www.youtube.com/@NetNinja"
          style={{ textDecoration: "none", color: "#f1356d" }}
          target="_blank"
          rel="noreferrer"
        >
          Net Ninja YouTube Channel!
        </a>
      </p>
    </div>
  );
};

export default About;
