
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/ui/SectionTitle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast.success("Message sent! We'll get back to you shortly.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
                        <Input 
                          id="name" 
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                      <Input 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input 
                        id="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your inquiry" 
                        rows={5}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="bg-gold hover:bg-lightgold text-white w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
