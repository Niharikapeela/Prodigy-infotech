"use client"

import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Menu data
const menuItems = {
  coffee: [
    { id: 1, name: "Espresso", price: 2.5, image: "/Expresso.webp", description: "Strong and pure coffee shot" },
    {
      id: 2,
      name: "Cappuccino",
      price: 3.75,
      image: "/cappuccino.avif",
      description: "Espresso with steamed milk and foam",
    },
    { id: 3, name: "Latte", price: 4.0, image: "/latte.avif", description: "Espresso with lots of steamed milk" },
    {
      id: 4,
      name: "Americano",
      price: 3.0,
      image: "Americano-coffee.jpg",
      description: "Espresso diluted with hot water",
    },
    {
      id: 5,
      name: "Mocha",
      price: 4.5,
      image: "Mocha.jpg",
      description: "Espresso with chocolate and steamed milk",
    },
    {
      id: 6,
      name: "Macchiato",
      price: 3.25,
      image: "/Macchiato.jpg",
      description: "Espresso with a dash of frothy milk",
    },
  ],
  tea: [
    { id: 7, name: "Green Tea", price: 3.0, image: "/Green_tea.webp", description: "Delicate and refreshing" },
    {
      id: 8,
      name: "Earl Grey",
      price: 3.0,
      image: "Earl_Grey_Tea.jpg",
      description: "Black tea with bergamot oil",
    },
    {
      id: 9,
      name: "Chai Latte",
      price: 4.25,
      image: "/Chai-Latteee.jpg",
      description: "Spiced tea with steamed milk",
    },
    {
      id: 10,
      name: "Herbal Infusion",
      price: 3.5,
      image: "/Herbal_Infusion_tea.jpg",
      description: "Caffeine-free herbal blend",
    },
  ],
  pastries: [
    { id: 11, name: "Croissant", price: 2.75, image: "/Croissant.jpg", description: "Buttery, flaky pastry" },
    {
      id: 12,
      name: "Blueberry Muffin",
      price: 3.25,
      image: "/Blueberry_muffin.avif",
      description: "Moist muffin with fresh blueberries",
    },
    {
      id: 13,
      name: "Chocolate Chip Cookie",
      price: 2.5,
      image: "/Chocolate_Chip_Cookie.webp",
      description: "Soft cookie with chocolate chunks",
    },
    {
      id: 14,
      name: "Cinnamon Roll",
      price: 3.75,
      image: "/cinnamon_bun.webp",
      description: "Sweet roll with cinnamon and icing",
    },
  ],
}

export default function MenuPage() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("beanbrew-cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("beanbrew-cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      setCart(
        cart.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)),
      )
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId)
      return
    }

    setCart(cart.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <div className="min-h-screen bg-amber-50 pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Menu.avif')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        />
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our handcrafted beverages and freshly baked pastries
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900">Menu</h2>
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  <span>Cart</span>
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-amber-700">{getTotalItems()}</Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[70vh]">
                    <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="mt-8 space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center border-b pb-4">
                        <div className="flex items-center">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md mr-4"
                          />
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    ))}
                    <div className="pt-4 border-t">
                      <div className="flex justify-between mb-4">
                        <span className="font-medium">Total:</span>
                        <span className="font-bold">${getTotalPrice().toFixed(2)}</span>
                      </div>
                      <Button className="w-full bg-amber-700 hover:bg-amber-800">Checkout</Button>
                    </div>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>

          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="coffee">Coffee</TabsTrigger>
              <TabsTrigger value="tea">Tea</TabsTrigger>
              <TabsTrigger value="pastries">Pastries</TabsTrigger>
            </TabsList>

            {Object.keys(menuItems).map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuItems[category].map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                          <span className="font-bold text-amber-700">${item.price.toFixed(2)}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <Button
                          className="w-full bg-amber-700 hover:bg-amber-800"
                          onClick={() => {
                            addToCart(item)
                            setIsCartOpen(true)
                          }}
                        >
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}

