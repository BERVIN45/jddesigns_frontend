import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit, AfterViewInit {
  servicesList = [
    {
      id: '01',
      title: 'Residential Interior Design',
      lead: 'Your home is your sanctuary. We design residential interiors that reflect your personality, lifestyle, and everyday needs — creating spaces that are both beautiful and deeply functional.',
      description: 'The living room is where life happens. Our living room designs combine high-end furniture, perfect lighting balance, and curated textures to create a cohesive and breathtaking atmosphere.',
      bullets: [
        'Full home interior planning and design',
        'Space planning and layout optimization',
        'Material and finish selection',
        'Lighting design and consultation',
        'Furniture selection and custom pieces'
      ],
      image: 'gallery/living_room1.jpg',
      alt: 'Premium Living Room Design'
    },
    {
      id: '02',
      title: 'Modular Kitchen Design',
      lead: 'At DJ Designs, we believe a kitchen should be as beautiful as it is functional. Our bespoke modular kitchens are designed to elevate your culinary experience.',
      description: 'Using premium materials, state-of-the-art hardware, and intelligent space-planning, we create culinary spaces that inspire. From sleek modern aesthetics to timeless classic designs, our kitchens are tailored to suit your lifestyle.',
      bullets: [
        'Custom modular cabinetry',
        'State-of-the-art hardware integration',
        'Ergonomic workflow planning',
        'Premium benchtops and splashbacks',
        'Appliance integration and selection'
      ],
      image: 'gallery/kitchen1.jpg',
      alt: 'Premium Kitchen Design'
    },
    {
      id: '03',
      title: 'Bespoke Bedroom Design',
      lead: 'We transform bedrooms into serene luxury retreats optimized for relaxation and rest.',
      description: 'A well-designed bedroom is more than just a place to sleep; it\'s a personal haven. Through careful selection of premium textiles, ambient lighting, and bespoke furniture, we create tranquil spaces tailored for you.',
      bullets: [
        'Custom wardrobes and walk-in closets',
        'Ambient and task lighting solutions',
        'Premium textile and fabric selection',
        'Acoustic treatments for privacy',
        'Bespoke bedframe and furniture curation'
      ],
      image: 'gallery/bedroom1.jpg',
      alt: 'Premium Bedroom Design'
    },
    {
      id: '04',
      title: 'Executive Office Interiors',
      lead: 'We craft executive offices and commercial workspaces that balance ergonomic functionality with authoritative aesthetics.',
      description: 'A well-designed workspace significantly enhances productivity and leaves a lasting impression on clients. Our office design solutions integrate smart layouts, focused lighting, and premium materials to create environments that inspire creativity.',
      bullets: [
        'Commercial and home office layouts',
        'Ergonomic furniture pairing',
        'Brand-aligned material selection',
        'Optimized acoustics and lighting',
        'Bespoke executive desking solutions'
      ],
      image: 'gallery/office1.jpg',
      alt: 'Premium Office Design'
    },
    {
      id: '05',
      title: 'Exquisite Dining Rooms',
      lead: 'We create dramatic, elegant dining spaces that turn every meal into an unforgettable event.',
      description: 'The dining room is central to entertaining and family gatherings. Featuring statement lighting, custom cabinetry for exquisite storage, and breathtaking tablescapes, our designs evoke grandeur and warmth.',
      bullets: [
        'Custom dining table selection',
        'Statement ambient and drop lighting',
        'Exquisite sideboard and wine storage setups',
        'Space optimization for gatherings',
        'Curated decor and tablescapes'
      ],
      image: 'gallery/restaurant.jpg',
      alt: 'Premium Dining Room Design'
    }
  ];

  ngOnInit() {
    window.scrollTo(0,0);
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
