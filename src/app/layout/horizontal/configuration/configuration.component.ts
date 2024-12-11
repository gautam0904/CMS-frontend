import { Component, OnInit, Renderer2 } from '@angular/core';


class BerryConfig {
  static isCollapse_menu: boolean = false;
  static font_family: string = 'Roboto'; // Roboto, poppins, inter
}

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.scss'],
    standalone: false
})
export class ConfigurationComponent implements OnInit {
  // public method
  styleSelectorToggle!: boolean; // open configuration menu
  setFontFamily!: string; // fontFamily

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setFontFamily = BerryConfig.font_family;
    this.fontFamily(this.setFontFamily);
  }

  fontFamily(font: string) {
    this.setFontFamily = font;
    this.renderer.removeClass(document.body, 'Roboto');
    this.renderer.removeClass(document.body, 'Poppins');
    this.renderer.removeClass(document.body, 'Inter');
    this.renderer.addClass(document.body, font);
  }
}
