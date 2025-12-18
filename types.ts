
export interface Shot {
  id: number;
  timeRange: string;
  angle: string;
  description: string;
  dialogue: string;
  atmosphere: string;
}

export interface StoryboardResponse {
  totalDuration: string;
  overallDescription: string;
  shots: Shot[];
}

export interface ThemeConfig {
  id: string;
  name: string;
  bg: string;
  card: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  border: string;
}

export interface AppStyle {
  id: string;
  label: string;
  prompt: string;
}

export interface AppSubject {
  id: string;
  label: string;
  category: string;
}
