import './podcaster.css'

const Podcaster = () => {
  return (
    <>
        <div className="podcaster_card">
            <div className="podcaster_card_content">
                <div>
                    <img className='latest_image' src="../assets/images/profile/smart-attractive-asian-glasses-male-standing-smile-with-freshness-joyful-casual-blue-shirt-portrait-white-background.jpg"/>
                </div>
                <div className='about_card_footer'>
                    <p className='topic_name'>Melissa</p>
                    <div className='podcaster-badge-area'>
                        <span className="badge">Creative</span>
                        <span className="badge">Design</span>
                    </div>
                </div>
                
            </div>

        </div>
    </>
  )
}

export default Podcaster
