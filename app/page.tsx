"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  CreditCard,
  Users,
  BarChart3,
  ArrowRight,
  Shield,
  Globe,
  Menu,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Subscriber Management",
      description: "Manage customer profiles, packages and subscriptions.",
    },
    {
      icon: CreditCard,
      title: "Automated Billing",
      description: "Generate invoices and collect payments automatically.",
    },
    {
      icon: Wifi,
      title: "Mobile Money",
      description: "Mpamba, Airtel Money and bank integrations.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Powerful reports and business intelligence.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security and role management.",
    },
    {
      icon: Globe,
      title: "Cloud Ready",
      description: "Accessible anywhere with high availability.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-3xl font-black">
            IBS<span className="text-green-500">TSX</span>
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:text-green-400">Features</a>
            <a href="#stats" className="hover:text-green-400">Statistics</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </div>

          <button className="hidden md:block bg-green-600 hover:bg-green-500 transition px-5 py-3 rounded-xl font-semibold">
            Request Demo
          </button>

          <Menu className="md:hidden" />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm">
              Next Generation ISP Management
            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-black leading-tight">
              Smart ISP
              <span className="block text-green-500">
                Billing Platform
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-400 max-w-xl">
              Manage subscribers, automate billing, collect mobile money
              payments and monitor your entire ISP operation from one platform.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-green-600 hover:bg-green-500 px-8 py-4 rounded-xl font-semibold flex items-center gap-2">
                Get Started
                <ArrowRight size={18} />
              </button>

              <button className="border border-slate-700 px-8 py-4 rounded-xl hover:bg-slate-800">
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8"
          >
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-800 rounded-2xl p-6">
                <h4 className="text-slate-400 text-sm">Subscribers</h4>
                <p className="text-3xl font-bold text-green-500">50K+</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h4 className="text-slate-400 text-sm">Revenue</h4>
                <p className="text-3xl font-bold">$245K</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h4 className="text-slate-400 text-sm">Invoices</h4>
                <p className="text-3xl font-bold">1,245</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h4 className="text-slate-400 text-sm">Uptime</h4>
                <p className="text-3xl font-bold text-green-500">99.9%</p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-black">
              Everything You Need
            </h2>
            <p className="text-slate-400 mt-4">
              Powerful tools to run and scale your ISP business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
                >
                  <Icon
                    size={50}
                    className="text-green-500 mb-6"
                  />

                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-24 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

          {[
            ["50K+", "Subscribers"],
            ["99.9%", "Uptime"],
            ["120+", "ISPs"],
            ["24/7", "Automation"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <h2 className="text-5xl font-black text-green-500">
                {value}
              </h2>
              <p className="mt-3 text-slate-400">
                {label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-[40px] bg-gradient-to-r from-green-700 to-green-500 p-16 text-center">

            <h2 className="text-5xl font-black">
              Ready To Scale Your ISP?
            </h2>

            <p className="mt-6 text-green-100 text-lg">
              Automate billing, payments and subscriber management with IBS TSX.
            </p>

            <button className="mt-10 bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
              Request Demo
            </button>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-slate-800 py-16"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-3xl font-black">
              IBS<span className="text-green-500">TSX</span>
            </h3>
            <p className="mt-4 text-slate-400">
              Modern ISP billing and subscriber management platform.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Billing</li>
              <li>CRM</li>
              <li>Reports</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>About</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-slate-400">
              info@ikonexsystems.com
            </p>
            <p className="text-slate-400">
              +265 XXX XXX XXX
            </p>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          © 2026 IBS TSX • Powered by IKONEX SYSTEMS
        </div>
      </footer>

    </main>
  );
}