
import React, { useState, useCallback, useEffect } from 'react';
import { 
  Camera, 
  Upload, 
  Image as ImageIcon, 
  Film, 
  Clock, 
  Palette, 
  User, 
  Sparkles, 
  RefreshCw, 
  Play, 
  ChevronRight,
  Download,
  Trash2,
  Info,
  X,
  ChevronLeft,
  Copy,
  Check,
  MessageSquare,
  QrCode,
  ExternalLink
} from 'lucide-react';
import { THEMES, STYLES, SUBJECTS, DURATIONS } from './constants';
import { Shot, StoryboardResponse, ThemeConfig } from './types';
import { generateStoryboard } from './geminiService';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeConfig>(THEMES[0]);
  const [duration, setDuration] = useState(10);
  const [selectedStyle, setSelectedStyle] = useState(STYLES[0]);
  const [selectedSubject, setSelectedSubject] = useState(SUBJECTS[0]);
  const [prompt, setPrompt] = useState('');
  const [uploads, setUploads] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StoryboardResponse | null>(null);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  // Modal states
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleRandomTheme = () => {
    const nextTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
    setTheme(nextTheme);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      (Array.from(files) as File[]).forEach((file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploads(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeUpload = (index: number) => {
    setUploads(prev => prev.filter((_, i) => i !== index));
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const data = await generateStoryboard(
        duration,
        selectedStyle.label,
        selectedSubject.label,
        prompt,
        uploads
      );
      setResult(data);
    } catch (err) {
      alert("生成失败，请重试。");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus(id);
      setTimeout(() => setCopyStatus(null), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  const copyFullStoryboard = () => {
    if (!result) return;
    const text = `【总体描述】：${result.overallDescription}\n\n` +
      result.shots.map(s => `${s.timeRange} | ${s.angle}：${s.description}，${s.dialogue}`).join('\n');
    copyToClipboard(text, 'full');
  };

  const Modal = ({ type, onClose }: { type: string, onClose: () => void }) => {
    let title = "";
    let content = null;

    if (type === "about") {
      title = "关于我们";
      content = (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>小渝児提示词智能助手（XiaoYu AI Assistant）诞生于2026年马年伊始，致力于打破视频创作的技术门槛。</p>
          <p>我们利用 Sora 2 故事板系统（Sora 2 Storyboard System）核心逻辑，通过顶级多模态大模型技术，为您提供“所思即所得”的极致体验。</p>
          <div className="pt-4 border-t italic text-xs">豫见创作，发现灵感。</div>
        </div>
      );
    } else if (type === "privacy") {
      title = "隐私条款";
      content = (
        <div className="space-y-4 text-gray-600 text-sm">
          <p>【数据安全】您上传的所有图片和视频素材仅用于本地 AI 推理分析，我们不会在服务器上进行持久化存储。</p>
          <p>【内容版权】由小渝児生成的全部分镜脚本版权均归用户所有。</p>
          <p>【Cookie】我们仅使用必要的本地存储来记住您的主题偏好。</p>
        </div>
      );
    } else if (type === "business") {
      title = "商务合作";
      content = (
        <div className="space-y-6">
          <p className="text-gray-600">欢迎联系小渝児，共同探索AI创作边界。支持机器应用自动识别跳转。</p>
          <div className="space-y-3">
            <a href="mqqwpa://im/chat?chat_type=wpa&uin=307779523&version=1&src_type=web" className="flex items-center justify-between p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all border border-blue-200 group">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-lg text-white"><MessageSquare size={18} /></div>
                <div>
                  <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">QQ Contact</div>
                  <div className="font-bold text-blue-900">307779523</div>
                </div>
              </div>
              <ExternalLink size={16} className="text-blue-300 group-hover:text-blue-500 transition-colors" />
            </a>
            
            <div 
              onClick={() => copyToClipboard('XiaoYu_R1999', 'wechat-biz')}
              className="flex items-center justify-between p-4 rounded-2xl bg-green-50 hover:bg-green-100 transition-all border border-green-200 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-500 p-2 rounded-lg text-white"><QrCode size={18} /></div>
                <div>
                  <div className="text-[10px] text-green-400 font-bold uppercase tracking-wider">WeChat ID</div>
                  <div className="font-bold text-green-900">XiaoYu_R1999</div>
                </div>
              </div>
              <div className="text-[10px] bg-green-500/10 text-green-600 px-2 py-1 rounded-md font-bold">
                {copyStatus === 'wechat-biz' ? '已复制' : '复制ID'}
              </div>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 text-center italic">点击 QQ 可尝试自动呼起应用；微信需手动添加好友。</p>
        </div>
      );
    }

    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
        <div className="bg-white rounded-[2.5rem] shadow-2xl max-w-lg w-full overflow-hidden relative border-4 border-yellow-400 animate-in zoom-in-95 duration-200">
          <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors"><X size={20} /></button>
          <div className="p-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 festive-font border-b pb-4 flex items-center gap-2">
              <Sparkles size={20} className="text-yellow-500" /> {title}
            </h2>
            {content}
            <button onClick={onClose} className={`w-full mt-8 py-4 rounded-2xl ${theme.primary} text-white font-bold shadow-lg hover:opacity-90 active:scale-95 transition-all`}>
              理解并返回
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${theme.bg} transition-all duration-700 ease-in-out p-4 md:p-8 flex flex-col items-center relative`}>
      {activeModal && <Modal type={activeModal} onClose={() => setActiveModal(null)} />}
      
      {/* Header Section */}
      <header className="w-full max-w-6xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700">
        <div className="flex items-center gap-3">
          <div className={`${theme.primary} p-3 rounded-2xl shadow-lg border-2 ${theme.border} transition-all duration-700`}>
            <Sparkles className="text-white w-8 h-8" />
          </div>
          <div>
            <h1 className={`text-3xl md:text-4xl font-bold festive-font text-white drop-shadow-md`}>小渝児提示词智能助手</h1>
            <p className="text-white/80 text-sm">2026 马年大吉 · Sora 2 故事板创作工具</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleRandomTheme} 
            className={`${theme.card} ${theme.accent} px-6 py-2 rounded-full font-bold shadow-xl hover:scale-105 active:scale-95 transition-all duration-500 flex items-center gap-2 border-2 ${theme.border}`}
          >
            <RefreshCw size={18} className={`${loading ? 'animate-spin' : ''}`} /> 切换主题
          </button>
        </div>
      </header>

      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Configuration */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <section className={`${theme.card} p-6 rounded-[2rem] shadow-2xl border-4 ${theme.border} transition-all duration-700`}>
            <h2 className={`text-xl font-bold mb-4 flex items-center gap-2 ${theme.accent}`}><Upload size={20} /> 素材上传</h2>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {uploads.map((url, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden border animate-in zoom-in-50 duration-200">
                  <img src={url} className="w-full h-full object-cover" alt="upload" />
                  <button onClick={() => removeUpload(i)} className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"><Trash2 size={12} /></button>
                </div>
              ))}
              <label className="aspect-square border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-black/5 transition-colors">
                <ImageIcon size={24} className="text-gray-400" />
                <span className="text-[10px] text-gray-500 mt-1">上传</span>
                <input type="file" multiple className="hidden" onChange={handleFileUpload} accept="image/*,video/*" />
              </label>
            </div>
            <p className="text-xs text-gray-400">上传动物或环境素材，AI 将智能辅助创作。</p>
          </section>

          <section className={`${theme.card} p-6 rounded-[2rem] shadow-2xl border-4 ${theme.border} flex-grow transition-all duration-700`}>
            <div className="mb-6">
              <label className={`block text-sm font-bold mb-2 flex items-center gap-2 ${theme.accent}`}><Clock size={16} /> 视频时长 (15s 分镜优化版)</label>
              <div className="flex flex-wrap gap-2">
                {DURATIONS.map(d => (
                  <button 
                    key={d.value} 
                    onClick={() => setDuration(d.value)} 
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-500 ${duration === d.value ? `${theme.primary} text-white scale-110 shadow-lg` : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className={`block text-sm font-bold mb-2 flex items-center gap-2 ${theme.accent}`}><Palette size={16} /> 视觉风格 (支持50+内置)</label>
              <div className="h-40 overflow-y-auto pr-2 grid grid-cols-2 sm:grid-cols-3 gap-2 scrollbar-thin">
                {STYLES.map(s => (
                  <button 
                    key={s.id} 
                    onClick={() => setSelectedStyle(s)} 
                    className={`text-[10px] p-2 rounded-lg border transition-all duration-500 text-center flex items-center justify-center leading-tight h-10 ${selectedStyle.id === s.id ? `${theme.border} ${theme.primary} text-white shadow-md` : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300'}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className={`block text-sm font-bold mb-2 flex items-center gap-2 ${theme.accent}`}><User size={16} /> 动物核心主体 (500+内置)</label>
              <select 
                value={selectedSubject.id} 
                onChange={(e) => { const sub = SUBJECTS.find(s => s.id === e.target.value); if (sub) setSelectedSubject(sub); }} 
                className="w-full p-3 rounded-xl border-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-500"
              >
                <optgroup label="核心马年精选">
                  {SUBJECTS.slice(0, 5).map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                </optgroup>
                <optgroup label="全量动物库">
                  {SUBJECTS.slice(5, 50).map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                </optgroup>
              </select>
            </div>

            <div className="mb-6">
              <label className={`block text-sm font-bold mb-2 flex items-center gap-2 ${theme.accent}`}><Sparkles size={16} /> 创意描述</label>
              <textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="描述主角的神情动作、场景氛围或特定的故事情节..." 
                className="w-full h-24 p-4 rounded-xl border-2 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none transition-all" 
              />
            </div>

            <button 
              onClick={handleGenerate} 
              disabled={loading} 
              className={`w-full py-4 rounded-2xl ${theme.primary} text-white font-bold text-lg shadow-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2`}
            >
              {loading ? <RefreshCw className="animate-spin" /> : <><Play size={20} fill="white" /> 开启智能分镜创作</>}
            </button>
          </section>
        </div>

        {/* Right Column: Result Storyboard */}
        <div className="lg:col-span-7">
          <div className={`${theme.card} min-h-full rounded-[2.5rem] shadow-2xl border-4 ${theme.border} overflow-hidden flex flex-col transition-all duration-700`}>
            <div className={`p-6 border-b flex items-center justify-between ${theme.primary} text-white transition-all duration-700`}>
              <h3 className="text-xl font-bold flex items-center gap-2"><Film size={22} /> Sora 2 分镜脚本</h3>
              {result && (
                <div className="flex gap-2">
                  <button 
                    onClick={copyFullStoryboard} 
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors flex items-center gap-1 text-xs font-bold"
                  >
                    {copyStatus === 'full' ? <Check size={16} /> : <Copy size={16} />} 复制全部脚本
                  </button>
                </div>
              )}
            </div>

            <div className="p-6 flex-grow overflow-y-auto max-h-[800px] scrollbar-thin">
              {!result && !loading && (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-50 space-y-4 py-20">
                  <Sparkles size={64} className="animate-pulse" />
                  <p className="text-lg festive-font">请配置左侧参数，开始您的智能创作</p>
                </div>
              )}

              {loading && (
                <div className="h-full flex flex-col items-center justify-center space-y-6 py-20">
                  <div className={`w-16 h-16 border-4 border-t-transparent ${theme.accent} rounded-full animate-spin border-dashed`}></div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-700">正在为您“写词”并构建分镜...</p>
                    <p className="text-sm text-gray-400 mt-1">智能体引擎处理中，请稍候</p>
                  </div>
                </div>
              )}

              {result && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700 pb-10">
                  <div className="bg-yellow-50 p-6 rounded-2xl border-l-8 border-yellow-400 group relative shadow-sm">
                    <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">总体方案描述</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{result.overallDescription}</p>
                    <div className="mt-2 text-[10px] font-bold text-yellow-600 flex items-center gap-2">
                      <Clock size={12} /> 视频总时长：{result.totalDuration}
                    </div>
                    <button 
                      onClick={() => copyToClipboard(result.overallDescription, 'overall')} 
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 p-1.5 rounded-lg border shadow-sm text-yellow-600"
                    >
                      {copyStatus === 'overall' ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {result.shots.map((shot) => (
                      <div key={shot.id} className="relative group pl-6 transition-all border-b pb-4 last:border-b-0">
                        <div className="absolute -left-3 top-0 bottom-4 w-1 bg-gray-200 group-hover:bg-yellow-400 transition-all duration-300" />
                        <div className="flex items-start gap-3">
                          <div className="flex-grow">
                            <p className="text-sm font-medium text-gray-800 leading-relaxed">
                              <span className="font-bold text-gray-400 mr-2 font-mono">{shot.timeRange} | {shot.angle}：</span>
                              {shot.description}，{shot.dialogue}
                            </p>
                            <p className="text-[10px] text-purple-500 mt-1 flex items-center gap-1 font-bold italic">
                              <Sparkles size={12} /> 氛围: {shot.atmosphere}
                            </p>
                          </div>
                          
                          <button 
                            onClick={() => copyToClipboard(`${shot.timeRange} | ${shot.angle}：${shot.description}，${shot.dialogue}`, `shot-${shot.id}`)} 
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-md text-gray-400 shrink-0"
                            title="复制本镜头描述"
                          >
                            {copyStatus === `shot-${shot.id}` ? <Check size={14} /> : <Copy size={14} />}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 text-white/50 text-[10px] flex flex-col items-center gap-6 pb-10 transition-all duration-700">
        <div className="flex items-center gap-8">
          <span onClick={() => setActiveModal('about')} className="hover:text-white cursor-pointer transition-colors border-b border-transparent hover:border-white/20 pb-1 uppercase tracking-widest font-bold">关于我们</span>
          <span onClick={() => setActiveModal('privacy')} className="hover:text-white cursor-pointer transition-colors border-b border-transparent hover:border-white/20 pb-1 uppercase tracking-widest font-bold">隐私条款</span>
          <span onClick={() => setActiveModal('business')} className="hover:text-white cursor-pointer transition-colors text-yellow-400 font-black border-b border-yellow-400/30 hover:border-yellow-400 pb-1 uppercase tracking-widest">商务合作</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="festive-font text-lg opacity-80">小渝児提示词智能助手 · 2026 马年大吉</p>
          <p className="font-mono tracking-tighter opacity-40 uppercase">XiaoYu Intelligent Agent v5.0</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
