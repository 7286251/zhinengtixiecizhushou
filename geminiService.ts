
import { GoogleGenAI, Type } from "@google/genai";
import { StoryboardResponse } from './types';

/**
 * Generates a video storyboard using Gemini 3 Pro.
 * Adheres to the latest @google/genai SDK guidelines.
 * Optimized for Sora 2 style storyboarding logic.
 */
export const generateStoryboard = async (
  duration: number,
  style: string,
  subject: string,
  additionalPrompt: string,
  images: string[]
): Promise<StoryboardResponse> => {
  // Initialize GoogleGenAI with the API key from environment variables.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Logic: 10 seconds should result in 5 shots. Sora 2 logic implies detailed, fluid transitions.
  const shotsCount = Math.max(5, Math.ceil(duration * 0.5));

  const prompt = `
    作为一个专业视频分镜师，请参考 Sora 2 故事板系统（Sora 2 Storyboard System）生成专业分镜脚本。
    
    核心需求：
    - 视频总时长: ${duration}秒
    - 核心主体 (以此动物为主角): ${subject}
    - 视觉风格: ${style}
    - 补充细节: ${additionalPrompt}
    
    分镜规范:
    1. 每10秒时长对应约5个分镜。对于${duration}秒视频，请严格生成【${shotsCount}】个详细分镜。
    2. 针对 Sora 2 系统，强化“镜头运动(Motion Vectors)”、“光影氛围(Ambient Lighting)”和“时空一致性(Temporal Consistency)”。
    3. 【分镜输出格式要求】：
       [时间范围] | [景别]（[场景背景]）：[详细动作/运镜描述]，[角色名称]用[语气/神情]说：“[对话/配音内容]”
    4. 镜头1必须是总体的文字综述。
    5. 语言环境：全中文输出。
    
    注意：仅输出分镜脚本，不需要输出汇总提示词。
    输出必须是合法的 JSON 格式。
  `;

  const contents: any[] = [{ text: prompt }];
  
  images.forEach(img => {
    contents.push({
      inlineData: {
        mimeType: 'image/jpeg',
        data: img.split(',')[1]
      }
    });
  });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: { parts: contents },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            totalDuration: { type: Type.STRING },
            overallDescription: { type: Type.STRING },
            shots: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.INTEGER },
                  timeRange: { type: Type.STRING },
                  angle: { type: Type.STRING },
                  description: { type: Type.STRING },
                  dialogue: { type: Type.STRING },
                  atmosphere: { type: Type.STRING }
                },
                required: ["id", "timeRange", "angle", "description", "dialogue", "atmosphere"]
              }
            }
          },
          required: ["totalDuration", "overallDescription", "shots"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Storyboard Generation Error:", error);
    throw error;
  }
};
