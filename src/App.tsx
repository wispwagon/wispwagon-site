import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  Store,
  Users,
  Target,
  ArrowRight,
  Truck,
  Package,
  Star,
  ShieldCheck,
} from "lucide-react";
import Contact from "./components/Contact";
import logo from "./resources/images/logo.png";

function ScrollToSection({ sectionId }: { sectionId: string }) {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/" && location.hash === `#${sectionId}`) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location, sectionId]);

  return null;
}

function Home() {
  const scrollToBusiness = () => {
    const element = document.getElementById("business");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll handlers */}
      <ScrollToSection sectionId="about" />
      <ScrollToSection sectionId="business" />
      <ScrollToSection sectionId="vision" />

      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=2071")',
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                Excellence in E-Commerce
              </h1>
              <p className="text-xl mb-8">
                Connecting quality products directly from producers to consumers
                through innovative e-commerce solutions.
              </p>
              <button
                onClick={scrollToBusiness}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Business Overview */}
      <section id="business" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Business Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
                alt="Business Overview"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Core business & Services
              </h3>
              <p className="text-gray-600 mb-6">
                Our company specializes in e-commerce, primarily selling
                products on Amazon in the U.S. market. By establishing direct
                connections with producers and branding products with our own
                trademark, we deliver unique offerings and maintain a
                competitive market presence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  <span>Quality Assurance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Store className="w-6 h-6 text-blue-600" />
                  <span>Amazon Marketplace Presence</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span>Direct Producer Relationships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Direct Sourcing</h3>
              <p className="text-gray-600">
                Direct partnerships with producers ensuring quality and
                competitive pricing.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Own Branding</h3>
              <p className="text-gray-600">
                Unique products under our trademark for market differentiation.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Excellence</h3>
              <p className="text-gray-600">
                Strong presence in the U.S. Amazon marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg">
                We want Wisp Wagon to be a recognized brand, not just by our
                existing customers but also by potential buyers. More than just
                a name on a product, our brand should represent trust, quality,
                and real value for money
              </p>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Star className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg">
                Our brand offers products that inspire trust. We focus on
                finding and developing high-quality, innovative products that
                bring real value to our customers. We work directly with
                manufacturers to ensure durability and reliability in everything
                we offer. Our goal is to be a brand that people can rely on with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-lg fixed w-full z-10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-xl font-bold text-blue-600">
                <img
                  src={logo}
                  alt="Wispwagon.com"
                  width={80}
                  height={80}
                ></img>
              </Link>
              <div className="space-x-6">
                <Link to="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content with padding for fixed nav */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About Company</h3>
                <p className="text-gray-400">
                  Leading e-commerce solutions provider specializing in Amazon
                  marketplace presence and direct producer relationships.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/#about" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/#business" className="hover:text-white">
                      Business Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/#vision" className="hover:text-white">
                      Vision & Mission
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>info@wispwagon.com</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Wispwagon. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
