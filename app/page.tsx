import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServiceSection'
import ProjectSection from '@/components/ProjectSection'
import SkillsSection from '@/components/SkillSection'
import TestimonialsSection from '@/components/TestimonialSection'
import ExperiencesSection from '@/components/ExperienceSection'
import EducationsSection from '@/components/EducationSection'

export default function Home() {
    return (
        <main className="min-h-[300vh] bg-background">
            <HeroSection />
            <ProjectSection />
            <EducationsSection />
            <ExperiencesSection />
            <ServicesSection />
            <SkillsSection />
            <TestimonialsSection />
            <ContactSection />
        </main>
    )
}
