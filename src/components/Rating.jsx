import { useState } from 'react'
import styles from './Rating.module.css'

const Rating = () => {
  
  const [selectedRating, setSelectedRating] = useState()
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleRatingClicked(rating) {
    setSelectedRating(rating)
  }

  function handleFormSubmitted(e) {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return isSubmitted ? (
    <div className={styles["thank-you-panel"]}>

      <img
        className={styles.thankYouImg}
        src="/vite.svg"
        alt="vite"
      />
    
      <p className={styles.selected}>You selected {selectedRating} out of 5</p>
      
      <h1 className={styles.title}>Thank you!</h1>
      
      <p className={styles.description}>
        We appreciated you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
      </p>

    </div>
  ) : (
      <form
        onSubmit={handleFormSubmitted}
        className={styles.panel}
      >
        <img className={styles.star} src="/icon-star.svg" alt="star" />

        <h1 className={styles.title}>How did you do?</h1>
        
        <p className={styles.description}>
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        
        <div className={styles.group}>
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              type="button"
              onClick={() => handleRatingClicked(rating)}
              className={styles.rating}
            >
              {rating}
            </button>
          ))}
        </div>
        
        <button
          type="submit"
          disabled={selectedRating === undefined}
          className={styles.submit}
        >
          Submit
        </button>

      </form>
  )
}

export default Rating