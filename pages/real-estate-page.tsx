'use client';

import { Building2, TrendingUp, Shield, Award } from 'lucide-react';

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            US Real Estate Investment
          </h1>
          <p className="text-xl mb-8">
            Premium property investment opportunities in prime US markets
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            Start Investing
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Invest with Axion
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold mb-2">Premium Properties</h3>
              <p className="text-gray-600">Carefully selected investments</p>
            </div>
            
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold mb-2">Strong Returns</h3>
              <p className="text-gray-600">Proven track record</p>
            </div>
            
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold mb-2">Secure Process</h3>
              <p className="text-gray-600">Full transparency</p>
            </div>
            
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">15+ years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Investment Process
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                num: '1',
                title: 'Initial Consultation',
                desc: 'Discuss your investment goals and budget'
              },
              {
                num: '2',
                title: 'Property Selection',
                desc: 'We present curated investment opportunities'
              },
              {
                num: '3',
                title: 'Due Diligence',
                desc: 'Comprehensive property analysis and verification'
              },
              {
                num: '4',
                title: 'Acquisition',
                desc: 'Smooth closing process with full support'
              },
              {
                num: '5',
                title: 'Management',
                desc: 'Ongoing property management and reporting'
              }
            ].map((step) => (
              <div key={step.num} className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl mb-8">
            Schedule a consultation with our real estate experts
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
