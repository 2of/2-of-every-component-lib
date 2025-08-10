import React from "react";
import { useNavigate } from "react-router-dom";
import { useTooltip } from "../../contexts/ToolTipProvider";
import getIcon from "../../utilities/IconProvider";
import styles from "./styles/StandardButton.module.scss";

// Shared wrapper for consistent spacing and layout
const ContentWrapper = ({ children, variantClass }) => (
  <div className={`${styles.expandWrapper}  ${"StandardFlatStyle"} ${"standardMouseOverBounce"} ${variantClass || ""}`.trim()}>
    
    {children}
  </div>
);

const TextButton = ({ label }) => (
  <ContentWrapper variantClass={styles.text}>
    <span className={styles.label}>{label}</span>
  </ContentWrapper>
);

const IconLabelButton = ({ icon, label }) => (
  <ContentWrapper variantClass={styles.iconLabel}>
    {icon && <span className={styles.icon}>{icon}</span>}
    {label && <span className={styles.label}>{label}</span>}
  </ContentWrapper>
);

const LargeButton = ({ label, icon }) => (
  <ContentWrapper variantClass={styles.large}>
    {label && <span className={styles.label}>{label}</span>}
    {icon && <span className={styles.icon}>{icon}</span>}
  </ContentWrapper>
);

const TitledButton = ({ headertitle, label, icon }) => (
  <ContentWrapper variantClass={styles.titled}>
    {headertitle && <span className={styles.headertitle}>{headertitle}</span>}
    {label && <span className={styles.label}>{label}     {icon && <span className={styles.icon}>{icon}</span>} </span>}

  </ContentWrapper>
);

const DefaultButton = ({ label, icon }) => (
  <ContentWrapper variantClass={styles.default}>
    {label && <span className={styles.label}>{label}</span>}
    {icon && <span className={styles.icon}>{icon}</span>}
  </ContentWrapper>
);

const ArticleButton = TitledButton;

const CompactButton = DefaultButton;

const VALID_VARIANTS = [
  "default",
  "iconLabel",
  "text",
  "large",
  "titled",
  "compact",
  "article",
];

export const StandardButton = ({
  label = "no label",
  callback,
  variant = "default",
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

  const safeVariant = VALID_VARIANTS.includes(variant) ? variant : "default";
  const externalIcon = external ? getIcon("external") : null;

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
    if (!mobile && !disable && tooltip) {
      showTooltip(tooltip, e);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && !disable) {
      e.preventDefault();
      handleClick(e);
    }
  };

  const classNames = [
    styles.button,
    disable && styles.disabled,
    fillContainer && styles.fillContainer,
    mobile && styles.mobile,
    "standardMouseOverBounce",
  ]
    .filter(Boolean)
    .join(" ");

  const variantComponents = {
    default: <DefaultButton label={label} icon={icon} />,
    iconLabel: <IconLabelButton icon={icon} label={label} />,
    text: <TextButton label={label} />,
    large: <LargeButton label={label} icon={icon} />,
    titled: <TitledButton headertitle={headertitle} label={label} icon={icon} />,
    article: <ArticleButton headertitle={headertitle} label={label} icon={icon} />,
    compact: <CompactButton label={label} icon={icon} />,
  };

  return (
    <button
      className={classNames}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={hideTooltip}
      onTouchStart={() => {}} // placeholder for mobile
      onKeyDown={handleKeyDown}
      aria-label={label}
      aria-disabled={disable}
      disabled={disable}
      type="button"
      style={{ position: "relative" }}
    >
      {variantComponents[safeVariant]}
      {externalIcon && (
        <span className={styles.externalCornerIcon}>{externalIcon}</span>
      )}
    </button>
  );
};
