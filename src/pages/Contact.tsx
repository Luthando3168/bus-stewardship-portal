
import React from 'react';
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/ui/SectionTitle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    // In a real app, this would send the form data to a backend
  };

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Contact Us"
            subtitle="Reach out to discuss how we can help with your financial goals"
            centered
          />

          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-navyblue mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                        <Input id="email" type="email" placeholder="Your email" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input id="subject" placeholder="What is this regarding?" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Please provide details about your inquiry" 
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="bg-gold hover:bg-lightgold text-white w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-navyblue mb-4">Office Location</h3>
                  <p className="mb-2">28 Beacon Avenue, Linbro Park AH</p>
                  <p>Sandton, 2065</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navyblue mb-4">Contact Information</h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Phone:</span>{" "}
                      <a href="tel:+27620193208" className="text-navyblue hover:underline">
                        062 019 3208
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      <a href="mailto:info@luthandoms.co.za" className="text-navyblue hover:underline">
                        info@luthandoms.co.za
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navyblue mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Monday - Friday:</span> 8:30 AM - 5:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> By appointment</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 border rounded-lg overflow-hidden h-96">
              {/* Replace with an actual Google Maps embed in production */}
              <div className="w-full h-full bg-lightgray flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
