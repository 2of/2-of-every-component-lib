import React, { useState, useCallback, useEffect } from "react";
import styles from "./styles/StandardTextField.module.scss";

const variantConfig = {
  default: { className: styles.default, inputType: "text", multiline: false, rows: 4, autoComplete: "off", supportsHeaderText: false },
  flat: { className: styles.flat, inputType: "text", multiline: false, rows: 4, autoComplete: "off", supportsHeaderText: false },
  header: { className: styles.header, inputType: "text", multiline: false, rows: 4, autoComplete: "off", supportsHeaderText: false },
  textarea: { className: styles.default, inputType: "text", multiline: true, rows: 6, autoComplete: "off", supportsHeaderText: false },
  withHeaderText: { className: styles.headerWithText, inputType: "text", multiline: false, rows: 4, autoComplete: "off", supportsHeaderText: true },
};

export const StandardTextField = React.memo(({
  label,
  headerText,
  name = "textfield",
  variant = "default",
  value = "",
  onChange,
  placeholder,
}) => {
  const config = variantConfig[variant] || variantConfig.default;
  
  // Keep internal state synced with value prop to handle controlled input
  const [localValue, setLocalValue] = useState(value);

  // Update internal state if parent changes the value prop
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange?.(newValue);
  }, [onChange]);

  return (
    <div className={styles.container}>
      {config.supportsHeaderText && headerText && (
        <div className={styles.headerText}>{headerText}</div>
      )}

      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}

      {config.multiline ? (
        <textarea
          id={name}
          name={name}
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
          rows={config.rows}
          className={`${styles.baseField} ${config.className}`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={config.inputType}
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete={config.autoComplete}
          className={`${styles.baseField} ${config.className}`}
        />
      )}
    </div>
  );
});
