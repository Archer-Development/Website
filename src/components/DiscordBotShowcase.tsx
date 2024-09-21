import React from 'react';
import DiscordMessage from './DiscordMessage';
import logo from "../../public/Logo.ico";
import avatar from "../../public/pfp.ico";

const DiscordBotShowcase: React.FC = () => {
  const messages = [
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
        icon: '✅',
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

export default DiscordBotShowcase;
