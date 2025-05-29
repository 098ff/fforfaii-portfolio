export default function Home() {
  return (
    <div className="pt-16"> {/* เพื่อไม่ให้ถูก navbar บัง */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            สวัสดี ฉันคือ [ชื่อของคุณ]
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Frontend Developer & UI/UX Designer
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            ดูผลงานของฉัน
          </button>
        </div>
      </section>
    </div>
  )
}