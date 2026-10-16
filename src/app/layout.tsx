import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'ClientOS — Delivery Workspace', description: 'AI-assisted client delivery operating system demo' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
