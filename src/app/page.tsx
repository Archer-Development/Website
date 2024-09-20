import Link from "next/link";
import { ExternalLink } from "lucide-react";
import React from 'react';
import Image, { StaticImageData } from 'next/image'; 
import logo from "../../public/Logo.ico"; 
import avatar from "../../public/pfp.ico";

interface Message {
  user: string;
  userImg: StaticImageData;
  content: string;
  timestamp: string;
  isBot?: boolean;
  botLogo?: StaticImageData;
  embed?: {
    title: string;
    icon: string;
    userName: string;
    userId: string;
    description: string;
    color?: string; 
  };
}

const DiscordMessage: React.FC<Message> = ({ user, userImg, content, timestamp, isBot, botLogo, embed }) => {
  return (
    <div className="mb-4">
      {/* User Info and Avatar */}
      <div className="flex items-start mb-1">
        <Image
          src={isBot ? (botLogo || avatar) : userImg}
          alt={`${user} avatar`}
          width={40}
          height={40}
          className="rounded-full mr-2"
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className={`font-bold ${isBot ? 'text-blue-400' : 'text-white'}`}>{user}</span>
            <span className="ml-2 text-xs text-gray-500">{timestamp}</span>
          </div>
          <p className="text-white whitespace-pre-line mt-1">{content}</p>
        </div>
      </div>
      {isBot && embed && (
        <div className={`bg-gray-800 rounded-md p-3 border-l-4 ${embed.color ? `border-${embed.color}` : 'border-blue-400'} ml-10 mt-1`}>
          <div className="font-bold text-white">{embed.title}</div>
          <div className="text-gray-300">
            {embed.icon} @ {embed.userName} | ({embed.userId})
          </div>
          <div className="font-bold text-gray-300 mt-1">Reason:</div>
          <p className="text-gray-300">{embed.description}</p>
        </div>
      )}
    </div>
  );
};

const DiscordBotShowcase: React.FC = () => {
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
      timestamp: 'Today at 4:45 PM',
      isBot: true,
      content: '', 
      embed: {
        title: 'Warned Member',
        icon: '✅', // Example icon
        userName: 'Hr1s7ov',
        userId: '808608962151972864',
        description: 'Spamming.',
        color: 'green-500',
      },
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
            embed={msg.embed}
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
