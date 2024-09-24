import fs from 'fs';
import path from 'path';

interface RoadmapFeature {
    feature: string;
    completed: boolean;
}

interface RoadmapBlock {
    title: string;
    date: string;
    features: RoadmapFeature[];
}

interface RoadmapData {
    roadmap: RoadmapBlock[];
}

const filePath = path.join(process.cwd(), 'src', 'app', 'Roadmap', 'json', 'config.json');
let roadmap: RoadmapData;

try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    roadmap = JSON.parse(jsonData);
    // console.log('Roadmap data:', roadmap);  //JSON log
} catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    roadmap = { roadmap: [] }; 
}

export default function RoadmapPage() {
    const roadmapBlocks = roadmap.roadmap;

    return (
        <div className="container mx-auto px-4 py-8">    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{
                justifyContent: 'center',
                paddingBottom: '50px',
                paddingTop: '120px',
            }}>
                {roadmapBlocks.map((block, index) => (
                    <div
                    key={index}
                    className="bg-gray-800 text-white rounded-lg p-6 flex flex-col justify-between h-full transition-transform transform hover:scale-105">
                        <div className="flex-grow">
                            <h2 className="text-2xl font-semibold mb-2">{block.title}</h2>
                            <p className="text-gray-400 mb-4">{block.date}</p>
                            <ul className="list-disc pl-6">
                                {block.features.map((item, itemIndex) => (
                                    <li key={itemIndex} className={`text-lg mb-2 ${
                                            item.completed ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {item.feature} - {item.completed ? '✅ Completed' : '❌ In Progress'}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
