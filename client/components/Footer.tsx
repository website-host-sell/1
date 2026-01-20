const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--foreground))] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-3">Град Отель</h3>
            <p className="text-sm text-gray-300 mb-4">
              Комфортная гостиница в сердце Череповца
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <strong>Адрес:</strong><br />
                ул. Ломоносова, 19<br />
                Череповец
              </p>
              <p>
                <strong>Телефон:</strong><br />
                <a href="tel:+79315079221" className="hover:text-white transition-colors">
                  +7 (931) 507-92-21
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">Режим работы</h4>
            <p className="text-sm text-gray-300">
              Пн-Вс: 00:00 - 24:00<br />
              <span className="text-xs text-gray-400">Круглосуточное обслуживание</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2024 Град Отель. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
