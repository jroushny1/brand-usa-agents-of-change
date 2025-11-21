
import { resourceCategories } from './data';

const ResourcesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
          <p className="mt-2 text-lg text-gray-600">A curated list of AI tools and resources to help you work smarter.</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {resourceCategories.map((category) => (
            <section key={category.category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <li key={item.title} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="flex-shrink-0">
                            {item.logo && <img src={item.logo} alt={`${item.title} logo`} className="h-10 w-10 object-contain" />} 
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ResourcesPage;
