import LayoutComponent from "@/components/LayoutComponent";
import styles from "@/app/styles/edit.module.css";
import EditForm from "@/components/EditForm";

export default function Edit() {
  return (
    <main className={styles.gridContainer}>
      <EditForm />
      <LayoutComponent />
    </main>
  );
}
