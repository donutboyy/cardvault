import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default async function Home() {
  return (
    <div className="flex-col w-full items-center justify-center">
      <div className="flex text-5xl w-full p-10 items-center justify-center">
        Card Vault
      </div>
      <div className="flex text-3xl w-full items-center justify-center">
        <div className="flex items-center space-x-2 w-3/5">
          <Input type="search" placeholder="Search Cards" />
          <Button type="submit">Search</Button>
        </div>
      </div>
    </div>
  );
}
