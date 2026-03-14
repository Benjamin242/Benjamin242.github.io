export default function Projects() {
  const projects = [
    {
      title: 'Spotify Recommender System',
      description: 'A personalized playlist/song recommendation system built with Spotify API and Graph Neural Networks',
      achievements: [
        'Queried Spotify web api for feature data on a large scale, and made data processing pipelines\
         to properly shape data formachine learning and graph creation',
        'Created GraphSAGE embeddings and multi layer perceptron classifiers in pytorch',
        'Analyzed recommender results and link prediction results and created readable and informative visualizations'
      ],
      tech: ['Pytorch', 'Graph Neural Networks', 'SptotifyAPI'],
      frontendLink: '#',
      backendLink: '#',
      image: '/images/spotify.png'
    },
    {
      title: 'Covid-19 School Reopenings',
      description: '2020 COVID-19 Data Challenge in Border Communities',
      achievements: [
        'Used web data to determine risk factors for school openings in San Diego',
        'Combine data from many different sources, joining on spatial features',
        'Created a K-means clustering algorithm in python to cluster based on feature data',
        'Made maps and visualizations to showcase results.'
      ],
      tech: ['ArcGIS', 'Geopandas', 'Scikit-Learn', 'K-Means'],
      frontendLink: '#',
      backendLink: '#',
      image: '/images/covid.png'
    },
    {
      title: 'Medical Imaging Fraud Detection',
      description: '',
      achievements: [
        
      ],
      tech: [],
      frontendLink: '#',
      backendLink: '#',
      image: 'images/brain.png'
    },
    {
      title: 'NAS and Media Server',
      description: '',
      achievements: [
        
      ],
      tech: [],
      frontendLink: '#',
      backendLink: '#',
      image: 'images/server.png'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Featured Projects</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">
              <img src={project.image} alt={project.title} className="w-40 h-40 rounded-full object-cover" />
            </div>
            

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {project.description}
            </p>
            <ul className="space-y-2 mb-4">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-slate-600 dark:text-slate-400">{achievement}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.frontendLink}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
