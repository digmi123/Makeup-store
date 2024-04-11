import styles from "@/app/styles/settingsOptions.module.css";
import Link from "next/link";

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
          <Link
            key={index}
            className={styles.linkOption}
            href={`/settings/${option.key}`}
          >
            {option.text}
          </Link>
        );
      })}
    </div>
  );
}
