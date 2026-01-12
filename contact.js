// This must be global for Google Maps API callback to work
function initMap() {
    console.log('Map would be initialized here');
}

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const faqItems = document.querySelectorAll('.faq-item');

    // Contact form submission handler
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        console.log('Form submitted:', { name, email, subject, message });

        document.getElementById('form-success').style.display = 'block';
        contactForm.reset();
    });

    // FAQ accordion toggle
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');

        question.addEventListener('click', function () {
            faqItems.forEach(i => {
                if (i !== item) {
                    i.querySelector('.faq-answer').style.maxHeight = null;
                    i.querySelector('i').classList.remove('fa-chevron-up');
                    i.querySelector('i').classList.add('fa-chevron-down');
                }
            });

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
});
