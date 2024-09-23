import React from 'react';
import DiscordBotShowcase from './DiscordBotShowcase';

const ShowcaseLayout: React.FC = () => {
  const showcases = [
    {
      title: "Warn System",
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
          embedColor="#28a745" // Use hex color
        />
      ),
    },
    {
      title: "Mod Logs",
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
          embedColor="#ffffff" // Use hex color
        />
      ),
    },
    {
      title: "Auto-Moderation",
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
          embedColor="#ffc107" // Use hex color
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col p-4 space-y-20">

      <h1 className="text-4xl font-bold text-center text-white py-8">Some of Our Features</h1>

      {showcases.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          {/* Title and Description */}
          <div className="w-full md:w-1/4 p-4 text-white">
            <div className="text-2xl font-bold text-center md:text-left">{item.title}</div>
            <div className="text-lg text-center md:text-left">{item.description}</div>
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
