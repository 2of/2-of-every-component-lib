import React from "react";
import getIcon from "./utilities/IconProvider";
import styles from "./SamplePage.module.scss";
import { useState } from "react";
import { TestComponent } from "./components/UI/TestComponent";
import {
  VerticalScroll,
  VerticalScrollSection,
} from "./components/ScrollContainers/VerticalView";
import text from "./data/HowTo.json";
import { TypeWriterHeader } from "./components/Widgets/TypeWriterHeader";
import { StandardButton } from "./components/UI/StandardButton";
import ButtonText from "./data/Button.json";
import AllText from "./data/SamplePage.json";
import RadioText from "./data/Radio.json";

import { RenderSample } from "./components/Widgets/RenderSample";
import { CollapsableContainer } from "./components/UI/CollapsableContainer";
import { StandardRadioButtons } from "./components/UI/StandardRadioButton";
import { SnippetCode } from "./components/Snippets/CodeSnippet";
import PageDots from "./components/Widgets/PageDotIndicator";

import img1 from "./assets/thumb.png";
import img2 from "./assets/thumbColour.png";
import FeatherRevealImage from "./components/Widgets/FeatheredImageBlend";
import GlassPushOverlay from "./components/Widgets/GlassContainer";
import ImageModal from "./components/UI/ImageModal";
import StandardToggle from "./components/UI/StandardToggle";
import { DarkModeWrapper } from "./components/Wrappers/DarkModeToggleWrapper";
const StandardHeaderDesktop = ({ title, subtitle, icon }) => (
  <div className={styles.StandardHeaderDesktop}>
    <TypeWriterHeader title={title} icon={icon} subtitle={subtitle} />
  </div>
);

export const SamplePage = () => {
  const [selectedRadio, setSelectedRadio] = useState("First");
 const [selectedToggle, setSelectedToggle] = useState(false)
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
          <h1>Sample page for UIkit below</h1>
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
              title={"Basic UI Lib Items:"}
              subtitle={"Current Theme"}
              icon={getIcon("tasks")}
            />
          )}
        >
          <p> Themes are injected via the ThemeProvider</p>
          <SnippetCode content={AllText.themeCodeInjectorExample} />

          <p>
            {" "}
            Themes are redefined by overriding the values in
            src/styles/Themes.jsx
          </p>
          <SnippetCode content={AllText.themeCodeBaseExample} />

          <TestComponent />
        </VerticalScrollSection>

       <VerticalScrollSection
          Header={() => (
            <StandardHeaderDesktop
              title={"Toggles"}
              subtitle={"We have fun"}
              icon={getIcon("moon")}
            />
          )}
        >
<div className={styles.flexArea}>
      <StandardToggle
  type="pill"
  checked={selectedToggle}
  callback={() => setSelectedToggle(prev => !prev)}
/>
    <StandardToggle

  checked={selectedToggle}
  callback={() => setSelectedToggle(prev => !prev)}
/>



      <StandardToggle
  type="pill"
  checked={selectedToggle}
  firsticon={getIcon("sun")}
    secondicon={getIcon("moon")}
  callback={() => setSelectedToggle(prev => !prev)}
/>
    <StandardToggle
  firsticon={getIcon("sun")}
    secondicon={getIcon("moon")}
  checked={selectedToggle}
  callback={() => setSelectedToggle(prev => !prev)}
/>


</div>

We can also wrap toggles to use global contexts i.e.



