'use client'
export default function Home() {
  return (
    <main>

      {/* Navbar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: '#000000',
        borderBottom: '1px solid #222',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        height: '70px',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <img src="/logo.png" alt="Aguirre's Landscaping Logo" style={{ height: '60px', width: 'auto' }} />
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '700', color: '#ffffff', letterSpacing: '2px' }}>AGUIRRE'S</span>
    <span style={{ fontSize: '10px', color: '#999999', letterSpacing: '3px' }}>LANDSCAPING</span>
  </div>
</div>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {['About', 'Services','Contact', 'Portfolio'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontSize: '13px',
              fontWeight: '500',
              color: '#cccccc',
              textDecoration: 'none',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}>{link}</a>
          ))}
        </div>

        {/* CTA Button */}
        <a href="#contact" style={{
          border: '1px solid #ffffff',
          color: '#ffffff',
          padding: '10px 24px',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}>Get a Quote</a>
      </nav>

      {/* Hero */}
      <section style={{
        height: '100vh',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10%',
        borderBottom: '1px solid #222',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background texture */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(circle at 70% 50%, #1a1a1a 0%, #000000 70%)',
        }} />

        {/* Hero text */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px' }}>
          <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#888', textTransform: 'uppercase', marginBottom: '24px' }}>Professional Landscaping Services</p>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '72px',
            fontWeight: '700',
            color: '#ffffff',
            lineHeight: '1.1',
            fontStyle: 'italic',
            marginBottom: '32px',
          }}>
            Let Us Build The Yard of Your Dreams <br /> 
          </h1>
          <p style={{ fontSize: '16px', color: '#999', lineHeight: '1.8', marginBottom: '40px', maxWidth: '440px' }}>
            Premium landscaping services for residential and commercial properties. Quality work, guaranteed results.
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            border: '1px solid #ffffff',
            color: '#ffffff',
            padding: '16px 40px',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}>Get a Free Quote</a>
        </div>
      </section>
{/* Services */}
<section id="services" style={{ backgroundColor: '#000000', padding: '100px 0', borderBottom: '1px solid #222' }}>
  
  {/* Section header */}
  <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 10%' }}>
    <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>What We Offer</p>
    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: '700', color: '#ffffff', fontStyle: 'italic' }}>Our Services</h2>
    <div style={{ width: '60px', height: '1px', backgroundColor: '#ffffff', margin: '24px auto 0' }} />
  </div>

  {/* Service rows */}
  {[
    { title: 'Lawn Maintenance', desc: 'Regular mowing, edging, and lawn care to keep your property looking pristine year round. We handle everything so you can enjoy a perfect lawn without the work.', num: '01' },
    { title: 'Mulching', desc: 'Professional mulching services that protect your plants, retain moisture, and enhance the overall look of your garden beds throughout every season.', num: '02' },
    { title: 'Trimming & Pruning', desc: 'Expert trimming and pruning to keep your trees, shrubs, and hedges healthy, shaped, and looking their absolute best year round.', num: '03' },
    { title: 'Spring & Fall Cleanups', desc: 'Complete seasonal cleanups to prepare your property for the changing seasons. We remove debris, leaves, and anything left behind by winter or summer.', num: '04' },
    { title: 'Hardscaping', desc: 'Custom patios, walkways, retaining walls, and stone work that add lasting structure and value to your outdoor space. Built to last for decades.', num: '05' },
    { title: 'Garden Design', desc: 'Creative garden design and installation tailored to your vision, your property, and your lifestyle. We bring your dream outdoor space to life.', num: '06' },
  ].map((service, i) => (
    <div key={i} style={{
      display: 'flex',
      flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
      minHeight: '400px',
      borderBottom: '1px solid #1a1a1a',
    }}>
      {/* Text side */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 8%',
        backgroundColor: '#000000',
      }}>
        <span style={{ fontSize: '11px', letterSpacing: '4px', color: '#555', marginBottom: '20px' }}>{service.num}</span>
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '36px',
          fontWeight: '700',
          color: '#ffffff',
          fontStyle: 'italic',
          marginBottom: '20px',
          lineHeight: '1.2',
        }}>{service.title}</h3>
        <p style={{ fontSize: '15px', color: '#888', lineHeight: '1.9', maxWidth: '420px' }}>{service.desc}</p>
      </div>

      {/* Image side */}
      <div style={{
        flex: 1,
        backgroundColor: '#111111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        borderLeft: i % 2 === 0 ? '1px solid #1a1a1a' : 'none',
        borderRight: i % 2 !== 0 ? '1px solid #1a1a1a' : 'none',
      }}>
        <div style={{ textAlign: 'center', color: '#333' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>
            {['🌿', '🍂', '✂️', '🍃', '🪨', '🌸'][i]}
          </div>
          <p style={{ fontSize: '12px', letterSpacing: '2px', color: '#444' }}>PHOTO COMING SOON</p>
        </div>
      </div>
    </div>
  ))}
