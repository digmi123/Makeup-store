"use client";
import { useState } from "react";
import styles from "@/app/styles/filterExpand.module.css";

export default function FilterExpand({ label, children }) {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div className={styles.expandContainer}>
      <div className={styles.container} onClick={handleExpand}>
        <p>{label}</p>
        <div>^</div>
      </div>

      <div className={expand ? styles.expanded : styles.notExpanded}>
        {children}
      </div>
    </div>
  );
}