<DarkModeWrapper/>

        </VerticalScrollSection>
        <VerticalScrollSection
          Header={() => (
            <StandardHeaderDesktop
              title={"Buttons"}
              subtitle={"This is the subtitle"}
              icon={getIcon("tasks")}
            />
          )}
        >
          <div className={styles.flexArea}>
            <StandardButton
              label="Default Drop"
              variant="drop"
              icon={getIcon("menu")}
              callback={() => console.log("Drop clicked")}
            />

            {/* link */}
            <StandardButton
              label="Go to Docs"
              variant="iconLabel"
              icon={getIcon("link")}
              link="https://react.dev"
              external
            />

            {/* text-only */}
            <StandardButton
              label="Just Text"
              variant="text"
              callback={() => console.log("Text button clicked")}
            />

            {/* basic_Expand */}
            <StandardButton
              label="Large Button"
              variant="large"
              icon={getIcon("chess")}
              callback={() => console.log("Basic Expand clicked")}
            />

            {/* withlabel */}
            <StandardButton
              headertitle="Section Title"
              label="Click Me"
              variant="withlabel"
              icon={getIcon("chevronRight")}
              callback={() => console.log("With Label clicked")}
            />

            {/* basic_small */}
            <StandardButton
              label="Small Action"
              variant="compact"
              icon={getIcon("plus")}
              callback={() => console.log("Basic Small clicked")}
            />

            {/* article */}
            <StandardButton
              headertitle="Breaking News"
              label="Read More"
              variant="article"
              icon={getIcon("article")}
              callback={() => console.log("Article clicked")}
            />

            <CollapsableContainer title="Usage">
              <RenderSample data={ButtonText} />
            </CollapsableContainer>
          </div>
        </VerticalScrollSection>

        <VerticalScrollSection
          Header={() => (
            <StandardHeaderDesktop
              title={"Radio Buttons"}
              subtitle={"This is the subtitle"}
              icon={getIcon("radio")}
            />
          )}
        >
          <div className={styles.flexArea}>
            <StandardRadioButtons
              label="Model"
              options={[
                { label: "Hello", value: "Hello" },
                { label: "There", value: "There" },
                { label: "Labels independant to values", value: "Person" },
              ]}
              selectedValue={selectedRadio}
              onChange={setSelectedRadio}
              layout="vertical"
              tooltip="Choose the model type"
            />

            <StandardRadioButtons
              label="Model"
              options={[
                { label: "Hello", value: "Hello" },
                { label: "There", value: "There" },
                { label: "Labels independant to values", value: "Person" },
              ]}
              selectedValue={selectedRadio}
              onChange={setSelectedRadio}
              layout="horizontal"
              tooltip="Choose the model type"
            />
            <h2> {selectedRadio} </h2>
            <CollapsableContainer title="Radio Usage">
              <RenderSample data={RadioText} />
            </CollapsableContainer>
          </div>
        </VerticalScrollSection>
        <VerticalScrollSection
          Header={() => (
            <StandardHeaderDesktop
              title={"Image Handle"}
              subtitle={"React poratal.. get's it's own mention"}
              icon={getIcon("radio")}
            />
          )}
        >
          <ImageModal
            src={img1}
            alt={"people at a table playing chess or osmething"}
          />
          <p>{AllText.imageModalDesc}</p>
          <SnippetCode content={AllText.imageModalCode}/>


                      <div className={styles.averageContainer}>
        <ImageModal
            src={img1}
            alt={"people at a table playing chess or osmething"}
          />
            </div>
        </VerticalScrollSection>
        <VerticalScrollSection
          Header={() => (
            <StandardHeaderDesktop
              title={"Miscellaneous"}
              subtitle={"Odds and ends"}
              icon={getIcon("radio")}
            />
          )}
        >
          <div>
            <h2>Page Indicator</h2>
            <div className={styles.smallcontainer}>
              <PageDots n_dots={3} />
            </div>
            <SnippetCode content={AllText["pageDots-JSX"]} />

            <SnippetCode content={AllText["pageDots-Sample-Usage"]} />
          </div>

          <div>
            <h2> Glass Component</h2>

            <GlassPushOverlay>
              <div className={styles.imgContainer}>
                <img src={img2} />
              </div>
            </GlassPushOverlay>
            <p>{AllText["glassdesc"]}</p>
            <SnippetCode content={AllText["glass-Sample-Usage"]} />
          </div>

          <div>
            <h2> Image Feather Blend </h2>

            <FeatherRevealImage
              BaseImage={img1}
              RevealedImage={img2}
              radius={120}
            />
            <p>{AllText["featherdesc"]}</p>
            <SnippetCode content={AllText["featherUsageExample"]} />
          </div>
        </VerticalScrollSection>
      </VerticalScroll>
    </>
  );
};
