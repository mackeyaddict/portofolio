import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function CommentCard({ imageSrc, name, comment, project, rating }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    while (stars.length < 5) {
      stars.push(<FaStar key={`empty-${stars.length}`} className="text-gray-300" />);
    }
    return stars;
  };

  return (
    <div className="p-4 bg-secondary-500 flex flex-col gap-4 rounded-2xl w-full border-2 border-black shadow-neo-1">
      <div className="flex items-start gap-4">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-20 h-20 rounded-full object-cover" 
        />
        <div className="flex flex-col gap-1">
          <span className="text-lg font-semibold text-black">{name}</span>
          <span className="text-sm text-black italic">{project}</span>
          <div className="flex mt-1">
            {renderStars(rating)}
          </div>
        </div>
      </div>
      <p className="text-sm text-black">{comment}</p>
    </div>
  );
};