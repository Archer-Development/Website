import React from 'react';
import DiscordBotShowcase from './DiscordBotShowcase';

const ShowcaseLayout: React.FC = () => {
  const showcases = [
    {
      description: "Easily warn users with a simple command to maintain discipline in your server.",
      showcase: (
        <DiscordBotShowcase 
          commandUsed="/warn" 
          botData={{ 
            user: "Archer", 
            warning: "Spamming", 
            details: [
              "User: Hr1s7ov",
              "Reason: Spamming in #general",
              "Time: Today at 4:45 PM"
            ]
          }} 
          embedColor="green-500" 
        />
      ),
    },
    {
      description: "Use modlogs to keep track of user activity and any moderation actions taken on your server.",
      showcase: (
        <DiscordBotShowcase 
          commandUsed="/modlogs" 
          botData={{ 
            user: "Archer", 
            logs: "Warnings, Mutes", 
            details: [
              "User: Hr1s7ov",
              "Action: Warned for spamming",
              "Time: Today at 4:46 PM"
            ]
          }} 
          embedColor="white-500"
        />
      ),
    },
    {
      description: "Set up automatic moderation for repeated offenses, including bans and timed mutes.",
      showcase: (
        <DiscordBotShowcase 
          commandUsed="/automod" 
          botData={{ 
            user: "Archer", 
            action: "Auto-ban for 3 offenses",
            details: [
              "User: Hr1s7ov",
              "Offenses: 3",
              "Time: Today at 4:47 PM"
            ]
          }} 
          embedColor="yellow-500"
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col p-4 space-y-8">
      {showcases.map((item, index) => (
        <div key={index} className={`flex flex-col-reverse md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center justify-center md:space-x-8`}>
          {/* Description */}
          <div className="w-full md:w-1/4 p-4 text-white text-lg text-center md:text-left"> 
            {item.description}
          </div>

          {/* Showcase */}
          <div className="w-full md:w-1/2 p-4 mx-auto">
            {item.showcase}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowcaseLayout;
