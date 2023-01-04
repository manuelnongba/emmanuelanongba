import "./Home.css";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <div className="about">
        I am a Software Engineer well-versed in JavaScript. I like to use React,
        Redux, NodeJS(Express) and MongoDB whenever I am working on a project. I
        love writing readable and reusable code. Oh , I also try to solve
        leetcode problems for fun 😀.
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807373/me_btepdb.png"
          alt="my bitmoji"
        />
      </div>
      <div className="stack">
        <div className="stack-header">languages and libraries</div>
        <div className="stack-images images">
          <div className="deep-purple">
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807355/js_tyv6zl.svg"
              alt="javascript"
            />
            <p>JavaScript</p>
          </div>
          <div className="light-purple">
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807375/react_gncl47.svg"
              alt="react"
            />
            <p>React</p>
          </div>
          <div className="deep-purple">
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807318/express_kxywhw.svg"
              alt="express js"
            />
          </div>
          <div className="light-purple">
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807373/mongodb_orsdge.svg"
              alt="mongo"
            />
            <p>MongoDB</p>
          </div>
          <div className="deep-purple">
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807324/html5_z63blp.svg"
              alt="html5"
            />
          </div>
          <div className="light-purple">
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807374/python_gk277n.svg"
              alt="postman"
            />
            <p>Python</p>
          </div>
          <div className="deep-purple">
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807373/nodejs_twitbd.svg"
              alt="node js"
            />
            <p>NodeJS</p>
          </div>
          <div className="light-purple">
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807312/css3_sue5t6.svg"
              alt="css"
            />
            <p>CSS3</p>
          </div>
          <div className="deep-purple">
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807375/redux_ojxku6.svg"
              alt="redux"
            />
            <p>Redux</p>
          </div>
        </div>
      </div>
      <div className="images-contact">
        <a href="https://github.com/manuelnongba">
          <span>github</span>
          <img
            src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807319/github_kkd7de.svg"
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/emmanuel-anongba-92469019b/">
          <span>linkedin</span>
          <img
            src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807372/linkedin_jrn0k1.svg"
            alt="linked in"
          />
        </a>
        <a href="https://twitter.com/eacodesimba">
          <span>twitter</span>
          <img
            src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807377/twitter_dwvspp.svg"
            alt="twitter"
          />
        </a>
        <a href="https://dev.to/manuelnongba">
          <span>devto</span>
          <img
            src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807314/devto_xmqavx.svg"
            alt="dev"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default Home;