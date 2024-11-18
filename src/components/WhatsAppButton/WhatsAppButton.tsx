import React from 'react';

interface WhatsAppButtonProps {
    phoneNumber: string; 
    message?: string; 
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message = '' }) => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '50px',
                right: '30px',
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                textDecoration: 'none',
            }}
            aria-label="Chat en WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="white"
                viewBox="0 0 24 24"
            >
                <path d="M20.52 3.5A11.3 11.3 0 0012 0C5.94 0 .94 5 .94 11.06c0 1.95.49 3.83 1.43 5.5L0 24l7.7-2c1.6.8 3.33 1.2 5.06 1.2h.02c6.07 0 11.08-4.94 11.08-11.06 0-2.95-1.15-5.72-3.24-7.64zm-8.5 18.5h-.02c-1.53 0-3.02-.37-4.34-1.07l-.31-.17-4.56 1.19 1.19-4.44-.19-.33a9.05 9.05 0 01-1.3-4.62c0-5.05 4.15-9.19 9.26-9.19 2.43 0 4.72.94 6.43 2.64a9.08 9.08 0 012.66 6.45c0 5.05-4.17 9.18-9.27 9.18zm5.08-6.85c-.28-.14-1.63-.8-1.87-.9-.25-.1-.43-.14-.6.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.3-.34.45-.52.14-.17.2-.28.3-.47.1-.19.05-.36-.03-.5-.07-.14-.6-1.44-.83-2-.22-.52-.44-.45-.6-.46h-.51c-.16 0-.42.06-.64.28-.22.22-.84.8-.84 1.94s.86 2.26.98 2.42c.12.17 1.69 2.56 4.1 3.59.57.25 1.01.4 1.36.51.57.18 1.1.15 1.5.09.46-.07 1.43-.59 1.63-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.17-.46-.3z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
