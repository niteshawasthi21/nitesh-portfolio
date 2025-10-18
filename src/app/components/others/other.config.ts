
export const GREEN_THEME: 'green' = 'green';

export const ACHIEVEMENTS_CONFIG: InfoCardConfig = {

    themeColor: GREEN_THEME,
    data: [
        {
            title: 'Achievements Overview',
            icon: 'fas fa-award',
            items: [
                'Reduced client operational costs by 80% through innovative custom solutions',
                'Eliminated expensive third-party dependencies',
                'Improved development efficiency by 40% with reusable component architecture',
                'Enhanced application performance by 30% through optimization techniques',
                'Implemented lazy loading and code splitting',
                'Optimized bundle sizes and load times',
                'Awarded "Newbie Award" for exceptional early contributions and rapid learning',
                'Successfully delivered production-grade applications across various industries',
            ],
        },
    ],
};

export const CERTIFICATIONS_CONFIG: InfoCardConfig = {
    themeColor: GREEN_THEME,
    data: [
        {
            title: 'Certificates Overview',
            icon: 'fas fa-certificate',
            items: [
                'Career Essential in GitHub - Version Control & Collaboration',
                'Angular 7 for Advanced Level - Frontend Framework Mastery',
                'Mastering Microsoft Copilot Chat - AI-Assisted Development',
            ],
        },
    ],
};

export const EDUCATION_CONFIG: InfoCardConfig = { themeColor: 'green', data: [{ title: 'Education', subtitle: 'Bachelor of Computer Applications (BCA)', institution: 'Naraina College of Management', date: '2018 – 2021', location: 'India', icon: 'fas fa-graduation-cap', description: 'Comprehensive study of computer science fundamentals, programming, web development, and software engineering principles.', },], };


export interface InfoItem {
    title?: string;
    subtitle?: string;
    description?: string;
    items?: string[];
    icon?: string;
    date?: string;
    institution?: string;
    location?: string;
    badge?: string;
    badgeColor?: string;
    link?: string;
}

export interface InfoCardConfig {
    sectionTitle?: string;
    sectionIcon?: string;
    sectionDescription?: string;
    themeColor: 'blue' | 'purple' | 'green' | 'orange' | 'yellow' | 'indigo';
    data: InfoItem[];
}
