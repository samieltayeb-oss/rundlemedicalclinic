# NANO BANANA IMAGE BRIEFS

## 1. HOMEPAGE HERO
- **Page**: `/`
- **Component**: `Hero.tsx`
- **Section**: Cinematic Hero Background
- **Desktop Dimensions / Aspect Ratio**: Full bleed (e.g. 1920x1080), 16:9
- **Mobile Dimensions / Aspect Ratio**: Full bleed (e.g. 1080x1350), 4:5
- **Safe Crop Region**: Center-right (the left side has a heavy text overlay and background gradient).
- **Text Negative Space Requirement**: Keep the left 50% visually clean and dark/dim enough to support white or dark text (depending on the gradient). Currently we use a gradient fade on the left.
- **Subject Placement**: Offset to the right third.
- **Camera Angle / Perspective**: 35mm editorial, eye-level.
- **Lighting**: Soft natural window light.
- **Brand Colour Interaction**: Subtle cool undertones that compliment `--primary` (medical blue).
- **Source Photography**: None. (Currently using `best-service.jpg` as a temporary placeholder).
- **Action**: GENERATE NEW.
- **Alt Text**: Rundle Medical Clinic providing calm, premium healthcare in Calgary.
- **Final Filename**: `hero-main-cinematic.webp`

## 2. HUMAN CARE STORY
- **Page**: `/`
- **Component**: `HumanCareStory.tsx`
- **Section**: Emotional statement section
- **Desktop Dimensions / Aspect Ratio**: 4:5 (Portrait)
- **Mobile Dimensions / Aspect Ratio**: 4:5 (Portrait)
- **Safe Crop Region**: Center.
- **Text Negative Space Requirement**: None (text is adjacent, not overlaid).
- **Subject Placement**: Center focus, calm clinician-patient interaction.
- **Camera Angle / Perspective**: 50mm, shallow depth of field.
- **Lighting**: Warm, intimate, reassuring.
- **Brand Colour Interaction**: Can incorporate soft hints of `--secondary` (controlled green).
- **Source Photography**: None. (Currently using `WhatsApp-Image-2023-11-13-at-12.17.21-AM.jpeg` as placeholder).
- **Action**: GENERATE NEW (EDITORIAL_HEALTHCARE).
- **Alt Text**: Compassionate care at Rundle Medical Clinic.
- **Final Filename**: `human-care-story.webp`

## 3. SERVICES EXPERIENCE: PEDIATRICS
- **Page**: `/`
- **Component**: `ServicesExperience.tsx`
- **Section**: Interactive Services Right Panel (Index 02)
- **Desktop Dimensions / Aspect Ratio**: 16:9 (Cropped dynamically).
- **Mobile Dimensions / Aspect Ratio**: 16:9 (Stacked).
- **Safe Crop Region**: Top two-thirds (bottom third is covered by a text block).
- **Text Negative Space Requirement**: Bottom needs to allow for a dark gradient overlay.
- **Subject Placement**: Center or upper-half.
- **Camera Angle / Perspective**: 35mm.
- **Lighting**: Bright, welcoming.
- **Brand Colour Interaction**: Neutral.
- **Source Photography**: None. (Currently using `children-image.png`).
- **Action**: GENERATE NEW.
- **Alt Text**: Dedicated pediatric care.
- **Final Filename**: `service-pediatrics.webp`

*(Repeat generation for other services in `ServicesExperience.tsx`: Family Medicine, Women's Health, Chronic Care, Preventive Care, Minor Procedures)*

## 4. CLINIC INTERIOR ENHANCEMENT (MAIN)
- **Page**: `/`
- **Component**: `RealClinicExperience.tsx`
- **Section**: A space designed around your visit (Left large image)
- **Desktop Dimensions / Aspect Ratio**: 16:9 (Landscape)
- **Mobile Dimensions / Aspect Ratio**: 16:9
- **Safe Crop Region**: Center.
- **Text Negative Space Requirement**: Minimal bottom-left text overlay.
- **Subject Placement**: Architectural wide shot.
- **Camera Angle / Perspective**: 24mm wide angle, straight verticals.
- **Lighting**: Brightened, color-balanced, removing any harsh yellow/fluorescent hues.
- **Brand Colour Interaction**: Enhance natural clinic colors to align with brand palette where possible.
- **Source Photography**: Yes (`RUNDLE.jpg`).
- **Action**: ENHANCE EXISTING (Preserve architecture).
- **Alt Text**: Rundle Medical Clinic exterior and entry.
- **Final Filename**: `clinic-exterior-enhanced.webp`

## 5. CLINIC INTERIOR ENHANCEMENT (SUPPORTING)
- **Page**: `/`
- **Component**: `RealClinicExperience.tsx`
- **Section**: A space designed around your visit (Right stacked images)
- **Desktop Dimensions / Aspect Ratio**: 4:3 each
- **Mobile Dimensions / Aspect Ratio**: 4:3 each
- **Safe Crop Region**: Center.
- **Text Negative Space Requirement**: None.
- **Subject Placement**: Waiting area and Examination room.
- **Camera Angle / Perspective**: Natural room perspective.
- **Lighting**: Clean, clinical but warm.
- **Source Photography**: Yes (`WhatsApp-Image-2024-01-17-at-9.07.24-PM-1.jpeg`, `WhatsApp-Image-2024-01-17-at-9.07.24-PM-2.jpeg`).
- **Action**: ENHANCE EXISTING (Declutter, polish lighting).
- **Alt Text**: Clinic reception and Examination room.
- **Final Filename**: `clinic-reception-enhanced.webp`, `clinic-exam-room-enhanced.webp`

## 6. TEAM PLACEHOLDERS
- **Page**: `/`
- **Component**: `TeamPreview.tsx`
- **Section**: Experienced care (Physician cards)
- **Desktop Dimensions / Aspect Ratio**: 3:4 (Portrait)
- **Mobile Dimensions / Aspect Ratio**: 3:4
- **Safe Crop Region**: Center.
- **Text Negative Space Requirement**: None (Text is below the image).
- **Subject Placement**: Abstract identity-neutral aesthetic.
- **Camera Angle / Perspective**: Abstract/Macro.
- **Lighting**: Studio/Soft.
- **Brand Colour Interaction**: Uses `--surface-elevated` to `--border` gradient internally, but final image can be subtle grey/blue textures.
- **Source Photography**: None. (Currently rendering CSS-based initials and patterns).
- **Action**: GENERATE NEW ABSTRACT GRAPHICS.
- **Alt Text**: Portrait of [Physician Name].
- **Final Filename**: `placeholder-[slug].webp`
