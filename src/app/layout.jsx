import {  Outfit, Open_Sans  } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


const outFit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${outFit.variable} ${openSans.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outFit.className} ${openSans.className}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
