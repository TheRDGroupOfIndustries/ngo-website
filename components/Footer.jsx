// pages/index.js or app/page.js (depending on your Next.js version)
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [membershipForm, setMembershipForm] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: 'basic',
    message: ''
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleMembershipSubmit = (e) => {
    e.preventDefault();
    console.log('Membership form submitted:', membershipForm);
    // Handle form submission logic here
    alert('Membership application submitted successfully!');
    setMembershipForm({
      name: '',
      email: '',
      phone: '',
      membershipType: 'basic',
      message: ''
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle form submission logic here
    alert('Contact form submitted successfully!');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterEmail);
    alert('Successfully subscribed to newsletter!');
    setNewsletterEmail('');
  };

  return (
    <>
      <Head>
        <title>Membership & Contact - RD Group</title>
        <meta name="description" content="Join our membership program and get in touch with us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">


        {/* Main Content */}
        <main>
          {/* Membership Section */}
         <section id="membership" className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">हमारी सदस्यता में शामिल हों</h2>
      <p className="text-lg text-gray-600">सदस्य बनें और विशेष लाभ उठाएं</p>
    </div>

    <div className="bg-gray-50 rounded-lg p-8">
      <form onSubmit={handleMembershipSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="member-name" className="block text-sm font-medium text-gray-700 mb-2">
              पूरा नाम *
            </label>
            <input
              type="text"
              id="member-name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              value={membershipForm.name}
              onChange={(e) => setMembershipForm({ ...membershipForm, name: e.target.value })}
              placeholder="अपना पूरा नाम दर्ज करें"
            />
          </div>

          <div>
            <label htmlFor="member-email" className="block text-sm font-medium text-gray-700 mb-2">
              ईमेल पता *
            </label>
            <input
              type="email"
              id="member-email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              value={membershipForm.email}
              onChange={(e) => setMembershipForm({ ...membershipForm, email: e.target.value })}
              placeholder="अपना ईमेल दर्ज करें"
            />
          </div>

          <div>
            <label htmlFor="member-phone" className="block text-sm font-medium text-gray-700 mb-2">
              फोन नंबर *
            </label>
            <input
              type="tel"
              id="member-phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              value={membershipForm.phone}
              onChange={(e) => setMembershipForm({ ...membershipForm, phone: e.target.value })}
              placeholder="अपना फोन नंबर दर्ज करें"
            />
          </div>

          <div>
            <label htmlFor="membership-type" className="block text-sm font-medium text-gray-700 mb-2">
              सदस्यता प्रकार *
            </label>
            <select
              id="membership-type"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              value={membershipForm.membershipType}
              onChange={(e) => setMembershipForm({ ...membershipForm, membershipType: e.target.value })}
            >
              <option value="basic">बेसिक सदस्यता</option>
              <option value="premium">प्रीमियम सदस्यता</option>
              <option value="corporate">कॉर्पोरेट सदस्यता</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="member-message" className="block text-sm font-medium text-gray-700 mb-2">
            अतिरिक्त संदेश
          </label>
          <textarea
            id="member-message"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            value={membershipForm.message}
            onChange={(e) => setMembershipForm({ ...membershipForm, message: e.target.value })}
            placeholder="कोई अतिरिक्त जानकारी या प्रश्न..."
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors duration-200"
          >
            सदस्यता आवेदन जमा करें
          </button>
        </div>
      </form>
    </div>
  </div>
</section>


          {/* Contact Section */}
          <section id="contact" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">संपर्क करें</h2>
                <p className="text-lg text-gray-600">किसी भी पूछताछ के लिए हमसे संपर्क करें</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">हमें एक संदेश भेजें</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                        नाम *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="आपका नाम"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                         ईमेल *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="आपका ईमेल"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-2">
                        विषय *
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        placeholder="अपने संदेश का विषय"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                         संदेश *
                      </label>
                      <textarea
                        id="contact-message"
                        rows="5"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="आपका संदेश..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors duration-200"
                    >
                       संदेश भेजें
                    </button>
                  </form>
                </div>

                {/* Map and Contact Info */}
                <div className="space-y-8">
                  {/* Google Map */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-64 bg-gray-200 relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844697932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1635784892123!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                      ></iframe>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">संपर्क जानकारी</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 text-orange-500 mt-1">
                          <svg fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">पता</p>
                          <p className="text-sm text-gray-600">K-57/125, नवापुरा, वाराणसी, उत्तर प्रदेश</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 text-orange-500 mt-1">
                          <svg fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">फोन</p>
                          <p className="text-sm text-gray-600">+919086345xx2</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 text-orange-500 mt-1">
                          <svg fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">ईमेल</p>
                          <p className="text-sm text-gray-600">example@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="col-span-1 md:col-span-2">
                <div className="text-2xl font-bold text-gray-900 mb-4">LOGO</div>
                <form onSubmit={handleNewsletterSubmit} className="flex max-w-md">
                  <input
                    type="email"
                    required
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="न्यूज़लेटर के लिए सब्सक्राइब करें"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-2 rounded-r-md font-medium hover:bg-orange-600 transition-colors duration-200"
                  >
                    सब्सक्राइब करें
                  </button>
                </form>

              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  त्वरित लिंक
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                      हमारे बारे में
                    </a>
                  </li>
                  <li>
                    <a href="#news" className="text-gray-600 hover:text-gray-900 transition-colors">
                      समाचार
                    </a>
                  </li>
                  <li>
                    <a href="#publications" className="text-gray-600 hover:text-gray-900 transition-colors">
                      हमारे प्रकाशन
                    </a>
                  </li>
                  <li>
                    <a href="#members" className="text-gray-600 hover:text-gray-900 transition-colors">
                      हमारे सदस्य
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" className="text-gray-600 hover:text-gray-900 transition-colors">
                      हमारी गैलरी
                    </a>
                  </li>
                </ul>
              </div>


              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  संपर्क जानकारी
                </h3>
                <ul className="space-y-3">
                  <li className="text-gray-600">+919086345xx2</li>
                  <li className="text-gray-600">example@gmail.com</li>
                  <li className="text-gray-600">K-57/125, नवापुरा, वाराणसी, उत्तर प्रदेश</li>
                </ul>
              </div>

            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 mt-8 pt-8">
              <p className="text-center text-gray-500 text-sm">
                सभी अधिकार आरडी ग्रुप ऑफ़ इंडस्ट्रीज़ द्वारा सुरक्षित हैं।
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}