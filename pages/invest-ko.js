


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
  <a href="/index-ko" className="hover:underline">홈</a>
  <a href="/invest-ko" className="hover:underline">부동산 투자</a>
  <a href="/management-ko" className="hover:underline">부동산 관리</a>
  <a href="/find-home-ko" className="hover:underline">주택 찾기</a>
  <a href="/buy-biz-ko" className="hover:underline">사업체 인수</a>
  <a href="/contact" className="hover:underline">Contact</a>
</nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold mb-2">부동산 투자</h2>
        
<p>Axion Capitals는 국제 투자자와 초보자, 전문 투자자를 위한 전략적 부동산 투자 기회를 제공합니다. 저희의 포트폴리오에는 다음이 포함됩니다:</p>
<ul className="list-disc list-inside my-4 space-y-1">
  <li>✔️ 수익이 높은 주거용 임대 부동산</li>
  <li>✔️ 미국 주요 도시의 상업용 부동산</li>
  <li>✔️ 확장 가능한 수익을 위한 다세대 건물</li>
</ul>
<p className="mt-6 font-semibold text-blue-900">Axion Capitals의 지원 방식:</p>
<ol className="list-decimal list-inside my-3 space-y-1">
  <li>고객의 재무 목표를 분석하고 최적의 투자 전략을 제안합니다.</li>
  <li>사전 심사된 부동산을 고객의 포트폴리오에 제시합니다.</li>
  <li>취득, 금융, 법적 절차를 안내해 드립니다.</li>
  <li>성과 리뷰 및 재매각 전략 등 지속적인 지원을 제공합니다.</li>
</ol>
<p className="mt-4 font-semibold text-blue-800">스마트한 부동산 투자로 장기적인 부를 구축하세요.</p>

      </main>
    </div>
  );
}
