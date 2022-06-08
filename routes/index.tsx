import { Head, Link } from "aleph/react";

export default function Index() {
  return (
    <div className="screen index">
      <Head>
        <title>Josue Retamozo Vargas</title>
        <meta name="description" content="Portafolio." />
      </Head>
      {/* <p className="logo">
        <img src="/assets/new-logo.svg" width="75" height="75" title="Josue" />
      </p> */}
      <h1>
        Josue Patricio Retamozo Vargas.
      </h1>
      <p>
        Frontend Developer<br />{" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti .
      </p>
      <div className="external-links">
        <a href="https://alephjs.org/docs/get-started" target="_blank">
          Get Started
        </a>
        <a href="https://alephjs.org/docs" target="_blank">
          Docs
        </a>
        <a href="https://github.com/alephjs/aleph.js" target="_blank">
          Github
        </a>
      </div>
      <nav>
        <Link role="button" to="/todos">
          Todos App Demo
        </Link>
      </nav>
    </div>
  );
}
