import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Download, Edit2, Eye, ArrowLeft } from 'lucide-react';
import { InterfaceConfig, EditableText } from '../data/interfaces';
import AICompanion from './interfaces/AICompanion';
import MobileAIAssistant from './interfaces/MobileAIAssistant';
import CallRouting from './interfaces/CallRouting';
import { autofillTexts } from './aiClient';

interface InterfaceEditorProps {
  interfaceConfig: InterfaceConfig;
  onBack: () => void;
}

export default function InterfaceEditor({ interfaceConfig, onBack }: InterfaceEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const [texts, setTexts] = useState<EditableText[]>(interfaceConfig.defaultTexts);

  const updateText = (id: string, value: string) => {
    setTexts(prev => prev.map(text => 
      text.id === id ? { ...text, value } : text
    ));
  };

  const getText = (id: string) => {
    return texts.find(text => text.id === id)?.value || '';
  };

  const runAutofill = async () => {
    try {
      setIsExporting(true);
      const values = await autofillTexts(interfaceConfig.id, texts);
      setTexts((prev) => prev.map((t) => (values[t.id] ? { ...t, value: values[t.id] } : t)));
    } catch (e) {
      console.error('Autofill failed', e);
      alert('Autofill failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const downloadPNG = async () => {
    if (!frameRef.current) return;

    setIsExporting(true);
    try {
      const node = frameRef.current;
      // Ensure layout is fully flushed before snapshot
      await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));

      const rect = node.getBoundingClientRect();
      const width = Math.max(node.scrollWidth, Math.ceil(rect.width));
      const height = Math.max(node.scrollHeight, Math.ceil(rect.height));

      const fileName = `${interfaceConfig.id}-interface.png`;

      // Prefer html-to-image (more reliable for complex styles)
      try {
        const dataUrl = await htmlToImage.toPng(node, {
          backgroundColor: 'transparent',
          width,
          height,
          pixelRatio: Math.max(2, Math.ceil(window.devicePixelRatio || 1)),
          cacheBust: true,
          style: { margin: '0', padding: '0' },
        });
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
      } catch (_) {
        // Fallback to html2canvas if html-to-image fails
        const canvas = await html2canvas(node, {
          backgroundColor: null as unknown as string,
          width: width || undefined,
          height: height || undefined,
          scale: Math.max(2, Math.ceil(window.devicePixelRatio || 1)),
          useCORS: true,
          allowTaint: false,
          logging: false,
          foreignObjectRendering: true,
        });
        const dataUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    } catch (error) {
      console.error('Error generating PNG:', error);
      alert('Error generating PNG. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const renderInterface = () => {
    switch (interfaceConfig.id) {
      case 'ai-companion':
        return <AICompanion getText={getText} />;
      case 'mobile-ai-assistant':
        return <MobileAIAssistant getText={getText} />;
      case 'call-routing':
        return <CallRouting getText={getText} />;
      default:
        return <div>Interface not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Button
              onClick={onBack}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Library
            </Button>
            <div>
              <h1 className="text-3xl font-bold">{interfaceConfig.name} Editor</h1>
              <p className="text-gray-600">{interfaceConfig.description}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant={isEditing ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              {isEditing ? <Eye className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
              {isEditing ? 'Preview' : 'Edit'}
            </Button>
            <Button onClick={runAutofill} variant="outline" disabled={isExporting}>
              Auto-fill with AI
            </Button>
            <Button
              onClick={downloadPNG}
              disabled={isExporting}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              {isExporting ? 'Generating...' : 'Download PNG'}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          {isEditing && (
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Edit Text Content</h2>
              <div className="space-y-4 max-h-[70vh] overflow-y-auto">
                {texts.map((text) => (
                  <div key={text.id} className="space-y-2">
                    <label className="block font-medium text-sm">{text.label}</label>
                    {text.type === 'textarea' ? (
                      <Textarea
                        value={text.value}
                        onChange={(e) => updateText(text.id, e.target.value)}
                        className="min-h-[80px]"
                      />
                    ) : (
                      <Input
                        value={text.value}
                        onChange={(e) => updateText(text.id, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Preview Panel */}
          <div className={`${isEditing ? '' : 'col-span-2'} flex justify-center`}>
            <div className="p-8 rounded-lg shadow-lg inline-block bg-transparent">
              <div ref={frameRef} className="inline-block">
                {renderInterface()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}