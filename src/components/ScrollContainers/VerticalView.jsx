import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./styles/ScrollableVerticalView.module.scss";
import ProgressBar from "../Widgets/ProgressBar";

export const VerticalScrollSection = ({ Header, children, sticky, narrow,color="bg",index,isFirst,mobile,CustomBgComponent }) => {

  const headerClass = clsx(styles.sectionHeaderContainer, {
    [styles.stickyHeader]: sticky,
    [styles.narrow]: narrow,

  });

  const contentClass = clsx(styles.sectionContent, {
    [styles.narrow]: narrow,
});




  const displaycolor = () => { 
    if (color) { 
      if (color === "bg") return ""
      if (color === "dark" ) return baseTheme["--darkbg"]
      if (color === "accent" ) return 2
    }
    return color
    }
  
  return (
<section 
  className={`${styles.section} ${isFirst && styles.growFirst} ${mobile && styles.desktop}`} 
  style={{ background:displaycolor()}}
>

{/* <h1>tewst {isFirst ? "YES" : " NO" }</h1> */}
    {displaycolor() === "custom" &&  

    <div className={styles.sectionGradContainer}>
      {/* <h1>test</h1> */}
      <CustomBgComponent/>
{/* <TrackedGradientBG/> */}
    </div>}
      <div className={styles.sectionContent}>
      {Header && (
        <div className={headerClass}>
          <div className={`${styles.headerContentContainer} ${mobile&& styles.mobile}`}>
            <Header />
          </div>
        </div>
      )}
      <div className={contentClass}>{children}</div>

      </div>
    </section>
  );
};

export const VerticalScroll = ({
  children,
  trackVelocity = true,
  trackScrollPercent,
  staggerStart = false,
  alignCenter = false,
  padTopForNavDesktop = false,
  padTopForNavMobile = false,
  mobile,
  handleNavTransparency
}) => {
  const scrollRef = useRef(null);
  const [normalizedVelocity, setNormalizedVelocity] = useState(0);
  const [direction, setDirection] = useState("None");
  const [scrollPercent, setScrollPercent] = useState(0);


  const MAX_SCROLL_VELOCITY = 3000;




useEffect(() => {
  // console.log(scrollPerscent)
  if (handleNavTransparency) { 
  if (scrollPercent > 0.4) {
    // console.log("1")
    handleNavTransparency(true);
  } else {
        // console.log("2")
    handleNavTransparency(false);
  }
  }

}, [scrollPercent]);



  useEffect(() => {
    if (!trackVelocity && !trackScrollPercent) return;

    let lastScrollTop = 0;
    let lastTime = performance.now();

    const handleScroll = () => {
      if (!scrollRef.current) return;

      const el = scrollRef.current;
      const scrollTop = el.scrollTop;
      const now = performance.now();
      const deltaY = scrollTop - lastScrollTop;
      const deltaTime = now - lastTime || 1;

      if (trackVelocity) {
        const rawVelocity = (deltaY / deltaTime) * 1000;
        const absVelocity = Math.abs(rawVelocity);
        const clamped = Math.min(absVelocity / MAX_SCROLL_VELOCITY, 1);

        setNormalizedVelocity(clamped.toFixed(2));
        setDirection(deltaY > 0 ? "Down" : deltaY < 0 ? "Up" : "None");
        lastScrollTop = scrollTop;
        lastTime = now;
      }

      if (trackScrollPercent) {
        const scrollHeight = el.scrollHeight - el.clientHeight;
        const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setScrollPercent(Math.min(Math.max(percent, 0), 100).toFixed(1));
      }
    };

    const el = scrollRef.current;
    el?.addEventListener("scroll", handleScroll);

    return () => el?.removeEventListener("scroll", handleScroll);
  }, [trackVelocity, trackScrollPercent]);

 const containerClass = clsx(
  styles.scrollContainer,
mobile && styles.padBottomForMobileFriendliness,
  trackVelocity
    ? styles.scrollContainerVelocity
    : styles.scrollContainerBounce,
  !mobile && padTopForNavDesktop && styles.paddedforNavBarDesktop,
mobile && !padTopForNavMobile && styles.paddedforNavBarMobile,
  alignCenter && styles.alignCenter 
);

const enhancedChildren = React.Children.map(children, (child, index) => {
  if (!React.isValidElement(child)) return child;
const originalSticky = child.props.sticky;
  const isSection = child.type?.name === "Section";
  return isSection
    ? React.cloneElement(child, {
        sticky: originalSticky,
        narrow: child.props.narrow,
        index,
        isFirst: index === 0, 
      })
    : child;
});


  return (
    <div ref={scrollRef} className={containerClass}>
   



      {trackScrollPercent && (
        <div className={styles.progressBarOverlay}>
          <ProgressBar
            lowerBound={0}
            upperBound={100}
            style={"marker"}
            val={scrollPercent}
            mappedtoinput
          />
          {/* <h1>test</h1> */}
          {/* {scrollPercent} */}
        </div>
      )}
      <div 
      className={clsx(
    styles.contentColumn,
    alignCenter && styles.alignCenter
  )}
  >
        {staggerStart && <div className={styles.staggerSpacer} />}
        {enhancedChildren}
      </div>
    
    </div>
  );
};



