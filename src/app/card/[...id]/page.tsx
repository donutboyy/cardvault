"use client";

import Image from "next/image";
import { api } from "~/trpc/react";

const mockCardImage = "https://d2h5owxb2ypf43.cloudfront.net/cards/ROS016.webp";
const mockCardDetailsResponse = {
  name: "Heartbeat of Candlehold",
  pitch: "3",
  color: "Blue",
  rarity: "Magestic",
  class: "Wizard",
  talent: "Earth",
  type: "Action",
  set: "Rosetta",
};

export default function CardDetails() {
  const cardQuery = api.card.get.useQuery();
  return (
    <div className="flex-col w-full items-center justify-center">
      <div className="flex text-3xl w-full items-center justify-center">
        <div className="flex items-center space-x-2 p-10 w-4/6">
          {mockCardDetailsResponse.name}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full justify-center w-4/6">
        <div className="relative">
          <Image
            src={mockCardImage}
            alt={mockCardDetailsResponse.name}
            priority
            width={300}
            height={420}
            style={{
              height: "auto",
            }}
          />
        </div>
        <div className="flex-col px-20">
          <h2 className="text-xl py-4">Card Details:</h2>
          <h3 className="text-lg">
            Default Image: {cardQuery.data?.defaultImage}
          </h3>
          <h3 className="text-lg">Name: {cardQuery.data?.name}</h3>
          <h3 className="text-lg">
            Special Image: {cardQuery.data?.specialImage}
          </h3>
          <h3 className="text-lg">uuid: {cardQuery.data?.uuid}</h3>
          <h3 className="text-lg">
            Card Identifier: {cardQuery.data?.cardIdentifier}
          </h3>
        </div>
      </div>
    </div>
  );
}
