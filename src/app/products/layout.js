import Navbar from "@/components/Navbar.jsx";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
