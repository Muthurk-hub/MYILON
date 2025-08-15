import { ArrowRight, CheckCircle, Users, Award, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      icon: <Zap className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge digital solutions.',
      icon: <Target className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Technology Consulting',
      description: 'Expert guidance to help you make informed technology decisions.',
      icon: <Users className="h-8 w-8 text-blue-600" />,
    },
  ];

  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovative Software
              <span className="text-blue-700 block">Solutions for Your Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Myilon Consultancy Services specializes in delivering cutting-edge software solutions 
              that drive digital transformation and accelerate business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

     

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive software solutions to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Myilon?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We are a team of passionate software professionals dedicated to delivering 
                exceptional results. Our expertise spans across various technologies and industries, 
                ensuring we can tackle any challenge your business faces.
              </p>
              
              <div className="space-y-4">
                {[
                  'Expert team with proven track record',
                  'Agile development methodology',
                  'End-to-end project management',
                  '24/7 support and maintenance',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Quality Assured</h3>
                <p className="text-sm text-gray-600 mt-2">ISO certified processes and quality standards</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Expert Team</h3>
                <p className="text-sm text-gray-600 mt-2">Skilled professionals with industry expertise</p>
              </Card>
              <Card className="p-6 text-center">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">On-Time Delivery</h3>
                <p className="text-sm text-gray-600 mt-2">Committed to meeting project deadlines</p>
              </Card>
              <Card className="p-6 text-center">
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Innovation</h3>
                <p className="text-sm text-gray-600 mt-2">Cutting-edge solutions for modern challenges</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our software solutions can help you achieve your business goals 
            and stay ahead of the competition.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}