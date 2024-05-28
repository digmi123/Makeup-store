import SettingsOptions from "@/components/SettingsOptions";

export default function SettingsLayout({ children }) {
  return (
    <div className="grid grid-rows-[min-content_auto] justify-items-center">
      <SettingsOptions />
      {children}
    </div>
  );
}
