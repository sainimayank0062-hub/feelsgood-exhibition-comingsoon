import { MapPin, Clock, Phone, Calendar, Gift, Star, ShoppingBag, Instagram, Facebook, Wrench, ExternalLink } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import homeDecorImg from "@/assets/home-decor-items.png";
import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Notice Bar */}
      <div className="bg-primary text-primary-foreground py-2.5 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-body">
          <Wrench className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-center">
            <strong>Official Website Under Maintenance</strong> — We're busy at the UNNATII Exhibition! Back online after 14th March.
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="FeelsGood Home Decor" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary/20" />
            <div>
              <h2 className="font-display font-bold text-foreground text-sm sm:text-base leading-tight">FeelsGood</h2>
              <p className="font-display text-xs sm:text-sm text-muted-foreground leading-tight">Home Decor</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-coral/10 text-coral rounded-full text-xs font-body font-semibold border border-coral/20">
              <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
              Maintenance Mode
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/15 rounded-full text-xs font-body text-primary font-medium mb-5">
            <Calendar className="w-3.5 h-3.5" />
            13 & 14 March 2026
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            We're at the <br className="hidden sm:block" />
            <span className="text-gradient">UNNATII Exhibition</span> in Hapur!
          </h1>
          <p className="text-sm sm:text-base font-body text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Our official website is temporarily in maintenance mode while our team showcases the latest summer collections at the exhibition. We'll be back online soon!
          </p>
        </div>

        {/* Countdown */}
        <div className="text-center mb-10">
          <p className="text-[10px] sm:text-xs font-body text-muted-foreground mb-3 uppercase tracking-[0.2em]">Exhibition countdown</p>
          <CountdownTimer />
        </div>

        {/* Main Card */}
        <div className="bg-card rounded-2xl shadow-summer border border-border overflow-hidden mb-8">
          {/* Card Header */}
          <div className="relative bg-gradient-to-r from-primary to-teal px-6 py-5">
            <div className="relative text-center">
              <p className="text-primary-foreground/70 text-xs font-body uppercase tracking-widest mb-1">You're Invited To</p>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-foreground">
                UNNATII Exhibition – Summer Edit Sale
              </h2>
              <p className="text-primary-foreground/80 text-xs font-body mt-1">In collaboration with FeelsGood Home Decor</p>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            {/* Event Details - 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <InfoCard icon={<Calendar className="w-4 h-4 text-coral" />} label="Dates" value="13 & 14 March" sub="Friday & Saturday" />
              <InfoCard icon={<Clock className="w-4 h-4 text-gold" />} label="Timing" value="11 AM – 8 PM" sub="Both Days" />
              <InfoCard icon={<MapPin className="w-4 h-4 text-primary" />} label="Venue" value="Tula Ram Trust" sub="Railway Road, Hapur" />
              <InfoCard icon={<ShoppingBag className="w-4 h-4 text-coral" />} label="Our Stall" value="Stall No. 3" sub="FeelsGood Home Decor" />
            </div>

            {/* Products & Illustration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div className="order-2 sm:order-1">
                <div className="bg-muted/60 rounded-xl p-5 h-full">
                  <h3 className="font-display font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-primary" />
                    Products on Display
                  </h3>
                  <ul className="space-y-2.5 font-body text-sm text-muted-foreground">
                    {["Premium Bedsheets", "Comforters", "Handloom Products", "Stylish Home Decor Items"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-1 sm:order-2 flex items-center justify-center">
                <img
                  src={homeDecorImg}
                  alt="FeelsGood Home Decor collection preview"
                  className="w-full max-w-[260px] animate-float drop-shadow-lg"
                />
              </div>
            </div>

            {/* Special Attractions */}
            <div className="bg-gradient-to-r from-coral/5 via-gold/5 to-primary/5 rounded-xl p-5 border border-coral/10 mb-6">
              <h3 className="font-display font-semibold text-foreground text-sm mb-3 text-center">✨ Special Attractions</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { icon: <Gift className="w-3.5 h-3.5" />, text: "Lucky Draw for Visitors" },
                  { icon: <Star className="w-3.5 h-3.5" />, text: "Exclusive Exhibition Offers" },
                  { icon: <ShoppingBag className="w-3.5 h-3.5" />, text: "Summer Collection Launch" },
                ].map((item) => (
                  <span key={item.text} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card rounded-full text-xs font-body text-foreground border border-border shadow-sm">
                    {item.icon}
                    {item.text}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center space-y-3 pt-2">
              <h3 className="text-lg font-display font-semibold text-foreground">Visit Us at the Exhibition!</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://maps.google.com/?q=Tula+Ram+Trust+Railway+Road+Hapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-body font-bold px-6 py-3 rounded-full shadow-summer hover:opacity-90 transition-all animate-pulse-glow text-sm"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions to Stall No. 3
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="tel:9457384881"
                  className="inline-flex items-center gap-2 bg-card text-foreground font-body font-semibold px-6 py-3 rounded-full border border-border hover:border-primary/30 transition-all text-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  Call: 9457384881
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Website Back Notice */}
        <div className="bg-card rounded-xl border border-border p-5 text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Wrench className="w-4 h-4 text-muted-foreground" />
            <p className="font-display font-semibold text-foreground text-sm">Website Will Be Live Again After the Exhibition</p>
          </div>
          <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-md mx-auto">
            This is the official FeelsGood Home Decor website. We are currently at the UNNATII Exhibition (13–14 March). Our website will resume normal operations after the event. Thank you for your patience! 🙏
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="FeelsGood" className="w-8 h-8 rounded-full object-cover" />
              <span className="font-display text-sm font-semibold text-foreground">FeelsGood Home Decor</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <p className="font-body text-xs text-muted-foreground">
              Meanwhile, we'd love to meet you in person at the exhibition!
            </p>
          </div>
          <p className="text-center text-[10px] text-muted-foreground/50 font-body mt-4">
            © 2026 FeelsGood Home Decor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const InfoCard = ({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub: string }) => (
  <div className="bg-muted/50 rounded-xl p-3.5 border border-border/50">
    <div className="flex items-center gap-2 mb-1">
      {icon}
      <span className="text-[10px] font-body text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
    <p className="text-sm font-body font-bold text-foreground">{value}</p>
    <p className="text-[11px] font-body text-muted-foreground">{sub}</p>
  </div>
);

export default Index;
