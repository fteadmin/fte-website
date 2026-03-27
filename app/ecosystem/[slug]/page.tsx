import { redirect } from 'next/navigation';

interface EcosystemSlugPageProps {
  params: {
    slug: string;
  };
}

export default function EcosystemSlugPage({ params }: EcosystemSlugPageProps) {
  redirect(`/pro-tribe/${params.slug}`);
}
