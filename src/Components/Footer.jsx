export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 text-center border-t border-white/10 mt-10">
      <p className="text-sm text-white/60">
        © {new Date().getFullYear()} World Atlas. All rights reserved.
      </p>
    </footer>
  );
};