'use client';

import { Button } from '@/components/ui';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">LivingRite Care</h1>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Comprehensive Healthcare Platform
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with our care team, manage your health records, and book appointments all in one place.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/services">
            <Button size="lg">Explore Services</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose LivingRite</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Expert Care Team',
              description: 'Professional healthcare providers dedicated to your wellness',
            },
            {
              title: 'Secure Portal',
              description: 'Safe access to your health records and care updates',
            },
            {
              title: 'Easy Booking',
              description: 'Schedule appointments at your convenience',
            },
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-gray-400">
            © 2024 LivingRite Care. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
