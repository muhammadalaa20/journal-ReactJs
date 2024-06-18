import PropTypes from 'prop-types';

Cards.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    location: PropTypes.string,
    googleMapsUrl: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default function Cards(props) {
    return (
        <>
        <div className="card--img">
            <img src={props.item.imageUrl} alt="mountain" />
        </div>
        <div>
            <img src="/location.svg" alt="location icon" className="w-6" />
            <p className="text-2xl font-bold text-black">{props.item.location}</p>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="text-3xl font-bold text-black">{props.item.title}</h1>
        <p className="text-lg text-gray-500">{props.item.startDate} - {props.item.endDate}</p>
        <p className="text-lg text-gray-500">{props.item.description}</p>
        </>
    )
}