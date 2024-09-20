import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main
        className="flex-grow flex flex-col items-center text-center px-4"
        style={{
          justifyContent: 'center',
          paddingBottom: '70px',
        }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-museoModerno text-accent  ">
          Secure your <br /> Discord Server
        </h1>
        <p className="text-base md:text-lg mb-8 font-montserrat text-white max-w-md">
          Protect your server and your users for free with our security bot.
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://discord.com/oauth2/authorize?client_id=724205594294353980"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-custom-accent text-accent font-montserrat py-2 px-4 rounded-full hover:bg-white hover:text-custom-accent transition duration-300 flex items-center"
            aria-label="Add to Discord"
          >
            <ExternalLink className="mr-2" />
            Add To Discord
          </Link>
          <Link
            href="https://discord.com/invite/mYzTeDSr7z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-montserrat py-2 px-6 rounded-full hover:bg-custom-accent hover:text-white transition duration-300 flex items-center"
            aria-label="Support"
          >
            <ExternalLink className="mr-2" />
            Support
          </Link>
        </div>
      </main>
    </div>
  );
}
