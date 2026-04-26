const { useState, useEffect } = React;

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 text-center">
      <h1 className="text-8xl tracking-tight font-semibold mb-8">Revolutionize Your Workflow</h1>
      <p className="text-lg leading-relaxed text-neutral-400 mb-16">Experience the next generation of innovation and teamwork.
      Our technology empowers the way you work and grow.</p>
      <img src="https://images.unsplash.com/photo-1533738368-bd53ae212529?w=1600&q=80&auto=format&fit=crop" alt="innovation" className="rounded-2xl mb-16 w-full" />
      <button className="bg-sky-500 text-white py-4 px-12 rounded-2xl text-lg font-medium hover:scale-105 transition duration-300">
        Get Started
      </button>
    </section>
  );
}

function ValueProposition() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid gap-12">
      <div className="bg-neutral-900 rounded-2xl p-12 border border-neutral-800 hover:border-neutral-700 transition duration-300">
        <h2 className="text-6xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-lg leading-relaxed text-neutral-400">Our platform integrates seamlessly with your existing tools, boosts productivity, and fosters effective collaboration.</p>
      </div>
      <img src="https://images.unsplash.com/photo-1531403009284-c618d59e6cde?w=1600&q=80&auto=format&fit=crop" alt="technology" className="rounded-2xl w-full" />
    </section>
  );
}

function CallToAction() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">
      <img src="https://images.unsplash.com/photo-1553484771-0e51f11c8e5b?w=1600&q=80&auto=format&fit=crop" alt="teamwork" className="rounded-2xl mb-16 w-full" />
      <h2 className="text-7xl font-semibold mb-8">Join the Future</h2>
      <p className="text-lg leading-relaxed text-neutral-400 mb-8">Start building with us and take your projects to the next level.
      Sign up today and see the impact in real time.</p>
      <button className="bg-sky-500 text-white py-4 px-12 rounded-2xl text-lg font-medium hover:scale-105 transition duration-300">
        Sign Up Now
      </button>
    </section>
  );
}

function App() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <CallToAction />
    </>
  );
}