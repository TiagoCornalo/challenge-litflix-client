import './movidecard.css'
import { FiPlay } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

interface MovieCardProps {
  image?: string | undefined
  title?: string | undefined
  stars?: number | undefined
  year?: string | undefined

}

const MovieCard = ({
                       image,
                       title,
                       stars,
                       year }: MovieCardProps ): JSX.Element => {
  return (
        <div className="card" style={{
          backgroundImage: `url(${image})`
        }}>
            <div className="circle">
                <FiPlay className="circle-play-button"/>
            </div>
            <div className="card-movie-title">
                {title}
            </div>
            {/* ALL FROM THIS DIV CONTENT WILL RENDER WHEN HOVERING */}
            <div className="hover-card-container">
                <div className="hover-title-play-container">
                    <div className="hover-play-container">
                        <div className="circle-hover-play">
                            <FiPlay className="circle-play-button-hover"/>
                        </div>
                    </div>
                    <div className="hover-title-container">
                        {title}
                    </div>
                </div>
                <div className="hover-info-container">
                    <div className="hover-info-stars">
                        <AiFillStar className="star-icon"/>
                         {stars}
                    </div>
                    <div className="hover-info-year">
                        {year?.split('-')[0]}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MovieCard
