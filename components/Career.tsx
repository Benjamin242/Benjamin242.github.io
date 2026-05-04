export default function Career() {
  const experiences = [
    {
      company: 'Hindsait',
      position: 'Data Scientist',
      period: 'Oct 2022 - Current',
      description: 'Developing NLP libraries and LLM powered models to extract salient details and assess approvability of various health claims/requests.',
      achievements: [
        'Developed and lead team in integration of on-prem LLM solutions into rule based text extraction engines for unstructured medical data',
        'Trained models for auto and semi-automated clinical decision making for Medicare authorization requests, saving clients several thousands per yearin costs.',
        'Improved existing medical extraction engine for medical authorization criteria, resulting in a 30% reduction in clinical review time.',
        'Built image classification and figure extraction for medical texts including MRI scans, handwriting, visual field diagrams etc.',
        'Developed full-stack solutions, building client-facing frontend interfaces to complement backend data pipelines and models.'        
      ]
    },
    {
      company: 'VSNew',
      position: 'Data Consultant',
      period: 'Jul 2021 - Current',
      description: 'Automation of data pipelines and API for companion webapp/mobile application.',
      achievements: [
        'Developed scoring/ranking algorithms based on vehicle data for public databases.',
        'Cleaning and shaping vehicle data and engine audio data for audio classification with PyTorch.',
        'Analyzing time series vehicle data for insights from various test drives.'
      ]
    },
    {
      company: 'University of California - San Diego',
      position: 'B.S. Data Science | Minor Cognitive Science',
      period: 'Aug 2018 - May 2022',
      description: 'Statistics and Computer Science focused undergraduate program with emphasis on machine learning, data engineering, and data analytics.',
      achievements: [
        'Statistics - Probability Theory, Statistical Inference, Regression Analysis, Time Series Analysis, Multivariate Analysis',
        'Computer Science - Data Structures and Algorithms, Database Management, Natural Language Processing, Recommender Systems',
        'Machine Learning - Supervised/Unsupervised Learning, Deep Learning, Natural Language Processing, Computer Vision'        
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Career Journey</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                {exp.position}
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {exp.period}
              </span>
            </div>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3">
              {exp.company}
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              {exp.description}
            </p>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-slate-600 dark:text-slate-400">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
