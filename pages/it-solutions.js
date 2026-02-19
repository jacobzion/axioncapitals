import React from 'react';
import { Code2, Cloud, Zap, Shield, Database, Smartphone, LineChart, Lock } from 'lucide-react';

export default function ITSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Enterprise IT Solutions
          </h1>
          <p className="text-xl mb-8">
            Transform your business with cutting-edge technology and digital innovation
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-500 text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            Request Demo
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our IT Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Custom Software Development */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <Code2 className="w-12 h-12 text-indigo-600 mr-4" />
                <h3 className="text-xl font-bold">Custom Software Development</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Tailored solutions built to your exact specifications and business needs
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Web & Mobile Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Enterprise Software Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>API Development & Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Legacy System Modernization</span>
                </li>
              </ul>
            </div>

            {/* Cloud Migration */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <Cloud className="w-12 h-12 text-indigo-600 mr-4" />
                <h3 className="text-xl font-bold">Cloud Migration & Infrastructure</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Seamless transition to cloud infrastructure with zero downtime
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>AWS, Azure, Google Cloud Platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Cloud Architecture Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Data Migration & Security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Cost Optimization & Monitoring</span>
                </li>
              </ul>
            </div>

            {/* AI/ML Integration */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <Zap className="w-12 h-12 text-indigo-600 mr-4" />
                <h3 className="text-xl font-bold">AI/ML Integration</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Leverage artificial intelligence for competitive advantage and automation
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Machine Learning Models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Predictive Analytics & Forecasting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Natural Language Processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Computer Vision Solutions</span>
                </li>
              </ul>
            </div>

            {/* Digital Transformation */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <Shield className="w-12 h-12 text-indigo-600 mr-4" />
                <h3 className="text-xl font-bold">Digital Transformation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Modernize operations and embrace the digital-first future
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Technology Roadmap Planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Business Process Automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Legacy System Upgrade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Change Management & Training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technologies We Master
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <Database className="w-10 h-10 mx-auto mb-3 text-indigo-600" />
              <h4 className="font-bold mb-2">Backend</h4>
              <p className="text-sm text-gray-600">Node.js, Python, Java, .NET, Go</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <Smartphone className="w-10 h-10 mx-auto mb-3 text-indigo-600" />
              <h4 className="font-bold mb-2">Frontend</h4>
              <p className="text-sm text-gray-600">React, Vue, Angular, Next.js</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <Cloud className="w-10 h-10 mx-auto mb-3 text-indigo-600" />
              <h4 className="font-bold mb-2">Cloud</h4>
              <p className="text-sm text-gray-600">AWS, Azure, GCP, Docker, Kubernetes</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <LineChart className="w-10 h-10 mx-auto mb-3 text-indigo-600" />
              <h4 className="font-bold mb-2">Data & AI</h4>
              <p className="text-sm text-gray-600">TensorFlow, PyTorch, Spark, Tableau</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Development Process
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            {[
              { 
                num: '1', 
                title: 'Discovery', 
                desc: 'Understand your business needs, challenges, and goals through detailed analysis',
                icon: '🔍'
              },
              { 
                num: '2', 
                title: 'Planning', 
                desc: 'Design system architecture, create roadmap, and define project milestones',
                icon: '📋'
              },
              { 
                num: '3', 
                title: 'Development', 
                desc: 'Agile sprints with continuous delivery and regular stakeholder updates',
                icon: '⚙️'
              },
              { 
                num: '4', 
                title: 'Support', 
                desc: 'Ongoing maintenance, monitoring, optimization, and feature enhancements',
                icon: '🚀'
              }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Service Packages
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Assessment Package */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-indigo-500 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">Digital Assessment</h3>
              <div className="text-3xl font-bold text-indigo-600 mb-4">$25K - $50K</div>
              <p className="text-gray-600 mb-6">
                Perfect for businesses starting their digital transformation journey
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Current state analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Technology roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Architecture recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">90-day implementation plan</span>
                </li>
              </ul>
              <a 
                href="/contact"
                className="block w-full text-center bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
              >
                Get Started
              </a>
            </div>

            {/* Transformation Package */}
            <div className="bg-white border-2 border-indigo-500 rounded-lg p-8 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Transformation</h3>
              <div className="text-3xl font-bold text-indigo-600 mb-4">$100K - $500K</div>
              <p className="text-gray-600 mb-6">
                Full-scale digital transformation with dedicated development team
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Custom software development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Cloud migration & setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">System integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">6-12 month engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">3 months post-launch support</span>
                </li>
              </ul>
              <a 
                href="/contact"
                className="block w-full text-center bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
              >
                Get Started
              </a>
            </div>

            {/* Innovation Partner Package */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-indigo-500 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">Innovation Partner</h3>
              <div className="text-3xl font-bold text-indigo-600 mb-4">$500K+/year</div>
              <p className="text-gray-600 mb-6">
                Strategic technology partnership with dedicated resources
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Dedicated development team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Continuous delivery model</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">AI/ML integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Strategic technology advisory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">24/7 priority support</span>
                </li>
              </ul>
              <a 
                href="/contact"
                className="block w-full text-center bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Serve
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-2">Financial Services</h3>
              <p className="text-gray-600">
                Banking, fintech, insurance, and investment platforms
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-gray-600">
                EMR systems, telemedicine, and health analytics
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-2">E-Commerce & Retail</h3>
              <p className="text-gray-600">
                Online marketplaces, inventory management, POS systems
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-gray-600">
                IoT, supply chain optimization, quality control
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Technology & SaaS</h3>
              <p className="text-gray-600">
                Platform development, API services, integrations
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-gray-600">
                LMS, student portals, virtual classrooms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how our technology solutions can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-yellow-500 text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
            >
              Schedule Consultation
            </a>
            <a 
              href="/contact" 
              className="inline-block bg-white text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
