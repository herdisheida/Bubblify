import { CheckoutProvider } from "@/context/CheckoutContext"
import Navbar from "@/components/Navbar"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CheckoutProvider>
      {children}
    </CheckoutProvider>
  )
}
