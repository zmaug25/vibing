import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Edit2, Sparkles } from 'lucide-react';
import { interfaceConfigs, InterfaceConfig } from '../data/interfaces';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryProps {
  onSelectInterface: (config: InterfaceConfig) => void;
}

export default function Gallery({ onSelectInterface }: GalleryProps) {
  // Group interfaces by category
  const groupedInterfaces = interfaceConfigs.reduce((acc, config) => {
    if (!acc[config.category]) {
      acc[config.category] = [];
    }
    acc[config.category].push(config);
    return acc;
  }, {} as Record<string, InterfaceConfig[]>);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">UI Interface Library</h1>
            <p className="text-gray-600">Choose an interface template to customize and export</p>
          </div>
          <Button className="flex items-center gap-2" disabled>
            <Sparkles className="w-4 h-4" />
            Customize with AI
          </Button>
        </div>

        {Object.entries(groupedInterfaces).map(([category, configs]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {configs.map((config) => (
                <Card key={config.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <ImageWithFallback
                      src={config.thumbnail}
                      alt={config.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                      <Button 
                        onClick={() => onSelectInterface(config)}
                        className="flex items-center gap-2"
                      >
                        <Edit2 className="w-4 h-4" />
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{config.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{config.description}</p>
                    <Button 
                      onClick={() => onSelectInterface(config)}
                      variant="outline" 
                      className="w-full flex items-center gap-2"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit Interface
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {interfaceConfigs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Plus className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No interfaces available</h3>
            <p className="text-gray-500">Add your first interface template to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}