"use client"

export default function ContactSection() {
  return (
    <section className="py-12 px-6 text-center bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">聯絡我</h2>
      <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
        歡迎透過以下方式聯繫我，無論是合作、職缺或業務諮詢。
      </p>
      <div className="flex flex-col items-center space-y-4 text-blue-600 dark:text-blue-400 text-lg">
        <a href="mailto:bobo218079@gmail.com" className="hover:underline">
          📧 bobo218079@gmail.com
        </a>
        <a href="tel:+886903024283" className="hover:underline">
          📞 +886 903 024 283
        </a>
        <a
          href="https://www.linkedin.com/in/gaiuschen"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          🔗 我的 LinkedIn
        </a>
        <a
          href="https://www.google.com/maps/place/New+Taipei+City"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          🗺️ 新北市，台灣
        </a>
      </div>
    </section>
  )
}
