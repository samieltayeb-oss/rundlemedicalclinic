import Image from "next/image";

export function HumanCareStory() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="lg:w-1/2 aspect-[4/5] rounded-3xl overflow-hidden relative shadow-xl mx-auto lg:mx-0">
              <Image 
                src="/assets/production/web/human-care-story.webp" 
                alt="Compassionate care at Rundle Medical Clinic" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-8 text-balance">
              Care is personal.<br/>
              <span className="text-primary">So is the way we practice it.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-lg mb-8">
              We believe that effective medicine requires a genuine connection. Whether you're visiting for a routine check-up, managing a complex condition, or seeking care for your child, our team takes the time to listen, understand, and provide evidence-based guidance.
            </p>
            <div className="h-0.5 w-16 bg-primary mb-8" />
            <p className="text-muted max-w-lg font-medium">
              We operate on the principle that patients should feel respected, involved in their health decisions, and supported throughout their wellness journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
