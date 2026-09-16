import { ArrowLeft, MessageCircle, Phone, Mail, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const Support = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-muted-foreground">+509 1234-5678</p>
            <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 8AM-5PM</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-muted-foreground">support@ayiti.io</p>
            <p className="text-xs text-muted-foreground mt-1">Response within 24hrs</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/faq")}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">FAQs</h3>
            <p className="text-sm text-muted-foreground">Quick answers</p>
            <p className="text-xs text-muted-foreground mt-1">Self-service help</p>
          </Card>
        </div>

        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Contact Support</h1>
          </div>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+509" />
              </div>
              <div>
                <Label htmlFor="category">Category *</Label>
                <select id="category" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                  <option>Select a category</option>
                  <option>Technical Issue</option>
                  <option>Document Request</option>
                  <option>Payment Issue</option>
                  <option>Account Access</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="subject">Subject *</Label>
              <Input id="subject" placeholder="Brief description of your issue" />
            </div>

            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea 
                id="message" 
                placeholder="Please provide details about your inquiry..."
                rows={6}
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Submit Request
              </Button>
              <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default Support;