import React from "react";
import styles from "./styles/Test.module.scss"

export function TestComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.varBlock} data-var="--text-color">Text Color</div>
      <div className={styles.varBlock} data-var="--bg">Background</div>
      <div className={styles.varBlock} data-var="--border-color">Border</div>
      <div className={styles.varBlock} data-var="--accent">Accent</div>
      <div className={styles.varBlock} data-var="--accent-hover">Accent Hover</div>
      <div className={styles.varBlock} data-var="--accent-faint">Accent Faint</div>
      <div className={styles.varBlock} data-var="--bg-secondary">Secondary BG</div>
      <div className={styles.varBlock} data-var="--muted">Muted Text</div>
      <div className={styles.varBlock} data-var="--muted-strong">Muted Strong</div>
      <div className={styles.varBlock} data-var="--highlight">Highlight</div>
    </div>
  );
}