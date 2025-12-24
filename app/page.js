import Image from "next/image";
import Features from "@/components/Features";
import AddProductForm from "@/components/AddProductForm";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { TrendingDown } from "lucide-react";
import { getProducts } from "./actions";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const products = user ? await getProducts() : [];
  const FEATURES = [
    {
      id: "fast-tracking",
      icon: "zap",
      title: "Real-Time Price Tracking",
      description:
        "Monitor product prices continuously in real time, even on dynamic and frequently changing e-commerce pages.",
    },
    {
      id: "smart-alerts",
      icon: "bell",
      title: "Instant Price Drop Alerts",
      description:
        "Receive instant notifications the moment a price drops below your target so you can buy at the perfect time.",
    },
    {
      id: "multi-store",
      icon: "globe",
      title: "Multi-Store Coverage",
      description:
        "Track products across multiple major online stores from a single, easy-to-use dashboard.",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-14 sm:h-16 flex justify-between items-center">
          {/* Logo */}
          <div className="relative h-10 w-28 sm:h-12 sm:w-36 md:h-14 md:w-40">
            <Image
              src="/cost-radar-logo.png"
              alt="Cost Radar Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Auth Button */}
          <AuthButton user={user} />
        </div>
      </header>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Creator badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-medium text-orange-700 mb-6">
            Built with 🧡 by aviiishk
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-5">
            Never Miss a <span className="text-orange-500">Price Drop</span>
          </h2>

          {/* Subheadline */}
          <p className="mx-auto max-w-xl sm:max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-2">
            Track product prices across major e-commerce platforms and receive
            instant alerts the moment prices fall—so you always buy at the right
            time.
          </p>
          {/* Add Product Form */}
          <AddProductForm user={user} />

          {/* When No Products added */}
          {products.length === 0 && (
            <section className="max-w-2xl mx-auto px-4 pb-4 mt-8 text-center">
              <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12">
                <TrendingDown className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products yet
                </h3>
                <p className="text-gray-600">
                  Start by adding a product URL above to track its price.
                </p>
              </div>
            </section>
          )}

          {/* When  Products available */}
          {user && products.length > 0 && (
            <section className="max-w-7xl mx-auto px-4 pb-20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Your Tracked Products</h3>
                <span className="text-sm text-gray-500">
                  {products.length} {products.length === 1 ? "product" : "products"}
                </span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 items-start">
              {
                products.map((product)=>(
                  <ProductCard key={product.id} product={product} />
                ))
              }
              </div>

            </section>
          )}

          {/* Features Section */}
          <Features features={FEATURES} />
        </div>
      </section>
    </main>
  );
}
