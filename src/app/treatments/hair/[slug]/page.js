import { notFound } from 'next/navigation';
import { hairTreatments, skinTreatments } from '@/data/treatments';
import TreatmentTemplate from '@/components/templates/TreatmentTemplate';

export async function generateStaticParams() {
  return hairTreatments.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export default async function HairTreatmentPage({ params }) {
  const resolvedParams = await params;
  const treatment = hairTreatments.find((t) => t.slug === resolvedParams.slug);

  if (!treatment) {
    notFound();
  }

  return <TreatmentTemplate treatment={treatment} type="Hair" />;
}
