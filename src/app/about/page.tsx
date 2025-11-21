export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-12">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl mb-6">
              About NU PAL
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                NU PAL (Nile University Personal Academic Learning) is an AI-powered academic advising platform designed to help students navigate their educational journey with confidence and clarity.
              </p>
              <p>
                Our mission is to empower students to make informed academic decisions by providing personalized course recommendations, semester planning tools, progress tracking, and seamless connections with academic advisors.
              </p>
              <p>
                With advanced AI algorithms, we analyze your academic history, interests, and career goals to suggest the perfect courses for your journey, helping you achieve your educational objectives efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

