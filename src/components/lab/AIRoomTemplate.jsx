import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AIRoomTemplate({ room }) {
  const coreRef = useRef(null);
  const titleRef = useRef(null);
  const ghostRef = useRef(null);
  const particleRef = useRef([]);

  const shortTitle = useMemo(() => {
    return room.title.split("—")[0].trim().toUpperCase();
  }, [room.title]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (coreRef.current) {
        gsap.to(coreRef.current, {
          rotate: 360,
          duration: 28,
          ease: "none",
          repeat: -1,
        });

        gsap.to(coreRef.current, {
          scale: 1.022,
          duration: 6.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (titleRef.current) {
        gsap.to(titleRef.current, {
          y: -6,
          duration: 4.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (ghostRef.current) {
        gsap.to(ghostRef.current, {
          x: 10,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      particleRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.6,
            rotate: gsap.utils.random(-40, 40),
          },
          {
            opacity: gsap.utils.random(0.35, 0.86),
            scale: 1,
            duration: gsap.utils.random(0.5, 1.1),
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: i * 0.08,
          }
        );
      });

      gsap.to(".room-hud-pulse", {
        opacity: 0.34,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.35,
      });

      gsap.to(".room-hud-shift", {
        x: 10,
        duration: 4.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });

      gsap.utils.toArray(".fade-sec").forEach((sec, i) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.15,
            delay: i * 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 82%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-bg text-text-primary">
      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0 z-[0] overflow-hidden">
        <div className="absolute inset-0 bg-[#020611]" />

        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "112px 112px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            background: `radial-gradient(circle at 50% 18%, ${room.theme.soft}, transparent 58%)`,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            background: `linear-gradient(118deg, ${room.theme.glow}, transparent 52%)`,
          }}
        />

        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/22 to-transparent" />

        <div className="absolute left-[12%] top-[14%] h-[320px] w-[320px] rounded-full blur-3xl" style={{ background: room.theme.glow }} />
        <div className="absolute right-[8%] top-[24%] h-[260px] w-[260px] rounded-full blur-3xl" style={{ background: room.theme.soft }} />

        <span className={`absolute left-[16%] top-[22%] h-[7px] w-[7px] rounded-full blur-[6px] ${room.theme.dotClass}`} />
        <span className={`absolute left-[76%] top-[20%] h-[8px] w-[8px] rounded-full blur-[7px] ${room.theme.dotClass}`} />
        <span className={`absolute left-[68%] top-[62%] h-[8px] w-[8px] rounded-full blur-[7px] ${room.theme.dotClass}`} />
        <span className="absolute left-[28%] top-[72%] h-[7px] w-[7px] rounded-full bg-white/60 blur-[7px]" />
      </div>

      {/* =========================
          HERO
      ========================== */}
      <section className="relative z-[1] flex min-h-[96vh] items-center justify-center overflow-hidden px-6 pt-24 pb-16 lg:px-10">
        {/* giant ghost title */}
        <div
          ref={ghostRef}
          className="pointer-events-none absolute left-[4%] top-[9%] select-none text-[120px] font-black uppercase leading-none tracking-[0.14em] text-white/[0.04] xl:text-[180px]"
        >
          {shortTitle}
        </div>

        {/* center beam */}
        <div className="pointer-events-none absolute left-1/2 top-[8%] z-[1] h-[84%] w-[240px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(170,240,255,0.10)_0%,rgba(170,240,255,0.04)_36%,transparent_74%)] blur-[16px]" />

        <div className="container relative z-[2]">
          <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            {/* left */}
            <div className="relative">
              <div className="mb-5 flex items-center gap-4">
                <span className={`sg-label ${room.theme.accentClass}`}>{room.badge}</span>
                <span className="h-px w-16 bg-gradient-to-r from-white/26 to-transparent" />
                <span className="sg-meta">{room.version}</span>
              </div>

              <div className="relative max-w-[720px]">
                <div className="sg-title-ghost absolute -left-1 -top-10 text-[72px] xl:text-[112px]">
                  {shortTitle}
                </div>

                <h1
                  ref={titleRef}
                  className="relative text-[38px] font-semibold leading-[0.96] tracking-[-0.03em] text-white md:text-[54px] xl:text-[76px]"
                >
                  <span className="sg-hero-title-glow block">
                    {room.title.split("—")[0].trim()}
                  </span>
                  <span className="sg-hero-title-spectrum mt-2 block text-[20px] font-medium tracking-[0.18em] md:text-[24px] xl:text-[28px]">
                    {room.title.split("—")[1]?.trim() || ""}
                  </span>
                </h1>

                <div className="mt-6 max-w-[620px] space-y-4">
                  <p className="text-[16px] leading-[1.95] text-text-secondary">
                    この部屋は、{room.title.split("—")[0].trim()} の知性を
                    ただ説明するためではなく、世界観ごと体験させるための観測室。
                  </p>
                  <p className="text-[15px] leading-[1.95] text-text-muted">
                    単なる性能比較ではなく、思考の質感、知覚の方向、処理の癖まで含めて空間化している。
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {room.status.map((item, index) => (
                    <div key={item.label} className="sg-chip room-hud-pulse">
                      <span className={`sg-chip-dot ${index === 0 ? room.theme.dotClass : ""}`} />
                      <span className="sg-chip-meta">{item.label}</span>
                      <span className="sg-chip-value">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* right / core */}
            <div className="relative flex items-center justify-center">
              <div className="relative z-[3] flex h-[300px] w-[300px] items-center justify-center md:h-[420px] md:w-[420px] xl:h-[620px] xl:w-[620px]">
                <div
                  className="absolute bottom-[-24px] left-1/2 h-[64px] w-[220px] -translate-x-1/2 rounded-full opacity-[0.55] blur-[42px]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,0,0,0.58) 0%, transparent 70%)",
                  }}
                />

                <div
                  className="absolute inset-0 rounded-full opacity-[0.34]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.32), transparent 70%)",
                  }}
                />

                <div
                  className="absolute inset-0 rounded-full opacity-[0.26] mix-blend-screen"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.30), transparent 60%)",
                  }}
                />

                <div
                  className="absolute inset-0 rounded-full opacity-[0.18] mix-blend-screen"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(180,180,255,0.18), transparent 56%)",
                  }}
                />

                <div
                  className="absolute inset-[3%] rounded-full opacity-[0.22]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.46), rgba(255,255,255,0.18) 35%, transparent 70%)",
                  }}
                />

                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    ref={(el) => (particleRef.current[i] = el)}
                    className={`absolute h-[14px] w-[14px] rounded-full opacity-0 blur-[12px] ${room.theme.dotClass}`}
                    style={{
                      top: `${gsap.utils.random(8, 92)}%`,
                      left: `${gsap.utils.random(8, 92)}%`,
                    }}
                  />
                ))}

                {/* orbit rings */}
                <div className="pointer-events-none absolute inset-[6%] rounded-full border border-white/10 [transform:rotate(24deg)_scaleX(1.08)]" />
                <div className="pointer-events-none absolute inset-[14%] rounded-full border border-white/10 [transform:rotate(-32deg)_scaleX(0.86)]" />
                <div className="pointer-events-none absolute inset-[22%] rounded-full border border-white/10 [transform:rotate(54deg)_scaleX(1.12)]" />

                <img
                  ref={coreRef}
                  src={room.heroImage}
                  alt={room.title}
                  className="relative h-full w-full object-contain opacity-[0.98] pointer-events-none select-none drop-shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                />

                <div
                  className="absolute inset-0 rounded-full opacity-[0.14] mix-blend-screen"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 28%, rgba(255,255,255,0.26), transparent 65%)",
                  }}
                />
              </div>

              {/* side hud left */}
              <div className="room-hud-shift absolute left-0 top-[10%] hidden w-[230px] xl:block">
                <div className="sg-hud p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="sg-label-soft">CORE STATUS</span>
                    <span className={`sg-meta ${room.theme.accentClass}`}>ONLINE</span>
                  </div>

                  <div className="space-y-3 font-mono text-[11px] text-text-muted">
                    {room.status.map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <span>{item.label}</span>
                        <span className="text-text-primary">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* side hud right */}
              <div className="room-hud-shift absolute right-0 top-[10%] hidden w-[260px] xl:block">
                <div className="sg-hud p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="sg-label-soft">{room.sideLabel}</span>
                    <span className="sg-meta">{room.systemId}</span>
                  </div>

                  <p className="text-[12px] leading-[1.85] text-text-secondary">
                    {room.sideText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CAPABILITY
      ========================== */}
      <section className="fade-sec relative z-[1] py-22 lg:py-26">
        <div className="container">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <div className="sg-card p-8 lg:p-10">
              <div className="mb-6 flex items-center justify-between">
                <p className="sg-label-soft">LOG-00｜OVERVIEW</p>
                <span className={`sg-meta ${room.theme.accentClass}`}>MODEL PROFILE</span>
              </div>

              <h2 className="mb-6 text-[24px] font-medium tracking-[0.14em] text-white md:text-[28px]">
                00｜この部屋の役割
              </h2>

              <div className="space-y-5">
                <p className="text-[16px] leading-[2] text-text-secondary">
                  このルームは、{room.title.split("—")[0].trim()} を
                  情報として理解するためではなく、
                  そのAIが持つ知性の質感そのものを体験するための空間。
                </p>
                <p className="text-[16px] leading-[2] text-text-muted">
                  処理能力、思考姿勢、感性の方向、世界との接し方。
                  それらを“部屋”として再構成し、視覚と文章の両方で立ち上げている。
                </p>
              </div>
            </div>

            <div className="sg-card p-6 lg:p-7">
              <div className="mb-5 flex items-center justify-between">
                <p className="sg-label-soft">CAPABILITY MATRIX</p>
                <span className="sg-meta">INTELLIGENCE MAP</span>
              </div>

              <div className="space-y-5">
                {room.capability.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-[11px]">
                      <span className="sg-meta text-white/56">{item.label}</span>
                      <span className="font-mono text-text-secondary">{item.value}%</span>
                    </div>

                    <div className="h-[7px] overflow-hidden rounded-full bg-white/6">
                      <div
                        className={`h-full rounded-full ${room.theme.barClass}`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SECTIONS
      ========================== */}
      {room.sections.map((section, index) => (
        <section key={index} className="fade-sec relative z-[1] py-22 lg:py-26">
          <div className="container">
            <div className="sg-card p-8 lg:p-10">
              <div className="mb-6 flex items-center justify-between">
                <p className="sg-label-soft">{section.log}</p>
                <span className="sg-meta">{section.layer}</span>
              </div>

              <h2 className="mb-8 text-[24px] font-medium tracking-[0.14em] text-white md:text-[28px]">
                {section.title}
              </h2>

              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="sg-hud p-5">
                  <p className="sg-label-soft mb-3">SECTION NOTE</p>
                  <p className="text-[13px] leading-[1.9] text-text-muted">
                    このセクションでは、{room.title.split("—")[0].trim()} の
                    「{section.title.replace(/^\d+｜/, "")}」を、
                    世界観・構造・限界まで含めて立体的に読む。
                  </p>
                </div>

                <div className="space-y-5">
                  {section.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[16px] leading-[2] text-text-secondary"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}