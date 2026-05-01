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

type ServiceCategory = 'software' | 'accounts' | 'painting';

type ServiceItem = {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
};

type CategoryConfig = {
  heading: string;
  description: string;
  services: ServiceItem[];
};

export default async function Services({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const categoryConfig: Record<ServiceCategory, CategoryConfig> = {
    software: {
      heading: 'Software Services',
      description:
        'End-to-end software services to build, modernize, and scale digital products for your business.',
      services: [
        {
          icon: <Code className="h-12 w-12 text-blue-600" />,
          title: 'Custom Software Development',
          description:
            'Build tailored software solutions that match your unique business workflows.',
          features: [
            'Desktop Applications',
            'Enterprise Software',
            'Legacy System Modernization',
            'API Development & Integration',
          ],
        },
        {
          icon: <Globe className="h-12 w-12 text-blue-600" />,
          title: 'Web Application Development',
          description:
            'Create responsive websites and web apps designed for performance and growth.',
          features: [
            'React & Next.js Applications',
            'E-commerce Solutions',
            'Content Management Systems',
            'Progressive Web Apps',
          ],
        },
        {
          icon: <Smartphone className="h-12 w-12 text-blue-600" />,
          title: 'Mobile App Development',
          description:
            'Develop high-quality native and cross-platform mobile apps for iOS and Android.',
          features: [
            'Native iOS & Android Apps',
            'React Native Solutions',
            'Flutter Development',
            'Mobile App UI/UX Design',
          ],
        },
      ],
    },
    accounts: {
      heading: 'Accounts Services',
      description:
        'Reliable accounting and finance support to keep your operations compliant and decision-ready.',
      services: [
        {
          icon: <Database className="h-12 w-12 text-blue-600" />,
          title: 'Bookkeeping & Ledger Management',
          description:
            'Maintain clean and accurate financial records with structured bookkeeping workflows.',
          features: [
            'Daily Transaction Recording',
            'Ledger Reconciliation',
            'Month-end Closing',
            'Financial Record Organization',
          ],
        },
        {
          icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
          title: 'Financial Reporting',
          description:
            'Generate clear reports that help you track business health and improve planning.',
          features: [
            'Profit & Loss Statements',
            'Balance Sheet Reports',
            'Cash Flow Analysis',
            'Management Reporting',
          ],
        },
        {
          icon: <Shield className="h-12 w-12 text-blue-600" />,
          title: 'Tax & Compliance Support',
          description:
            'Stay compliant with timely filings and process checks across your accounts function.',
          features: [
            'Tax Preparation Support',
            'Compliance Documentation',
            'Audit Assistance',
            'Regulatory Checklist Management',
          ],
        },
      ],
    },
    painting: {
      heading: 'Painting Services',
      description:
        'Professional painting services for homes and offices with a focus on finish, durability, and style.',
      services: [
        {
          icon: <Cloud className="h-12 w-12 text-blue-600" />,
          title: 'Interior Painting',
          description:
            'Refresh and transform indoor spaces with smooth finishes and color guidance.',
          features: [
            'Wall & Ceiling Painting',
            'Color Consultation',
            'Surface Preparation',
            'Protective Coating',
          ],
        },
        {
          icon: <Cog className="h-12 w-12 text-blue-600" />,
          title: 'Exterior Painting',
          description:
            'Durable exterior painting solutions designed to withstand weather and wear.',
          features: [
            'Weather-resistant Paints',
            'Facade Restoration',
            'Primer & Sealing',
            'Long-lasting Finish',
          ],
        },
        {
          icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
          title: 'Commercial Painting',
          description:
            'Efficient painting services for offices, stores, and commercial buildings.',
          features: [
            'Office & Retail Painting',
            'Minimal Downtime Execution',
            'Large-area Coverage',
            'Quality Inspection & Cleanup',
          ],
        },
      ],
    },
  };

  const selectedCategory = (resolvedSearchParams?.category || '').toLowerCase();
  const isValidCategory = ['software', 'accounts', 'painting'].includes(selectedCategory);
  const activeCategory = isValidCategory ? (selectedCategory as ServiceCategory) : null;

  const activeCategoryConfig = activeCategory ? categoryConfig[activeCategory] : null;

  const services = activeCategoryConfig
    ? activeCategoryConfig.services
    : [
        ...categoryConfig.software.services,
        ...categoryConfig.accounts.services,
        ...categoryConfig.painting.services,
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
              {activeCategoryConfig ? activeCategoryConfig.heading : 'Our Services'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeCategoryConfig
                ? activeCategoryConfig.description
                : 'Explore software, accounts, and painting services tailored to your business and personal needs.'}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/services?category=software"
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === 'software'
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                Software
              </Link>
              <Link
                href="/services?category=accounts"
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === 'accounts'
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                Accounts
              </Link>
              <Link
                href="/services?category=painting"
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === 'painting'
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                Painting
              </Link>
            </div>
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