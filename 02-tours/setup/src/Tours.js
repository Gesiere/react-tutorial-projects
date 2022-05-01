import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }, {removeTour}) => {
  console.log(removeTour);
  return <section>
    <div className="title">
      <h2>ours tours</h2>
      <div className="underline"></div>
    </div>
    <div className="">
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
      })}
    </div>
        
  </section>
}
export default Tours;
