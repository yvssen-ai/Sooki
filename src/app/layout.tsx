import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Cinzel } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cinzel = Cinzel({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SOOKI | Legacy. Power. Timeless.',
  description: 'Luxury accessories inspired by the eternal power of Ancient Egypt. Rings, pendants, necklaces and bracelets crafted for the modern elite.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} dark`}>
      <body className="font-body antialiased selection:bg-accent/30 bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