</section>
{/* Our Process */}
<section id="process" style={{ backgroundColor: '#0a0a0a', padding: '100px 10%', borderBottom: '1px solid #222' }}>
  
  {/* Section header */}
  <div style={{ textAlign: 'center', marginBottom: '80px' }}>
    <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>How It Works</p>
    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: '700', color: '#ffffff', fontStyle: 'italic' }}>Our Process</h2>
    <p style={{ fontSize: '15px', color: '#888', marginTop: '16px' }}>Our simple four-step process makes creating your dream landscape easy and stress-free.</p>
    <div style={{ width: '60px', height: '1px', backgroundColor: '#ffffff', margin: '24px auto 0' }} />
  </div>

  {/* Steps */}
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
    {[
      { num: '01', title: 'Consultation', desc: 'Schedule a free no-obligation meeting. We visit your property, listen to your ideas, take measurements, and discuss your goals and budget.' },
      { num: '02', title: 'Design', desc: 'We create a clear plan with layout, plant selections, and material recommendations. You get transparent pricing and timelines upfront.' },
      { num: '03', title: 'Installation', desc: 'Our skilled crew gets to work handling every detail from hardscape construction to planting, keeping the site clean throughout.' },
      { num: '04', title: 'Ongoing Care', desc: 'We offer year-round maintenance to protect your investment and keep your property looking beautiful in every season.' },
    ].map((step, i) => (
      <div key={i} style={{ borderTop: '1px solid #333', paddingTop: '32px' }}>
        <div style={{ fontSize: '13px', letterSpacing: '3px', color: '#555', marginBottom: '24px' }}>{step.num}</div>
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '24px',
          fontWeight: '600',
          color: '#ffffff',
          marginBottom: '16px',
        }}>{step.title}</h3>
        <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.9' }}>{step.desc}</p>
      </div>
    ))}
  </div>
