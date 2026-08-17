import { schoolStandards, SchoolStandards } from "@/data/schoolStandards";

/**
 * Generate a URL-friendly slug from a school name
 * Example: "Duquesne University" -> "duquesne-university-track-standards"
 */
export function generateSchoolSlug(schoolName: string): string {
  return schoolName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim() + '-track-standards';
}

/**
 * Find a school by its slug
 * Example: "duquesne-university-track-standards" -> Duquesne University data
 */
export function findSchoolBySlug(slug: string): SchoolStandards | undefined {
  // Remove the "-track-standards" suffix
  const nameSlug = slug.replace(/-track-standards$/, '');
  
  return schoolStandards.find(school => {
    const schoolSlug = school.schoolName
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    
    return schoolSlug === nameSlug;
  });
}

/**
 * Generate SEO-optimized meta description for a school
 */
export function generateSchoolMetaDescription(school: SchoolStandards): string {
  return `${school.schoolName} track and field recruiting standards: target, recruit, and walk-on marks for men and women (${school.division}, ${school.conference}).`;
}

/**
 * Generate page title for a school
 */
export function generateSchoolPageTitle(school: SchoolStandards): string {
  return `${school.schoolName} Track & Field Recruiting Standards`;
}
