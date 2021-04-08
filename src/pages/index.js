import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { Button, Text } from "../index";

const features = [
  {
    title: "Easy to Use",
    imageUrl: "img/Design.svg",
    description: (
      <Text>
        Palette was designed from the ground up to be easily installed and used
        to get your website up and running quickly.
      </Text>
    ),
  },
  {
    title: "Focus on What Matters",
    imageUrl: "img/Code.svg",
    description: (
      <Text>
        Palette lets you focus on your project, and we&apos;ll do the chores. Go
        ahead and install <code>@ak/palette</code> to use Palette library.
      </Text>
    ),
  },
  {
    title: "Powered by React",
    imageUrl: "img/Webdev.svg",
    description: (
      <Text>
        Palette is a React component library which has pre-defined and re-usable
        react component that you can install and use it right away.
      </Text>
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
      <Text size="xlarge" fontWeight={600}>{title}</Text>
      <Text size="medium">{description}</Text>
    </div>
  );
}

function Home() {
  return (
    <Layout
      title={`Palette UI Kit`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.mainHeaderContainer}>
        <div className={styles.headerIntroText}>
          <div className={styles.headerIntro}>
            <img style={{width:'40px',height:'40px',paddingRight:'5px'}} src={useBaseUrl('img/logo.svg')} alt='logo-svg' />
            <Text className={styles.palLogoName} fontWeight={600} paddingTop={7} size="xxxlarge">
              Palette Design System
            </Text>
          </div>
          <Text size="large" paddingTop={5} paddingBottom={15}>
            A minimal component library and design system <br /> for React 🔥
          </Text>
          <div style={{ display: "flex" }}>
            <Button
              onClick={() =>
                (window.location.href = "docs/getting-started/overview")
              }
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                
              <Text color='white'>Get Started</Text>
              </div>
            </Button>
            <span style={{ paddingLeft: "5px" }}></span>
            <Button
              appearance="secondary"
              onClick={() => {
                window.open("https://github.com/akshay9677/palette");
              }}
              type="default"
            >
              <Text>Github</Text>
              <img
                style={{
                  width: "16px",
                  height: "16px",
                  paddingLeft: "5px",
                }}
                src={useBaseUrl("img/github.svg")}
                alt="github-svg"
              />
            </Button>
          </div>
        </div>
        <img
          className={styles.headerDesignSvg}
          src={useBaseUrl("img/Landing_page.svg")}
          alt={"header-svg"}
        />
      </div>
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
