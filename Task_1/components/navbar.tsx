"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
  ]

  const isActive = (path) => pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-amber-900">
              Bean<span className="text-amber-700">brew</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`text-lg ${
                  isActive(route.path) ? "text-amber-700 font-medium" : "text-gray-700 hover:text-amber-700"
                }`}
              >
                {route.name}
              </Link>
            ))}
          </nav>

          {/* Cart Button */}
          <div className="hidden md:block">
            <Button asChild variant="outline">
              <Link href="/menu" className="flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                <span>Cart</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-6 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`text-lg ${isActive(route.path) ? "text-amber-700 font-medium" : "text-gray-700"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {route.name}
                  </Link>
                ))}
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/menu" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    <span>Cart</span>
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

