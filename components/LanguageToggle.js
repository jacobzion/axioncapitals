
import { useRouter } from 'next/router';

export default function LanguageToggle() {
  const router = useRouter();
  const path = router.pathname;
  const isKorean = path.includes('-ko');

  const toggleLanguage = () => {
    const newPath = isKorean ? path.replace('-ko', '') : path.replace(/(\/[^/]+)(\.js)?$/, '$1-ko');
    router.push(newPath);
  };

  return (
    <button onClick={toggleLanguage} className="bg-white text-blue-900 border border-white px-3 py-1 rounded text-sm hover:bg-blue-100 transition">
      {isKorean ? 'English' : '한국어'}
    </button>
  );
}
