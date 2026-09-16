import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Wifi, 
  Smartphone, 
  Globe, 
  Server, 
  Zap, 
  Headphones, 
  ShieldCheck, 
  Download, 
  Upload, 
  Star, 
  Clock, 
  Check, 
  ArrowRight, 
  Sparkles,
  Award,
  Search,
  User,
  ShoppingCart
} from 'lucide-react';
import ayitiLogo from '@/assets/ayiti.png';
import GovernmentFooter from '@/components/layout/GovernmentFooter';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  // Countdown timer state
  const [countdown, setCountdown] = useState({
    days: '01',
    hours: '04',
    minutes: '31',
    seconds: '28'
  });

  // Mock search results - replace with actual product data
  const allProducts = [
    { name: 'Internet 50 Mbps', category: 'Internet', price: '€29.99/mo' },
    { name: 'Internet 200 Mbps', category: 'Internet', price: '€39.99/mo' },
    { name: 'Internet 1000 Mbps', category: 'Internet', price: '€59.99/mo' },
    { name: 'Mobile Starter 5GB', category: 'Mobile', price: '€15/mo' },
    { name: 'Mobile Pro 20GB', category: 'Mobile', price: '€25/mo' },
    { name: 'Mobile Unlimited', category: 'Mobile', price: '€35/mo' },
    { name: 'iPhone 15 Pro', category: 'Devices', price: '€999' },
    { name: 'Samsung Galaxy S24', category: 'Devices', price: '€849' },
    { name: 'Domain Registration', category: 'Business', price: 'From €9.99/year' },
    { name: 'Web Hosting', category: 'Business', price: 'From €4.99/mo' },
    { name: 'Cloud Servers', category: 'Business', price: 'From €19.99/mo' },
  ];

  const searchResults = searchQuery.trim() 
    ? allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const deadline = new Date('2025-10-26T23:59:59');
    const pad = (n: number) => String(n).padStart(2, '0');
    
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, deadline.getTime() - now.getTime());
      
      setCountdown({
        days: pad(Math.floor(diff / 86400000)),
        hours: pad(Math.floor(diff / 3600000) % 24),
        minutes: pad(Math.floor(diff / 60000) % 60),
        seconds: pad(Math.floor(diff / 1000) % 60)
      });
    };
    
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Top Bar - Consumer/Business */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 h-8 text-xs font-medium">
            <a href="#" className="hover:text-white/80 transition-colors">Consumer</a>
            <a href="#" className="hover:text-white/80 transition-colors">Business</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed top-8 left-0 right-0 z-10 transition-all duration-250 ${
          navScrolled
            ? 'bg-white shadow-md border-b border-border'
            : 'bg-white/95 backdrop-blur-sm border-b border-border/50'
        }`}
      >
        <div className="container mx-auto py-3 px-4 flex items-center justify-between gap-4">
          {/* Logo and Search Bar */}
          <div className="flex items-center gap-4">
            <a href="/portal" className="inline-block flex-shrink-0">
              <img src={ayitiLogo} alt="ayiti.io" className="h-8 transition-transform duration-300 hover:scale-105" />
            </a>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for internet, mobile plans, devices, domains..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchResults(true);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                  className="w-96 pl-10 pr-4 py-2 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Search Results Dropdown */}
              {showSearchResults && searchQuery.trim() && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                  <div className="p-2">
                    {searchResults.length > 0 ? (
                      <>
                        <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">
                          Search results for "{searchQuery}"
                        </div>
                        {searchResults.map((product, index) => (
                          <a
                            key={index}
                            href="#"
                            className="flex items-center justify-between px-3 py-2 hover:bg-muted rounded-md transition-colors"
                          >
                            <div>
                              <div className="font-medium text-sm">{product.name}</div>
                              <div className="text-xs text-muted-foreground">{product.category}</div>
                            </div>
                            <div className="text-sm font-semibold text-primary">{product.price}</div>
                          </a>
                        ))}
                      </>
                    ) : (
                      <div className="px-3 py-4 text-sm text-muted-foreground text-center">
                        No products found for "{searchQuery}"
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Icons: Shopping Cart, Login, Support */}
          <div className="flex items-center gap-1">
            <a href="#" className="p-2 rounded-full hover:bg-accent transition-colors group flex-shrink-0 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="hidden lg:inline text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Cart</span>
            </a>
            
            <a href="/login" className="p-2 rounded-full hover:bg-accent transition-colors group flex-shrink-0 flex items-center gap-2">
              <User className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="hidden lg:inline text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Login</span>
            </a>
            
            <a href="#" className="p-2 rounded-full hover:bg-accent transition-colors group flex-shrink-0 flex items-center gap-2">
              <Headphones className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="hidden lg:inline text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Support</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Page offset for fixed navbar (top bar + main nav) */}
      <div className="h-24" />


      {/* Quick Navigation Tiles */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Wifi, title: 'Internet', subtitle: 'High-speed fiber', href: '#internet' },
              { icon: Smartphone, title: 'Mobile', subtitle: 'Best phone deals', href: '#mobile' },
              { icon: Globe, title: 'Domains', subtitle: 'Register your domain', href: '#domains' },
              { icon: Server, title: 'Hosting', subtitle: 'Reliable servers', href: '#hosting' }
            ].map((tile) => (
              <a 
                key={tile.title}
                href={tile.href}
                className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
              >
                <Card className="p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <tile.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-1">{tile.title}</h3>
                  <p className="text-sm text-muted-foreground">{tile.subtitle}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <GovernmentFooter />
    </div>
  );
}
