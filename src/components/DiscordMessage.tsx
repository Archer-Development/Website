import React from 'react';
import Image, { StaticImageData } from 'next/image';
import avatar from "../../public/pfp.ico";

interface Embed {
  title: string;
  icon: string;
  userName: string;
  userId: string;
  details: string[];
  description?: string;
  color?: string; // This will hold the hex color
}

interface Message {
  user: string;
  userImg: StaticImageData;
  content: string;
  timestamp: string;
  isBot?: boolean;
  botLogo?: StaticImageData;
  embed?: Embed;
  commandUsed?: string;
}

const DiscordMessage: React.FC<Message> = ({ user, userImg, content, timestamp, isBot, botLogo, embed, commandUsed }) => {
  return (
    <div className="mb-4">
      {isBot && commandUsed && (
        <div className="text-sm text-gray-500 mb-1 ml-4">
          <span>╭——</span>
          <Image
            src={userImg}
            alt={`${user} avatar`}
            width={20}
            height={20}
            className="rounded-full inline mr-2"
          />
          <span className="font-bold text-white">Moderator</span> used <span className="font-bold text-blue-400">{commandUsed}</span>
        </div>
      )}

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
        <div className={`bg-gray-900 rounded-md p-3 border-l-4`} style={{ borderColor: embed.color || '#1DA1F2', marginLeft: '2.5rem', marginTop: '0.25rem' }}>
          <div className="font-bold text-white">{embed.title}</div>
          <div className="text-gray-300">
            {embed.icon} @ {embed.userName} | ({embed.userId})
          </div>
          <div className="font-bold text-gray-300 mt-1">Details:</div>
          {embed.description && <p className="text-gray-300">{embed.description}</p>}
          {embed.details.map((detail, idx) => (
            <p key={idx} className="text-gray-300">{detail}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiscordMessage;
