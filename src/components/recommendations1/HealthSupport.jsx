import React from 'react';

const supportOptions = [
  {
    title: '🧑‍⚕️ Therapy (Counseling & Psychotherapy)',
    description: `Therapy involves working with a licensed mental health professional to explore emotional challenges, mental health conditions, or life stressors. Therapists use evidence-based approaches such as Cognitive Behavioral Therapy (CBT), Psychodynamic Therapy, and others.

Benefits:
- Gain insights into thought patterns and emotions
- Heal from trauma or grief
- Learn coping strategies and communication skills`
  },
  {
    title: '🧠 Mental Health Coaching',
    description: `Mental health coaches help individuals set goals and build emotional resilience through practical strategies and future-oriented support. Coaches are not licensed therapists, but they can help with clarity, focus, and mental wellness.

Benefits:
- Build better habits and mindset
- Stay motivated and accountable
- Ideal for personal development, productivity, and low-stress support`
  },
  {
    title: '🤝 Peer Support Groups',
    description: `These are group sessions led by trained facilitators or peers with shared experiences. They focus on connection, community, and shared understanding.

Types:
- Anxiety & Depression support groups
- Grief circles
- Online forums (e.g., 7 Cups, Reddit MH communities)

Benefits:
- Feel less alone in your journey
- Learn from others' coping strategies
- Build a sense of belonging`
  }
];

const SupportOptions = () => {
  return (
    <div style={{ backgroundColor: '#FCEEBD', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#000', marginBottom: '1.5rem' }}>
        Types of Mental Health Support
      </h1>
      <p style={{ textAlign: 'center', color: '#333', marginBottom: '2rem', maxWidth: '700px', marginInline: 'auto' }}>
        Explore different support options based on your needs, comfort level, and lifestyle. Whether you're seeking professional help or peer connection, there's a pathway for everyone.
      </p>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {supportOptions.map((option, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ marginBottom: '0.8rem', color: '#222' }}>{option.title}</h2>
            <p style={{ whiteSpace: 'pre-line', lineHeight: '1.6', color: '#444' }}>
              {option.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportOptions;