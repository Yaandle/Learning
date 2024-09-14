'use client'
import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const roboticsData = {
  fundamentals: {
    title: "Fundamentals of Robotics",
    content: [
      { subtitle: "Definition", text: "Robotics is the interdisciplinary field of science and engineering that involves the design, construction, operation, and use of robots. It combines mechanical engineering, electrical engineering, computer science, and others." },
      { subtitle: "Key Components", text: "1. Sensors: Gather information about the environment. 2. Actuators: Allow robots to move and interact with their surroundings. 3. Control Systems: Process sensor data and control actuators. 4. Power Supply: Provides energy for operation. 5. End Effectors: Specialized tools for specific tasks." },
      { subtitle: "Types of Robots", text: "1. Industrial Robots: Used in manufacturing. 2. Service Robots: Assist humans in various tasks. 3. Exploration Robots: Used in space or deep-sea exploration. 4. Medical Robots: Assist in surgeries and patient care. 5. Military Robots: Used in defense and warfare." },
      { subtitle: "Programming and AI", text: "Robots are programmed using various languages and methods, from simple scripting to complex AI algorithms. Machine learning and neural networks are increasingly used to make robots more adaptive and intelligent." }
    ]
  },
  future: {
    title: "The Future of Robotics",
    content: [
      { subtitle: "Advanced AI Integration", text: "Future robots will have more sophisticated AI, enabling them to learn, adapt, and make decisions autonomously. This could lead to robots that can handle complex, unpredictable environments." },
      { subtitle: "Human-Robot Collaboration", text: "Collaborative robots or 'cobots' will become more prevalent, working alongside humans in various fields, enhancing productivity and safety." },
      { subtitle: "Nano-robotics", text: "Microscopic robots could revolutionize medicine, performing targeted drug delivery, microsurgery, and cell-level repairs." },
      { subtitle: "Soft Robotics", text: "Robots made from flexible materials will allow for safer human interaction and the ability to navigate complex, confined spaces." },
      { subtitle: "Swarm Robotics", text: "Large groups of simple robots working together could tackle complex tasks, inspired by natural swarms like ants or bees." },
      { subtitle: "Ethical and Social Implications", text: "As robots become more advanced, society will need to address issues like robot rights, accountability for AI decisions, and the impact on human employment." }
    ]
  },
  applications: {
    title: "Applications and Utility of Robotics",
    content: [
      { subtitle: "Manufacturing", text: "Robots increase efficiency, precision, and safety in manufacturing processes. They can work 24/7, perform repetitive tasks without fatigue, and handle hazardous materials." },
      { subtitle: "Healthcare", text: "Surgical robots assist in minimally invasive procedures. Care robots help with patient monitoring and rehabilitation. Nanorobots could revolutionize drug delivery and disease treatment." },
      { subtitle: "Agriculture", text: "Agricultural robots can automate planting, harvesting, and monitoring crops, increasing efficiency and reducing labor costs." },
      { subtitle: "Space Exploration", text: "Robots are crucial for space exploration, able to withstand extreme conditions and explore where humans cannot easily go, like Mars rovers." },
      { subtitle: "Disaster Response", text: "Robots can enter dangerous areas after natural disasters or accidents, assisting in search and rescue operations and handling hazardous materials." },
      { subtitle: "Education", text: "Educational robots help teach STEM subjects, providing hands-on experience with technology and programming." },
      { subtitle: "Home Automation", text: "Household robots assist with chores, security, and companionship, improving quality of life, especially for the elderly or disabled." }
    ]
  }
};

export default function Robotics() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (category, index) => {
    setExpandedSections(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Robotics: The Future is Now</h1>
      <Tabs defaultValue="fundamentals">
        <TabsList>
          <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
          <TabsTrigger value="future">Future</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>
        {Object.entries(roboticsData).map(([key, { title, content }]) => (
          <TabsContent key={key} value={key}>
            <Card>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                {content.map((item, index) => (
                  <div key={index} className="mb-4">
                    <h3 
                      className="text-xl font-semibold mb-2 cursor-pointer"
                      onClick={() => toggleSection(key, index)}
                    >
                      {item.subtitle}
                    </h3>
                    {expandedSections[`${key}-${index}`] && (
                      <p>{item.text}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}