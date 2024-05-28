"use client";
import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "@/app/styles/edit.module.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const components = [
  { displayName: "Navbar", cssName: "navbar" },
  { displayName: "Card", cssName: "card" },
  { displayName: "Filter", cssName: "filter" },
];
export default function EditForm() {
  const theme = useTheme();

  const handleChange = (event) => {
    const { value, name } = event.target;
    const editLayout = document.getElementById("edit-layout");
    theme.colorElement({ [name]: value }, editLayout);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const colors = {
      "--background": event.target["--background"].value,
      "--foreground": event.target["--foreground"].value,
    };
    theme.colorElement(colors);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.colorsBar}
      onChange={handleChange}
    >
      <Accordion type="multiple">
        {components.map((item) => {
          return (
            <AccordionItem value={item.displayName} key={item.displayName}>
              <AccordionTrigger className="text-lg">
                {item.displayName}
              </AccordionTrigger>
              <AccordionContent>
                <label className="flex justify-between">
                  background-color
                  <input
                    type="color"
                    name={`--${item.cssName}-background`}
                    defaultValue={theme.currentColors["--background"]}
                  />
                </label>

                <label className="flex justify-between">
                  text-color
                  <input
                    type="color"
                    name={`--${item.cssName}-foreground`}
                    defaultValue={theme.currentColors["--foreground"]}
                  />
                </label>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <button>Apply</button>
    </form>
  );
}
