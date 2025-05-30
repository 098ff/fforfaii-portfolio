import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-tertiary)] text-[var(--color-brown)] py-3 md:py-5">
      <div className="max-w-6xl mx-auto px-2 md:px-4 text-center flex justify-center space-x-4 md:space-x-6">
        <a href="https://github.com/098ff" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl md:text-[28px]" style={{ color: 'var(--color-brown)' }} />
        </a>
        <a href="http://www.linkedin.com/in/chanatda-konchom-0b8376366" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl md:text-[28px]" style={{ color: 'var(--color-brown)' }} />
        </a>
        <a href="mailto:chanatdakc@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-2xl md:text-[28px]" style={{ color: 'var(--color-brown)' }} />
        </a>
      </div>
    </footer>
  )
}