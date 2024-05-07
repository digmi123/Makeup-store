"use client";

import LayoutComponent from "@/components/LayoutComponent";
import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "@/app/styles/edit.module.css";
import { useRef } from "react";

export default function Edit() {
  const layoutRef = useRef(null);
  const theme = useTheme();

  const handleChange = (event) => {
    const { value, name } = event.target;
    theme.colorElement({ [name]: value }, layoutRef.current);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const colors = {
      "--background-color": event.target["--background-color"].value,
      "--text-color": event.target["--text-color"].value,
    };
    if (!layoutRef.current) return;
    theme.colorElement(colors, layoutRef.current);
  };

  return (
    <main className={styles.gridContainer}>
      <form
        onSubmit={handleSubmit}
        className={styles.colorsBar}
        onChange={handleChange}
      >
        <label>
          background-color
          <input
            type="color"
            name="--background-color"
            defaultValue={theme.currentColors["--background-color"]}
          />
        </label>

        <label>
          text-color
          <input
            type="color"
            name="--text-color"
            defaultValue={theme.currentColors["--text-color"]}
          />
        </label>

        <label>
          text-color
          <input
            type="color"
            name="--text-color"
            defaultValue={theme.currentColors["--text-color"]}
          />
        </label>

        <label>
          text-color
          <input
            type="color"
            name="--text-color"
            defaultValue={theme.currentColors["--text-color"]}
          />
        </label>

        <label>
          text-color
          <input
            type="color"
            name="--text-color"
            defaultValue={theme.currentColors["--text-color"]}
          />
        </label>

        <label>
          text-color
          <input
            type="color"
            name="--text-color"
            defaultValue={theme.currentColors["--text-color"]}
          />
        </label>
        <button>Apply</button>
      </form>

      <LayoutComponent passedRef={layoutRef} />
    </main>
  );
}
