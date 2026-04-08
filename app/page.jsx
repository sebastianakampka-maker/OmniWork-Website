export const metadata = {
  title: "OmniWorks Services",
  description: "Property services in the Rhein-Main area",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
