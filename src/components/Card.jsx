import PropTypes from 'prop-types';

Card.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  googleMapsUrl: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};


export default function Card({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return (
        <div className="card bg-white rounded-lg shadow-lg p-4 text-black">
            <img src={imageUrl} alt={title} className="card--image"/>
            <div className="card--content">
                <div className="card--info">
                    <img src="/location.svg" alt="location icon" className='card--icon w-6' />
                    <p className="card--location tracking-widest">{location}</p>
                    <a href={googleMapsUrl} className="card--link text-gray-500" target='_blank'>View on Google Maps</a>
                </div>
                <h3 className="card--title text-4xl">{title}</h3>
                <p className="card--date">{startDate} - {endDate}</p>
                <p className="card--description">{description}</p>
            </div>
        </div>
    )
}