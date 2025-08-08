import React from "react";
import getIcon from "./utilities/IconProvider";
import styles from "./SamplePage.module.scss"
import { TestComponent } from "./components/UI/TestComponent";
import {
  VerticalScroll,
  VerticalScrollSection,
} from "./components/ScrollContainers/VerticalView";
import text from "./data/HowTo.json";
import { TypeWriterHeader } from "./components/Widgets/TypeWriterHeader";
import { StandardButton } from "./components/UI/StandardButton";

const StandardHeaderDesktop = ({ title, subtitle, icon }) => (
  <div className={styles.StandardHeaderDesktop}>
    <TypeWriterHeader title={title} icon={icon} subtitle={subtitle} />
  </div>
);

export const SamplePage = () => {
  return (
    <>
      <VerticalScroll trackScrollPercent>
       <VerticalScrollSection
        Header={() => (
          <StandardHeaderDesktop
            title={"This is a the top header"}
            subtitle={"This is the subtitle"}
            icon={getIcon("smile")}
    
          />
        )}
      >
          {text.items.map((item, index) => {
            if (item.type === "text") {
              return <p key={index}>{item.content}</p>;
            }
            return null;
          })}
        </VerticalScrollSection>

<VerticalScrollSection
        Header={() => (
          <StandardHeaderDesktop
            title={"This is a sample header"}
            subtitle={"This is the subtitle"}
            icon={getIcon("smile")}
    
          />
        )}
      >
          <TestComponent />
        </VerticalScrollSection>

<VerticalScrollSection
        Header={() => (
          <StandardHeaderDesktop
            title={"Buttons and UI elements:"}
            subtitle={"This is the subtitle"}
            icon={getIcon("smile")}
    
          />
        )}
      >
         <StandardButton/>
        </VerticalScrollSection>
      </VerticalScroll>
    </>
  );
};
