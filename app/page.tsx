import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'; 


export default async function Home() {
  const { userId } = await auth();

  return (
    <main className="p-6 text-center">
      <h1 className="text-2xl font-bold">Tier-Based Event Showcase</h1>
      {!userId ? (
        <div className="mt-6 flex justify-center gap-4">
          <SignUpButton mode="modal" />
          <SignInButton mode="modal" />
        </div>
      ) : (
        <div className="mt-6">
          <UserButton />
          <a href="/events" className="ml-4 text-blue-600 underline">Go to Events</a>
        </div>
      )}
    </main>
  );
}
