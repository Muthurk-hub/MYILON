import { Code, Smartphone, Globe, Database, Cloud, Shield, BarChart3, Cog, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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

export default async function CategoryServices({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const category = resolvedParams.category?.toLowerCase() as ServiceCategory;
  const config = categoryConfig[category];

  if (!config) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{config.heading}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{config.description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
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

      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
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
