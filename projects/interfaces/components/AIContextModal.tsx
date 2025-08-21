import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Sparkles } from 'lucide-react';

interface AIContextModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (context: string) => void;
}

export default function AIContextModal({ isOpen, onClose, onSubmit }: AIContextModalProps) {
  const [context, setContext] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!context.trim()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(context.trim());
      setContext('');
      onClose();
    } catch (error) {
      console.error('Failed to submit context:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setContext('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Customize with AI
          </DialogTitle>
          <DialogDescription>
            Provide context about your situation to help AI customize all interface elements appropriately.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="context">Situation Context</Label>
            <Textarea
              id="context"
              placeholder="e.g., 'A customer service team handling urgent technical support calls' or 'A sales team conducting product demos for enterprise clients'"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>
          
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={!context.trim() || isSubmitting}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {isSubmitting ? 'Customizing...' : 'Customize All'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
