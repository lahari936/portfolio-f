import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView(0.15)

  const focusAreas = [
    { icon: <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>, title: 'Computer Vision', desc: 'Building face detection pipelines with SCRFD, YuNet, OpenCV and ONNX Runtime for real-time commercial applications.' },
    { icon: <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>, title: 'Full Stack (MERN)', desc: 'Designing REST APIs, scalable backends, and clean React frontends for production-ready web applications.' },
    { icon: <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: 'AI / ML', desc: 'Accent classification with SVM + Whisper, deep learning inference, and building speech AI pipelines with 85.3% accuracy.' },
    { icon: <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: 'Data Analysis', desc: 'Crypto Volatility & Risk Analysis using Python and Pandas on real-world financial data; automated analysis workflows.' },
  ]

  return (
    <section id="about" className="py-44 relative" ref={ref}>
      <div className="glow-orb w-[400px] h-[400px] top-0 right-[-100px] bg-yellow-500/8" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4">Who I Am</p>
          <h2 className="section-heading text-white mb-5">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-card p-9 space-y-6">
              <p className="text-stone-300 text-base leading-[2.0]">
                I'm a <span className="text-white font-semibold">B.Tech CSE (AI & ML)</span> student at BV Raju Institute of Technology with hands-on internship experience in <span className="text-yellow-300 font-medium">Computer Vision, Full-Stack Development, and Data Analysis</span>. SGPA: <span className="text-yellow-400 font-semibold">9.4</span>.
              </p>
              <p className="text-stone-300 text-base leading-[2.0]">
                Built production-relevant systems including <span className="text-white font-semibold">face detection pipelines</span>, accent classification models, and a <span className="text-white font-semibold">MERN trading platform</span>. Strong in Python and JavaScript; comfortable with deep learning inference, REST APIs, and remote team workflows.
              </p>
              <p className="text-stone-300 text-base leading-[2.0]">
                <span className="text-yellow-300 font-medium">Google Gemini Campus Ambassador</span> — driving AI awareness through workshops and peer sessions, promoting responsible AI adoption on campus.
              </p>
            </div>

            {/* Education card */}
            <div className="glass-card p-7 flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/12 border border-yellow-500/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v7" /></svg>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">B.Tech — CSE (AI & ML)</div>
                <div className="text-stone-400 text-sm mt-1">BV Raju Institute of Technology, Narsapur</div>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-yellow-400 text-xs font-semibold">2024 – 2028</span>
                  <span className="w-1 h-1 rounded-full bg-stone-600" />
                  <span className="text-green-400 text-xs font-bold">SGPA: 9.4</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="glass-card p-6 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="mb-4 flex items-center justify-center w-12 h-12 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform">{area.icon}</div>
                <div className="text-white font-semibold text-sm mb-2.5 group-hover:text-yellow-300 transition-colors">{area.title}</div>
                <div className="text-stone-500 text-xs leading-relaxed">{area.desc}</div>
              </motion.div>
            ))}

            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="sm:col-span-2 glass-card p-6"
            >
              <div className="text-xs text-stone-500 uppercase tracking-widest font-semibold mb-4">Quick Info</div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                {[
                  ['Location', 'Narsapur, India'],
                  ['Email', 'lahariraparthi1@gmail.com'],
                  ['College', 'BVRIT'],
                  ['Status', 'Open to work'],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-0.5">
                    <span className="text-stone-500 text-xs">{k}</span>
                    <span className="text-stone-300 text-xs font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
