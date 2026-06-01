"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  CreditCard,
  Users,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Subscriber Management",
    },
    {
      icon: CreditCard,
      title: "Automated Billing",
    },
    {
      icon: Wifi,
      title: "Mobile Payments",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-black">
            IBS<span className="text-green-500">TSX</span>
          </h1>

          <button className="bg-green-600 px-5 py-2 rounded-xl">
            Request Demo
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-black"
          >
            Smart ISP
            <span className="block text-green-500">
              Billing Platform
            </span>
          </motion.h1>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto mt-8">
            Manage subscribers, automate billing,
            accept mobile money payments and grow your ISP.
          </p>

          <button className="mt-10 bg-green-600 hover:bg-green-500 px-8 py-4 rounded-xl flex items-center gap-2 mx-auto">
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Everything You Need
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center"
                >
                  <Icon
                    size={40}
                    className="mx-auto text-green-500 mb-4"
                  />

                  <h3 className="font-bold">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-4xl font-black text-green-500">
              50K+
            </h2>
            <p>Subscribers</p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-green-500">
              99.9%
            </h2>
            <p>Uptime</p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-green-500">
              120+
            </h2>
            <p>ISPs</p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-green-500">
              24/7
            </h2>
            <p>Automation</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-gradient-to-r from-green-700 to-green-500 rounded-[40px] p-16 text-center">

            <h2 className="text-5xl font-black">
              Ready To Scale?
            </h2>

            <p className="mt-6 text-green-100">
              Automate billing, payments and subscriber management today.
            </p>

            <button className="mt-8 bg-white text-green-700 px-8 py-4 rounded-xl font-bold">
              Request Demo
            </button>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
        © 2026 IBS TSX • Powered by IKONEX SYSTEMS
      </footer>

    </main>
  );
}