import { Instagram, Youtube, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import portBg from "@assets/port2_1778433814606.png";
import mobileBg from "@assets/jre_1778718122492.JPG";
import logoImg from "@assets/logo_1778430780174.png";
import kitImg from "@assets/kit_1778430780174.png";
import arrowImg from "@assets/arrow_1778430780175.png";
import backImg from "@assets/back_1778430780175.png";
import "./index.css";

const vid2 = "/bg-video.mp4";

const bioSlides = [
  {
    label: "Biografía",
    title: "DJ y Productor",
    text: "Con 21 años, más de 8 años en producción musical y 3 de experiencia activa como DJ.\nHoy cuenta con más de 30.000 oyentes mensuales en Spotify y más de 700.000 reproducciones en plataformas digitales.",
  },
  {
    label: "Propuesta",
    title: "Multigénero",
    text: "Su propuesta es multigénero, enfocada en mantener la pista activa, hacer bailar al público y sostener una energía alta durante toda la noche, adaptándose al perfil de cada evento.",
  },
  {
    label: "Recorrido",
    title: "Trayectoria",
    text: "Colaboró en remixes junto a Pereira Remix, Kevo DJ, Matt Sebastian, Ventu y DJ Adri Fuentes, entre otros.\n\nSe presentó en escenarios reconocidos:\nEl Caserío Club (Bs. As.)\nMediterráneo (Colón, E.R.)\nAlta Vista Club (San José, E.R.)\nLèvel (Río Grande, T. del Fuego)\nPraga Seasson (C. del Uruguay, E.R.)\nOne Break (C. del Uruguay, E.R.)",
  },
];

function VideoCard({ id, playing, onPlay, large = false }: { id: string; playing: boolean; onPlay: () => void; large?: boolean }) {
  return (
    <div className="relative overflow-hidden bg-[#111] w-full h-full">
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="Altamirano video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button className="absolute inset-0 w-full h-full group" onClick={onPlay} aria-label="Reproducir">
          <img
            src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`flex items-center justify-center rounded-full border-2 border-[#f0c96b] bg-black/30 backdrop-blur-sm group-hover:bg-[#f0c96b] transition-all duration-300 group-hover:scale-110 ${large ? "w-20 h-20" : "w-12 h-12"}`}>
              <svg className={`text-[#f0c96b] group-hover:text-[#0a0a0a] transition-colors ml-1 ${large ? "w-8 h-8" : "w-5 h-5"}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-xs font-mono tracking-[0.2em] text-[#f0c96b] uppercase">Reproducir</p>
          </div>
        </button>
      )}
    </div>
  );
}

const videos = [
  { id: "HLERVwZkzjc" },
  { id: "7RslkgwR5EU" },
  { id: "933Ruz1pyhg" },
];

export default function App() {
  const [bioIndex, setBioIndex] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = () => setBioIndex(i => (i - 1 + bioSlides.length) % bioSlides.length);
  const nextSlide = () => setBioIndex(i => (i + 1) % bioSlides.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? nextSlide() : prevSlide();
    touchStartX.current = null;
  };

  return (
    <div className="bg-[#0a0a0a] text-[#e0d8c8] font-sans snap-y snap-mandatory h-[100dvh] overflow-y-auto overflow-x-hidden">

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section className="relative w-full h-[100dvh] snap-start flex flex-col items-center justify-between py-14">
        <div className="absolute inset-0 z-0">
          <img src={mobileBg} alt="" className="block md:hidden w-full h-full object-cover object-center" />
          <img src={portBg} alt="" className="hidden md:block w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a] pointer-events-none" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-8 pb-20">
          <img src={logoImg} alt="Altamirano" className="w-[88vw] md:w-[70vw] max-w-[520px] object-contain drop-shadow-2xl filter invert opacity-90 translate-y-16 md:translate-y-0" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6 mb-8">
          <a href="mailto:altamirandband@gmail.com?subject=Press%20Kit%20Request" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
            <img src={kitImg} alt="Press Kit" className="h-9 md:h-16 object-contain drop-shadow-lg" />
          </a>
          <a href="#about" className="animate-bounce opacity-80 hover:opacity-100 transition-opacity">
            <img src={arrowImg} alt="Scroll" className="h-8 object-contain" />
          </a>
        </div>
      </section>

      {/* ══════════════════════════ THE JOURNEY ═══════════════════════════ */}
      <section id="about" className="journey-section relative w-full h-[100dvh] snap-start overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-end" style={{ paddingBottom: "2.5rem" }}>

        {/* Full-bleed video background */}
        <video className="absolute inset-0 w-full h-full object-cover object-center opacity-60" autoPlay muted loop playsInline>
          <source src={vid2} type="video/mp4" />
        </video>

        {/* Fade: dark bottom-left → transparent top-right */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 70% at 0% 100%, #0a0a0a 30%, rgba(10,10,10,0.6) 60%, rgba(10,10,10,0.0) 100%)'
        }} />

        {/* Bottom & top vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 20%, transparent 60%, #0a0a0a 100%)'
        }} />

        {/* Carousel — bottom-left */}
        <div className="relative z-10 w-full max-w-6xl px-6 md:px-16 lg:px-28" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="flex gap-5 max-w-[75%] md:max-w-2xl">
            {/* Golden bar — fixed, outside sliding content */}
            <div className="w-1 flex-shrink-0 bg-[#f0c96b]" />
            {/* Content + controls — all aligned with text */}
            <div className="flex-1">
              <div className="overflow-hidden">
                <div className="mb-10">
                  <p className="text-xs font-mono tracking-[0.35em] text-[#f0c96b] mb-2 uppercase">
                    {bioSlides[bioIndex].label}
                  </p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight mb-4">
                    {bioSlides[bioIndex].title}
                  </h2>
                </div>
                <div className="overflow-y-auto max-h-40 md:overflow-y-visible md:max-h-none pr-1 scrollbar-thin scrollbar-thumb-[#444] scrollbar-track-transparent">
                  <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                    {bioSlides[bioIndex].text.split("\n").map((line, j, arr) => (
                      <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
              </div>
              {/* Controls aligned with text content */}
              <div className="flex items-center gap-4 mt-6">
                <button onClick={prevSlide} className="text-[#f0c96b] hover:text-white transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {bioSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setBioIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === bioIndex ? "bg-[#f0c96b] w-4" : "bg-[#555] w-1.5"}`}
                    />
                  ))}
                </div>
                <button onClick={nextSlide} className="text-[#f0c96b] hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ VIDEOS ════════════════════════════════ */}
      <section id="shows" className="relative w-full h-[100dvh] snap-start bg-[#0f0d0a] flex flex-col items-center justify-center gap-6 md:gap-8 overflow-hidden" style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>

        {/* Background — desktop only */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <img src={backImg} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/20 to-[#0a0a0a] pointer-events-none" />
        </div>

        {/* Header */}
        <div className="relative z-10 w-full max-w-6xl px-6 md:px-16 lg:px-28 flex items-end gap-5 videos-label flex-shrink-0">
          <div className="w-1 self-stretch bg-[#f0c96b]" />
          <div>
            <p className="text-xs font-mono tracking-[0.35em] text-[#f0c96b] mb-2 uppercase">Altamirano</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">Videos</h2>
          </div>
        </div>

        {/* Editorial grid — fills remaining height on desktop */}
        <div className="relative z-10 w-full max-w-6xl px-6 md:px-16 lg:px-28 flex flex-col md:flex-row gap-3 md:flex-1 md:min-h-0">

          {/* Featured — mobile: aspect-video / desktop: full height */}
          <div className="md:w-[58%] flex-shrink-0 aspect-video md:aspect-auto md:h-full">
            <VideoCard id={videos[0].id} playing={playingId === videos[0].id} onPlay={() => setPlayingId(videos[0].id)} large />
          </div>

          {/* Two stacked — mobile: aspect-video each / desktop: flex halves */}
          <div className="flex flex-col gap-3 flex-1 md:h-full">
            <div className="aspect-video md:aspect-auto md:flex-1 md:min-h-0">
              <VideoCard id={videos[1].id} playing={playingId === videos[1].id} onPlay={() => setPlayingId(videos[1].id)} />
            </div>
            <div className="aspect-video md:aspect-auto md:flex-1 md:min-h-0">
              <VideoCard id={videos[2].id} playing={playingId === videos[2].id} onPlay={() => setPlayingId(videos[2].id)} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ CONNECT ═══════════════════════════════ */}
      <section id="contact" className="relative w-full min-h-[100dvh] snap-start bg-[#0a0a0a] flex flex-col items-center justify-center py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f0c96b]/20 to-transparent" />

        {/* Title */}
        <div className="w-full px-8 md:px-16 lg:px-28 mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-[#f0c96b] tracking-tighter uppercase">Connect</h2>
        </div>

        {/* Social links — centered row */}
        <div className="w-full max-w-2xl px-8 md:px-16 mb-10">
          <div className="grid grid-cols-3 gap-4">
            <a href="https://instagram.com/altamirand" target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 bg-[#1a1712] py-8 border border-transparent hover:border-[#f0c96b]/40 transition-colors">
              <Instagram className="w-7 h-7 text-[#ffd97a]" />
              <span className="text-xs font-mono tracking-widest text-[#aaa]">INSTAGRAM</span>
            </a>
            <a href="https://youtube.com/@altamirand" target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 bg-[#1a1712] py-8 border border-transparent hover:border-[#f0c96b]/40 transition-colors">
              <Youtube className="w-7 h-7 text-[#ffd97a]" />
              <span className="text-xs font-mono tracking-widest text-[#aaa]">YOUTUBE</span>
            </a>
            <a href="mailto:altamirandband@gmail.com"
              className="flex flex-col items-center justify-center gap-3 bg-[#1a1712] py-8 border border-transparent hover:border-[#f0c96b]/40 transition-colors">
              <Mail className="w-7 h-7 text-[#ffd97a]" />
              <span className="text-xs font-mono tracking-widest text-[#aaa]">BOOKING</span>
            </a>
          </div>
        </div>

        {/* Form — centered, max-width constrained */}
        <div className="w-full max-w-2xl px-8 md:px-16">
          <div className="bg-[#1a1712] p-8 md:p-10 border border-white/5">
            <h3 className="text-xl font-bold text-[#e0d8c8] mb-7 uppercase tracking-widest text-center">Inquiries</h3>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono text-[#aaa] tracking-widest uppercase">Name</label>
                <input type="text" id="name" className="bg-[#0a0a0a] border border-white/10 p-4 text-[#e0d8c8] focus:outline-none focus:border-[#f0c96b] transition-colors" placeholder="Your name" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono text-[#aaa] tracking-widest uppercase">Email</label>
                <input type="email" id="email" className="bg-[#0a0a0a] border border-white/10 p-4 text-[#e0d8c8] focus:outline-none focus:border-[#f0c96b] transition-colors" placeholder="hello@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono text-[#aaa] tracking-widest uppercase">Message</label>
                <textarea id="message" rows={4} className="bg-[#0a0a0a] border border-white/10 p-4 text-[#e0d8c8] focus:outline-none focus:border-[#f0c96b] transition-colors resize-none" placeholder="How can we help?" />
              </div>
              <button type="submit" className="mt-2 bg-[#f0c96b] text-[#0a0a0a] p-4 font-bold uppercase tracking-widest hover:bg-[#ffd97a] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
