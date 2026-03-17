import { CheckoutProvider } from "@/context/CheckoutContext"
import Navbar from "@/components/Navbar"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CheckoutProvider>
          <Navbar />
          {children}
        </CheckoutProvider>
      </body>
    </html>
  )
}
