


export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-6">
      <header className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white px-4 py-4 shadow-md mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img src="/axion-logo.png" alt="Axion Capitals Logo" className="h-16 w-auto" />
            <div>
              <h1 className="text-xl font-bold md:text-2xl">Axion Capitals</h1>
              <p className="text-xs">부동산 · AI 투자 · 스마트 계약</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium">
            <a href="/" className="hover:underline">Home</a>
            <a href="/" className="hover:underline">부동산 투자</a>
            <a href="/" className="hover:underline">부동산 관리</a>
            <a href="/" className="hover:underline">주택 찾기</a>
            <a href="/" className="hover:underline">사업체 인수</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold mb-2">주택 찾기</h2>
        
<p>꿈의 집을 찾고 계신가요? 지역 내외 어디에서든 완벽한 주택을 찾도록 도와드립니다:</p>
<ul className="list-disc list-inside my-4 space-y-1">
  <li>✔️ 맞춤형 MLS 검색 및 알림 제공</li>
  <li>✔️ 가상 투어 및 현지 에이전트 연계</li>
  <li>✔️ 전문적인 협상 및 계약 지원</li>
</ul>
<p className="mt-6 font-semibold text-blue-900">Axion Capitals의 지원 방식:</p>
<ol className="list-decimal list-inside my-3 space-y-1">
  <li>고객의 취향, 예산, 라이프스타일 목표를 분석합니다.</li>
  <li>선별된 매물을 매칭하고 투어 일정을 조정합니다.</li>
  <li>계약, 점검, 평가, 마무리까지 모든 절차를 안내합니다.</li>
  <li>입주 이후에도 안정적인 정착을 도와드립니다.</li>
</ol>
<p className="mt-4 font-semibold text-blue-800">안정, 아름다움, 안락함을 한 번에 누리세요.</p>

      </main>
    </div>
  );
}
