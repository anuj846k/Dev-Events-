export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    title: "React Universe Conf",
    image: "/images/event1.png",
    slug: "react-universe-conf",
    location: "San Francisco, CA",
    date: "May 15, 2025",
    time: "09:00 AM",
  },
  {
    title: "Next.js Conf 2025",
    image: "/images/event2.png",
    slug: "nextjs-conf-2025",
    location: "Online / San Francisco",
    date: "October 24, 2025",
    time: "10:00 AM",
  },
  {
    title: "AI World Summit",
    image: "/images/event3.png",
    slug: "ai-world-summit",
    location: "New York, NY",
    date: "June 10, 2025",
    time: "08:30 AM",
  },
  {
    title: "PyCon US 2025",
    image: "/images/event4.png",
    slug: "pycon-us-2025",
    location: "Pittsburgh, PA",
    date: "May 14, 2025",
    time: "09:00 AM",
  },
  {
    title: "AWS re:Invent",
    image: "/images/event5.png",
    slug: "aws-reinvent",
    location: "Las Vegas, NV",
    date: "December 1, 2025",
    time: "07:00 AM",
  },
  {
    title: "Google I/O 2025",
    image: "/images/event6.png",
    slug: "google-io-2025",
    location: "Mountain View, CA",
    date: "May 10, 2025",
    time: "10:00 AM",
  },
];
