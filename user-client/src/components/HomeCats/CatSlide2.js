import React, { Component } from 'react'
import ShopIcon from './ShopIcon'
import TeaIcon from './TeaIcon'
import DinnerIcon from './DinnerIcon'
import DeliverIcon from './DeliverIcon'
import FastFootIcon from './FastFoodIcon'
import FruitIcon from './FruitIcon'
import BestIcon from './BestIcon'
import AllIcon from './AllIcon'


class CatSlide2 extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    return(
      <div className="home-cats">
        <div className="row">
          <ShopIcon />
          <DinnerIcon />
          <TeaIcon />
          <DeliverIcon />
        </div>
        <div className="row">
          <FastFootIcon />
          <BestIcon />
          <AllIcon />
          <FruitIcon />
        </div>
      </div>
    )
  }
}



export default CatSlide2
