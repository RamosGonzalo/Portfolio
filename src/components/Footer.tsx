const Footer = () => {
    return (
        <footer className="w-full py-6 text-center text-sm text-neutral-500 border-t border-neutral-800 mx-auto px-4 sm:px-8 max-w-[768px]">
            <p className="mb-2">
                Built and designed by Gonzalo Ramos<br />
                All rights reserved. © {new Date().getFullYear()}
            </p>
            <div className="flex justify-center space-x-6">
                <a href="https://github.com/ramosgonzalo" target="_blank" rel="noopener noreferrer">
                    <span className="text-neutral-500 hover:text-violet-500 transition">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/ramosgonzalo" target="_blank" rel="noopener noreferrer">
                    <span className="text-neutral-500 hover:text-violet-500 transition">LinkedIn</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
