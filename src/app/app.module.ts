import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './pages/about/about.component';
import { WhymetarivalsComponent } from './pages/whymetarivals/whymetarivals.component';
import { NftmarketplaceComponent } from './pages/nftmarketplace/nftmarketplace.component';
import { MrvlFeaturesComponent } from './pages/mrvl-features/mrvl-features.component';
import { GameplanComponent } from './pages/gameplan/gameplan.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';
import { TeamComponent } from './pages/team/team.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { WindowService } from './services/window.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    AboutComponent,
    WhymetarivalsComponent,
    NftmarketplaceComponent,
    MrvlFeaturesComponent,
    GameplanComponent,
    RoadmapComponent,
    TeamComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
