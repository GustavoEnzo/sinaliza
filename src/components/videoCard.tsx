// videoCard.tsx
interface VideoCardProps {
    title: string;
    youtubeLink: string;
  }
  
  const VideoCard = ({ title, youtubeLink }: VideoCardProps) => {
    return (
      <div className="bg-primary text-secondary p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">{title}</h2>
        <div className="aspect-w-16 aspect-h-16">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeLink.split('v=')[1].split('&')[0]}`}
            title={title}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  };
  
  export default VideoCard;
  