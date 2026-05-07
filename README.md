# Vantedge Immigration Consultants Website

A modern, professional, multi-page website for Vantedge Immigration Consultants, a Ugandan immigration consultancy company established in 2026.

## 🌟 Features

### Design
- **Modern & Professional**: Clean blue and white color theme
- **Fully Responsive**: Perfect display on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations and transitions
- **Glassmorphism Effects**: Modern UI with soft shadows and transparency
- **Sticky Navigation**: Always accessible navigation bar

### Pages Included
1. **Home Page** (`index.html`) - Complete with hero section, services, eligibility check, pathway guide, and testimonials
2. **About Us** (`about.html`) - Company mission, vision, values, and why choose us
3. **Services Overview** (`services.html`) - All immigration services offered
4. **Visa Applications** (`visa-applications.html`) - Immigration and tourism visas
5. **Passport Services** (`passport-services.html`) - New passports, renewals, replacements
6. **Dual Citizenship** (`dual-citizenship.html`) - Dual nationality services
7. **Work & Study Permits** (`work-study-permits.html`) - Employment and student visas
8. **FAQ** (`faq.html`) - Frequently asked questions with accordion
9. **Contact** (`contact.html`) - Contact form and office information
10. **Booking** (`booking.html`) - Consultation booking form

### Functional Features
- ✅ Contact forms with validation
- ✅ Consultation booking system
- ✅ WhatsApp chat button (floating)
- ✅ Scroll-to-top button
- ✅ Mobile-responsive navigation menu
- ✅ Dropdown navigation menus
- ✅ Smooth scrolling between sections
- ✅ FAQ accordion functionality
- ✅ Image slider for immigration pathways
- ✅ SEO-friendly structure

## 📁 File Structure

```
vcs/
├── index.html                    # Homepage
├── about.html                    # About Us page
├── services.html                 # Services overview
├── visa-applications.html        # Visa services
├── passport-services.html        # Passport services
├── dual-citizenship.html         # Dual citizenship services
├── work-study-permits.html       # Work & study permits
├── faq.html                      # FAQ page
├── contact.html                  # Contact page
├── booking.html                  # Consultation booking
├── logo.png                      # Company logo
├── css/
│   └── style.css                 # Main stylesheet
├── js/
│   └── main.js                   # Main JavaScript file
└── public/                       # Images folder
```

## 🚀 Getting Started

### Option 1: Simple Local Setup
1. **Open the website**
   - Double-click `index.html` to open in your default browser
   - Or right-click and choose "Open with" your preferred browser

### Option 2: Using Live Server (Recommended for Development)
1. **Install Live Server** (VS Code Extension)
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Install it

2. **Run the website**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - The website will open at `http://localhost:5500` or similar

## 🎨 Customization Guide

### Update Company Information

#### 1. Contact Details
Update contact information in ALL HTML files:
- **Phone**: Replace `+256 700 000 000` with your actual phone number
- **Email**: Replace `info@vantedge-immigration.com` with your email
- **WhatsApp**: Update the WhatsApp number in the floating button link: `https://wa.me/256700000000`
- **Address**: Update `Plot 123, Nakasero Road, Kampala, Uganda` with your actual address

#### 2. Logo
- Replace `logo.png` in the root directory with your company logo
- Recommended size: 200x80 pixels (transparent background PNG)

#### 3. Colors
Edit `css/style.css` to change the color scheme:
```css
:root {
    --primary-blue: #1e40af;      /* Main brand color */
    --light-blue: #3b82f6;        /* Accent color */
    --navy: #0f172a;              /* Dark background */
    --dark-blue: #1e293b;         /* Secondary dark */
}
```

#### 4. Fonts
Current fonts: **Inter** and **Poppins**
To change fonts, update the Google Fonts link in each HTML file:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update in `css/style.css`:
```css
--font-primary: 'YourFont', sans-serif;
```

### Add Images

#### Background Images
The website uses Unsplash placeholder images. To use your own:

