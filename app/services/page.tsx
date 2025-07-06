import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Shield, 
  BarChart3, 
  Cog,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: 'Custom Software Development',
      description: 'Build tailored software solutions that perfectly fit your business needs and workflows.',
      features: [
        'Desktop Applications',
        'Enterprise Software',
        'Legacy System Modernization',
        'API Development & Integration'
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: 'Web Development',
      description: 'Create stunning, responsive websites and web applications that engage your audience.',
      features: [
        'React & Next.js Applications',
        'E-commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps'
      ]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-600" />,
      title: 'Mobile App Development',
      description: 'Develop native and cross-platform mobile apps for iOS and Android platforms.',
      features: [
        'Native iOS & Android Apps',
        'React Native Solutions',
        'Flutter Development',
        'Mobile App UI/UX Design'
      ]
    },
    {
      icon: <Cloud className="h-12 w-12 text-blue-600" />,
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud and leverage scalable, secure cloud infrastructure.',
      features: [
        'AWS & Azure Migration',
        'Cloud Architecture Design',
        'DevOps & CI/CD',
        'Serverless Solutions'
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-blue-600" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: [
        'Business Intelligence',
        'Data Warehousing',
        'Machine Learning Models',
        'Real-time Analytics'
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and audits.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Security Training'
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with digital solutions and automation.',
      features: [
        'Process Automation',
        'Digital Strategy',
        'Change Management',
        'Technology Roadmaps'
      ]
    },
    {
      icon: <Cog className="h-12 w-12 text-blue-600" />,
      title: 'IT Consulting',
      description: 'Get expert advice on technology decisions and strategic IT planning.',
      features: [
        'Technology Assessment',
        'Architecture Planning',
        'Vendor Selection',
        'IT Strategy Development'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business needs, challenges, and objectives to create a comprehensive project plan.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed designs, wireframes, and technical specifications for your project.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies with continuous testing and quality assurance.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support, maintenance, and updates as needed.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive software development and technology consulting services 
              to help your business succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-700 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We stay current with the latest technologies to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Node.js', 'Python', 'Java', 'AWS', 'Azure',
              'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'Flutter', 'React Native'
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how we can help bring your vision to life.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}