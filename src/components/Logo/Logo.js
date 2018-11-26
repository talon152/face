import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'

const Logo = () => {
 return (	
 	<div className='ma4 mt0'>
 	<Tilt className="Tilt br2 shadow-2"  options={{ max : 50 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner"> 
 <img alt='brain' src={'http://icons.iconarchive.com/icons/iconsmind/outline/256/Brain-2-2-icon.png'}></img>
  </div>
</Tilt>
 	</div>
	)
}

export default Logo