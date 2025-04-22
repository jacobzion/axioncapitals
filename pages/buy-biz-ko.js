


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
            <a href="/management-ko" className="hover:underline">부동산 관리</a>
            <a href="/find-home-ko" className="hover:underline">주택 찾기</a>
            <a href="/buy-biz-ko" className="hover:underline">사업체 인수</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold mb-2">사업체 인수</h2>
        
<p>미국 내 사업체를 인수하고 싶으신가요? Axion Capitals는 E2 비자 및 글로벌 투자자를 위한 전문 서비스를 제공합니다:</p>
<ul className="list-disc list-inside my-4 space-y-1">
  <li>✔️ 검증된 프랜차이즈 및 중소기업 매물</li>
  <li>✔️ 재무 분석, 법률/회계 검토 지원</li>
  <li>✔️ 비자 요건을 충족하는 구조 설계</li>
</ul>
<p className="mt-6 font-semibold text-blue-900">Axion Capitals의 지원 방식:</p>
<ol className="list-decimal list-inside my-3 space-y-1">
  <li>투자 및 비자 목표 분석 후 적합한 매물을 추천합니다.</li>
  <li>검증된 판매자 및 중개인과의 연결을 지원합니다.</li>
  <li>법률, 회계, 규정 준수를 위한 전문가 네트워크를 제공합니다.</li>
  <li>인수 이후 운영, 채용, 성과 개선까지 함께합니다.</li>
</ol>
<p className="mt-4 font-semibold text-blue-800">안정적으로 사업을 시작하고 성공을 이어가세요.</p>

      </main>
    </div>
  );
}
