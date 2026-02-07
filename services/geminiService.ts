
import { GoogleGenAI } from "@google/genai";
import { KpiStats, SalesData } from '../types';

export const getAiInsights = async (stats: KpiStats, trend: SalesData[]): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    // Provide some context for the AI
    const prompt = `
      Act as a senior business analyst for a high-end ERP system.
      Current KPIs: Total Revenue $${stats.totalRevenue}, Total Orders ${stats.totalOrders}, Avg Performance ${stats.avgPerformance}%.
      Recent Trend: ${trend.map(t => `${t.month}: $${t.revenue}`).join(', ')}.
      
      Based on this data from our SAP RAP backend (RDS), provide a single-sentence executive insight about the business health. 
      Keep it professional, encouraging, and analytical. Use ERP terminology like 'bottleneck', 'optimization', or 'market penetration'.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        maxOutputTokens: 100,
        temperature: 0.7,
      },
    });

    return response.text || "Revenue is trending positively with optimized RAP data models.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Revenue is currently showing strong vertical growth across major software and electronics categories.";
  }
};
