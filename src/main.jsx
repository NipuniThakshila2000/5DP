import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  Lightbulb,
  Menu,
  MoveRight,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';
import portraitImage from './assets/portrait-conscience.png';
import ciqInsightImage from './assets/ciq-insight.png';

const navItems = [
  ['Program', '#program'],
  ['CIQ', '#ciq'],
  ['How It Works', '#experience'],
  ['Our Story', '#story'],
  ['FAQ', '#faq'],
];

const domains = [
  ['ATHLETE', 'Performance. Discipline. Pressure.'],
  ['LEADER', 'Responsibility. Decisions. Context.'],
  ['CREATIVE', 'Focus. Possibility. Expression.'],
  ['PROFESSIONAL', 'Expertise. Expectations. Identity.'],
];

const features = [
  ['BASELINE', 'Know where you started.'],
  ['CONTEXT', 'Understand what shapes you.'],
  ['INSIGHT', 'See patterns more clearly.'],
  ['DIRECTION', 'Know what to explore next.'],
];

const days = [
  ['DAY 01', 'ARRIVE', 'Begin with your baseline. Understand your starting point.'],
  ['DAY 02', 'EXPLORE', 'Begin working with your current state, context and patterns.'],
  ['DAY 03', 'REASSESS', 'Look again. Notice what has shifted, what has become clearer.'],
  ['DAY 04', 'PRACTISE', 'Explore practices and pathways relevant to your experience.'],
  ['DAY 05', 'THRIVE', 'Leave with insight, practice and direction.'],
];

const pathways = [
  ['PERFORMANCE', 'For people seeking greater awareness in high-performance environments.'],
  ['CREATIVITY', 'For people exploring focus, flow and creative possibility.'],
  ['RECOVERY', 'For people who need to understand their current state before increasing intensity.'],
  ['FLOW', 'For people exploring conditions that support deeper engagement and performance.'],
];

const audience = [
  ['ATHLETES', 'Perform with greater awareness.'],
  ['LEADERS', 'Understand pressure, responsibility and context.'],
  ['CREATIVES', 'Explore focus, flow and possibility.'],
  ['PROFESSIONALS', 'Understand how your domain shapes you.'],
  ['THE CURIOUS', 'Discover more about how you function.'],
];

const takeaways = [
  ['01', 'BASELINE', 'Know where you started.', BarChart3],
  ['02', 'INSIGHT', 'Understand your patterns and context.', Lightbulb],
  ['03', 'PRACTICE', 'Explore new ways of functioning.', Zap],
  ['04', 'DIRECTION', 'Know what to continue exploring.', MoveRight],
];

