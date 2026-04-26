"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "عنّا" },
  { href: "#features", label: "مميزات" },
  { href: "#gallery", label: "جاليري" },
  { href: "#reviews", label: "تقييمات" },
  { href: "#reservation", label: "حجز" },
];

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/wifi-cofee.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
];

const reviews = [
  {
    text: "المكان رايق جدًا والقهوة ممتازة، صرت أجيه مرتين بالأسبوع للشغل والاجتماعات.",
    name: "سارة محمد",
  },
  {
    text: "الخدمة ممتازة وسريعة، وأحلى شيء إن الأجواء مناسبة للتركيز والدراسة.",
    name: "أحمد خالد",
  },
  {
    text: "قهوة مضبوطه والحلويات لذيذة جدًا، المكان نظيف ومرتب بطريقة راقية.",
    name: "ريم علي",
  },
  {
    text: "الديكور جميل جدًا والتصوير فيه يطلع رهيب، حرفيًا مكان إنستجرامي.",
    name: "هدى ياسر",
  },
  {
    text: "واي فاي سريع والكراسي مريحة، مناسب جدًا للـ freelancers طول اليوم.",
    name: "محمد عادل",
  },
  {
    text: "جربت الإسبريسو والكابتشينو وكانوا على مستوى ممتاز، أكيد راجع مرة ثانية.",
    name: "نورا سامح",
  },
  {
    text: "الطاقم محترم جدًا ومتعاون، وأسلوبهم يخلّي التجربة كلها مريحة.",
    name: "كريم فتحي",
  },
  {
    text: "أفضل مقهى قريب مني، الصوت هادئ والإنارة ممتازة سواء للشغل أو اللقاءات.",
    name: "منة طارق",
  },
  {
    text: "طلبت فلات وايت وكانت النكهة ممتازة ومتوازنة، المكان فعلاً يستحق الزيارة.",
    name: "ليلى حسن",
  },
  {
    text: "الهدوء في الصباح ممتاز جدًا، مناسب للقراءة وإنجاز المهام بدون إزعاج.",
    name: "يوسف عابد",
  },
  {
    text: "أحببت سرعة الخدمة وجودة التحضير، كل مرة المستوى ثابت ومميز.",
    name: "داليا سامر",
  },
  {
    text: "الديكور مريح والألوان دافئة، المكان يعطي إحساس راقٍ من أول دخول.",
    name: "مريم فؤاد",
  },
  {
    text: "الإنترنت قوي جدًا والجلسات مريحة، أنهيت يوم عمل كامل بدون أي مشكلة.",
    name: "عمر رامي",
  },
  {
    text: "الحلويات مع القهوة ممتازة، خصوصًا الكوكيز، التقديم جميل ونظيف.",
    name: "سلمى عادل",
  },
  {
    text: "تعامل الموظفين محترف وودود، دائمًا يساعدونك تختار المشروب المناسب.",
    name: "حازم نبيل",
  },
  {
    text: "جربت الحجز مسبقًا وكانت التجربة سلسة جدًا والطاولة كانت جاهزة فورًا.",
    name: "ندى شريف",
  },
];

const specialsItems = [
  {
    category: "مشروب ساخن",
    name: "لاتيه بندق",
    description: "اسبريسو مع حليب مبخر ولمسة بندق ناعمة.",
    image: "/images/gallery3.jpg",
  },
  {
    category: "مشروب بارد",
    name: "آيس موكا",
    description: "قهوة باردة مع شوكولاتة وكريمة خفيفة منعشة.",
    image: "/images/gallery6.jpg",
  },
  {
    category: "أكلة سريعة",
    name: "وافل بلجيكي",
    description: "وافل طازج مع صوص شوكولاتة وفواكه موسمية.",
    image: "/images/chocolate.jpg",
  },
];

const workingHours = [
  { day: "السبت - الأربعاء", time: "8:00 ص - 12:00 م" },
  { day: "الخميس", time: "8:00 ص - 1:00 ص" },
  { day: "الجمعة", time: "10:00 ص - 1:00 ص" },
];

