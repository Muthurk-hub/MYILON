import { Code2, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Myilon Consultancy Services  Pvt Ltd</span>
                
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading software consultancy providing innovative solutions for businesses. 
              We specialize in custom software development, digital transformation, and technology consulting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">info@myilon.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">+91 12345 67890</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  1st floor,PSM complex<br />
                  Tamilnadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Myilon Consultancy Services Private Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}