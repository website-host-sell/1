import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, Star, Globe, ArrowUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(4);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const phrases = [
    'исследовать новые маршруты',
    'создать яркие впечатления',
    'найти комфорт и покой'
  ];

  const hotelPhotos = [
    'https://avatars.mds.yandex.net/get-altay/16403814/2a000001999542ac1b65773f6aff75b83c6b/XXXL',
    'https://avatars.mds.yandex.net/get-altay/16487000/2a000001999542ecfaad3d012af71260ca6a/XXXL',
    'https://avatars.mds.yandex.net/get-altay/16454077/2a0000019995432c382e015fa60db9f3ad8f/XXXL',
    'https://avatars.mds.yandex.net/get-altay/16333276/2a0000019995437115b98d0f1541dd102b31/XXXL',
    'https://avatars.mds.yandex.net/get-altay/9114271/2a00000191c1dc82c25e42ac03e2b3e5f98e/XXXL',
  ];

  const reviews = [
    {
      name: 'Ирина Водопьянова',
      text: 'Отель понравился, удобная парковка со двора. Все на уровне. Номер был двухкомнатный, правда одна комната маленькая была с телескопным телевизором, но мы телевизором не пользуемся, нам норм. Вторая комната шикарная, с двухспальной кроватью...',
      image: 'https://images.unsplash.com/photo-1657152042392-c1f39e52e7c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 5
    },
    {
      name: 'Pinhead',
      text: 'Прекрасная гостиница. Вежливый персонал. Своя парковка. Оплаченный завтрак с подъёмом в номер. Номер громадный двухкомнатный с двуспальной кроватью в одной и полуторной в другой комнате. Санузел раздельный...',
      image: 'https://images.unsplash.com/photo-1585402627084-e80d83061b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 5
    },
    {
      name: 'Аватар',
      text: 'Были в Череповце с 8 по 9 июня, остановились в том отеле, выбрали по отзывам , соответствует!!! От центра относительно недалеко, мы любим ходить, гуляли пешком, замечательно!!! Нам понравилось! Цена, качество, обслуживание!...',
      image: 'https://images.unsplash.com/photo-1761034278072-baa90a7d28d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4
    },
    {
      name: 'Ольга Карманова',
      text: 'Спасибо огромное за гостеприимство. Чувствовала себя как дома. Вкусные завтраки, особое восхищение сырниками. Чисто, аккуратно, персонал добродушный, вежливый, получила ответы на все мои вопросы...',
      image: 'https://images.unsplash.com/photo-1633625576932-348e73c45e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 5
    },
    {
      name: 'Анна Тихомирова',
      text: 'Минусы конечно есть, но плюсы перевешивают. Останавливалась с семьёй на двое суток, номер большой, двухкомнатный. В номере есть все необходимое для комфортного проживания...',
      image: 'https://images.unsplash.com/photo-1714750977930-e7a7f4611257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 5
    }
  ];

  const hours = [
    { day: 'Понедельник', time: '00:00 - 24:00' },
    { day: 'Вторник', time: '00:00 - 24:00' },
    { day: 'Среда', time: '00:00 - 24:00' },
    { day: 'Четверг', time: '00:00 - 24:00' },
    { day: 'Пятница', time: '00:00 - 24:00' },
    { day: 'Суббота', time: '00:00 - 24:00' },
    { day: 'Воскресенье', time: '00:00 - 24:00' },
  ];

  // Typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Header />

      {/* S1 - Hero Section */}
      <section id="s1" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[hsl(var(--foreground))] mb-6 leading-tight">
              Готовы{' '}
              <span className="text-[hsl(var(--primary))]">
                {phrases[typingIndex]}
              </span>
              <span className="animate-pulse ml-2">|</span>
            </h1>
            <p className="text-lg sm:text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              Откройте для себя комфорт и гостеприимство в сердце Череповца
            </p>
          </div>
        </div>
      </section>

      {/* S2 - About Section */}
      <section id="s2" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[hsl(var(--foreground))] mb-16">
            О нас
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-[hsl(var(--border))]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">
                    Гостеприимство и комфорт
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                    Град Отель — современная гостиница, где каждый гость найдёт всё необходимое для комфортного проживания. Просторные номера, вежливый персонал и уютная атмосфера ждут вас.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-[hsl(var(--border))]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">
                    Идеальное расположение
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                    Находимся по адресу: ул. Ломоносова, 19, Череповец. Удобная парковка, рядом достопримечательности и деловые центры. До центра города легко добраться пешком.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-[hsl(var(--border))]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">
                    Круглосуточное обслуживание
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                    Мы работаем 24 часа в сутки, 7 дней в неделю. Завтрак подается в номер, парковка своя, на территории есть всё для вашего удобства.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S3 - Photo Gallery */}
      <section id="s3" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[hsl(var(--foreground))] mb-16">
            Фотографии
          </h2>
          <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Carousel Images */}
            {hotelPhotos.map((photo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === carouselIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <img
                  src={photo}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={() => setCarouselIndex((prev) => (prev - 1 + hotelPhotos.length) % hotelPhotos.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[hsl(var(--primary))] text-[hsl(var(--foreground))] hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCarouselIndex((prev) => (prev + 1) % hotelPhotos.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[hsl(var(--primary))] text-[hsl(var(--foreground))] hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {hotelPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === carouselIndex
                      ? 'w-8 h-3 bg-[hsl(var(--primary))]'
                      : 'w-3 h-3 bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-6 right-6 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-[hsl(var(--foreground))] z-20">
              {carouselIndex + 1} / {hotelPhotos.length}
            </div>
          </div>
        </div>
      </section>

      {/* S4 - Catalog (Rooms) */}
      <section id="s4" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[hsl(var(--foreground))] mb-16">
            Наши номера
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Стандартный номер', price: 'от 3500₽' },
              { name: 'Люкс номер', price: 'от 5500₽' },
              { name: 'Апартаменты', price: 'от 7500₽' },
            ].map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-[hsl(var(--border))] hover:scale-105"
              >
                <div className="relative h-48 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center overflow-hidden">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🏨</div>
                    <p className="text-sm">Комфортные номера</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-2">
                    {room.name}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] mb-4">
                    Просторный номер с удобствами и современным интерьером
                  </p>
                  <div className="text-2xl font-bold text-[hsl(var(--accent))]">
                    {room.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5 - Reviews */}
      <section id="s5" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[hsl(var(--foreground))] mb-16">
            Что говорят наши гости
          </h2>
          <div className="relative overflow-hidden">
            {/* Review Card */}
            <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-[hsl(var(--border))]">
              <div className="flex flex-col items-center text-center">
                <img
                  src={reviews[testimonialIndex].image}
                  alt={reviews[testimonialIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-[hsl(var(--primary))] mb-6"
                />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={`${
                        i < reviews[testimonialIndex].rating
                          ? 'fill-[hsl(var(--accent))] text-[hsl(var(--accent))]'
                          : 'text-[hsl(var(--muted))]'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6 italic">
                  "{reviews[testimonialIndex].text}"
                </p>
                <h4 className="text-xl font-bold text-[hsl(var(--foreground))]">
                  {reviews[testimonialIndex].name}
                </h4>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => setTestimonialIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === testimonialIndex
                        ? 'w-8 h-3 bg-[hsl(var(--primary))]'
                        : 'w-3 h-3 bg-[hsl(var(--muted))]'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % reviews.length)}
                className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* S6 - Stats */}
      <section id="s6" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[hsl(var(--foreground))] mb-4">
            Которым доверяют тысячи людей
          </h2>
          <p className="text-center text-[hsl(var(--muted-foreground))] mb-16 text-lg">
            Мы гордимся отзывами наших гостей
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-[hsl(var(--foreground))] mb-2">
                1914+
              </div>
              <p className="text-[hsl(var(--muted-foreground))]">Довольных клиентов</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-[hsl(var(--foreground))] mb-2">
                174+
              </div>
              <p className="text-[hsl(var(--muted-foreground))]">Отзывов</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-[hsl(var(--foreground))] mb-2">
                4,2★
              </div>
              <p className="text-[hsl(var(--muted-foreground))]">Средняя оценка</p>
            </div>
          </div>
        </div>
      </section>

      {/* S7 - Hours */}
      <section id="s7" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[hsl(var(--foreground))] mb-16">
            Время работы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hours.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-[hsl(var(--border))] hover:shadow-lg transition-shadow flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
                  <span className="text-lg font-semibold text-[hsl(var(--foreground))]">
                    {item.day}
                  </span>
                </div>
                <span className="text-base font-medium text-[hsl(var(--foreground))]">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S8 - Back to Top Button */}
      {scrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Index;
