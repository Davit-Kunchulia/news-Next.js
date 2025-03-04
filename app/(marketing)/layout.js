import "../globals.css";

export const metadata = {
  title: "NextNews",
  description: "News app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
