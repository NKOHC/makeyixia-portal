export default function ContactSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="mr-2">📮联系我</span> 联系我
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12">
        <div className="text-center">
          <img 
            src="/images/wechat-qr.JPG" 
            alt="微信二维码" 
            className="w-40 h-40 mx-auto rounded-lg bg-white p-2 shadow-md"
          />
          <p className="mt-3 text-gray-600">微信</p>
        </div>
        <div className="text-center">
          <img 
            src="/images/jike.PNG" 
            alt="即刻二维码" 
            className="w-40 h-40 mx-auto rounded-lg bg-white p-2 shadow-md"
          />
          <p className="mt-3 text-gray-600">即刻</p>
        </div>
      </div>
    </section>
  );
} 