'use client';

import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Headphones
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    setIsSubmitting(true);
    alert("first")
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
alert("scond")
    const data = await res.json();
    alert("third")
    
      if (data.success) {
        alert("final")
        setStatus('Message sent!');
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      } else {
        alert("failure")
        setStatus(`Error: ${data.message}`);
        console.error('API Error:', data);
      }
    } catch (error) {
      alert("catch error")
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setStatus(`Error: ${errorMessage}`);
      console.error('Fetch Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email Us',
      details: 'info@myilon.com',
      subDetails: 'support@myilon.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Call Us',
      details: '+91 12345 67890',
      subDetails: '+91 98765 43210'
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Visit Us',
      details: 'Technology Park, Electronic City',
      subDetails: 'Bangalore, Karnataka 560100'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',
      subDetails: 'Saturday: 9:00 AM - 1:00 PM'
    }
  ];

  const services = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: 'General Inquiry',
      description: 'Have questions about our services? We\'re here to help.',
      action: 'Get in Touch'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Project Consultation',
      description: 'Ready to start a project? Let\'s discuss your requirements.',
      action: 'Schedule a Call'
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-600" />,
      title: 'Technical Support',
      description: 'Need help with an existing project? Our team is ready to assist.',
      action: 'Get Support'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project or have questions about our services? 
              We'd love to hear from you. Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button variant="outline" className="w-full">
                    {service.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-700 hover:bg-blue-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you succeed. Whether you have a question about our services, 
                  need technical support, or want to discuss a new project, don't hesitate to reach out.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-600">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-700">{info.details}</p>
                          {info.subDetails && (
                            <p className="text-gray-600 text-sm">{info.subDetails}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    For urgent matters or immediate support, please call us directly 
                    or email our support team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}