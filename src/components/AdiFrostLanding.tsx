"use client";

import React, { useState, useEffect } from 'react'; 
import { ChevronDown, Phone, Mail, MapPin, Star, Menu, X, MessageCircle } from 'lucide-react';

const AdiFrostLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    hero: false,
    about: false,
    products: false,
    // add other section ids if needed
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                ❄️ AdiFrost
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollTo('hero')} className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</button>
              <button onClick={() => scrollTo('about')} className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</button>
              <button onClick={() => scrollTo('products')} className="text-gray-700 hover:text-blue-600 transition-colors">Produk</button>
              <button onClick={() => scrollTo('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button onClick={() => scrollTo('hero')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</button>
                <button onClick={() => scrollTo('about')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</button>
                <button onClick={() => scrollTo('products')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Produk</button>
                <button onClick={() => scrollTo('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-100 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16">
          <div className="mb-8">
            <div className="text-8xl mb-4 animate-bounce">❄️</div>
            <h1 className={`text-5xl md:text-7xl font-bold text-gray-800 mb-6 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Stay Cool with <span className="text-blue-600">AdiFrost</span>
            </h1>
          </div>
          
          <p className={`text-xl md:text-2xl text-gray-600 mb-8 transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Es batu kristal jernih untuk koktail, pesta, dan bisnis Anda
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Pesan Sekarang
            </button>
            <button 
              onClick={() => scrollTo('about')}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Tentang AdiFrost</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AdiFrost adalah produsen es batu premium yang mengutamakan kualitas, kebersihan, dan kejernihan. 
              Setiap es batu diproduksi dengan standar tinggi menggunakan air murni dan teknologi terdepan 
              untuk memberikan pengalaman terbaik bagi pelanggan kami.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Produk Kami</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Es Kubus Standar",
                desc: "Es kubus ukuran standar untuk kebutuhan sehari-hari",
                price: "Mulai Rp 5.000/kg",
                icon: "🧊"
              },
              {
                title: "Es Koktail",
                desc: "Es kubus premium khusus untuk minuman berkelas",
                price: "Mulai Rp 8.000/kg",
                icon: "🍸"
              },
              {
                title: "Es Balok",
                desc: "Es balok besar untuk kebutuhan komersial",
                price: "Mulai Rp 15.000/balok",
                icon: "🧊"
              },
              {
                title: "Custom Order",
                desc: "Pesanan khusus sesuai kebutuhan Anda",
                price: "Harga sesuai pesanan",
                icon: "⭐"
              }
            ].map((product, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4 text-center">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{product.desc}</p>
                <p className="text-blue-600 font-bold text-center text-lg">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Mengapa Pilih AdiFrost?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💎",
                title: "Kristal Jernih",
                desc: "Es batu dengan kejernihan sempurna tanpa gelembung udara"
              },
              {
                icon: "⏱️",
                title: "Tahan Lama",
                desc: "Es yang mencair lebih lambat untuk pengalaman terbaik"
              },
              {
                icon: "🛡️",
                title: "Food Safe",
                desc: "Diproduksi dengan standar keamanan pangan tertinggi"
              },
              {
                icon: "🚚",
                title: "Pengiriman Cepat",
                desc: "Layanan antar cepat dengan kemasan khusus"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Apa Kata Pelanggan</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                business: "Café Blue Moon",
                text: "Es dari AdiFrost benar-benar berkualitas tinggi. Pelanggan saya sangat puas!",
                rating: 5
              },
              {
                name: "Sari Dewi",
                business: "Restoran Nusantara",
                text: "Pengiriman selalu tepat waktu dan kualitas es konsisten. Recommended!",
                rating: 5
              },
              {
                name: "Andi Wijaya",
                business: "Hotel Grand",
                text: "Partner terpercaya untuk kebutuhan es hotel kami. Pelayanan excellent!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-blue-600 text-sm">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Merasakan Es Batu Premium?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Dapatkan penawaran khusus untuk pemesanan pertama Anda!
          </p>
          <button 
            onClick={() => scrollTo('contact')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Hubungi Kami Sekarang
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Telepon</p>
                    <p className="text-gray-600">+62 813-9272-8274</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <p className="text-gray-600">+62 813-9272-8274</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@adifrost.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Lokasi</p>
                    <p className="text-gray-600">Jl. Es Batu No. 123, Jakarta</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
              <div className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nama Lengkap"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Nomor Telepon"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                    <option value="">Pilih Produk</option>
                    <option value="standard">Es Kubus Standar</option>
                    <option value="cocktail">Es Koktail</option>
                    <option value="block">Es Balok</option>
                    <option value="custom">Custom Order</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    rows={4} 
                    placeholder="Pesan atau kebutuhan khusus"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  onClick={() => alert('Terima kasih! Kami akan segera menghubungi Anda.')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">❄️ AdiFrost</div>
              <p className="text-gray-300 mb-4">
                Es batu premium berkualitas tinggi untuk kebutuhan bisnis dan pribadi Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollTo('hero')} className="block text-gray-300 hover:text-white transition-colors">Beranda</button>
                <button onClick={() => scrollTo('about')} className="block text-gray-300 hover:text-white transition-colors">Tentang</button>
                <button onClick={() => scrollTo('products')} className="block text-gray-300 hover:text-white transition-colors">Produk</button>
                <button onClick={() => scrollTo('contact')} className="block text-gray-300 hover:text-white transition-colors">Kontak</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-300">
                <p> +62 813-9272-8274</p>
                <p>info@adifrost.com</p>
                <p>Polanharjo, Indonesia</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2025 AdiFrost – Stay Cool, Stay Fresh</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/6281392728274" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center space-x-2"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="hidden sm:inline">Chat WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default AdiFrostLanding;