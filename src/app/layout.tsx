import type { Metadata } from "next";
import "./global.css";
import { getTitle } from "@/helpers";

export const metadata: Metadata = {
  title: getTitle(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-poppins bg-(--color-based-white) text-(--color-based-black) pt-8 px-12 md:px-24 lg:px-56">
        {children}
      </body>
    </html>
  );
}
