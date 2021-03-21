import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Button from "../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    title: "Easy to Use",
    imageUrl: "img/Webdev.svg",
    description: (
      <>
        Palette was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    imageUrl: "img/Code.svg",
    description: (
      <>
        Palette lets you focus on your project, and we&apos;ll do the chores. Go
        ahead and install <code>@ak/palette</code> to use Palette library.
      </>
    ),
  },
  {
    title: "Powered by React",
    imageUrl: "img/Design.svg",
    description: (
      <>
      Palette is a React component library which has pre-defined and re-usable 
      react component that you can install and use it right away.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Palette UI Kit`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Palette <span style={{color:'#FFD300'}}>UI Kit</span></h1>
          <p className="hero__subtitle">A <span style={{color:'#FFD300'}}>minimal</span> component library for <span style={{color:'#FFD300'}}>React</span></p>
          <div className={styles.buttons}>
            <Link
              style={{ textDecoration: "none" }}
              to={useBaseUrl("docs/getting-started/Overview")}
            >
              <Button appearance="secondary" size="large">
                <div style={{height:'25px',display:'flex',alignItems:'center'}}>
                Get Started
                <span style={{ padding: "0px 0px 0px 10px", fontSize: "18px" ,color:'#FFD300'}}>
                  <FontAwesomeIcon icon={faRocket} />
                </span>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
