export default function Hero() {
  return (
    <div className="relative bg-[url('/images/banner.jpg')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Benjamin Becze</h1>
          <p className="text-xl text-blue-100 mb-6">Data Scientist</p>

          <div className="text-lg max-w-2xl mx-auto text-blue-50">
            <ul className="mb-6">
              <li><a href="/files/benjamin_becze_resume.pdf">Resume/CV</a></li>
              <li><a href="https://www.linkedin.com/in/benjamin-becze-307b541b6/">LinkedIn</a></li>
              <li><a href="https://github.com/Benjamin242/">Github</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
