export default function HomePage() {
  return (
    <main className="flex items-center justify-center w-full min-h-screen px-6 sm:px-20">
      <div className="text-center max-w-3xl mx-96">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-playfair font-bold bg-gradient-to-r from-[#634559] to-[#4D607A] bg-clip-text text-transparent">
          Hi, I’m Gonzalo Ramos
        </h1>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-t from-neutral-400 to-neutral-600 bg-clip-text text-transparent my-4 italic">
          Software Developer
        </h3>
        <p className="text-lg text-neutral-400 font-sans italic">
          Passionate about technology and learning. Focused on teamwork and industry best practices to solve real-world problems.
        </p>
      </div>
    </main>
  );
}
