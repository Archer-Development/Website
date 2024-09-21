import React from 'react';
import Image, { StaticImageData } from 'next/image'; 
import avatar from "../../public/pfp.ico"; // Default avatar if no bot logo

interface Embed {
  title: string;
  icon: string;
  userName: string;
  userId: string;
  description: string;
  color?: string;
}

interface Message {
  user: string;
  userImg: StaticImageData;
  content: string;
  timestamp: string;
  isBot?: boolean;
  botLogo?: StaticImageData;
  embed?: Embed;
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

export default DiscordMessage;
