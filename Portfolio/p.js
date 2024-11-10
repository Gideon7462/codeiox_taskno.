document.getElementById('navbar').innerHTML = `
    <nav class="navbar">
        <div class="logo">Gideon Otachi</div>
        <ul class="nav-links">
            <li><a href="home.html">Home</a></li>
            <li><a href="project.html">Projects</a></li>
            <li><a href="resume.html">Resume</li>
            <li><a href="blog.html">Blog</li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="achievements.html">Achievements</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="faq.html">FAQ</a></li>
        </ul>
    </nav>
`;


// Contact Form Submission Handling
const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

form?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        responseMessage.textContent = `Thank you for your message, ${name}! I will get back to you soon.`;
        form.reset();
    } else {
        responseMessage.textContent = 'Please fill out all fields.';
    }
});