const logoImage = "/images/logo.jpg";
const heroDrinkImage = "/images/removebg-preview.png";
const aboutImage = "/images/gallery2.jpg";
const featureCoffeeImage = "/images/gallery3.jpg";
const featureAtmosphereImage = "/images/gallery4.jpg";

export default function Home() {
  const reviewsRowA = reviews.slice(0, Math.ceil(reviews.length / 2));
  const reviewsRowB = reviews.slice(Math.ceil(reviews.length / 2));

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    revealItems.forEach((item) => {
      const delay = item.dataset.revealDelay;
      if (delay) {
        item.style.transitionDelay = `${delay}ms`;
      }
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="site-header header-enter">
        <div className="logo-area">
          <a href="#home" className="logo" aria-label="الذهاب إلى الرئيسية">
            <Image
              className="logo-image"
              src={logoImage}
              alt="لوجو قهوة النخبة"
              width={44}
              height={44}
            />
            <span>قهوة النخبة</span>
          </a>
        </div>
        <nav className="main-nav" aria-label="التنقل الرئيسي">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="cta-btn" href="#reservation">
          احجز طاولة
        </a>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div className="hero-text reveal reveal-right" data-reveal-delay="80">
              <p className="kicker">نكهة تبدأ يومك بشكل مختلف</p>
              <h1>قهوة النخبة</h1>
              <p>
                جرعة دفء، رائحة تحمص طازجة، وأجواء هادئة تخليك ترجع لنا كل يوم.
                اكتشف قهوتك المفضلة في مكان يجمع الذوق والراحة.
              </p>
              <div className="hero-actions">
                <a className="primary-btn" href="#reservation">
                  احجز الآن
                </a>
                <a className="ghost-btn" href="#gallery">
                  شاهد الجاليري
                </a>
              </div>
            </div>
            <div className="hero-drink-wrap reveal reveal-left" data-reveal-delay="180">
              <Image
                className="hero-drink"
                src={heroDrinkImage}
                alt="مشروب قهوة مميز"
                width={420}
                height={520}
              />
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-space">
          <div className="container about-grid">
            <div className="about-image reveal reveal-left" data-reveal-delay="50">
              <Image
                src={aboutImage}
                alt="ديكور مقهى قهوة النخبة"
                width={720}
                height={900}
              />
            </div>
            <div className="about-content reveal reveal-right" data-reveal-delay="150">
              <h2>عنّا</h2>
              <p>
                في قهوة النخبة بنقدّم تجربة متكاملة تجمع بين جودة المشروب، جمال
                المكان، وحسن الضيافة. كل كوب عندنا بيتحضّر بعناية من اختيار الحبوب
                لحد آخر لمسة تقديم.
              </p>
              <p>
                سواء جاي تشتغل، تذاكر، أو تستمتع بجلسة هادئة مع أصدقائك، هتلاقي
                المكان مصمم عشان يومك يكون ألطف وأكثر إنتاجية.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="features-section section-space">
          <div className="container">
            <h2 className="section-title reveal" data-reveal-delay="40">مميزاتنا</h2>
            <div className="features-grid">
              <article
                className="feature-card feature-card-bg reveal reveal-up"
                data-reveal-delay="70"
                style={{
                  backgroundImage: `url(${featureCoffeeImage})`,
                }}
              >
                <h3>جودة القهوة</h3>
                <ul>
                  <li>حبوب قهوة مستوردة Premium Beans</li>
                  <li>تحميص يومي Fresh Roasted</li>
                  <li>باريستا محترفين</li>
                </ul>
              </article>

              <article
                className="feature-card feature-card-bg atmosphere-card reveal reveal-up"
                data-reveal-delay="170"
                style={{
                  backgroundImage: `url(${featureAtmosphereImage})`,
                }}
              >
                <h3>أجواء المكان</h3>
                <p>مكان هادي ومريح مناسب للشغل والدراسة.</p>
                <strong>Work. Relax. Enjoy.</strong>
              </article>

              <article
                className="feature-card feature-card-bg reveal reveal-up"
                data-reveal-delay="260"
                style={{
                  backgroundImage: "url('/images/wifi-cofee.jpg')",
                }}
              >
                <h3>Wi-Fi سريع وبيئة مناسبة للشغل</h3>
                <div className="icon-row" aria-hidden="true">
                  <span>📶</span>
                  <span>💻</span>
                  <span>🔌</span>
                </div>
                <ul>
                  <li>إنترنت سريع وثابت</li>
                  <li>أماكن مجهزة بشواحن</li>
                  <li>مناسب للـ Freelancers</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="specials" className="specials-section section-space">
          <div className="container">
            <h2 className="section-title reveal" data-reveal-delay="40">أميز ما لدينا</h2>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="specials-carousel-wrap reveal"
            >
              <CarouselContent className="specials-carousel-content">
                {specialsItems.map((item) => (
                  <CarouselItem
                    key={item.name}
                    className="basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="special-card">
                        <CardContent className="special-card-content">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={900}
                            height={560}
                          />
                          <div className="special-overlay">
                            <span className="special-category">{item.category}</span>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="specials-prev" />
              <CarouselNext className="specials-next" />
            </Carousel>
          </div>
        </section>

        <section id="hours" className="hours-section section-space">
          <div className="container hours-wrap reveal" data-reveal-delay="70">
            <h2 className="section-title">ساعات العمل</h2>
            <div className="hours-list">
              {workingHours.map((item) => (
                <div className="hours-row" key={item.day}>
                  <span>{item.day}</span>
                  <strong>{item.time}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section section-space">
          <div className="container">
            <h2 className="section-title reveal" data-reveal-delay="40">جاليري</h2>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <figure
                  key={image}
                  className="gallery-item reveal reveal-zoom"
                  data-reveal-delay={String(70 + index * 55)}
                >
                  <Image
                    src={image}
                    alt={`صورة من المقهى ${index + 1}`}
                    width={900}
                    height={600}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews-section section-space">
          <div className="container">
            <h2 className="section-title reveal" data-reveal-delay="40">تقييمات عملائنا</h2>
            <div className="reviews-marquee reveal" data-reveal-delay="90">
              <div className="reviews-row reviews-row-right">
                {[...reviewsRowA, ...reviewsRowA].map((review, index) => (
                  <article key={`a-${review.name}-${index}`} className="review-card marquee-card">
                    <div className="review-head">
                      <span className="review-avatar" aria-hidden="true">
                        {review.name.charAt(0)}
                      </span>
                      <div className="review-meta">
                        <h3>{review.name}</h3>
                        <small>عميل دائم</small>
                      </div>
                      <span className="review-stars" aria-label="تقييم خمسة نجوم">
                        ★★★★★
                      </span>
                    </div>
                    <p>{'"'}{review.text}{'"'}</p>
                  </article>
                ))}
              </div>

              <div className="reviews-row reviews-row-left">
                {[...reviewsRowB, ...reviewsRowB].map((review, index) => (
                  <article key={`b-${review.name}-${index}`} className="review-card marquee-card">
                    <div className="review-head">
                      <span className="review-avatar" aria-hidden="true">
                        {review.name.charAt(0)}
                      </span>
                      <div className="review-meta">
                        <h3>{review.name}</h3>
                        <small>عميل دائم</small>
                      </div>
                      <span className="review-stars" aria-label="تقييم خمسة نجوم">
                        ★★★★★
                      </span>
                    </div>
                    <p>{'"'}{review.text}{'"'}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reservation" className="reservation-section section-space">
          <div className="container reservation-grid">
            <div className="reservation-copy reveal reveal-right" data-reveal-delay="80">
              <h2>احجز طاولتك الآن</h2>
              <p>
                اختر الوقت المناسب لك وسيقوم فريقنا بتجهيز أفضل مكان يناسب عدد
                الأفراد ونوع جلستك المفضلة.
              </p>
              <div className="contact-icons" aria-label="وسائل التواصل والموقع">
                <a href="mailto:hello@coffeenokhba.com" className="contact-icon-card" aria-label="البريد الإلكتروني">
                  <span className="contact-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7.5L12 13.5L20 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="3.5" y="5" width="17" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  </span>
                  <span className="contact-icon-text">
                    <strong>البريد</strong>
                    <small>hello@coffeenokhba.com</small>
                  </span>
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="contact-icon-card" aria-label="لوكيشن المقهى">
                  <span className="contact-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21C12 21 18 15.5 18 10.5C18 7.18629 15.3137 4.5 12 4.5C8.68629 4.5 6 7.18629 6 10.5C6 15.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="10.5" r="2.3" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  </span>
                  <span className="contact-icon-text">
                    <strong>الموقع</strong>
                    <small>القاهرة - التجمع الخامس</small>
                  </span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="contact-icon-card" aria-label="فيسبوك">
                  <span className="contact-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 8.5H15.8V5.5H14C11.7909 5.5 10 7.29086 10 9.5V11H8V14H10V19H13V14H15.2L15.8 11H13V9.5C13 8.94772 13.4477 8.5 14 8.5Z" fill="currentColor" />
                      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  </span>
                  <span className="contact-icon-text">
                    <strong>فيسبوك</strong>
                    <small>تابعنا على الصفحة</small>
                  </span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="contact-icon-card" aria-label="إنستجرام">
                  <span className="contact-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.8" />
                      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="contact-icon-text">
                    <strong>إنستجرام</strong>
                    <small>صور ولقطات يومية</small>
                  </span>
                </a>
              </div>

              <div className="mini-map-card">
                <iframe
                  title="خريطة موقع قهوة النخبة"
                  src="https://www.google.com/maps?q=Cairo%20Festival%20City&z=16&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <form
              className="reservation-form reveal reveal-left"
              data-reveal-delay="170"
              action="#"
              method="post"
            >
              <label>
                الاسم
                <input type="text" name="name" placeholder="الاسم الكامل" required />
              </label>
              <label>
                نوع الطاولة
                <select name="tableType" required>
                  <option value="">اختر نوع الطاولة</option>
                  <option value="single">فردية</option>
                  <option value="family">عائلية</option>
                  <option value="work">مناسبة للعمل</option>
                </select>
              </label>
              <label>
                عدد الأفراد
                <input type="number" name="guests" min={1} max={20} required />
              </label>
              <label>
                التاريخ
                <input type="date" name="date" required />
              </label>
              <label>
                الوقت
                <input type="time" name="time" required />
              </label>
              <label>
                رقم الهاتف
                <input type="tel" name="phone" placeholder="01XXXXXXXXX" required />
              </label>
              <label>
                البريد الإلكتروني
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                />
              </label>
              <button type="submit">تأكيد الحجز</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="reveal" data-reveal-delay="60">
            <a href="#home" className="logo footer-logo">
              <Image
                className="logo-image"
                src={logoImage}
                alt="لوجو قهوة النخبة"
                width={44}
                height={44}
              />
              <span>قهوة النخبة</span>
            </a>
            <p>مكانك اليومي للقهوة المختصة والأجواء الهادئة.</p>
          </div>

          <div className="reveal" data-reveal-delay="120">
            <h3>روابط سريعة</h3>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={`footer-${link.href}`} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="reveal" data-reveal-delay="180">
            <h3>تابعنا</h3>
            <div className="footer-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                فيسبوك
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                إنستجرام
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                لوكيشن المقهى
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          جميع الحقوق محفوظة © 2026 قهوة النخبة. تم تصميم وتطوير الموقع بعناية لتقديم تجربة عربية مميزة.
        </div>
      </footer>

      <a className="mobile-sticky-cta" href="#reservation">
        احجز الآن
      </a>
    </div>
  );
}
