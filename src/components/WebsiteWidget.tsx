interface WebsiteWidgetProps {
  name: string
  description: string
  imageUrl: string
  link: string
}

function WebsiteWidget({ name, description, imageUrl, link }: WebsiteWidgetProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="widget-card">
      <div className="widget-image-container">
        <img src={imageUrl} alt={name} className="widget-image" />
        <div className="widget-overlay"></div>
      </div>
      <div className="widget-content">
        <h3 className="widget-name">{name}</h3>
        <p className="widget-description">{description}</p>
        <span className="widget-arrow">→</span>
      </div>
    </a>
  )
}

export default WebsiteWidget
