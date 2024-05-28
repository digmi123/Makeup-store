import styles from "@/app/styles/settingsOptions.module.css";
import Link from "next/link";
import { Button } from "./ui/button";

const options = [
  { key: "custom", text: "Custom website" },
  { key: "edit", text: "Edit profile website" },
  { key: "custom", text: "Custom website" },
  { key: "edit", text: "Edit profile website" },
  { key: "custom", text: "Custom website" },
  { key: "edit", text: "Edit profile website" },
];

export default function SettingsOptions() {
  return (
    <div className={styles.container}>
      {options.map((option, index) => {
        return (
          <Button asChild key={`${option}-${index}`}>
            <Link href={`/settings/${option.key}`}>{option.text}</Link>
          </Button>
        );
      })}
    </div>
  );
}
