
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-emerald-600/95 backdrop-blur-md py-2 shadow-md" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-bold mr-8">
            <span className="bg-white text-emerald-600 rounded-lg p-2">B</span>
            <span className="ml-2">Botzilla</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/#features" className="text-white hover:text-emerald-100 mx-4">
                  Funcionalidades
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/#how-it-works" className="text-white hover:text-emerald-100 mx-4">
                  Como Funciona
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/#pricing" className="text-white hover:text-emerald-100 mx-4">
                  Preços
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/#testimonials" className="text-white hover:text-emerald-100 mx-4">
                  Depoimentos
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button className="ml-4 bg-white text-emerald-600 hover:bg-emerald-50">
            Comece Grátis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-600 p-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/#features" 
              className="text-white hover:text-emerald-100 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link 
              to="/#how-it-works" 
              className="text-white hover:text-emerald-100 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link 
              to="/#pricing" 
              className="text-white hover:text-emerald-100 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Preços
            </Link>
            <Link 
              to="/#testimonials" 
              className="text-white hover:text-emerald-100 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Depoimentos
            </Link>
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 w-full mt-2">
              Comece Grátis
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
