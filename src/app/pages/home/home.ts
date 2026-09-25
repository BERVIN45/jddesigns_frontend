import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  heroSlides = [
    { img: 'images/hero3.jpg', title: 'Exquisite Interiors', alt: 'Luxury Living Room Interior' },
    { img: 'images/hero1.png', title: 'Modern Elegance', alt: 'Modern Interior Design Execution' },
    { img: 'images/hero2.jpg', title: 'Architectural Perfection', alt: 'Premium Residential Interiors' }
  ];
  currentSlideIndex = 0;
  private slideInterval: any;

  services = [
    { title: 'Residential Interior Design', desc: 'Crafting luxury homes that tell your unique story.', img: 'gallery/living_room1.jpg' },
    { title: 'Executive Office Interiors', desc: 'Functional, high-end environments for modern businesses.', img: 'gallery/office1.jpg' },
    { title: 'Modular Kitchen Design', desc: 'State-of-the-art culinary spaces with German engineering.', img: 'gallery/kitchen1.jpg' },
    { title: 'Bespoke Bedroom Design', desc: 'Transforming bedrooms into serene luxury retreats.', img: 'gallery/bedroom1.jpg' }
  ];

  specialities = [
    { title: 'Hyper-Realistic 3D Renders', desc: 'Visualize every detail before construction begins with our state-of-the-art photorealistic visualizations.', icon: 'fas fa-cube' },
    { title: 'Global Material Sourcing', desc: 'Exclusive access to premium international textures, finishes, and bespoke furniture pieces.', icon: 'fas fa-globe' },
    { title: 'Technical Precision', desc: 'Seamless integration of structural, electrical, and plumbing layouts for flawless execution.', icon: 'fas fa-pen-ruler' },
    { title: 'Turnkey Solutions', desc: 'From the first conceptual sketch to the final handover, we manage the entire project lifecycle stress-free.', icon: 'fas fa-key' }
  ];

  featuredProjects = [
    { title: 'The Obsidian Suite', category: 'Apartment', img: 'gallery/living_room2.jpg' },
    { title: 'Azure Riverside', category: 'Villa', img: 'gallery/house1.jpeg' },
    { title: 'Amber Creative Studio', category: 'Commercial', img: 'gallery/office2.jpg' },
    { title: 'Minimalist Haven', category: 'Living Room', img: 'gallery/living_room3.jpg' },
    { title: 'Velvet Horizon', category: 'Bedroom', img: 'gallery/bedroom3.jpg' },
    { title: 'Marble & Oak', category: 'Kitchen', img: 'gallery/kitchen2.jpg' }
  ];

  clientLogos = [
    'images/client1.webp',
    'images/client2.webp',
    'images/client3.webp',
    'images/client4.webp',
    'images/client5.webp',
    'images/client6.webp',
    'images/client7.webp',
    'images/client8.webp',
    'images/client9.webp'
  ];

  testimonials = [
    {
      name: 'Arun S V',
      meta: '1 review',
      date: '6 days ago New',
      stars: 5,
      content: 'great working with Dj designs plan has been awesome'
    },
    {
      name: 'Sreeja Rajasuthan',
      meta: '5 reviews • 1 photo',
      date: 'Yesterday New',
      stars: 5,
      content: 'Really happy with the DJ design and overall experience. Very professional, responsive, and easy to work with. They understood our requirements and came up with a beautiful and practical design. Highly recommended!'
    },
    {
      name: 'Jesus ATS',
      meta: '2 reviews • 0 photos',
      date: '6 days ago New',
      stars: 5,
      content: 'Very Telent person work very nice Hard worker and truly person'
    },
    {
      name: 'Arun The Bull',
      meta: '0 reviews • 1 photo',
      date: '6 days ago New',
      stars: 5,
      content: 'Best output under budget🍻💥'
    },
    {
      name: 'Bervin',
      meta: '4 reviews',
      date: '15 weeks ago',
      stars: 5,
      content: 'Had an amazing experience with DJ Designs. Their team transformed our space beautifully while paying attention to every detail. The design was elegant, functional, and perfectly matched our expectations. The entire process was smooth, and the project was completed on time. Highly recommended!'
    }
  ];

  ngOnInit() {
    this.startSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroSlides.length;
    }, 6500);
  }

  setSlide(index: number) {
    this.currentSlideIndex = index;
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.startSlideShow();
    }
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
