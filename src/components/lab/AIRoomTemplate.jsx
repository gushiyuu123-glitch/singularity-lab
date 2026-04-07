import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AIRoomTemplate({ room }) {
  const rootRef = useRef(null);
  const coreWrapRef = useRef(null);
  const coreRef = useRef(null);
  const titleRef = useRef(null);
  const ghostRef = useRef(null);
  const beamRef = useRef(null);
  const particleRef = useRef([]);
  const ringRefs = useRef([]);

  const shortTitle = useMemo(() => {
    return room.title.split("—")[0].trim().toUpperCase();
  }, [room.title]);

  const subTitle = useMemo(() => {
    return room.title.split("—")[1]?.trim() || "";
  }, [room.title]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (coreWrapRef.current) {
        gsap.to(coreWrapRef.current, {
          y: -10,
          duration: 6.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (coreRef.current) {
        gsap.to(coreRef.current, {
          rotate: 360,
          duration: 36,
          ease: "none",
          repeat: -1,
        });

        gsap.to(coreRef.current, {
          scale: 1.018,
          duration: 7.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (titleRef.current) {
        gsap.to(titleRef.current, {
          y: -5,
          duration: 5.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (ghostRef.current) {
        gsap.to(ghostRef.current, {
          x: 12,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (beamRef.current) {
        gsap.to(beamRef.current, {
          opacity: 0.22,
          duration: 4.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      ringRefs.current.forEach((ring, i) => {
        if (!ring) return;
        gsap.to(ring, {
          rotate: i % 2 === 0 ? 360 : -360,
          duration: 34 + i * 8,
          ease: "none",
          repeat: -1,
        });
      });

      particleRef.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.72,
            y: 0,
          },
          {
            opacity: gsap.utils.random(0.22, 0.56),
            scale: 1,
            y: gsap.utils.random(-10, 10),
            duration: gsap.utils.random(1.8, 3.2),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.12,
          }
        );
      });

      gsap.to(".room-hud-pulse", {
        opacity: 0.42,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });

      gsap.to(".room-hud-shift", {
        y: -6,
        duration: 4.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.45,
      });

      gsap.utils.toArray(".fade-sec").forEach((sec, i) => {
        gsap.fromTo(
          sec,
          {
            opacity: 0,
            y: 34,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.0,
            delay: i * 0.02,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 84%",
            },
          }
        );
      });

      gsap.utils.toArray(".cap-bar-fill").forEach((bar) => {
        const width = bar.dataset.width;
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 92%",
              once: true,
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [room]);

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen w-full overflow-hidden bg-bg text-text-primary"
    >
      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0 z-[0] overflow-hidden">
        <div className="absolute inset-0 bg-[#020611]" />

        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "112px 112px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.018] mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            background: `radial-gradient(circle at 50% 18%, ${room.theme.soft}, transparent 56%)`,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            background: `linear-gradient(118deg, ${room.theme.glow}, transparent 52%)`,
          }}
        />

        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/18 to-transparent" />

        <div
          className="absolute left-[12%] top-[14%] h-[320px] w-[320px] rounded-full blur-3xl"
          style={{ background: room.theme.glow }}
        />
        <div
          className="absolute right-[8%] top-[24%] h-[260px] w-[260px] rounded-full blur-3xl"
          style={{ background: room.theme.soft }}
        />

        <span
          className={`absolute left-[16%] top-[22%] h-[7px] w-[7px] rounded-full blur-[6px] ${room.theme.dotClass}`}
        />
        <span
          className={`absolute left-[76%] top-[20%] h-[8px] w-[8px] rounded-full blur-[7px] ${room.theme.dotClass}`}
        />
        <span
          className={`absolute left-[68%] top-[62%] h-[8px] w-[8px] rounded-full blur-[7px] ${room.theme.dotClass}`}
        />
        <span className="absolute left-[28%] top-[72%] h-[7px] w-[7px] rounded-full bg-white/50 blur-[7px]" />

        <div className="absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-[#020611] to-transparent" />
      </div>

      {/* =========================
          HERO
      ========================== */}
      <section className="relative z-[1] flex min-h-[96vh] items-center justify-center overflow-hidden px-6 pb-16 pt-24 lg:px-10">
        <div
          ref={ghostRef}
          className="pointer-events-none absolute left-[4%] top-[8%] select-none text-[110px] font-black uppercase leading-none tracking-[0.14em] text-white/[0.03] xl:text-[172px]"
        >
          {shortTitle}
        </div>

        <div
          ref={beamRef}
          className="pointer-events-none absolute left-1/2 top-[8%] z-[1] h-[84%] w-[220px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(170,240,255,0.08)_0%,rgba(170,240,255,0.03)_34%,transparent_76%)] blur-[18px]"
        />

        <div className="container relative z-[2]">
          <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
            {/* left */}
            <div className="relative">
              <div className="mb-5 flex items-center gap-4">
                <span className={`sg-label ${room.theme.accentClass}`}>
                  {room.badge}
                </span>
                <span className="h-px w-16 bg-gradient-to-r from-white/24 to-transparent" />
                <span className="sg-meta">{room.version || "CURRENT PROFILE"}</span>
              </div>

              <div className="relative max-w-[720px]">
                <div className="sg-title-ghost absolute -left-1 -top-10 text-[68px] xl:text-[108px]">
                  {shortTitle}
                </div>

                <h1
                  ref={titleRef}
                  className="relative text-[38px] font-semibold leading-[0.94] tracking-[-0.034em] text-white md:text-[54px] xl:text-[74px]"
                >
                  <span className="sg-hero-title-glow block">
                    {room.title.split("—")[0].trim()}
                  </span>
                  <span className="sg-hero-title-spectrum mt-3 block text-[18px] font-medium tracking-[0.18em] md:text-[23px] xl:text-[27px]">
                    {subTitle}
                  </span>
                </h1>

                <div className="mt-7 max-w-[620px] space-y-4">
                  <p className="text-[15.5px] leading-[1.95] text-text-secondary">
                    この部屋は、{room.title.split("—")[0].trim()} の知性を
                    ただ説明するためではなく、世界観ごと体験させるための観測室。
                  </p>
                  <p className="text-[14.5px] leading-[1.95] text-text-muted">
                    単なる性能比較ではなく、思考の質感、知覚の方向、
                    処理の癖まで含めて空間化している。
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {room.status.map((item, index) => (
                    <div key={item.label} className="sg-chip room-hud-pulse">
                      <span
                        className={`sg-chip-dot ${
                          index === 0 ? room.theme.dotClass : ""
                        }`}
                      />
                      <span className="sg-chip-meta">{item.label}</span>
                      <span className="sg-chip-value">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* right / core */}
            <div className="relative flex items-center justify-center">
              <div
                ref={coreWrapRef}
                className="relative z-[3] flex h-[300px] w-[300px] items-center justify-center md:h-[420px] md:w-[420px] xl:h-[620px] xl:w-[620px]"
              >
                <div
                  className="absolute bottom-[-24px] left-1/2 h-[64px] w-[220px] -translate-x-1/2 rounded-full opacity-[0.52] blur-[42px]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,0,0,0.58) 0%, transparent 70%)",
                  }}
                />

                <div
                  className="absolute inset-0 rounded-full opacity-[0.24]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.24), transparent 72%)",
                  }}
                />

                <div
                  className="absolute inset-0 rounded-full opacity-[0.16] mix-blend-screen"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.22), transparent 60%)",
                  }}
                />

                <div
                  className="absolute inset-[4%] rounded-full opacity-[0.18]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.34), rgba(255,255,255,0.10) 36%, transparent 72%)",
                  }}
                />

                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    ref={(el) => (particleRef.current[i] = el)}
                    className={`absolute h-[14px] w-[14px] rounded-full opacity-0 blur-[12px] ${room.theme.dotClass}`}
                    style={{
                      top: `${gsap.utils.random(10, 90)}%`,
                      left: `${gsap.utils.random(10, 90)}%`,
                    }}
                  />
                ))}

                <div
                  ref={(el) => (ringRefs.current[0] = el)}
                  className="pointer-events-none absolute inset-[6%] rounded-full border border-white/8"
                  style={{ transform: "rotate(24deg) scaleX(1.08)" }}
                />
                <div
                  ref={(el) => (ringRefs.current[1] = el)}
                  className="pointer-events-none absolute inset-[14%] rounded-full border border-white/8"
                  style={{ transform: "rotate(-32deg) scaleX(0.86)" }}
                />
                <div
                  ref={(el) => (ringRefs.current[2] = el)}
                  className="pointer-events-none absolute inset-[22%] rounded-full border border-white/8"
                  style={{ transform: "rotate(54deg) scaleX(1.12)" }}
                />

                <img
                  ref={coreRef}
                  src={room.heroImage}
                  alt={room.title}
                  className="pointer-events-none relative h-full w-full select-none object-contain opacity-[0.98] drop-shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                />

                <div
                  className="absolute inset-0 rounded-full opacity-[0.1] mix-blend-screen"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 28%, rgba(255,255,255,0.22), transparent 66%)",
                  }}
                />
              </div>

              {/* side hud left */}
              <div className="room-hud-shift absolute left-0 top-[10%] hidden w-[220px] xl:block">
                <div className="sg-hud p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="sg-label-soft">CORE STATUS</span>
                    <span className={`sg-meta ${room.theme.accentClass}`}>ONLINE</span>
                  </div>

                  <div className="space-y-3 font-mono text-[11px] text-text-muted">
                    {room.status.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <span className="text-text-primary">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* side hud right */}
              <div className="room-hud-shift absolute right-0 top-[10%] hidden w-[248px] xl:block">
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
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="sg-card p-8 lg:p-10">
              <div className="mb-6 flex items-center justify-between">
                <p className="sg-label-soft">LOG-00｜OVERVIEW</p>
                <span className={`sg-meta ${room.theme.accentClass}`}>
                  MODEL PROFILE
                </span>
              </div>

              <h2 className="mb-6 text-[24px] font-medium tracking-[0.12em] text-white md:text-[28px]">
                00｜この部屋の役割
              </h2>

              <div className="space-y-5">
                <p className="text-[15.5px] leading-[2] text-text-secondary">
                  このルームは、{room.title.split("—")[0].trim()} を情報として理解するためではなく、
                  そのAIが持つ知性の質感そのものを体験するための空間。
                </p>
                <p className="text-[15.5px] leading-[2] text-text-muted">
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
                      <span className="font-mono text-text-secondary">
                        {item.value}%
                      </span>
                    </div>

                    <div className="h-[7px] overflow-hidden rounded-full bg-white/6">
                      <div
                        className={`cap-bar-fill h-full rounded-full ${room.theme.barClass}`}
                        data-width={`${item.value}%`}
                        style={{ width: "0%" }}
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

              <h2 className="mb-8 text-[24px] font-medium tracking-[0.12em] text-white md:text-[28px]">
                {section.title}
              </h2>

              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
                <div className="sg-hud p-5">
                  <p className="sg-label-soft mb-3">SECTION NOTE</p>
                  <p className="text-[13px] leading-[1.88] text-text-muted">
                    このセクションでは、{room.title.split("—")[0].trim()} の
                    「{section.title.replace(/^\d+｜/, "")}」を、
                    世界観・構造・限界まで含めて立体的に読む。
                  </p>
                </div>

                <div className="space-y-5">
                  {section.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[15.5px] leading-[2] text-text-secondary"
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

      {/* =========================
          IMPORTANT NOTES
      ========================== */}
      <section className="fade-sec relative z-[1] pb-24 pt-10 lg:pb-28">
        <div className="container">
          <div className="sg-card p-8 lg:p-10">
            <div className="mb-6 flex items-center justify-between">
              <p className="sg-label-soft">FINAL NOTES</p>
              <span className="sg-meta">OPERATION GUIDE</span>
            </div>

            <h2 className="mb-7 text-[24px] font-medium tracking-[0.12em] text-white md:text-[28px]">
              06｜重要メモ
            </h2>

            <div className="space-y-4">
              {room.importantNotes.map((note, i) => (
                <div
                  key={i}
                  className="rounded-[22px] border border-white/10 bg-white/[0.02] p-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className={`h-[5px] w-[5px] rounded-full ${room.theme.dotClass}`} />
                    <span className="font-mono text-[10px] tracking-[0.16em] text-white/34">
                      NOTE-{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.9] text-text-secondary">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}