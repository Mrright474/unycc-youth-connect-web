
const ProgramsHero = () => {
  return (
    <section 
      className="bg-unblue text-white py-16" 
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Programs & Projects</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Discover the initiatives that are bringing the Sustainable Development Goals to life through youth action.
        </p>
      </div>
    </section>
  );
};

export default ProgramsHero;
