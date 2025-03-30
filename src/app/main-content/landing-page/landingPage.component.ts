import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar/navbar.component';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <section>
      <div class="fontRaleway">
        <app-navbar></app-navbar>
      </div>
      <div class="sakuraTitle">
        <h1 class="fontRaleway">SAKURA RAMEN</h1>
        <h2 class="fontRaleway">THE BEST RAMEN IN TOWN</h2>
      </div>
    </section>
  `,
  styleUrls: ['./landingPage.component.scss'],
})
export class LandingPageComponent {}
