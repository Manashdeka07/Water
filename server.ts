import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Initialize Gemini API if key is present
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// In-memory store for quotes & sample orders demo
const quotes: any[] = [];
const sampleOrders: any[] = [];

// AI Label & Brand Consultant endpoint
app.post('/api/ai-consultant', async (req, res) => {
  try {
    const { businessName, industry, eventType, vibe, primaryColor } = req.body;

    if (!ai) {
      // Fallback if no API key is configured
      return res.json({
        tagline: `${businessName} - Pure Elegance in Every Sip`,
        labelDescription: `A clean, sophisticated ${vibe || 'modern'} label featuring matte ${primaryColor || 'slate'} accents and crisp typography tailored for ${eventType || industry || 'distinguished guests'}.`,
        colorRecommendations: [primaryColor || '#0f172a', '#38bdf8', '#f8fafc', '#d4af37'],
        qrSuggestion: 'Scan to view exclusive digital concierge, Wi-Fi access, or digital event program.'
      });
    }

    const prompt = `You are a world-class luxury branding and packaging design director specializing in custom bottled water for luxury hotels, fine dining restaurants, weddings, and high-end corporate events.
Create a custom water bottle label and branding concept for:
- Business/Event Name: ${businessName}
- Industry/Setting: ${industry} (${eventType || 'General'})
- Desired Vibe/Aesthetic: ${vibe}
- Preferred Primary Color Theme: ${primaryColor}

Provide a JSON response with:
1. "tagline": A catchy, elegant 5-8 word tagline suitable for the bottle label.
2. "labelDescription": A vivid 2-3 sentence description of the label design, typography, and finish.
3. "colorRecommendations": An array of 4 hex color codes fitting the aesthetic.
4. "qrSuggestion": A smart recommendation for what a QR code on the bottle should link to.

Return ONLY valid JSON with keys: tagline, labelDescription, colorRecommendations, qrSuggestion.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const resultText = response.text || '{}';
    const parsed = JSON.parse(resultText);
    res.json(parsed);
  } catch (err: any) {
    console.error('Gemini AI error:', err);
    res.status(500).json({ 
      error: 'Failed to generate AI concept',
      tagline: `${req.body.businessName || 'Your Brand'} - Crafted Excellence`,
      labelDescription: 'Sophisticated minimalist custom label with premium matte finish.',
      colorRecommendations: ['#0f172a', '#38bdf8', '#ffffff', '#c5a059'],
      qrSuggestion: 'Scan for instant menu or event details.'
    });
  }
});

// Submit quote request
app.post('/api/quotes', (req, res) => {
  const quote = {
    id: 'Q-' + Math.floor(100000 + Math.random() * 900000),
    createdAt: new Date().toISOString(),
    ...req.body,
    status: 'Pending Review'
  };
  quotes.push(quote);
  res.json({ success: true, quote });
});

// Request physical sample kit
app.post('/api/samples', (req, res) => {
  const sample = {
    id: 'SMP-' + Math.floor(10000 + Math.random() * 90000),
    createdAt: new Date().toISOString(),
    ...req.body,
    status: 'Preparing Sample Kit'
  };
  sampleOrders.push(sample);
  res.json({ success: true, sample });
});

// Get orders / quotes list
app.get('/api/quotes', (req, res) => {
  res.json({ quotes, sampleOrders });
});

// Vite middleware integration for development
if (process.env.NODE_ENV !== 'production') {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true }
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.resolve(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

const portNum = Number(PORT) || 3000;
app.listen(portNum, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${portNum}`);
});
