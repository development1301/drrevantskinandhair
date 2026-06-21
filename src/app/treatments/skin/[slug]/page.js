import { notFound } from 'next/navigation';
import { skinTreatments } from '@/data/treatments';
import TreatmentTemplate from '@/components/templates/TreatmentTemplate';

export async function generateStaticParams() {
  return skinTreatments.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export default async function SkinTreatmentPage({ params }) {
  const resolvedParams = await params;
  const treatment = skinTreatments.find((t) => t.slug === resolvedParams.slug);

  if (!treatment) {
    notFound();
  }

  return <TreatmentTemplate treatment={treatment} type="Skin" />;
}
