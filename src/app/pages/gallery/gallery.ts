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
    { title: 'Modern Bedroom 1', category: 'bedroom', img: 'gallery/bedroom1.jpg' },
    { title: 'Modern Bedroom 2', category: 'bedroom', img: 'gallery/bedroom2.jpg' },
    { title: 'Modern Bedroom 3', category: 'bedroom', img: 'gallery/bedroom3.jpg' },
    { title: 'Modern Bedroom 4', category: 'bedroom', img: 'gallery/bedroom4.jpg' },
    { title: 'Kitchen Remodel 1', category: 'kitchen', img: 'gallery/kitchen1.jpg' },
    { title: 'Kitchen Remodel 2', category: 'kitchen', img: 'gallery/kitchen2.jpg' },
    { title: 'Kitchen Remodel 3', category: 'kitchen', img: 'gallery/kitchen3.jpg' },
    { title: 'Luxury Living 1', category: 'living', img: 'gallery/living_room1.jpg' },
    { title: 'Luxury Living 2', category: 'living', img: 'gallery/living_room2.jpg' },
    { title: 'TV Unit 1', category: 'living', img: 'gallery/tv_unit1.jpg' },
    { title: 'TV Unit 2', category: 'living', img: 'gallery/tv_unit2.jpg' },
    { title: 'Executive Office 1', category: 'office', img: 'gallery/office1.jpg' },
    { title: 'Executive Office 2', category: 'office', img: 'gallery/office2.jpg' }
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
