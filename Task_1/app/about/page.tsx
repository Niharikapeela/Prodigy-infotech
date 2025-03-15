import { Coffee, Leaf, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/aboutus.jpg!d')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        />
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            The journey behind Beanbrew and our passion for coffee
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-amber-900">How It All Started</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-gray-700 mb-4">
                  Beanbrew was born from a simple passion for exceptional coffee. Our founder, Emma, spent years
                  traveling the world, exploring coffee cultures from Ethiopia to Colombia, learning from local farmers
                  and master roasters.
                </p>
                <p className="text-gray-700 mb-4">
                  In 2015, she returned home with a dream: to create a space where coffee wasn't just a caffeine fix,
                  but an experience to be savored and shared. A place where the story behind each bean was as important
                  as the flavor in your cup.
                </p>
                <p className="text-gray-700">
                  What started as a small corner shop has grown into the Beanbrew you know today - but our commitment to
                  quality, sustainability, and community remains unchanged.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/Designer.jpeg"
                  alt="Beanbrew founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ValueCard
              icon={<Coffee className="h-10 w-10 text-amber-700" />}
              title="Quality First"
              description="We never compromise on quality. From bean selection to brewing techniques, excellence is our standard."
            />
            <ValueCard
              icon={<Leaf className="h-10 w-10 text-amber-700" />}
              title="Sustainability"
              description="We're committed to ethical sourcing, fair trade practices, and reducing our environmental footprint."
            />
            <ValueCard
              icon={<Heart className="h-10 w-10 text-amber-700" />}
              title="Community"
              description="We believe in creating spaces where people connect, share ideas, and build relationships."
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="Niharika Peela"
              role="Founder & Head Barista"
            />
            <TeamMember image="/placeholder.svg?height=400&width=400" name="Vishwa Teja" role="Master Roaster" />
            <TeamMember image="/placeholder.svg?height=400&width=400" name="Rishika" role="Pastry Chef" />
            <TeamMember image="/placeholder.svg?height=400&width=400" name="Gayathri" role="Café Manager" />
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Us Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'd love to share our passion for coffee with you. Stop by, say hello, and experience the Beanbrew
            difference.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p className="mb-2">Monday - Friday: 6:30 AM - 8:00 PM</p>
              <p className="mb-2">Saturday: 7:00 AM - 9:00 PM</p>
              <p>Sunday: 7:00 AM - 6:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="mb-2">123 Coffee Street</p>
              <p className="mb-2">Beanville, BC 12345</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-amber-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TeamMember({ image, name, role }) {
  return (
    <div className="text-center">
      <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-amber-900">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}

