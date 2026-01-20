import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { label: 'Надпись', href: '#s1' },
    { label: 'О нас', href: '#s2' },
    { label: 'Фотографии', href: '#s3' },
    { label: 'Отзывы', href: '#s5' },
    { label: 'Счетчик', href: '#s6' },
    { label: 'Режим работы', href: '#s7' },
    { label: 'Кнопка вверх', href: '#top' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-[hsl(var(--border))] z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#top" className="text-2xl font-bold text-[hsl(var(--primary))]">
              Град Отель
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+79315079221"
              className="text-sm text-[hsl(var(--primary))] font-semibold hover:underline"
            >
              +7 (931) 507-92-21
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[hsl(var(--foreground))]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+79315079221"
              className="block px-3 py-2 text-sm text-[hsl(var(--primary))] font-semibold"
            >
              +7 (931) 507-92-21
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
