import { CartProvider } from "@/context/CartContext"
import Navbar from "@/components/Navbar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <CartProvider>
          <div className="max-w-4xl mx-auto my-10">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  )
}