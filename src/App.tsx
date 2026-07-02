import { useEffect, useState, type CSSProperties, type ImgHTMLAttributes, type MouseEvent } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Factory,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
  Zap,
} from 'lucide-react'
import {
  capabilities,
  contacts,
  emailAddress,
  faqs,
  galleryGroups,
  instagramUrl,
  mapsUrl,
  navItems,
  primaryContact,
  processSteps,
  productModes,
  productVideo,
  projectImages,
  whatsappText,
  whatsappUrl,
  type GalleryImage,
} from './data/site'
import { logoPath, optimizedImagePath, videoPath } from './lib/assets'
import './App.css'

const [emailUser, emailDomain] = emailAddress.split('@')
const currentYear = new Date().getFullYear()

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16 3.5C9.1 3.5 3.5 8.9 3.5 15.7c0 2.1.6 4.1 1.6 5.9L3.7 28.5l7-1.8c1.6.9 3.4 1.3 5.3 1.3 6.9 0 12.5-5.4 12.5-12.2S22.9 3.5 16 3.5Zm0 22.2c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-4.1 1.1 1.1-4-.3-.4c-1-1.5-1.5-3.2-1.5-5.1 0-5.5 4.5-10 10.1-10s10.1 4.5 10.1 10-4.6 9.9-10.2 9.9Zm5.7-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.4-1.4-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 2.9 1.3 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.8.6.8.2 1.5.2 2.1.1.6-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.2-.4-.3-.7-.5Z"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

function hasSeenSplash() {
  try {
    return window.sessionStorage.getItem('aki-splash-seen') === 'true'
  } catch {
    return false
  }
}

function markSplashSeen() {
  try {
    window.sessionStorage.setItem('aki-splash-seen', 'true')
  } catch {
    // Session storage can be unavailable in strict browser privacy modes.
  }
}

