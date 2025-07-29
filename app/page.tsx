import { HeroSection } from "@/components/hero-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { FeaturesSection } from "@/components/features-section"
//import { StatsSection } from "@/components/stats-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        {/* <StatsSection /> */}

      </main>
    </div>
  )
}
