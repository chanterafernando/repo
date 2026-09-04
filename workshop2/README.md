# My University Website

Personal website developed for the Web Applications Workshop.

##  Project Description

This project consists of a **personal website** developed entirely with **HTML5** and **CSS**. It was created as part of the Web Applications Workshop, demonstrating the use of semantic tags, tables, forms, and modern styles with CSS animations.

The page represents my university profile, including information about my courses, class schedule, hobbies, clubs, and a contact form.

##  Project Structure

myfirstpage/
│
├── index.html # Main page (Home)
├── styles.css # Main stylesheet
├── README.md # This file
│
├── pages/
│ ├── courses.html # Courses page
│ ├── schedule.html # Schedule page (with table)
│ ├── contact.html # Contact page (with form)
│ ├── hobbies.html # Hobbies page
│ └── clubs.html # Clubs page
│
└── images/
├── university.jpg # University image
├── profile.jpg # Profile photo
├── wba.png # Web Applications image
├── proces.avif # Image Processing image
├── adv.jpeg # Advanced Programming image
├── sto.jpeg # Stochastic Process image
├── techn.gif # Technology Transfer image
└── redes.jpeg # Networks image



## Technologies Used

| Technology | Description |
|------------|-------------|
| **HTML5** | Semantic structure of the website |
| **CSS3** | Styles, animations and responsive design |
| **Apache** | Local web server for development |

## Website Features

### Main Page (index.html)
- Header with title and navigation
- Personal information (name, major, semester)
- Profile picture
- List of academic interests

### Courses Page (courses.html)
- Cards with `fade-in-up` and `card` animations
- Representative images per course
- Instructors and learning topics

### Schedule Page (schedule.html)
- Weekly schedule table with `rowspan` and `colspan`
- **Colors by subject**:
  - 🔵 Web Applications
  - 🟢 Technology Transfer
  - 🟠 Advanced Programming
  - 🟣 Image Processing
  - 🔴 Networks
  - 🩷 Stochastic Process
- Color legend
- Entry animations in cells

### Contact Page (contact.html)
- Complete form with:
  - Name
  - Email
  - Birth date
  - Study program
  - Semester
  - Contact reason
  - Message
  - Acceptance checkbox
  - Submit and reset buttons

### Hobbies Page (hobbies.html)
- Articles with `float` effect on hover
- Programming, reading and sports
- External links that open in a new tab

### 🏛️ Clubs Page (clubs.html)
- Cards with `card` effect (3D)
- Clubs: Programming, Relaxation, Debate
- Description, role and activities

## CSS Animations Implemented

| Animation | Effect | Element |
|-----------|--------|----------|
| `fadeIn` | Fades in | Header, Nav, Main |
| `float` | Floats on hover | Articles |
| `typing` | Typewriter effect | Header titles |
| `pulse` | Pulsing | Submit button |
| `glow` | Glowing | Table on hover |
| `popIn` | Pop effect | Table cells |
| `card` | 3D effect on hover | Course/Club cards |
| `fade-in-up` | Appears from below | Sections |
| `marquee` | Moving text | Info banner |

## Project Status

 **Version 1.0** - Fully functional website with all pages complete.



