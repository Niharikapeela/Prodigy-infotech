import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">
                Bean<span className="text-amber-300">brew</span>
              </span>
            </Link>
            <p className="text-amber-100 mb-4">Where every cup tells a story and every sip is an experience.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-amber-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-amber-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-amber-100 hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-100 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-200">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-200" />
                <span className="text-amber-100">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-amber-200" />
                <span className="text-amber-100">info@beanbrew.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-amber-200" />
                <span className="text-amber-100">
                  123 Coffee Street
                  <br />
                  Beanville, BC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-200">Hours</h3>
            <ul className="space-y-2">
              <li className="text-amber-100">
                <span className="font-medium">Mon-Fri:</span> 6:30 AM - 8:00 PM
              </li>
              <li className="text-amber-100">
                <span className="font-medium">Saturday:</span> 7:00 AM - 9:00 PM
              </li>
              <li className="text-amber-100">
                <span className="font-medium">Sunday:</span> 7:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} Beanbrew Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

