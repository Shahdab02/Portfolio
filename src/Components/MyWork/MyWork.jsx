    import React from 'react'
    import './MyWork.css';
    // import them from '../../assets/dp.jpg';
    import MyWork_data from '../../assets/MyWork_data.js';
    import Arrow from '../../assets/Arrow-icon.jpg'
    
    const MyWork = () => {
      return (
        <div id='work' className='mywork'>
          <div className="mywork-title">
            <h1>My latest Project</h1>
            {/* <img className='them' src={them} alt="" /> */}
          </div>
          <div className="mywork-container">
           {MyWork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt=""width={220} />
           })}

          </div>
          <div className="mywork-showmore">
            <p>Show more</p>
            <img src={Arrow} alt="" height={20} />
          </div>

        </div>
      )
    }
    
    export default MyWork