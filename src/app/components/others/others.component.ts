import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InfoCardConfig } from './other.config';

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css'],
})
export class OthersComponent {
  @Input({ required: true }) config!: InfoCardConfig;

  /** 
   * Theme configuration map for reusable Tailwind color bindings 
   */
  private readonly themeMap: Record<string, ThemeClasses> = {
    blue: this.createTheme('blue'),
    purple: this.createTheme('purple'),
    green: this.createTheme('green'),
    orange: this.createTheme('orange'),
    yellow: this.createTheme('yellow'),
    indigo: this.createTheme('indigo'),
  };

  /**
   * Returns Tailwind classes based on provided theme.
   * Defaults to blue if theme not found.
   */
  getThemeClasses(theme: string): ThemeClasses {
    return this.themeMap[theme] ?? this.themeMap['blue'];
  }

  /**
   * Helper method to dynamically generate theme class mappings.
   * Reduces repetition and makes adding new themes easier.
   */
  private createTheme(color: string): ThemeClasses {
    return {
      iconBg: `from-${color}-500 to-${color}-600`,
      iconShadow: `shadow-${color}-500/50`,
      headerGradient: `from-${color}-400 to-${color}-500`,
      accentLine: `from-${color}-500 to-${color}-600`,
      cardBorder: `border-${color}-500/30 hover:border-${color}-500`,
      badgeBg: `bg-${color}-500/20 text-${color}-400 border-${color}-500/30`,
    };
  }
}

/**
 * Strongly typed interface for theme class structure
 */
interface ThemeClasses {
  iconBg: string;
  iconShadow: string;
  headerGradient: string;
  accentLine: string;
  cardBorder: string;
  badgeBg: string;
}
