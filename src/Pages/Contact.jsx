export const Contact = () => {
  const handleForm = (formData) => {
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <section className="p-10 bg-black text-white flex flex-col md:flex-row items-center justify-center gap-12 mt-[15vh]">
      
      {/* Left side: Text */}
      <div className="md:w-1/2 w-full text-left">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Got a suggestion? Spotted an error in a country fact? Or just curious about how this site works?
          Drop a message — we’re always listening and improving.
        </p>
      </div>

      {/* Right side: Form */}
      <form
        action={handleForm}
        className="md:w-1/2 w-full flex flex-col gap-6 p-6 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="bg-transparent border border-white/40 p-3 rounded focus:outline-none focus:border-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="bg-transparent border border-white/40 p-3 rounded focus:outline-none focus:border-white"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Leave your message"
          required
          className="bg-transparent border border-white/40 p-3 rounded resize-none focus:outline-none focus:border-white"
        />
        <button
          type="submit"
          className="bg-white text-black font-semibold py-3 rounded hover:bg-gray-200 transition-all"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
};