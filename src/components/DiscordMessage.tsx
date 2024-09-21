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
  color?: string;
  commandUsed?: string;
}

const DiscordMessage: React.FC<Message> = ({ user, userImg, content, timestamp, isBot, botLogo, embed, commandUsed }) => {
    return (
        <div className="mb-4">
        {/* Slash Command Used */}
        {commandUsed && (
          <div className="text-sm text-gray-500 mb-1 ml-4 flex items-center">
            <span>╭——</span>
            <Image
              src={userImg} // User image (not bot image)
              alt={`${user} avatar`}
              width={24}
              height={24}
              className="rounded-full mx-2" // Margin for better spacing
            />
            <span>Hr1s7ov used</span>
            <span className="font-bold text-blue-400 ml-1">/{commandUsed}</span> 
          </div>
        )}
  
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
          <div className={`bg-gray-900 rounded-md p-3 border-l-4 ${embed.color ? `border-${embed.color}` : 'border-blue-400'} ml-12 mt-1`}>
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
  