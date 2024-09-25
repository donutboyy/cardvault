import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const mockCardDetails = [
  {
    image: "https://d2h5owxb2ypf43.cloudfront.net/cards/ROS016.webp",
    id: "ROS016",
  },
  {
    image: "https://d2h5owxb2ypf43.cloudfront.net/cards/HER117.webp",
    id: "HER117",
  },
  {
    image: "https://d2h5owxb2ypf43.cloudfront.net/cards/DYN120.webp",
    id: "DYN120",
  },
  {
    image: "https://d2h5owxb2ypf43.cloudfront.net/cards/ROS016.webp",
    id: "ROS016",
  },
  {
    image: "https://d2h5owxb2ypf43.cloudfront.net/cards/HER117.webp",
    id: "HER117",
  },
  {
    image: "https://d2h5owxb2ypf43.cloudfront.net/cards/DYN120.webp",
    id: "DYN120",
  },
  {
    image: "https://d2h5owxb2ypf43.cloudfront.net/cards/ROS016.webp",
    id: "ROS016",
  },
  {
    image: "https://d2h5owxb2ypf43.cloudfront.net/cards/HER117.webp",
    id: "HER117",
  },
  {
    image: "https://d2h5owxb2ypf43.cloudfront.net/cards/DYN120.webp",
    id: "DYN120",
  },
  {
    image: "https://d2h5owxb2ypf43.cloudfront.net/cards/ROS016.webp",
    id: "ROS016",
  },
  {
    image: "https://d2h5owxb2ypf43.cloudfront.net/cards/HER117.webp",
    id: "HER117",
  },
  {
    image: "https://d2h5owxb2ypf43.cloudfront.net/cards/DYN120.webp",
    id: "DYN120",
  },
];

export default function Search() {
  return (
    <div className="flex-col w-full items-center justify-center">
      <div className="flex text-3xl w-full items-center justify-center">
        <div className="flex items-center space-x-2 p-10 w-3/5">
          <Input type="search" placeholder="Search Cards" />
          <Button type="submit">Search</Button>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-5 gap-4 w-4/6">
          {mockCardDetails.map((imageDetails, index) => (
            <a href={`/card/${imageDetails.id}`} key={index}>
              <Image
                id={`${index}`}
                alt={imageDetails.id}
                src={imageDetails.image}
                width={300}
                height={420}
                style={{
                  height: "auto",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
