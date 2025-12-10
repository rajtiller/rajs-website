import './App.css'
import WebsiteWidget from './components/WebsiteWidget'

interface Widget {
  name: string
  description: string
  imageUrl: string
  link: string
}

function App() {
  const widgets: Widget[] = [
    {
      name: "Ten Hats Riddle",
      description: "Challenge your logic skills",
      imageUrl: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://ten-hats-riddle.netlify.app/"
    },
    {
      name: "Creative Studio",
      description: "Explore amazing designs",
      imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://ten-hats-riddle.netlify.app/"
    },
    {
      name: "Tech Solutions",
      description: "Innovative technology hub",
      imageUrl: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://ten-hats-riddle.netlify.app/"
    },
    {
      name: "Digital Portfolio",
      description: "Showcase of modern work",
      imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://ten-hats-riddle.netlify.app/"
    }
  ]

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">My Web Portal</h1>
        <p className="subtitle">Explore my collection of web projects</p>
      </header>

      <main className="main-content">
        <div className="widgets-grid">
          {widgets.map((widget, index) => (
            <WebsiteWidget
              key={index}
              name={widget.name}
              description={widget.description}
              imageUrl={widget.imageUrl}
              link={widget.link}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
