import { WertekLogo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" }
]

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:pl-8 md:pr-14">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <WertekLogo className="h-8 w-auto" />
        </a>

        <nav className="hidden md:flex items-center space-x-7 text-md font-medium">
          {navLinks.map(a => (
            <a
              key={a.label}
              href={a.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {a.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <VisuallyHidden>
                <SheetTitle>Menu</SheetTitle>
              </VisuallyHidden>

              <div className="grid gap-4 p-4">
                <a href="/" className="flex items-center space-x-2 mb-4">
                  <WertekLogo className="h-8 w-auto" />
                </a>
                {navLinks.map(a => (
                  <a
                    key={a.label}
                    href={a.href}
                    className="flex w-full items-center justify-center py-2 text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {a.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
