interface Props {
  title: string;
  description: string;
  date: string;
  tier: string;
  imageUrl: string;
}

export default function EventCard({ title, description, date, tier, imageUrl }: Props) {
  const tierColor = {
    free: 'bg-gray-400',
    silver: 'bg-gray-500',
    gold: 'bg-yellow-500',
    platinum: 'bg-purple-600',
  }[tier];

  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <p className="text-gray-500 text-xs mt-1">{new Date(date).toDateString()}</p>
      <span className={`mt-2 inline-block px-2 py-1 rounded-full text-xs text-white ${tierColor}`}>
        {tier.toUpperCase()}
      </span>
    </div>
  );
}