</section>
{/* Reviews */}
<section id="reviews" style={{ backgroundColor: '#000000', padding: '100px 10%', borderBottom: '1px solid #222' }}>

  {/* Section header */}
  <div style={{ textAlign: 'center', marginBottom: '80px' }}>
    <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>What Clients Say</p>
    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: '700', color: '#ffffff', fontStyle: 'italic' }}>Customer Reviews</h2>
    <div style={{ width: '60px', height: '1px', backgroundColor: '#ffffff', margin: '24px auto 0' }} />
  </div>

  {/* Review screenshots */}
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
    {['/review1.png', '/review2.png', '/review3.png'].map((src, i) => (
      <div key={i} style={{
        backgroundColor: '#111111',
        border: '1px solid #1a1a1a',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        <img
          src={src}
          alt={`Review ${i + 1}`}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    ))}
  </div>
</section>
{/* Why Choose Us */}
<section id="about" style={{ backgroundColor: '#0a0a0a', padding: '100px 10%', borderBottom: '1px solid #222' }}>
  
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
    
    {/* Left text */}
    <div>
      <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>Why Us</p>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: '700', color: '#ffffff', fontStyle: 'italic', lineHeight: '1.2', marginBottom: '24px' }}>
        Trusted by Homeowners Across Northeast Ohio
      </h2>
      <p style={{ fontSize: '15px', color: '#888', lineHeight: '1.9', marginBottom: '40px' }}>
        Aguirre's Landscaping has built a reputation for exceptional service, beautiful results, and dependable professionalism. Our clients trust us to show up, do great work, and treat their property with care.
      </p>
      <a href="#contact" style={{
        display: 'inline-block',
        border: '1px solid #ffffff',
        color: '#ffffff',
        padding: '16px 40px',
        fontSize: '13px',
        fontWeight: '600',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        textDecoration: 'none',
      }}>Get a Free Quote</a>
    </div>

    {/* Right points */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {[
        { title: 'Proven Experience', desc: 'Years of hands-on experience designing and maintaining landscapes that stand the test of time.' },
        { title: 'Reliable & On Time', desc: 'We show up when we say we will and get the job done right the first time, every time.' },
        { title: 'Personalized Service', desc: 'We take time to understand your goals and craft an outdoor space you will love for years.' },
        { title: 'Quality Craftsmanship', desc: 'From patios to garden beds, our attention to detail shows in every single project we complete.' },
      ].map((point, i) => (
        <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <div style={{ width: '1px', backgroundColor: '#ffffff', minHeight: '40px', marginTop: '4px', flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>{point.title}</h4>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.8' }}>{point.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CTA Banner */}
<section style={{ backgroundColor: '#ffffff', padding: '80px 10%', textAlign: 'center' }}>
  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: '700', color: '#000000', fontStyle: 'italic', marginBottom: '16px' }}>
    Ready to Build The Yard of Your Dreams?
  </h2>
  <p style={{ fontSize: '15px', color: '#555', marginBottom: '36px' }}>
    Let's design a landscape you'll love year-round.
  </p>
  <a href="#contact" style={{
    display: 'inline-block',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '16px 48px',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textDecoration: 'none',
  }}>Get a Free Quote</a>
</section>

{/* Portfolio */}
<section id="portfolio" style={{ backgroundColor: '#000000', padding: '100px 0', borderBottom: '1px solid #222' }}>
  
  {/* Section header */}
  <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 10%' }}>
    <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>Our Work</p>
    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: '700', color: '#ffffff', fontStyle: 'italic' }}>Portfolio</h2>
    <div style={{ width: '60px', height: '1px', backgroundColor: '#ffffff', margin: '24px auto 0' }} />
  </div>

  {/* Scrollable row */}
  <div style={{ position: 'relative' }}>
    <div
      id="portfolio-scroll"
      style={{
        display: 'flex',
        gap: '16px',
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        padding: '0 10%',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {[
        '/portfolio1.png',
        '/portfolio2.png',
        '/portfolio3.png',
        '/portfolio4.png',
        '/portfolio5.png',
        '/portfolio6.png',
        '/portfolio7.png',
        '/portfolio8.png',
      ].map((src, i) => (
        <div key={i} style={{
          flexShrink: 0,
          width: '380px',
          height: '280px',
          backgroundColor: '#111',
          border: '1px solid #1a1a1a',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          <img
            src={src}
            alt={`Portfolio ${i + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      ))}
    </div>

    {/* Left arrow */}
    <button
      onClick={() => {
        const el = document.getElementById('portfolio-scroll')
        if (el) el.scrollLeft -= 420
      }}
      style={{
        position: 'absolute',
        left: '2%',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: '#000000',
        border: '1px solid #333',
        color: '#ffffff',
        width: '48px',
        height: '48px',
        fontSize: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
      }}
    >←</button>

    {/* Right arrow */}
    <button
      onClick={() => {
        const el = document.getElementById('portfolio-scroll')
        if (el) el.scrollLeft += 420
      }}
      style={{
        position: 'absolute',
        right: '2%',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: '#000000',
        border: '1px solid #333',
        color: '#ffffff',
        width: '48px',
        height: '48px',
        fontSize: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
      }}
    >→</button>
  </div>
</section>

{/* Footer */}
<footer style={{ backgroundColor: '#000000', borderTop: '1px solid #1a1a1a', padding: '48px 10%' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
    
    {/* Logo */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img src="/logo.png" alt="Logo" style={{ height: '36px', width: 'auto' }} />
      <div>
        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: '700', color: '#ffffff', letterSpacing: '2px' }}>AGUIRRE'S</div>
        <div style={{ fontSize: '9px', color: '#555', letterSpacing: '3px' }}>LANDSCAPING</div>
      </div>
    </div>

    {/* Links */}
    <div style={{ display: 'flex', gap: '32px' }}>
      {['Services', 'Process', 'Reviews', 'About', 'Contact'].map(link => (
        <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize: '12px', color: '#666', textDecoration: 'none', letterSpacing: '1px', textTransform: 'uppercase' }}>{link}</a>
      ))}
    </div>

    {/* Copyright */}
    <div style={{ fontSize: '12px', color: '#444' }}>
      © 2026 Aguirre's Landscaping. All rights reserved.
    </div>
  </div>
</footer>

    </main>
  )
}