'use client'

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

// Types
type LanguageLevel = 'Low-level' | 'Mid-level' | 'High-level';

interface LanguageData {
  level: LanguageLevel;
  languages: string[];
  description: string;
}

interface Component {
  name: string;
  description: string;
}

interface Integration {
  name: string;
  description: string;
}

// Data
const languagesData: LanguageData[] = [
  {
    level: 'Low-level',
    languages: ['Machine Code', 'Assembly'],
    description: 'Closest to hardware, directly executable by CPU.',
  },
  {
    level: 'Mid-level',
    languages: ['C', 'C++'],
    description: 'Balance between hardware control and abstraction.',
  },
  {
    level: 'High-level',
    languages: ['Python', 'Java', 'JavaScript'],
    description: 'High abstraction, easier to read and write.',
  },
];

const componentsData = {
  hardware: [
    { name: 'CPU', description: 'Central Processing Unit - The brain of the computer.' },
    { name: 'RAM', description: 'Random Access Memory - Temporary, fast storage for active data.' },
    { name: 'HDD/SSD', description: 'Hard Disk Drive / Solid State Drive - Long-term data storage.' },
  ],
  software: [
    { name: 'Operating System', description: 'Manages hardware and provides services for computer programs.' },
    { name: 'Applications', description: 'Programs that perform specific tasks for users.' },
    { name: 'Drivers', description: 'Software that allows the OS to interact with hardware devices.' },
  ],
};

const integrationsData: Integration[] = [
  {
    name: 'CPU and Memory',
    description: 'The CPU fetches instructions and data from memory, processes them, and writes results back to memory.',
  },
  {
    name: 'OS and Hardware',
    description: 'The operating system manages hardware resources and provides an interface for applications to use them.',
  },
  {
    name: 'Applications and OS',
    description: 'Applications run on top of the OS, using its services to access hardware and system resources.',
  },
];

// Components
const LanguageSelector: React.FC<{
  levels: LanguageLevel[];
  selectedLevel: LanguageLevel;
  onSelectLevel: (level: LanguageLevel) => void;
}> = ({ levels, selectedLevel, onSelectLevel }) => (
  <Select onValueChange={onSelectLevel} value={selectedLevel}>
    <SelectTrigger className="w-[180px] mb-4">
      <SelectValue placeholder="Select a level" />
    </SelectTrigger>
    <SelectContent>
      {levels.map(level => (
        <SelectItem key={level} value={level}>
          {level}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

const LanguageInfo: React.FC<{ languageData: LanguageData }> = ({ languageData }) => (
  <Card>
    <CardHeader>
      <CardTitle>{languageData.level} Languages</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="mb-2">{languageData.description}</p>
      <ul className="list-disc pl-5">
        {languageData.languages.map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const ComponentList: React.FC<{ components: Component[] }> = ({ components }) => (
  <div>
    {components.map(component => (
      <Card key={component.name} className="mb-4">
        <CardHeader>
          <CardTitle>{component.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{component.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

const IntegrationList: React.FC<{ integrations: Integration[] }> = ({ integrations }) => (
  <div>
    {integrations.map(integration => (
      <Card key={integration.name} className="mb-4">
        <CardHeader>
          <CardTitle>{integration.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{integration.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

// Main Page Component
export default function Home() {
  const [selectedLanguageLevel, setSelectedLanguageLevel] = useState<LanguageLevel>(languagesData[0].level);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Computer Science Learning Hub</h1>
      
      <Tabs defaultValue="languages" className="mb-6">
        <TabsList>
          <TabsTrigger value="languages">Programming Languages</TabsTrigger>
          <TabsTrigger value="components">Computer Components</TabsTrigger>
          <TabsTrigger value="integrations">System Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="languages">
          <Card>
            <CardHeader>
              <CardTitle>Programming Languages</CardTitle>
              <CardDescription>Explore different levels of programming languages and their uses.</CardDescription>
            </CardHeader>
            <CardContent>
              <LanguageSelector
                levels={languagesData.map(lang => lang.level)}
                selectedLevel={selectedLanguageLevel}
                onSelectLevel={setSelectedLanguageLevel}
              />
              <LanguageInfo
                languageData={languagesData.find(lang => lang.level === selectedLanguageLevel)!}
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="components">
          <Card>
            <CardHeader>
              <CardTitle>Computer Components</CardTitle>
              <CardDescription>Learn about hardware and software components of a computer system.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="hardware">
                <TabsList>
                  <TabsTrigger value="hardware">Hardware</TabsTrigger>
                  <TabsTrigger value="software">Software</TabsTrigger>
                </TabsList>
                <TabsContent value="hardware">
                  <ComponentList components={componentsData.hardware} />
                </TabsContent>
                <TabsContent value="software">
                  <ComponentList components={componentsData.software} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>System Integrations</CardTitle>
              <CardDescription>Understand how different parts of a computer system work together.</CardDescription>
            </CardHeader>
            <CardContent>
              <IntegrationList integrations={integrationsData} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}