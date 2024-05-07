import SettingsOptions from "@/components/SettingsOptions";
import styles from "@/app/styles/settingsLayout.module.css";

export default function SettingsLayout({ children }) {
  return (
    <div className={styles.settingsLayout}>
      <SettingsOptions />
      {children}
    </div>
  );
}
