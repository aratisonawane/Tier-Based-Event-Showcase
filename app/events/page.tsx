import { currentUser } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase';
import EventCard from '@/components/EventCard';

const tierOrder = ['free', 'silver', 'gold', 'platinum'];

export default async function EventsPage() {
  const user = await currentUser();
  if (!user) return <div className="p-6">Unauthorized</div>;

  const userTier = (user.publicMetadata?.tier as string) || 'free';
  const allowedTiers = tierOrder.slice(0, tierOrder.indexOf(userTier) + 1);

  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .in('tier', allowedTiers);

  if (error) return <div className="p-6">Error: {error.message}</div>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events?.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          description={event.description}
          date={event.event_date}
          tier={event.tier}
          imageUrl={event.image_url}
        />
      ))}
    </div>
  );
}