import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: 'Fluko - Intelligent Meme Token Generation Platform',
  description: 'An intelligent Meme token generation and analysis platform based on Fluxus Stream Processing Engine and Sui blockchain.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} font-sans`}>
      <body className="min-h-screen bg-gradient-to-br from-background-start-rgb to-background-end-rgb">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
