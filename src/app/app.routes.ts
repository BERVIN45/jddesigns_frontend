import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { GalleryComponent } from './pages/gallery/gallery';
import { ContactComponent } from './pages/contact/contact';
import { KitchenComponent } from './pages/services/kitchen/kitchen';
import { LivingRoomComponent } from './pages/services/living-room/living-room';
import { BedroomComponent } from './pages/services/bedroom/bedroom';
import { OfficeComponent } from './pages/services/office/office';
import { DiningRoomComponent } from './pages/services/dining-room/dining-room';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services/kitchen', component: KitchenComponent },
  { path: 'services/living-room', component: LivingRoomComponent },
  { path: 'services/bedroom', component: BedroomComponent },
  { path: 'services/office', component: OfficeComponent },
  { path: 'services/dining-room', component: DiningRoomComponent },
  { path: '**', redirectTo: '' }
];
