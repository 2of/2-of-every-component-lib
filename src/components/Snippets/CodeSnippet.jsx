import React from "react";
import styles from "./styles/Code.module.scss"
import { useState } from "react";
export const SnippetCode = ({
  language = "plaintext",
  content = "",
  className,
  truncatable = false,
  styles
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Split into lines and number them up
  const lines = content.split("\n");

  return (
    <div className={`${styles.codeBlock} ${truncatable ? styles.truncate : ""} ${className} "standardMouseOverBounce"`}>
      <button className={styles.copyButton} onClick={handleCopy}>
        {copied ? "✓ Copied" : "Copy"}
      </button>
      <pre className={styles.pre}>
        {lines.map((line, idx) => (
          <div key={idx} className={styles.line}>
            <span className={styles.lineNumber}>{idx + 1}</span>
            <span className={styles.codeContent}>{line || " "}</span>
          </div>
        ))}
      </pre>
    </div>
  );
};