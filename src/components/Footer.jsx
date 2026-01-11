import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              @bigwebyusuf
            </h2>
            <p className="text-sm leading-relaxed">
              Premium fashion crafted with precision.  
              Elevate your everyday style with AceStitch.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-medium mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/collections/all" className="hover:text-white transition">All Products</a></li>
              <li><a href="/collections/new-arrivals" className="hover:text-white transition">New Arrivals</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-medium mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/pages/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/pages/refund-policy" className="hover:text-white transition">Refund Policy</a></li>
              <li><a href="/pages/terms-of-service" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Mumbai, Maharashtra, India</li>
              <li>
                <a href="tel:+917877547301" className="hover:text-white transition">
                  +91 96891 52934
                </a>
              </li>
              <li>
                <a href="mailto:support@acestitch.com" className="hover:text-white transition">
                  support@bigwebyusuf.store
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} @bigwebyusuf. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
