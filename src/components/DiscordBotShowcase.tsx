import React from 'react';
import DiscordMessage from './DiscordMessage';
import logo from "../../public/Logo.ico";
import avatar from "../../public/pfp.ico";

interface BotData {
  user: string;
  warning?: string;
  logs?: string;
  action?: string;
  details?: string[];
}

interface ShowcaseProps {
  commandUsed: string;
  botData: BotData;
  embedColor?: string; // Change from string to hex color usage
}

const DiscordBotShowcase: React.FC<ShowcaseProps> = ({ commandUsed, botData, embedColor }) => {
  const messages = [];

  // User message for /warn command
  if (commandUsed === "/warn") {
    messages.push({
      user: "Hr1s7ov",
      userImg: avatar,
      content: "SPAM!\nSPAM!\nSPAM!\nSPAM!",
      timestamp: 'Today at 4:45 PM',
      isBot: false,
    });
  }

  // Bot response
  messages.push({
    user: botData.user,
    userImg: logo,
    timestamp: 'Today at 4:46 PM',
    isBot: true,
    content: '',
    embed: {
      title: commandUsed === "/warn"
        ? 'Warned Member'
        : commandUsed === "/modlogs"
          ? 'Mod Logs'
          : commandUsed === "/automod"
            ? 'Automatic Moderation'
            : 'Command Log', // Fallback title
      icon: '🛠️',
      userName: botData.user,
      userId: '808608962151972864',
      details: botData.details || [],
      color: embedColor || '#1DA1F2', // Use hex color here
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
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
            botLogo={msg.isBot ? logo : undefined}
            embed={msg.isBot ? msg.embed : undefined}
            commandUsed={msg.isBot ? commandUsed : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscordBotShowcase;
