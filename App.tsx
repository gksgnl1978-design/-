
import React from 'react';
import { ArrowRight } from 'lucide-react';
import CaseCard from './components/CaseCard';
import { CASE_STUDIES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-900 selection:bg-pink-100 selection:text-pink-600">
      {/* Header Section */}
      <header className="py-20 px-6 text-center bg-gradient-to-b from-white to-pink-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-pink-500 font-bold mb-4 tracking-[0.2em] text-sm uppercase animate-fade-in">
            Real Diet Success Stories
          </h2>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8 text-gray-900 tracking-tight">
            "평생의 숙제였던 다이어트,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600">
              올치환
            </span>으로 마침표를 찍다"
          </h1>
          <p className="text-gray-500 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
            이미지보다 수치로 증명하는 리얼 변화.<br className="hidden md:block" />
            실제 환자분들의 정성스러운 기록을 확인해보세요.
          </p>
        </div>
      </header>

      {/* Main Review List */}
      <main className="max-w-5xl mx-auto py-12 px-6 space-y-16">
        {CASE_STUDIES.map((caseData) => (
          <CaseCard key={caseData.id} data={caseData} />
        ))}
      </main>

      {/* Footer / CTA Section */}
      <footer className="bg-white border-t border-gray-100 py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-black mb-10 leading-[1.3] tracking-tight">
            당신도 할 수 있습니다.<br />
            <span className="text-pink-500">건강한 변화</span>를 시작하세요.
          </h2>
          
          <div className="grid gap-5">
            <a 
              href="https://map.naver.com/p/entry/place/2073993698" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-[#03C75A] text-white py-5 rounded-2xl font-bold text-xl hover:brightness-105 transition-all shadow-lg shadow-emerald-100"
            >
              네이버 예약하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="flex items-center justify-center gap-2 bg-gray-900 text-white py-5 rounded-2xl font-bold text-xl hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 outline outline-purple-500/30 outline-offset-[-3px]">
              비대면 처방/배송 가능
            </button>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100 text-sm text-gray-400 space-y-3 leading-loose">
            <p className="font-extrabold text-gray-600 text-base">평택올치한의원</p>
            <p>경기 평택시 만세로 1838 4층 403호 | 대표번호 0507-1395-7708</p>
            <p>평일 09:30 - 20:00 (야간진료) | 토요일 09:30 - 14:00</p>
            <p className="pt-6 text-xs opacity-60 font-medium">
              * 개인별 체질에 따라 효과는 다를 수 있으며, 한의사와의 상담이 필요합니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
