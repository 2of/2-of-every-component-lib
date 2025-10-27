import React from "react";
import getIcon from "./utilities/IconProvider";
import styles from "./SamplePage.module.scss";
import { useState } from "react";
import { useCallback } from "react";
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
import { StandardTextField } from "./components/UI/StandardTextField";
const StandardHeaderDesktop = ({ title, subtitle, icon }) => (
  <div className={styles.StandardHeaderDesktop}>
    <TypeWriterHeader title={title} icon={icon} subtitle={subtitle} />
  </div>
);

export const SamplePage = () => {
  const [selectedRadio, setSelectedRadio] = useState("First");
 const [selectedToggle, setSelectedToggle] = useState(false)
const [defaultField, setDefaultField] = useState("");
const [flatField, setFlatField] = useState("");
const [headerField, setHeaderField] = useState("");
const [withHeaderTextField, setWithHeaderTextField] = useState("");
const handleChange = useCallback((setter) => (value) => {
  setter(value);
}, []);





  return (
    <>
      <VerticalScroll trackScrollPercent staggerStart>
        <VerticalScrollSection sticky
          Header={() => (
            <StandardHeaderDesktop
              title={"This is a the top header"}
              subtitle={"This is the subtitle"}
              icon={getIcon("smile")}
            />
          )}
        >
          <h1>{AllText.headerText}</h1>
            <h3>{AllText.headerDescription}</h3>


            <p>


                {AllText.scrollVerticleExplainer}
            </p>



            <SnippetCode content={AllText.scrollVerticleCode}/>
            <h3>{AllText.tiktokTitle}</h3>


            <p>


                {AllText.tiktokviewExplainer}
            </p>


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
        sticky
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
              label="drop"
              variant="drop"
              icon={getIcon("menu")}
              callback={() => console.log("drop clicked")}
            />

            <StandardButton
              label="link"
              variant="link"
              icon={getIcon("link")}
              link="https://example.com"
              external
            />

            <StandardButton
              label="text-only"
              variant="text-only"
              callback={() => console.log("text-only clicked")}
            />

            <StandardButton
              label="basic_Expand"
              variant="basic_Expand"
              icon={getIcon("search")}
              callback={() => console.log("basic_Expand clicked")}
            />

            <StandardButton
              headertitle="Section Title"
              label="withlabel"
              variant="withlabel"
              icon={getIcon("info")}
              callback={() => console.log("withlabel clicked")}
            />

            <StandardButton
              label="basic_small"
              variant="basic_small"
              icon={getIcon("plus")}
              callback={() => console.log("basic_small clicked")}
            />

            <StandardButton
              headertitle="News"
              label="article"
              variant="article"
              icon={getIcon("article")}
              callback={() => console.log("article clicked")}
            />
            
            <StandardButton
              label="subtle"
              variant="subtle"
              callback={() => console.log("subtle clicked")}
            />

            <StandardButton
              label="rounded"
              variant="rounded"
              icon={getIcon("user")}
              callback={() => console.log("rounded clicked")}
            />

            <StandardButton
              headertitle="Profile"
              label="rounded_label"
              variant="rounded_label"
              icon={getIcon("user")}
              callback={() => console.log("rounded_label clicked")}
            />

            <StandardButton
              label="icon_only"
              variant="icon_only"
              icon={getIcon("settings")}
              callback={() => console.log("icon_only clicked")}
            />

            <StandardButton
              label="featured"
              variant="featured"
              icon={getIcon("star")}
              callback={() => console.log("featured clicked")}
            />
            <CollapsableContainer title="Usage">
              <RenderSample data={ButtonText} />
            </CollapsableContainer>
          </div>
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



  

<StandardTextField
  label="Default Field"
  variant="default"
  defaultValue={defaultField}
  onChange={handleChange(setDefaultField)}
  placeholder="Type something..."
/>

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
