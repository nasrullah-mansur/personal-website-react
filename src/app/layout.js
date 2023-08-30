

import '../styles/globals.scss';
import { themeInfo } from '@/data/navbar';

export const metadata = {
  title: themeInfo?.title,
  description: themeInfo?.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
