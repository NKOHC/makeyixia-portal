export default function GoalsSection() {
  const goals = [
    '分享技术经验和创新思路',
    '记录个人成长与思考',
    '与志同道合的朋友交流',
    '激发更多创意灵感'
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span className="mr-2">✨</span> 博客目标
      </h2>
      <ul className="space-y-3">
        {goals.map((item, index) => (
          <li key={index} className="text-gray-700 flex items-center">
            <span className="w-1.5 h-1.5 bg-[#4B4BF7] rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
} 