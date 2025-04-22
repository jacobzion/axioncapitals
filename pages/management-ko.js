


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
  <a href="/invest-ko" className="hover:underline">부동산 투자</a>
  <a href="/management-ko" className="hover:underline">부동산 관리</a>
  <a href="/find-home-ko" className="hover:underline">주택 찾기</a>
  <a href="/buy-biz-ko" className="hover:underline">사업체 인수</a>
  <a href="/contact" className="hover:underline">Contact</a>
</nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold mb-2">부동산 관리</h2>
        
<p>Axion Capitals는 귀하의 부동산을 정밀하고 신뢰성 있게 관리해 드립니다. 저희의 서비스는 다음을 포함합니다:</p>
<ul className="list-disc list-inside my-4 space-y-1">
  <li>✔️ 입주자 생애 주기 전체 관리</li>
  <li>✔️ 24시간 유지보수 서비스</li>
  <li>✔️ 디지털 임대료 수금 및 재무 보고</li>
</ul>
<p className="mt-6 font-semibold text-blue-900">Axion Capitals의 지원 방식:</p>
<ol className="list-decimal list-inside my-3 space-y-1">
  <li>부동산 등록, 상태 평가, 임대료 산정, 규정 준수 점검을 실시합니다.</li>
  <li>광고, 입주자 심사(신용/배경 확인 포함)를 진행합니다.</li>
  <li>계약, 수리, 수납, 월간 보고까지 전담합니다.</li>
  <li>명확한 소통 및 재계약, 분쟁 대응까지 함께합니다.</li>
</ol>
<p className="mt-4 font-semibold text-blue-800">스트레스 없는 부동산 관리 — 저희가 책임집니다.</p>

      </main>
    </div>
  );
}
