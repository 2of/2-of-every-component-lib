import React, { useState } from "react";
import styles from "./styles/CollapsableSection.module.scss";
import getIcon from "../../utilities/IconProvider";

export const CollapsableContainer = ({
  title,
  children,
  defaultOpen = true,
  buttons = [],
  useStandardStyle = true,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.collapsableSection} ${useStandardStyle ? "StandardFlatStyle" : ""}`}>
      <div className={styles.collapsableHeaderContainer}>
        <div
          className={styles.collapsableHeader}
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          aria-expanded={isOpen}
        >
          <h3>{title}</h3>
          <div className={styles.collapsableButtons}>
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  button.callback();
                }}
                aria-label={button.label}
                className="standardMouseOverBounce"
              >
                {button.label}
              </button>
            ))}

           <span
  className={styles.iconRotate}
  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
>
  {getIcon("down")}
</span>
          </div>
        </div>
      </div>

      {isOpen && <div className={styles.collapsableContent}>{children}</div>}
    </div>
  );
};