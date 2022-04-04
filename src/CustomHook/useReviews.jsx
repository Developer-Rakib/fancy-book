import { useState, useEffect } from "react"

const useReviews = () => {
    let [reviewsData, setReviewsData] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviewsData(data))
    }, [])
    return [reviewsData, setReviewsData];

}
export default useReviews;