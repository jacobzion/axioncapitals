import React from 'react';
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
              <div className="flex justify-center mb-4">
                <Building2 className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Premium Properties</h3>
              <p className="text-gray-600">Carefully selected investments</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Strong Returns</h3>
              <p className="text-gray-600">Proven track record</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Secure Process</h3>
              <p className="text-gray-600">Full transparency</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-blue-600" />
              </div>
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

      {/* Service Packages */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Investment Packages
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Foundation Package */}
            <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">Foundation</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$500K - $1M</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Single property investment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Full due diligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Property management (1 year)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Quarterly reports</span>
                </li>
              </ul>
              <a 
                href="/contact"
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Learn More
              </a>
            </div>

            {/* Portfolio Package */}
            <div className="border-2 border-blue-500 rounded-lg p-8 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$1M - $5M</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Diversified 3-5 properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Enhanced due diligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Dedicated asset manager</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Monthly reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Tax optimization</span>
                </li>
              </ul>
              <a 
                href="/contact"
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Learn More
              </a>
            </div>

            {/* Elite Package */}
            <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">Elite</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$5M+</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Custom portfolio (5+ properties)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Priority deal access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Dedicated relationship manager</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Weekly updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Comprehensive tax planning</span>
                </li>
              </ul>
              <a 
                href="/contact"
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Prime US Markets
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">New York City</h3>
              <p className="text-gray-600 mb-4">
                Manhattan, Brooklyn premium properties with strong appreciation potential
              </p>
              <div className="text-sm text-gray-500">
                <div>Average ROI: 8-12%</div>
                <div>Market Type: High-growth</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">San Francisco Bay Area</h3>
              <p className="text-gray-600 mb-4">
                Tech hub with consistent demand and long-term value growth
              </p>
              <div className="text-sm text-gray-500">
                <div>Average ROI: 7-10%</div>
                <div>Market Type: Stable growth</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Miami</h3>
              <p className="text-gray-600 mb-4">
                Emerging luxury market with strong international appeal
              </p>
              <div className="text-sm text-gray-500">
                <div>Average ROI: 9-14%</div>
                <div>Market Type: Emerging</div>
              </div>
            </div>
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
            Schedule a consultation with our real estate experts today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
            >
              Schedule Consultation
            </a>
            <a 
              href="/contact" 
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
