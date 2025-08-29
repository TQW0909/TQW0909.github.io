// Types for form data
interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

// Types for project data
interface Project {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
}

// Types for experience data
interface Experience {
    title: string;
    company: string;
    period: string;
    achievements: string[];
}

// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore - Feather is loaded from CDN
    feather.replace();
});

// Form handling
const contactForm = document.querySelector<HTMLFormElement>('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data: ContactFormData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string
        };
        handleFormSubmit(data);
    });
}

// Form submission handler
function handleFormSubmit(data: ContactFormData): void {
    // TODO: Implement form submission logic
    console.log('Form submitted:', data);
    // Here you would typically send the data to a server
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
}); 