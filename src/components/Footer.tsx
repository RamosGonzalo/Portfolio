import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full py-6 text-center text-sm text-neutral-500 border-t border-neutral-800 mx-auto px-4 sm:px-8 max-w-[768px]">
            <div className="flex justify-center items-center space-x-6">
                <a href="https://github.com/ramosgonzalo" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/icons/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="opacity-60 hover:opacity-90 hover:scale-110 transition-all duration-200"
                    />
                </a>
                <a href="https://linkedin.com/in/ramosgonzalo" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={34}
                    height={34}
                    className="opacity-60 hover:opacity-90 hover:scale-110 transition-all duration-200"
                    />
                </a>
                <a href="https://instagram.com/gonmadeit" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={26}
                    height={26}
                    className="opacity-60 hover:opacity-90 hover:scale-110 transition-all duration-200"
                    />
                </a>
                <a href="https://open.spotify.com/user/ocyzpkj52stju6ukg9tyetsh2?si=1f040368baf24510" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/icons/spotify.svg"
                    alt="Spotify"
                    width={26}
                    height={26}
                    className="opacity-60 hover:opacity-90 hover:scale-110 transition-all duration-200"
                    />
                </a>
                <a href="https://medium.com/@gonmadeit" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/icons/medium.svg"
                    alt="Medium"
                    width={34}
                    height={34}
                    className="opacity-60 hover:opacity-90 hover:scale-110 transition-all duration-200"
                    />
                </a>
                <a href="mailto:gonzaloramos.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/icons/email.svg"
                    alt="Email"
                    width={30}
                    height={30}
                    className="opacity-60 hover:opacity-90 hover:scale-110 transition-all duration-200"
                    />
                </a>
            </div>
            <p className="mt-2">
                Built and designed by Gonzalo Ramos<br />
                All rights reserved. © {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
