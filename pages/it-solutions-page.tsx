'use client';

import { Code2, Cloud, Zap, Shield } from 'lucide-react';

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
            Transform your business with cutting-edge technology
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-500 text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            Request Demo
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our IT Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Code2,
                title: 'Custom Software Development',
                desc: 'Tailored solutions built to your exact specifications',
                features: [
                  'Web & Mobile Applications',
                  'Enterprise Software',
                  'API Development',
                  'System Integration'
                ]
              },
              {
                icon: Cloud,
                title: 'Cloud Migration',
                desc: 'Seamless transition to cloud infrastructure',
                features: [
                  'AWS, Azure, GCP',
                  'Architecture Design',
                  'Data Migration',
                  'Cost Optimization'
                ]
              },
              {
                icon: Zap,
                title: 'AI/ML Integration',
                desc: 'Leverage artificial intelligence for competitive advantage',
                features: [
                  'Machine Learning Models',
                  'Predictive Analytics',
                  'Natural Language Processing',
                  'Computer Vision'
                ]
              },
              {
                icon: Shield,
                title: 'Digital Transformation',
                desc: 'Modernize legacy systems and processes',
                features: [
                  'Technology Roadmap',
                  'Process Automation',
                  'Legacy System Upgrade',
                  'Change Management'
                ]
              }
            ].map((service, idx) => (
              <div key={idx} className="border rounded-lg p-6 hover:shadow-lg transition">
                <service.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2 text-gray-700">
                  {service.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Process
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Discovery', desc: 'Understand your needs and challenges' },
              { num: '2', title: 'Planning', desc: 'Design architecture and roadmap' },
              { num: '3', title: 'Development', desc: 'Agile development sprints' },
              { num: '4', title: 'Support', desc: 'Ongoing maintenance and optimization' }
            ].map((step) => (
              <div key={step.num} className="text-center">
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

      {/* CTA */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-500 text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
