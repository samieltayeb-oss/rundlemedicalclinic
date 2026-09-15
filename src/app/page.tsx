import { Hero } from "@/components/home/Hero";
import { ActionStrip } from "@/components/home/ActionStrip";
import { CareUnderOneRoof } from "@/components/home/CareUnderOneRoof";
import { HumanCareStory } from "@/components/home/HumanCareStory";
import { ServicesExperience } from "@/components/home/ServicesExperience";
import { CareThroughLife } from "@/components/home/CareThroughLife";
import { TeamPreview } from "@/components/home/TeamPreview";
import { WhyRundle } from "@/components/home/WhyRundle";
import { RealClinicExperience } from "@/components/home/RealClinicExperience";
import { LocationVisit } from "@/components/home/LocationVisit";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ActionStrip />
      <CareUnderOneRoof />
      <HumanCareStory />
      <ServicesExperience />
      <CareThroughLife />
      <TeamPreview />
      <WhyRundle />
      <RealClinicExperience />
      <LocationVisit />
      <FinalCTA />
    </div>
  );
}
