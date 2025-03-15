import Link from "next/link"
import { Coffee, Users, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(/cafe.jpg)",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Beanbrew</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Where every cup tells a story and every sip is an experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button asChild size="lg"  className="text-white bg-amber-700 hover:bg-amber-800">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Why Choose Beanbrew?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Coffee className="h-10 w-10 text-amber-700" />}
              title="Premium Beans"
              description="We source our beans from sustainable farms around the world, ensuring the highest quality in every cup."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-amber-700" />}
              title="Cozy Atmosphere"
              description="Our café provides the perfect ambiance for work, meetings, or simply relaxing with friends."
            />
            <FeatureCard
              icon={<Menu className="h-10 w-10 text-amber-700" />}
              title="Diverse Menu"
              description="From classic espresso to signature drinks and delicious pastries, there's something for everyone."
            />
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Today's Specials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SpecialCard
              image="\latte.avif"
              title="Vanilla Latte"
              price="$4.00"
              description="Smooth espresso with steamed milk and a hint of vanilla syrup"
            />
            <SpecialCard
              image="/croissant.jpg"
              title="Butter Croissant"
              price="$2.75"
              description="Freshly baked flaky croissant with buttery layers"
            />
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
              <Link href="/menu">See Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The best coffee in town! I come here every morning before work."
              author="Sarah M."
            />
            <TestimonialCard
              quote="Love the atmosphere and the friendly staff. Their pastries are amazing too!"
              author="Michael T."
            />
            <TestimonialCard
              quote="Beanbrew has become my go-to spot for client meetings. Great coffee, reliable Wi-Fi!"
              author="Jessica K."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-amber-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function SpecialCard({ image, title, price, description }) {
  return (
    <div className="flex flex-col md:flex-row bg-amber-50 rounded-lg overflow-hidden shadow-md">
      <div className="md:w-1/2">
        <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-amber-900">{title}</h3>
          <span className="text-lg font-bold text-amber-700">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
        <Button className="mt-4 bg-amber-700 hover:bg-amber-800 w-full">Add to Cart</Button>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, author }) {
  return (
    <div className="bg-amber-800 p-6 rounded-lg">
      <p className="italic mb-4">"{quote}"</p>
      <p className="font-semibold text-amber-200">— {author}</p>
    </div>
  )
}

