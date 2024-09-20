import Link from "next/link";
import { ExternalLink } from "lucide-react";
import React from 'react';
import Image, { StaticImageData } from 'next/image'; 
import logo from "../../public/Logo.ico"; 
import avatar from "../../public/pfp.ico";

// Define the message interface
interface Message {
  user: string;
  userImg: StaticImageData;
  content: string;
  timestamp: string;
  isBot?: boolean;
  botLogo?: StaticImageData;
}

// Message Component
const DiscordMessage: React.FC<Message> = ({ user, userImg, content, timestamp, isBot, botLogo }) => {
  return (
    <div className={`flex items-start mb-4 ${isBot ? 'bg-gray-700' : 'bg-gray-800'} rounded-md p-2`}>
      {/* User or Bot Avatar */}
      <Image
        src={isBot ? (botLogo || avatar) : userImg} // Fallback to avatar if botLogo is undefined
        alt={`${user} avatar`}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full mr-3"
      />

      <div className="flex flex-col">
        {/* User or Bot Name and Timestamp */}
        <div className="flex items-center mb-1">
          <span className={`font-bold ${isBot ? 'text-blue-400' : 'text-white'}`}>
            {user}
          </span>
          <span className="ml-2 text-xs text-gray-500">{timestamp}</span>
        </div>

        {/* Message Content */}
        <p className="text-white whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
};

// Main Component to simulate bot showcase
const DiscordBotShowcase: React.FC = () => {
  // Rendered messages
  const messages: Message[] = [
    {
      user: 'Hr1s7ov',
      userImg: avatar,
      content: "SPAM!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!SPAM!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
      timestamp: 'Today at 4:45 PM',
    },
    {
      user: 'Archer',
      botLogo: logo,
      userImg: avatar,
      content: 'Hr1s7ov has been silenced for 30m!\nREASON: Similar Message Spam',
      timestamp: 'Today at 4:45 PM',
      isBot: true,
    },
    {
      user: 'Hr1s7ov',
      userImg: avatar,
      content: 'I didn’t do anything!',
      timestamp: 'Today at 5:10 PM',
    },
    {
      user: 'Archer',
      botLogo: logo,
      userImg: avatar,
      content: 'Hr1s7ov has been kicked from the server!',
      timestamp: 'Today at 5:11 PM',
      isBot: true,
    },
  ];

  return (
    <div className="bg-gray-900 p-6 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg p-4 w-full max-w-2xl shadow-lg">
        <div className="text-sm text-gray-500 mb-2"># general</div>
        
        {messages.map((msg, index) => (
          <DiscordMessage
            key={index}
            user={msg.user}
            userImg={msg.userImg}
            content={msg.content}
            timestamp={msg.timestamp}
            isBot={msg.isBot}
            botLogo={msg.botLogo}
          />
        ))}
      </div>
    </div>
  );
};

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
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-museoModerno text-accent">
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

      {/* Bot Showcase Component */}
      <DiscordBotShowcase />
    </div>
  );
}
