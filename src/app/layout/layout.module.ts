import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar'
import { PanelMenuModule } from 'primeng/panelmenu';
import { DropdownModule } from 'primeng/dropdown';
import { MegaMenuModule } from 'primeng/megamenu';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './horizontal/nav-bar/nav-bar.component';
import { NavLeftComponent } from './horizontal/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './horizontal/nav-bar/nav-right/nav-right.component';
import { NavigationComponent } from './horizontal/navigation/navigation.component';
import { NavLogoComponent } from './horizontal/nav-bar/nav-logo/nav-logo.component';
import { NavContentComponent } from './horizontal/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './horizontal/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './horizontal/navigation/nav-content/nav-item/nav-item.component';
import { NavCollapseComponent } from './horizontal/navigation/nav-content/nav-collapse/nav-collapse.component';
import { ConfigurationComponent } from './horizontal/configuration/configuration.component';
import { NavigationItem } from './horizontal/navigation/navigation';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HorizontalComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemComponent,
    NavCollapseComponent,
    ConfigurationComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    AvatarModule,
    PanelMenuModule,
    DropdownModule,
    MegaMenuModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    NavigationItem
  ]
})
export class LayoutModule { }
