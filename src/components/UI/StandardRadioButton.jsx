import React, { useState, useEffect, useCallback, useMemo } from "react";
import clsx from "clsx";
import styles from "./styles/StandardRadioButtons.module.scss";
import { useTooltip } from "../../contexts/ToolTipProvider";

export const StandardRadioButtons = ({
  options = [],
  selectedValue,
  onChange,
  label = "",
  layout = "vertical", // 'horizontal' or 'vertical'
  tooltip,
  variant = "default",   // 'default' or 'icon'
}) => {
  const { showTooltip, hideTooltip } = useTooltip();
  const [wigglingValue, setWigglingValue] = useState(null);

  const handleMouseMove = useCallback(
    (e) => {
      if (tooltip) {
        showTooltip(tooltip, e);
      }
    },
    [tooltip, showTooltip]
  );

  const handleChange = useCallback(
    (value) => {
      onChange(value);

      const selectedOption = options.find((opt) => opt.value === value);
      if (variant === "icon" && !selectedOption?.icon) {
        setWigglingValue(value);
      } else {
        setWigglingValue(null);
      }
    },
    [onChange, options, variant]
  );

  useEffect(() => {
    if (wigglingValue !== null) {
      const timeout = setTimeout(() => setWigglingValue(null), 800);
      return () => clearTimeout(timeout);
    }
  }, [wigglingValue]);

  const radioOptions = useMemo(() => {
    return options.map((opt) => {
      const isSelected = selectedValue === opt.value;
      const isWiggling = wigglingValue === opt.value;

      return (
        <label
          key={opt.value}
          className={clsx(styles.radioOption, isSelected && styles.selected)}
          onMouseMove={handleMouseMove}
          onMouseLeave={hideTooltip}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={isSelected}
            onChange={() => handleChange(opt.value)}
            className={variant === "icon" ? styles.invisibleRadio : ""}
          />

          {variant === "icon" ? (
            <span
              className={clsx(styles.iconWrapper, isWiggling && styles.wiggleIcon)}
            >
              {opt.icon || "?"}
            </span>
          ) : (
            <>
              <span className={styles.fakeRadio}></span>
              <span className={styles.optionLabel}>{opt.label}</span>
            </>
          )}
        </label>
      );
    });
  }, [options, selectedValue, wigglingValue, handleChange, handleMouseMove, hideTooltip, name, variant]);

  return (
    <div className={clsx(styles.radioGroup, styles[layout], styles[variant])}>
      {label && <div className={styles.groupLabel}>{label}</div>}
      {radioOptions}
    </div>
  );
};
