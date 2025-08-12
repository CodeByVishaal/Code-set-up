import {
  Bootstrap5,
  CSS,
  Django,
  Docker,
  Git,
  HTML5,
  JavaScript,
  PostgreSQL,
  Postman,
  Python,
  React,
  ShadcnUI,
  Swagger,
  TailwindCSS,
  TypeScript,
  ViteJS,
} from "developer-icons";
import Marquee from "../sections/Marquee";

const TechStack = () => {
  return (
    <div>
      <div className="">
        <Marquee
          speed={40}
          pauseOnHover
          className="dark:bg-black dark:text-white text-black bg-white"
        >
          <span></span>
          <span className="text-2xl font-bold px-4">
            <React /> React
          </span>
          <span className="text-2xl font-bold px-4">
            <TypeScript /> TypeScript
          </span>
          <span className="text-2xl font-bold px-4">
            <TailwindCSS /> Tailwind CSS
          </span>
          <span className="text-2xl font-bold px-4">
            <ViteJS /> Vite
          </span>
          <span className="text-2xl font-bold px-4">
            <PostgreSQL /> PostgreSQL
          </span>
          <span className="text-2xl font-bold px-4">
            <Python /> Python
          </span>
          <span className="text-2xl font-bold px-4">
            <Django /> Django
          </span>
          <span className="text-2xl font-bold px-4">
            <JavaScript /> JavaScript
          </span>
          <span className="text-2xl font-bold px-4">
            <HTML5 /> HTML
          </span>
          <span className="text-2xl font-bold px-4">
            <CSS /> CSS
          </span>
          <span className="text-2xl font-bold px-4">
            <Docker /> Docker
          </span>
          <span className="text-2xl font-bold px-4">
            <Bootstrap5 /> Bootstrap
          </span>
          <span className="text-2xl font-bold px-4">
            <Postman /> Postman
          </span>
          <span className="text-2xl font-bold px-4">
            <Swagger /> Swagger
          </span>
          <span className="text-2xl font-bold px-4">
            <Git /> Git
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
