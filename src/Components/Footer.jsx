import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-3 mt-8 ">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className='font-bold text-red-700'>my</span><span className='font-extrabold text-white text-xl'>Task</span> — Built by <span className="font-semibold">Neelesh</span>
      </p>
    </footer>
  );
}

export default Footer;