1. Add images to the `public/` folder
2. Replace image URLs in HTML files:
   - Hero sections: Update the `background-image` in inline styles
   - Service images: Update the `<img>` src attributes

Example:
```html
<!-- Before -->
<img src="https://images.unsplash.com/photo-..." alt="...">

<!-- After -->
<img src="public/your-image.jpg" alt="...">
```

### Update Services

To add/remove/modify services:

1. **Homepage Services** - Edit `index.html`:
   - Find the `services-section`
   - Add/remove/edit `.service-card` blocks

2. **Services Page** - Edit `services.html`:
   - Update the services grid with your offerings

3. **Service Detail Pages**:
   - Duplicate an existing service page (e.g., `visa-applications.html`)
   - Rename it
   - Update content, images, and links

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

Test on different devices using browser DevTools (F12 → Toggle Device Toolbar).

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox
- **JavaScript (Vanilla)**: No framework dependencies
- **Font Awesome 6.4.0**: Icons
- **Google Fonts**: Typography

### Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

### Performance Features
- Lazy loading images
- Optimized animations
- Minimal external dependencies
- Clean, commented code

## 📋 Form Integration

### Contact & Booking Forms
Currently, forms show alert messages. To make them functional:

#### Option 1: Email Service (e.g., FormSubmit)
```html
<form action="https://formsubit.co/your@email.com" method="POST">
    <!-- Your form fields -->
</form>
```

#### Option 2: Backend Integration
Connect forms to your backend API by modifying the JavaScript in each page:
```javascript
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Send to your API
    await fetch('your-api-endpoint', {
        method: 'POST',
        body: formData
    });
});
```

## 🔐 SEO Optimization

The website includes:
- ✅ Meta descriptions on all pages
- ✅ Semantic HTML5 structure
- ✅ Descriptive page titles
- ✅ Alt text for images
- ✅ Proper heading hierarchy
- ✅ Clean URL structure

### Improve SEO Further:
1. Add a `sitemap.xml`
2. Create a `robots.txt`
3. Add Google Analytics
4. Implement structured data (Schema.org)

## 🚀 Deployment Options

### 1. GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Go to Settings → Pages
5. Select main branch
6. Your site will be live at `username.github.io/repository-name`

### 2. Netlify (Free)
1. Create account at netlify.com
2. Drag and drop your project folder
3. Site goes live instantly
4. Custom domain available

### 3. Vercel (Free)
1. Create account at vercel.com
2. Import your project
3. Deploy with one click

### 4. Traditional Web Hosting
Upload all files via FTP to your web hosting provider.

## 🐛 Troubleshooting

### Logo not displaying?
- Ensure `logo.png` exists in the root directory
- Check file name spelling (case-sensitive on some servers)

### Forms not working?
- Forms currently use JavaScript alerts
- Follow "Form Integration" section to connect to backend

### Navigation menu not opening on mobile?
- Check if `js/main.js` is loaded correctly
- Clear browser cache

### Images not loading?
- Check internet connection (placeholder images use Unsplash)
- Replace with local images in `public/` folder

## 📞 Support & Customization

For additional customization or support:
- Review the well-commented code in CSS and JavaScript files
- Each section is clearly labeled for easy modification
- All forms and interactions are in `js/main.js`

## 📝 License

This website is created for Vantedge Immigration Consultants.

## ✨ Credits

- **Design**: Based on modern immigration consultancy standards
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter & Poppins)
- **Placeholder Images**: Unsplash

---

**Built with care for Vantedge Immigration Consultants**  
*Unlocking New Horizons for you and your family*

---

## Quick Checklist Before Going Live

- [ ] Update all contact information
- [ ] Replace logo.png with your actual logo
- [ ] Update company address in footer
- [ ] Replace placeholder images
- [ ] Set up form handling (email or backend)
- [ ] Test all links
- [ ] Test on mobile devices
- [ ] Test all forms
- [ ] Update WhatsApp number
- [ ] Add Google Analytics (optional)
- [ ] Test page load speed
- [ ] Run SEO audit
- [ ] Set up custom domain (if applicable)

Good luck with your website launch! 🚀
