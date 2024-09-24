import { HydrateClient } from "~/trpc/server";

export default async function NotFound() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Not Found 😱
          </h1>
          <h3 className="text-2xl font-bold">ruh roh</h3>
        </div>
      </main>
    </HydrateClient>
  );
}
