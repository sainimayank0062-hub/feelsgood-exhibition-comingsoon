import { MapPin, Clock, Phone, Calendar, Gift, Star, ShoppingBag, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import homeDecorImg from "@/assets/home-decor-items.png";
import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-summer">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={logo}
            alt="FeelsGood Home Decor Logo"
            className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full shadow-summer object-cover mb-6"
          />
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            We're at the{" "}
            <span className="text-gradient">UNNATII Exhibition</span>
            {" "}in Hapur!
          </h1>
          <p className="text-base sm:text-lg font-body text-muted-foreground max-w-xl mx-auto mb-8">
            Our website is temporarily under maintenance while we showcase our latest collections at the exhibition.
          </p>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-sm font-body text-muted-foreground mb-4 uppercase tracking-widest">Event starts in</p>
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Event Details Card */}
      <section className="px-4 pb-12">
        <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-summer border border-border overflow-hidden">
          <div className="bg-primary px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-foreground text-center">
              UNNATII Exhibition – Summer Edit Sale
            </h2>
          </div>

          <div className="p-6 sm:p-8">
            {/* Image */}
            <div className="flex justify-center mb-8">
              <img
                src={homeDecorImg}
                alt="Home decor items - bedsheets, comforters, pillows"
                className="w-full max-w-sm animate-float"
              />
            </div>

            {/* Event Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <InfoCard icon={<Calendar className="w-5 h-5 text-coral" />} label="Dates" value="13 & 14 March (Fri & Sat)" />
              <InfoCard icon={<MapPin className="w-5 h-5 text-primary" />} label="Location" value="Tula Ram Trust, Railway Road, Hapur" />
              <InfoCard icon={<Clock className="w-5 h-5 text-gold" />} label="Timing" value="11:00 AM – 8:00 PM" />
              <InfoCard icon={<ShoppingBag className="w-5 h-5 text-coral" />} label="Find Us" value="FeelsGood Home Decor – Stall No. 3" />
            </div>

            {/* Products & Attractions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted rounded-xl p-5">
                <h3 className="font-display font-semibold text-foreground mb-3">Products Available</h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  {["Premium Bedsheets", "Comforters", "Handloom Products", "Stylish Home Decor Items"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted rounded-xl p-5">
                <h3 className="font-display font-semibold text-foreground mb-3">Special Attractions</h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  {[
                    { icon: <Gift className="w-4 h-4 text-coral" />, text: "Lucky Draw for Visitors" },
                    { icon: <Star className="w-4 h-4 text-gold" />, text: "Exclusive Exhibition Offers" },
                    { icon: <ShoppingBag className="w-4 h-4 text-primary" />, text: "Summer Collection Launch" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-2">
                      {item.icon}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground">Visit Us at the Exhibition</h3>
              <a
                href="https://maps.google.com/?q=Tula+Ram+Trust+Railway+Road+Hapur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-secondary-foreground font-body font-bold px-8 py-3 rounded-full shadow-summer hover:opacity-90 transition-opacity animate-pulse-glow"
              >
                📍 Get Directions – Visit Stall No. 3
              </a>
              <div className="flex items-center justify-center gap-2 text-muted-foreground font-body">
                <Phone className="w-4 h-4" />
                <a href="tel:9457384881" className="hover:text-primary transition-colors">
                  Contact: 9457384881
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 pb-12 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            Our website will be back online soon.<br />
            Meanwhile, we would love to meet you in person at the exhibition!
          </p>
          <p className="font-body text-xs text-muted-foreground/60">
            Website will be live again after the exhibition.
          </p>
          <p className="font-display text-sm text-foreground font-semibold">
            © 2026 FeelsGood Home Decor
          </p>
        </div>
      </footer>
    </div>
  );
};

const InfoCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-3 bg-muted rounded-xl p-4">
    <div className="mt-0.5">{icon}</div>
    <div>
      <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">{label}</p>
      <p className="text-sm font-body font-semibold text-foreground">{value}</p>
    </div>
  </div>
);

export default Index;
