import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent implements AfterViewInit {
  currentFilter = 'all';
  projects = [
    { title: 'The Obsidian Suite', category: 'living', img: 'images/hero.png' },
    { title: 'Golden Horizon Kitchen', category: 'kitchen', img: 'images/kitchen.png' },
    { title: 'Creative Hub Office', category: 'office', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Velvet Dreams Bedroom', category: 'bedroom', img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Minimalist Sanctuary', category: 'living', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Sleek Corporate Den', category: 'office', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000' }
  ];

  filteredProjects = [...this.projects];

  filter(cat: string) {
    this.currentFilter = cat;
    if (cat === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(p => p.category === cat);
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
