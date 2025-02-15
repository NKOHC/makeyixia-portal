export default function FocusSection() {
  const focuses = [
    '技术探索与创新',
    '创意项目开发',
    '用户体验设计',
    '技术写作与分享'
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span className="mr-2">🎯</span> 我的专注
      </h2>
      <ul className="space-y-3">
        {focuses.map((item, index) => (
          <li key={index} className="text-gray-700 flex items-center">
            <span className="w-1.5 h-1.5 bg-[#4B4BF7] rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
} 