
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <div>Hi there</div>
        {children}
        <div>Bye</div>
      </body>
    </html>
  );
}
