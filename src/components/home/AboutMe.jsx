import React from "react";
import { Jumbotron } from "./migration";

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  // React.useEffect(() => {
  //   // const handleRequest = async () => {
  //   //   const instaLink = "https://www.instagram.com/";
  //   //   const instaQuery = "/?__a=1";
  //   //   try {
  //   //     const response = await axios.get(instaLink + link + instaQuery);
  //   //     setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
  //   //   } catch (error) {
  //   //     setShowPic(false);
  //   //     console.error(error.message);
  //   //   }
  //   // };

  //   // if (link && !pictureLinkRegex.test(link)) {
  //   //   handleRequest();
  //   // } else {
  //   setProfilePicUrl(link);
  //   // }
  // },[]);

  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
              src={link}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">
            <p>
              I am a BCompSci graduate{" "}
              <a
                href="https://www.uq.edu.au/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                @University of Queensland
              </a>{" "}
              with a strong foundation in cyber security and cryptographic
              algorithms.
            </p>

            <p>
              I'm a full stack developer, currently working with{" "}
              <strong>Javascript</strong> and <strong>Typescript</strong> on the
              React and NextJS framework. I also currently play an active role
              in the world of Web3 and Blockchain development on{" "}
              <a
                href="https://ethereum.org/en/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Ethereum
              </a>{" "}
              and{" "}
              <a
                href="https://solana.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Solana
              </a>
              . I enjoy experimenting with new technology stacks and building
              small projects.
            </p>

            <p>Trading Forex and Cryptocurrency is my side job and hobby.</p>
          </p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
