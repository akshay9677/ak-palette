import React, { useState } from "react";
import Container from "ui-box";
import ComponentCard from "./ComponentCard";
import { Text, Input } from "../index";
import styles from "./styles.module.css";
import Layout from "@theme/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import EmptyState from "./components/EmptyState";
import { isEmpty } from "../utils/validations";

const COMPONENT_HASH = [
  {
    img: "components/accordian.svg",
    name: "Accordion",
  },
  {
    img: "components/alert.svg",
    name: "Alert",
  },
  {
    img: "components/avatar.svg",
    name: "Avatar",
  },
  {
    img: "components/badge.svg",
    name: "Badge",
  },
  {
    img: "components/button.svg",
    name: "Button",
  },
  {
    img: "components/card.svg",
    name: "Card",
  },
  {
    img: "components/checkbox.svg",
    name: "Checkbox",
  },
  {
    img: "components/datepicker.svg",
    name: "DatePicker",
  },
  {
    img: "components/input.svg",
    name: "Input",
  },
  {
    img: "components/modal.svg",
    name: "Modal",
  },
  {
    img: "components/pagination.svg",
    name: "Pagination",
  },
  {
    img: "components/popover.svg",
    name: "Popover",
  },
  {
    img: "components/radio.svg",
    name: "Radio",
  },
  {
    img: "components/select.svg",
    name: "Select",
  },
  {
    img: "components/sidesheet.svg",
    name: "Sidesheet",
  },
  {
    img: "components/spinner.svg",
    name: "Spinner",
  },
  {
    img: "components/tab.svg",
    name: "Tab",
  },
  {
    img: "components/table.svg",
    name: "Table",
  },
  {
    img: "components/textarea.svg",
    name: "Textarea",
  },
  {
    img: "components/timepicker.svg",
    name: "Timepicker",
  },
  {
    img: "components/toaster.svg",
    name: "Toast",
  },
  {
    img: "components/tooltip.svg",
    name: "Tooltip",
  },
];

const ComponentList = () => {
  const [componentsList, setComponentsList] = useState(COMPONENT_HASH);
  const [searchText, setSearchText] = useState("");
  return (
    <Layout
      title={`Palette UI Kit`}
      description="Description will go into a meta tag in <head />"
    >
      <Container className={styles.componentList}>
        <Container className={styles.componentHeader}>
          <Text fontWeight={700} paddingTop={20} size="xxxlarge">
            Components
          </Text>
          <Text paddingY={3} size="medium">
            Components are the reusable building blocks of our design system.
            Each component meets a specific interaction or UI need, and has been
            specifically created to work together to create patterns and
            intuitive user experiences.
          </Text>
          <Container marginTop={20} width="100%">
            <Input
              value={searchText}
              onChange={(e) => {
                let value = e.target.value;
                setSearchText(value);
                if (value === "") {
                  setComponentsList(COMPONENT_HASH);
                } else {
                  setComponentsList(
                    COMPONENT_HASH.filter((comp) => {
                      let name = comp.name;
                      name = name.toLowerCase();
                      return name.startsWith(value.toLowerCase());
                    })
                  );
                }
              }}
              prefix={
                <div style={{ color: "#888" }}>
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              }
              placeholder="Search components by name"
              width="100%"
            />
          </Container>
        </Container>
        <Container
          display="flex"
          justifyContent="center"
          padding={15}
          flexWrap="wrap"
        >
          {!isEmpty(componentsList) ? (
            componentsList.map((component, index) => {
              return (
                <ComponentCard
                  key={index}
                  img={component.img}
                  summary={component.summary}
                  name={component.name}
                />
              );
            })
          ) : (
            <EmptyState
              primaryText="No components were found"
              secondaryText="Seems like we are beaten off track, clear the search text."
            />
          )}
        </Container>
      </Container>
    </Layout>
  );
};

export default ComponentList;