const faqs = [
  [
    'WHAT IS CIQ?',
    'CIQ is a framework and experience designed to help participants explore their current state, patterns, context and potential.',
  ],
  [
    'IS CIQ A MEDICAL DIAGNOSIS?',
    'No. It is not presented as a clinical diagnosis or a replacement for professional assessment or care.',
  ],
  [
    'WHO IS THE PROGRAM FOR?',
    'The program is designed for athletes, leaders, creatives, professionals and people interested in exploring human potential and performance.',
  ],
  [
    'WHY FIVE DAYS?',
    'The five-day structure creates space for a baseline, guided exploration, practice and reassessment rather than a single moment of reflection.',
  ],
  ['IS THIS ABOUT AI?', 'AI is part of the technology layer. The purpose remains the human being.'],
  ['DOES TECHNOLOGY REPLACE HUMAN GUIDANCE?', 'No. Technology supports the experience. The person remains at the centre.'],
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.18 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="CIQ home">CIQ</a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </nav>
      <a className="nav-cta" href="#join">Join the Program <ArrowRight size={15} /></a>
      <button
        className="menu-button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <div className={`mobile-panel ${open ? 'open' : ''}`}>
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="mobile-cta" href="#join" onClick={() => setOpen(false)}>
          Join the Program <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function Button({ href, children, variant = 'primary' }) {
  return (
    <a className={`button ${variant}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={16} />
    </a>
  );
}

function App() {
  useReveal();

  return (
    <>
      <Header />
      <main id="top">
        <section className="hero section-dark">
          <div className="hero-copy" data-reveal>
            <Eyebrow>Conscience × Technology × Human Potential</Eyebrow>
            <h1>Understand<br />How You<br />Function.</h1>
            <p className="hero-lede">
              A five-day experience exploring conscience, technology, performance and human potential.
            </p>
            <p className="hero-audience">
              For athletes, leaders, creatives, professionals and people with somewhere to go.
            </p>
            <div className="button-row">
              <Button href="#join">Join the Program</Button>
              <Button href="#ciq" variant="ghost">Explore CIQ</Button>
            </div>
          </div>
          <p className="hero-statement" data-reveal>Your starting point matters.</p>
        </section>

        <section className="idea section-ivory" id="program">
          <div className="section-copy" data-reveal>
            <Eyebrow>01 — The Big Idea</Eyebrow>
            <h2>The Human<br />Is The Point.</h2>
            <p>
              Technology can give us more information. The deeper question is what we do with it.
              CIQ brings conscience, context, technology and human potential into one five-day experience.
            </p>
            <p className="editorial">A new language for an old question.</p>
          </div>
          <img className="portrait-image" src={portraitImage} alt="Thoughtful human portrait in dramatic natural light" data-reveal />
        </section>

        <section className="problem image-band">
          <div className="band-copy" data-reveal>
            <Eyebrow>02 — The Problem</Eyebrow>
            <h2>We Learn The System.<br />Then The System Learns Us.</h2>
            <p>
              Our professions, communities, responsibilities and expectations shape how we think,
              respond and perform.
            </p>
            <p>The question is not simply: “How well am I functioning?”</p>
            <p>It is also: “Can I see the pattern I am functioning within?”</p>
          </div>
          <div className="avant-text" data-reveal>
            <span>Pattern.</span><span>Pressure.</span><span>Performance.</span><span>Possibility.</span>
          </div>
        </section>

        <section className="domain section-ivory">
          <div className="split-heading" data-reveal>
            <Eyebrow>03 — Epistemic Consciousness</Eyebrow>
            <h2>Different Domain.<br />Different Demands.</h2>
          </div>
          <p className="measure" data-reveal>
            A doctor works within one set of responsibilities. An athlete works within another.
            A leader, lawyer, creative or professional carries a different set of expectations.
            CIQ explores how context, values and patterns shape the way we function within our world.
          </p>
          <div className="card-grid four">
            {domains.map(([title, text]) => (
              <article className="line-card" key={title} data-reveal>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ciq section-dark" id="ciq">
          <div className="section-copy" data-reveal>
            <Eyebrow>04 — CIQ</Eyebrow>
            <h2>Conscience,<br />Made Visible.</h2>
            <p>
              CIQ provides a starting point for exploring your current state, patterns and context.
              The experience begins with a baseline. It then uses that starting point to shape what comes next.
            </p>
            <p className="disclaimer">
              CIQ is not presented as a medical diagnosis or a replacement for professional care.
            </p>
          </div>
          <div className="tech-panel" data-reveal>
            <img src={ciqInsightImage} alt="Person reflecting beside a warm interactive intelligence display" />
          </div>
          <div className="feature-row">
            {features.map(([title, text]) => (
              <div key={title} data-reveal>
                <span>{title}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="experience section-ivory" id="experience">
          <div className="center-copy" data-reveal>
            <Eyebrow>05 — The Experience</Eyebrow>
            <h2>Five Days.<br />One Starting Point.</h2>
            <p>
              You do not arrive with the same story as everyone else. The five-day experience begins
              by understanding where you are, then creates space to explore where you could go.
            </p>
          </div>
          <div className="timeline">
            {days.map(([day, title, text]) => (
              <article className="day" key={day} data-reveal>
                <span>{day}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="note" data-reveal>
            These day labels are presentation-friendly interpretations. If the actual official program schedule has different day names, replace them.
          </p>
        </section>

        <section className="pathways section-dark">
          <div className="split-heading" data-reveal>
            <Eyebrow>06 — Built Around You</Eyebrow>
            <h2>Your Starting<br />Point Matters.</h2>
          </div>
          <p className="measure" data-reveal>
            The same experience does not have to mean the same pathway. Based on the program concept,
            participants may have different areas of focus, including:
          </p>
          <div className="editorial-cards">
            {pathways.map(([title, text]) => (
              <article key={title} data-reveal>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="responsible section-editorial">
          <div data-reveal>
            <Eyebrow>07 — Responsible Growth</Eyebrow>
            <h2>More Pressure<br />Isn't Always The Answer.</h2>
          </div>
          <div data-reveal>
            <p>
              Growth begins with awareness. Before asking someone to perform more, we need to
              understand where they are starting from.
            </p>
            <p>
              For participants dealing with significant trauma or serious personal difficulties,
              appropriate professional care remains important.
            </p>
          </div>
          <p className="stacked-accent" data-reveal>Awareness<br />Before<br />Intensity.</p>
        </section>

        <section className="freedom section-dark">
          <div className="section-copy" data-reveal>
            <Eyebrow>08 — Architecture Of Freedom</Eyebrow>
            <h2>Freedom Is Not<br />The Absence Of Structure.</h2>
            <p>
              We live inside systems. Our work. Our communities. Our responsibilities. Our expectations.
              Understanding the system is one thing. Learning to function within it is another.
            </p>
            <p>
              Growth can also mean recognising when a pattern no longer serves the person you are becoming.
            </p>
          </div>
          <div className="statement-stack" data-reveal>
            <span>Know the pattern.</span>
            <span>Function within it.</span>
            <span>Move beyond it.</span>
          </div>
        </section>

        <section className="story section-ivory" id="story">
          <div className="section-copy" data-reveal>
            <Eyebrow>09 — Conscience</Eyebrow>
            <h2>Before AI,<br />There Was Conscience.</h2>
            <p>
              Questions about conscience, responsibility, truth and how we should live are not new.
              The theological tradition explored in the CIQ story gives this work a deeper foundation.
            </p>
          </div>
          <div className="heritage" data-reveal>
            {['Martin Luther', 'William Perkins', 'Theology of Conscience', 'WOW Conscience Teaching', 'Modern Technology', 'CIQ', 'AI', 'Human Flourishing'].map((item, index) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {index < 7 && <ChevronDown size={20} />}
              </React.Fragment>
            ))}
          </div>
          <p className="quote" data-reveal>An old question. A new language.</p>
        </section>

        <section className="legacy image-split">
          <div className="overlay-copy" data-reveal>
            <Eyebrow>10 - Legacy</Eyebrow>
            <h2>What We Carry<br />Can Become What We Build.</h2>
            <p>
              The idea behind CIQ is not simply to add technology to an existing conversation. It is
              to explore how a long-running conversation about conscience can meet a new technological age.
            </p>
            <p className="short-statement">From foundation<br />to innovation.</p>
          </div>
        </section>

        <section className="flourishing section-ivory">
          <div data-reveal>
            <Eyebrow>11 — Human Flourishing</Eyebrow>
            <h2>The Goal Is<br />Bigger Than Performance.</h2>
          </div>
          <p data-reveal>
            Performance asks: “How well can you function?” Flourishing asks:
            “What kind of human can you become?”
          </p>
          <div className="flourish-word" data-reveal>Flourish.</div>
        </section>

        <section className="audience section-dark">
          <div className="split-heading" data-reveal>
            <Eyebrow>12 — Who Is It For?</Eyebrow>
            <h2>Built For People<br />With Somewhere To Go.</h2>
          </div>
          <div className="card-grid five">
            {audience.map(([title, text]) => (
              <article className="line-card dark-card" key={title} data-reveal>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <Button href="#experience" variant="ghost">Explore the Experience</Button>
        </section>

        <section className="takeaways section-ivory">
          <div className="center-copy" data-reveal>
            <Eyebrow>13 — What You Leave With</Eyebrow>
            <h2>Take It With You.</h2>
          </div>
          <div className="takeaway-grid">
            {takeaways.map(([num, title, text, Icon]) => (
              <article key={title} data-reveal>
                <Icon size={24} />
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="faq section-ivory" id="faq">
          <div className="split-heading" data-reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2>Questions<br />Before You Begin.</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question} data-reveal>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta section-dark" id="join">
          <div data-reveal>
            <Eyebrow>A Five-Day Experience</Eyebrow>
            <h2>Your Starting<br />Point Is Here.</h2>
            <p className="transform">Understand. Function. Transform. Flourish.</p>
            <p>
              A five-day experience exploring conscience, technology, performance and human potential.
            </p>
            <div className="button-row">
              <Button href="#join">Join the Program</Button>
              <Button href="#ciq" variant="ghost">Explore CIQ</Button>
            </div>
            <p className="footer-line">The human is the point.</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div>
          <a className="brand" href="#top">CIQ</a>
          <p>Conscience × Technology × Human Potential</p>
        </div>
        <nav aria-label="Footer navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>
        <p>The human is the point.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
