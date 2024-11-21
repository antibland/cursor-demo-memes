import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/admin", label: "Admin" },
];

export function Nav() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <h1 className="text-xl font-bold">Your App</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {route.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
