import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({
    rating,
    totalStars = 5,
    filledColor = "var(--yellow)",
    emptyColor = "gray"
}) => {
    const stars = Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;

        if (rating >= starValue) {
            return (
                <span key={index}>
                    <FaStar color={filledColor} />
                </span>
            );
        } else if (rating >= starValue - 0.5) {
            return (
                <span key={index}>
                    <FaStarHalfAlt color={filledColor} />
                </span>
            );
        } else {
            return (
                <span key={index}>
                    <FaRegStar color={emptyColor} />
                </span>
            );
        }
    });

    return (
        <div>
            {stars}
        </div>
    );
};

export default StarRating;