function SplashScreen({ isLeaving }: { isLeaving: boolean }) {
  return (
    <div
      className={`splash-screen ${isLeaving ? 'is-leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Memuat website PT. Aluminium Kreasi Indonesia"
    >
      <div className="splash-panel">
        <img src={logoPath} alt="" />
        <span>PT. Aluminium Kreasi Indonesia</span>
        <strong>Bedhead Panel Aluminium</strong>
        <div className="splash-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  )
}

function SkeletonImage({ className, src, onLoad, onError, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  useEffect(() => {
    setStatus('loading')
  }, [src])

  const classes = ['skeleton-image', status === 'loaded' ? 'is-loaded' : '', status === 'error' ? 'is-error' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <img
      {...props}
      src={src}
      className={classes}
      data-status={status}
      onLoad={(event) => {
        setStatus('loaded')
        onLoad?.(event)
      }}
      onError={(event) => {
        setStatus('error')
        onError?.(event)
      }}
    />
  )
}

function HeroPhotoShowcase() {
  const [selected, setSelected] = useState(projectImages[0])
  const heroItems = projectImages.slice(0, 4)

  return (
    <div className="hero-photo-stage">
      <div className={`hero-photo-card ${selected.fit === 'contain' ? 'contain' : 'cover'}`}>
        <SkeletonImage src={optimizedImagePath(selected.file)} alt={selected.title} />
        <div className="hero-photo-label">
          <span>{selected.tag}</span>
          <strong>{selected.title}</strong>
        </div>
      </div>
      <div className="hero-thumb-row" aria-label="Pilih foto utama">
        {heroItems.map((image) => (
          <button
            key={image.file}
            type="button"
            className={selected.file === image.file ? 'active' : ''}
            onClick={() => setSelected(image)}
            aria-label={`Tampilkan ${image.title}`}
          >
            <SkeletonImage src={optimizedImagePath(image.file)} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}

function ProductStudio() {
  const [selected, setSelected] = useState(productModes[0])

  return (
    <section className="product-band" id="produk">
      <div className="section-shell product-layout">
        <div className="section-copy">
          <span className="eyebrow">Bedhead Panel Aluminium</span>
          <h2>Dirancang untuk ruang rawat yang bersih, rapi, dan siap kerja.</h2>
          <p>
            Produk dapat dikonfigurasi untuk kebutuhan rumah sakit, klinik,
            ruang rawat inap, ICU, HCU, hingga kamar premium. Setiap area
            menuntut susunan modul yang berbeda, jadi halaman ini dibuat dengan
            mode produk yang fleksibel.
          </p>
          <div className="mode-control" aria-label="Pilih tipe ruangan">
            {productModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                className={selected.id === mode.id ? 'active' : ''}
                onClick={() => setSelected(mode)}
              >
                {mode.name}
              </button>
            ))}
          </div>
        </div>

        <div className="product-preview" style={{ '--mode-accent': selected.accent } as CSSProperties}>
          <div className="preview-header">
            <div>
              <span>Konfigurasi</span>
              <strong>{selected.title}</strong>
            </div>
            <CheckCircle2 aria-hidden="true" />
          </div>
          <SkeletonImage
            className="product-mode-photo"
            src={optimizedImagePath(selected.photo)}
            alt={`Contoh ${selected.title}`}
            loading="lazy"
          />
          <div className="config-panel" aria-hidden="true">
            <span className="config-light" />
            <span className="config-gas a" />
            <span className="config-gas b" />
            <span className="config-gas c" />
            <span className="config-socket" />
            <span className="config-socket second" />
            <span className="config-data" />
            <span className="config-rail" />
          </div>
          <p>{selected.copy}</p>
          <ul>
            {selected.specs.map((spec) => (
              <li key={spec}>
                <CheckCircle2 aria-hidden="true" />
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function VideoSection() {
  return (
    <section className="video-band" aria-labelledby="video-heading">
      <div className="section-shell video-layout">
        <div className="section-copy">
          <span className="eyebrow">Video produk</span>
          <h2 id="video-heading">Lihat langsung tampilan Bedhead Panel AKI.</h2>
          <p>
            Dokumentasi visual membantu melihat proporsi panel, finishing, dan
            karakter produk sebelum masuk ke pembahasan ukuran dan konfigurasi.
          </p>
          <div className="video-points" aria-label="Sorotan video produk">
            <span>
              <CheckCircle2 aria-hidden="true" />
              Tampilan panel aluminium untuk area pasien
            </span>
            <span>
              <CheckCircle2 aria-hidden="true" />
              Referensi visual untuk konsultasi proyek
            </span>
          </div>
        </div>

        <div className="video-frame">
          <video
            controls
            playsInline
            preload="metadata"
            poster={optimizedImagePath(projectImages[0].file)}
            aria-label={productVideo.title}
          >
            <source src={videoPath(productVideo.file)} type="video/mp4" />
          </video>
          <div className="video-frame-caption">
            <span>Dokumentasi Produk</span>
            <strong>{productVideo.title}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const [selected, setSelected] = useState<GalleryImage | null>(null)
  const photoCount = galleryGroups.reduce((total, group) => total + group.items.length, 0)

  return (
    <section className="gallery-band" id="galeri">
      <div className="section-shell">
        <div className="gallery-heading">
          <div>
            <span className="eyebrow">Galeri AKI</span>
            <h2>Foto produk, pilihan warna, dan materi katalog dalam satu tempat.</h2>
          </div>
          <span className="photo-count">{photoCount} foto</span>
        </div>

        <div className="gallery-groups">
          {galleryGroups.map((group) => (
            <section className="gallery-group" key={group.label} aria-label={group.label}>
              <div className="gallery-group-header">
                <h3>{group.label}</h3>
                <p>{group.description}</p>
              </div>
              <div className="photo-grid">
                {group.items.map((image) => (
                  <button
                    className={`gallery-card ${image.fit === 'cover' ? 'cover' : 'contain'}`}
                    key={image.file}
                    type="button"
                    onClick={() => setSelected(image)}
                    aria-label={`Lihat ${image.title}`}
                  >
                    <span>{image.tag}</span>
                    <SkeletonImage src={optimizedImagePath(image.file)} alt={image.title} loading="lazy" />
                    <strong>{image.title}</strong>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-header">
              <div>
                <span>{selected.tag}</span>
                <strong>{selected.title}</strong>
              </div>
              <button type="button" onClick={() => setSelected(null)}>
                Tutup
              </button>
            </div>
            <SkeletonImage
              className={selected.fit === 'cover' ? 'cover' : 'contain'}
              src={optimizedImagePath(selected.file)}
              alt={selected.title}
            />
          </div>
        </div>
      )}
    </section>
  )
}

function FaqSection() {
  const [open, setOpen] = useState(faqs[0].question)

  return (
    <section className="faq-band">
      <div className="section-shell faq-layout">
        <div className="section-copy">
          <span className="eyebrow">Pertanyaan cepat</span>
          <h2>Konsultasi lebih mudah kalau arah kebutuhannya jelas.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => {
            const isOpen = open === faq.question
            return (
              <article className="faq-item" key={faq.question}>
                <button type="button" onClick={() => setOpen(isOpen ? '' : faq.question)}>
                  <span>{faq.question}</span>
                  <ChevronDown aria-hidden="true" className={isOpen ? 'rotated' : ''} />
                </button>
                {isOpen && <p>{faq.answer}</p>}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function App() {
  const [showSplash, setShowSplash] = useState(() => !hasSeenSplash())
  const [isSplashLeaving, setIsSplashLeaving] = useState(false)
  const [moduleTransition, setModuleTransition] = useState<{ href: string; id: number } | null>(null)

  useEffect(() => {
    if (!showSplash) {
      return
    }

    let minDelayPassed = false
    let heroReady = false
    let closed = false
    let closeTimer: number | undefined

    const finishSplash = () => {
      if (closed) {
        return
      }

      closed = true
      setIsSplashLeaving(true)
      closeTimer = window.setTimeout(() => {
        markSplashSeen()
        setShowSplash(false)
      }, 360)
    }

    const maybeFinish = () => {
      if (minDelayPassed && heroReady) {
        finishSplash()
      }
    }

    const image = new Image()
    image.onload = () => {
      heroReady = true
      maybeFinish()
    }
    image.onerror = () => {
      heroReady = true
      maybeFinish()
    }
    image.src = optimizedImagePath(projectImages[0].file)

    const minTimer = window.setTimeout(() => {
      minDelayPassed = true
      maybeFinish()
    }, 950)

    const maxTimer = window.setTimeout(finishSplash, 2300)

    return () => {
      window.clearTimeout(minTimer)
      window.clearTimeout(maxTimer)
      if (closeTimer) {
        window.clearTimeout(closeTimer)
      }
    }
  }, [showSplash])

  useEffect(() => {
    if (!moduleTransition) {
      return
    }

    const timer = window.setTimeout(() => {
      setModuleTransition(null)
    }, 920)

    return () => {
      window.clearTimeout(timer)
    }
  }, [moduleTransition])

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    setModuleTransition({ href, id: Date.now() })

    const target = document.querySelector<HTMLElement>(href)
    window.setTimeout(() => {
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', href)
    }, 120)
  }

  const isPageBusy = showSplash || Boolean(moduleTransition)

  return (
    <>
      {showSplash && <SplashScreen isLeaving={isSplashLeaving} />}
      <main aria-busy={isPageBusy ? 'true' : undefined}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="PT. Aluminium Kreasi Indonesia">
          <SkeletonImage src={logoPath} alt="Akasia Aluminium Kreasi Indonesia" />
        </a>
        <nav aria-label="Navigasi utama">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={moduleTransition?.href === item.href ? 'is-loading' : undefined}
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-action" href={whatsappUrl} target="_blank" rel="noreferrer">
          <span className="whatsapp-mark">
            <WhatsAppIcon />
          </span>
          <span className="whatsapp-label">WhatsApp</span>
        </a>
        <span className={`module-loader ${moduleTransition ? 'is-active' : ''}`} aria-hidden="true" />
      </header>

      <section className="hero-section" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Bedhead Panel Aluminium untuk Fasilitas Kesehatan</span>
            <h1>PT. Aluminium Kreasi Indonesia</h1>
            <p>
              Spesialis fabrikasi Bedhead Panel aluminium untuk ruang rawat,
              ICU, klinik, dan proyek rumah sakit. Konfigurasi outlet gas,
              listrik, lampu, dan finishing dapat disesuaikan dengan kebutuhan
              proyek.
            </p>
            <div className="hero-actions">
              <a className="primary-action whatsapp-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                <span className="whatsapp-mark">
                  <WhatsAppIcon />
                </span>
                <span>Konsultasi Produk</span>
              </a>
              <a className="secondary-action" href="#produk">
                Lihat Detail Produk
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="hero-facts" aria-label="Ringkasan perusahaan">
              <span>
                <Factory aria-hidden="true" />
                Produksi & office di Bekasi
              </span>
              <span>
                <Stethoscope aria-hidden="true" />
                Custom modul alkes
              </span>
            </div>
          </div>
          <HeroPhotoShowcase />
        </div>
      </section>

      <section className="intro-strip" aria-label="Fokus layanan">
        <div className="section-shell intro-grid">
          <div>
            <strong>Aluminium</strong>
            <span>Material utama untuk bodi panel yang ringan dan presisi.</span>
          </div>
          <div>
            <strong>Custom</strong>
            <span>Konfigurasi mengikuti kebutuhan outlet, lampu, dan aksesoris.</span>
          </div>
          <div>
            <strong>Bekasi</strong>
            <span>Produksi dan office berada di Tambun Selatan, Kab. Bekasi.</span>
          </div>
        </div>
      </section>

      <VideoSection />

      <ProductStudio />

      <GallerySection />

      <section className="capabilities-band" id="keunggulan">
        <div className="section-shell">
          <div className="section-heading">
            <span className="eyebrow">Keunggulan pengerjaan</span>
            <h2>Detail kecil yang membuat panel terasa profesional di ruang klinis.</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => {
              const Icon = item.icon
              return (
                <article className="capability-card" key={item.title}>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="process-band" id="proses">
        <div className="section-shell process-layout">
          <div className="section-copy">
            <span className="eyebrow">Alur kerja</span>
            <h2>Dari kebutuhan ruangan sampai panel siap masuk proyek.</h2>
            <p>
              Setiap proyek bedhead panel biasanya punya kebutuhan titik,
              panjang, warna, dan komponen yang berbeda. Alurnya dibuat jelas
              agar komunikasi dengan tim lapangan tetap ringkas.
            </p>
          </div>
          <div className="process-list">
            {processSteps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-band">
        <div className="section-shell quality-layout">
          <div className="quality-visual" aria-hidden="true">
            <div className="quality-panel">
              <span className="q-light" />
              <span className="q-module green" />
              <span className="q-module blue" />
              <span className="q-module amber" />
              <span className="q-slot" />
              <span className="q-slot small" />
            </div>
            <div className="quality-tags">
              <span>
                <Zap aria-hidden="true" />
                Listrik
              </span>
              <span>
                <HeartPulse aria-hidden="true" />
                Gas Medis
              </span>
              <span>
                <ClipboardCheck aria-hidden="true" />
                Layout
              </span>
            </div>
          </div>
          <div className="section-copy">
            <span className="eyebrow">Ruang klinis terlihat lebih siap</span>
            <h2>Panel bukan hanya tempat outlet, tapi bagian dari pengalaman perawatan.</h2>
            <p>
              Bedhead panel yang rapi membantu area samping pasien terlihat
              lebih bersih, memudahkan tenaga medis mengakses titik penting, dan
              menjaga tampilan ruangan tetap profesional.
            </p>
          </div>
        </div>
      </section>

      <FaqSection />

      <section className="contact-band" id="kontak">
        <div className="section-shell contact-layout">
          <div className="section-copy contact-copy">
            <span className="eyebrow">Kontak marketing/admin</span>
            <h2>Diskusikan kebutuhan Bedhead Panel untuk proyek Anda.</h2>
            <p>
              Kirim kebutuhan awal melalui WhatsApp agar tim dapat membantu
              mengarahkan ukuran, konfigurasi, dan estimasi pengerjaan.
            </p>

            <div className="contact-points" aria-label="Bantuan konsultasi">
              <span>
                <CheckCircle2 aria-hidden="true" />
                <span className="contact-point-text">Konsultasi ukuran, modul, dan finishing panel</span>
              </span>
              <span>
                <CheckCircle2 aria-hidden="true" />
                <span className="contact-point-text">Koordinasi kebutuhan ruang rawat, ICU, dan klinik</span>
              </span>
              <span>
                <CheckCircle2 aria-hidden="true" />
                <span className="contact-point-text">Produksi dan office berada di Tambun Selatan, Bekasi</span>
              </span>
            </div>

            <div className="contact-actions contact-cta-row">
              <a
                className="primary-action whatsapp-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="whatsapp-mark">
                  <WhatsAppIcon />
                </span>
                Konsultasi WhatsApp
              </a>
              <a className="secondary-action" href={mapsUrl} target="_blank" rel="noreferrer">
                <MapPin aria-hidden="true" />
                Lihat lokasi
              </a>
            </div>
          </div>

          <aside className="contact-card" aria-label="Informasi kontak PT. Aluminium Kreasi Indonesia">
            <div className="contact-card-header">
              <span className="contact-card-icon">
                <Phone aria-hidden="true" />
              </span>
              <div>
                <span className="contact-kicker">Kontak AKI</span>
                <strong>Marketing & Admin</strong>
              </div>
            </div>

            <div className="admin-list" aria-label="Daftar kontak WhatsApp">
              {contacts.map((contact) => (
                <a
                  className="admin-contact"
                  href={`https://wa.me/${contact.number}?text=${whatsappText}`}
                  key={contact.number}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="whatsapp-mark">
                    <WhatsAppIcon />
                  </span>
                  <span className="admin-contact-text">
                    <small>{contact.label}</small>
                    <strong>{contact.display}</strong>
                  </span>
                  <ArrowRight aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="contact-info-list">
              <a className="contact-info-row" href={`mailto:${emailAddress}`}>
                <Mail aria-hidden="true" />
                <span>
                  <small>Email</small>
                  <span className="email-value">
                    {emailUser}@<wbr />
                    {emailDomain}
                  </span>
                </span>
              </a>
              <div className="contact-info-row">
                <MapPin aria-hidden="true" />
                <span>
                  <small>Produksi & Office</small>
                  Gudang Akasia, Desa Sumber Jaya, Kec. Tambun Selatan, Kab.
                  Bekasi 17519
                </span>
              </div>
            </div>

            <p>RT/RW 001/037, Dusun 3 No. 3. Gerbang putih besar.</p>
            <a className="map-action" href={mapsUrl} target="_blank" rel="noreferrer">
              Buka di Maps
              <ArrowRight aria-hidden="true" />
            </a>
          </aside>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <SkeletonImage src={logoPath} alt="Akasia Aluminium Kreasi Indonesia" />
            <strong>PT. Aluminium Kreasi Indonesia</strong>
            <p>Bedhead Panel Aluminium untuk kebutuhan alat kesehatan.</p>
          </div>

          <div className="footer-contact">
            <span className="footer-title">Kontak & Sosial</span>
            <a className="footer-link" href={instagramUrl} target="_blank" rel="noreferrer">
              <InstagramIcon />
              Instagram
            </a>
            <a className="footer-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span className="footer-whatsapp-mark">
                <WhatsAppIcon />
              </span>
              {primaryContact.display}
            </a>
          </div>

          <div className="footer-location">
            <span className="footer-title">Produksi & Office</span>
            <p>
              Gudang Akasia, Desa Sumber Jaya, Kec. Tambun Selatan, Kab.
              Bekasi 17519.
            </p>
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              Buka lokasi
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{currentYear} PT. Aluminium Kreasi Indonesia.</span>
          <span>
            Web dibuat oleh <strong>Muhamad Ridwan Saputra</strong>
          </span>
        </div>
      </footer>
      </main>
    </>
  )
}

export default App
