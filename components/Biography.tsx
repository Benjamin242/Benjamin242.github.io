export default function Biography() {
  return (
    <div className="space-y-6">

      <img src="/images/pfp.jpg" alt="Profile picture of Benjamin Becze" className="w-40 h-40 rounded-full mx-auto mb-6 object-cover" />
      

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            I've been working with computers all my life and once I started working with
            data I knew I wanted to pursue it. Since I got my B.S. in Data Science I've worked
            on numerous projects both in data analytics, natural language processing, and predictive
            modeling. I'm currently a Data Scientist at 
            <a className="text-blue-600 dark:text-blue-400 hover:underline" href="https://www.hindsait.com"> Hindsait </a>
             where I build NLP libraries and 
            LLM powered models to extract and assess approvability of various health claims/requests.   
        </p>
        <br />
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          Outside of the digital world I love going out into nature whether its a camping trip, a short hike,
          or even a multiple day backpacking trip. My most recent adventure was in the Eastern Sierras where I took
          the above picture of beautiful 2nd lake at 
          <a className="text-blue-600 dark:text-blue-400 hover:underline" href="https://maps.app.goo.gl/BP5nGJKXT9YPovc7A"> Big Pine</a>. 
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'PYTHON', 'SQL', 'EXCEL', 'PANDAS', 'PYTORCH', 'AWS', 'JAVASCRIPT', 'DOCKER',
              'REACT', 'JQUERY', 'OPENCV', 'FLASK', 'NODE.JS', 'GOOGLE CLOUD', 'LANGCHAIN',
              'HUGGINGFACE', 'LLM'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
