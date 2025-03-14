// components/BuyOrSell.tsx
import { ShoppingCart, DollarSign } from "lucide-react";
import Link from "next/link";

export default function BuyOrSell() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800">
            Would you like to buy or sell digital assets?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Sell Card */}
          <div
            className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                I want to sell digital assets
              </h3>

              <p className="text-gray-600 mb-6 text-center">
                List your digital assets on our secure marketplace. We support
                various tokens and digital currencies with competitive rates.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3">
                    •
                  </div>
                  <p className="text-gray-700">
                    Secure transactions with escrow protection
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3">
                    •
                  </div>
                  <p className="text-gray-700">Competitive market rates</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3">
                    •
                  </div>
                  <p className="text-gray-700">
                    Fast processing and settlement
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center mt-auto">
                <Link
                  href="/sell-companies"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center font-medium w-full sm:w-auto"
                >
                  <ShoppingCart size={18} className="inline mr-2" /> Sell assets
                </Link>

                <p className="mt-6 text-gray-600 text-sm text-center">
                  Our team will guide you through the secure selling process.
                </p>
              </div>
            </div>
          </div>

          {/* Buy Card */}
          <div
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl transition-shadow"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                I want to buy digital assets
              </h3>

              <p className="text-gray-600 mb-6 text-center">
                Purchase digital assets through our verified marketplace. We
                offer a wide selection of tokens with transparent pricing.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-purple-500 mr-3">
                    •
                  </div>
                  <p className="text-gray-700">KYC-verified sellers only</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-purple-500 mr-3">
                    •
                  </div>
                  <p className="text-gray-700">Multiple payment options</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-purple-500 mr-3">
                    •
                  </div>
                  <p className="text-gray-700">
                    Real-time market price updates
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center mt-auto">
                <Link
                  href="/buy-companies"
                  className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition flex items-center justify-center font-medium w-full sm:w-auto"
                >
                  <DollarSign size={18} className="inline mr-2" /> Buy assets
                </Link>

                <p className="mt-6 text-gray-600 text-sm text-center">
                  Join thousands of satisfied customers trading with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
