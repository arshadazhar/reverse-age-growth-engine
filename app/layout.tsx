import type { Metadata } from 'next';
import { Shell } from '../components/shell';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Growth Overview | Reverse Age', template: '%s | Reverse Age' }, description: 'The Reverse Age Coach marketing operations workspace. Frontend demonstration with synthetic data.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><Shell>{children}</Shell></body></html>; }
