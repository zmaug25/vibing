import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_CHATGPT_API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, this should be handled server-side
});

export interface TextElement {
  id: string;
  label: string;
  value: string;
}

export async function generateContextualTexts(
  context: string,
  interfaceId: string,
  textElements: TextElement[]
): Promise<Record<string, string>> {
  try {
    const elementsDescription = textElements.map(el => 
      `- ${el.label} (ID: ${el.id}): Current text is "${el.value}"`
    ).join('\n');

    const prompt = `You are helping customize UI interface text elements for a specific business context.

Context: ${context}

Interface: ${interfaceId}

Text elements to customize:
${elementsDescription}

Please generate appropriate text for each element that fits the given context. The text should be:
- Professional and contextually relevant
- Concise and UI-appropriate 
- Consistent with the business scenario
- Natural and user-friendly

Respond with a JSON object where keys are the element IDs and values are the new text content. Example:
{
  "element1": "New text for element 1",
  "element2": "New text for element 2"
}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini-2024-07-18',
      messages: [
        {
          role: 'system',
          content: 'You are a UI/UX expert specializing in contextual interface customization. Always respond with valid JSON only.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response, handling potential markdown code blocks
    let jsonString = response.trim();
    
    // Remove markdown code blocks if present
    if (jsonString.startsWith('```json')) {
      jsonString = jsonString.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (jsonString.startsWith('```')) {
      jsonString = jsonString.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }
    
    const generatedTexts = JSON.parse(jsonString);
    
    // Validate that we got responses for all requested elements
    const result: Record<string, string> = {};
    textElements.forEach(element => {
      if (generatedTexts[element.id]) {
        result[element.id] = generatedTexts[element.id];
      }
    });

    return result;
  } catch (error) {
    console.error('Error generating contextual texts:', error);
    throw new Error('Failed to generate contextual texts. Please try again.');
  }
}
