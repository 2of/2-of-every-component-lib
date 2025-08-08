import React from "react";
import { useNavigate } from "react-router-dom";
import { useTooltip } from "../../contexts/ToolTipProvider";
import getIcon from "../../utilities/IconProvider";
import styles from "./styles/StandardButton.module.scss";

const VALID_TYPES = [
  "drop",
  "link",
  "text-only",
  "basic_Expand",
  "withlabel",
  "basic_small",
  "article",
];

export const StandardButton = ({
  label = "no label",
  callback,
  type = "drop",
  tooltip,
  link,
  icon,
  disable = false,
  headertitle = "",
  external = false,
  fillContainer = false,
  mobile = false,
}) => {
  const { showTooltip, hideTooltip } = useTooltip();
  const navigate = useNavigate();

  const safeType = VALID_TYPES.includes(type) ? type : "drop";
  const externalIcon = external ? getIcon("external") : null;

  const isMobile = mobile;

  const handleClick = (e) => {
    if (disable) {
      e.preventDefault();
      return;
    }

    if (link) {
      const isExternal = /^https?:\/\//.test(link);
      const isEmail = /^mailto:/.test(link);
      const isEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(link);

      if (isExternal) {
        window.open(link, "_blank");
      } else if (isEmail || isEmailAddress) {
        window.location.href = isEmail ? link : `mailto:${link}`;
      } else {
        navigate(link);
      }
    }

    if (callback) callback();
  };

  const handleMouseMove = (e) => {
    if (!isMobile && !disable && tooltip) {
      showTooltip(tooltip, e);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && !disable) {
      e.preventDefault();
      handleClick(e);
    }
  };

  const getClassName = () => {
    return [
      styles.button,
      styles[safeType] || styles.drop,
      disable && styles.disabled,
      fillContainer && styles.fillContainer,
      isMobile && styles.mobile,
      "standardMouseOverBounce",
    ]
      .filter(Boolean)
      .join(" ");
  };

  const renderContent = () => {
    const Label = label && <span className={styles.label}>{label}</span>;
    const Icon = icon && <span className={styles.icon}>{icon}</span>;
    const Header = headertitle && <span className={styles.headertitle}>{headertitle}</span>;

    switch (safeType) {
      case "text-only":
        return Label;

      case "link":
        return (
          <>
            {Icon}
            {Label}
          </>
        );

      case "basic_Expand":
        return (
          <div className={styles.expandWrapper}>
            {Label}
            {Icon}
          </div>
        );

      case "article":
      case "withlabel":
        return (
          <div className={styles.expandWrapper}>
            {Header}
            {Label}
            {Icon}
          </div>
        );

      case "drop":
      default:
        return (
          <>
            {Label}
            {Icon}
          </>
        );
    }
  };

  return (
    <button
      className={getClassName()}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={hideTooltip}
      onTouchStart={() => {}} // Optionally use for mobile
      onKeyDown={handleKeyDown}
      aria-label={label}
      aria-disabled={disable}
      disabled={disable}
      type="button"
      style={{ position: "relative" }}
    >
      {renderContent()}
      {externalIcon && (
        <span className={styles.externalCornerIcon}>{externalIcon}</span>
      )}
    </button>
  );
};