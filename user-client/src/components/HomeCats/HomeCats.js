import React, { Component } from 'react'
import '../../css/home-cats.css'
import CatSlide1 from './CatSlide1'
import CatSlide2 from './CatSlide2'

class Cats extends Component {
  state = {
    slideWidth: '',
    index: 0,
    enableAnimation: false,
    touchDelta: ''
  }

  handleNext = () => {
    if(this.state.index === 1) return
    this.setState({index: this.state.index + 1})
  }

  handlePrev = () => {
    if(this.state.index === 0) return
    this.setState({ index: this.state.index - 1})
  }


  handleTouchStart = (event) => {
      let touch = event.targetTouches[0];
      this.startX = touch.pageX ;
      this.startTime = new Date().getTime()
      this.setState({
        enableAnimation: false
      })
    }

  handleTouchMove = (event) => {
    event.preventDefault();
    let touch = event.targetTouches[0];
    if(this.state.index === 0 && this.startX < touch.pageX) return
    if(this.state.index === 1 && this.startX > touch.pageX) return
    this.setState({
      touchDelta:  this.startX - touch.pageX
    })
  }

  checkSwipe(absMove, duration) {
    const threshold = 10
    const allowedTime = 300
    let isSwipe =   absMove > threshold
                 && duration < allowedTime
                 ? true : false
    return isSwipe
  }

  handleTouchEnd = (e) => {
    let endTime = new Date().getTime()
    let startTime = this.startTime
    let duration = endTime - startTime
    let touch = e.changedTouches[0]
    let endX = touch.pageX
    let startX = this.startX
    let absMove = Math.abs(startX - endX)
    if(this.checkSwipe(absMove, duration) ||
       absMove > this.state.slideWidth/2 ){
      if(startX > endX) {
        this.handleNext()
      }else{
        this.handlePrev()
      }
    }
    this.setState({
      touchDelta: 0,
      enableAnimation: true
    })
  }


  componentDidMount() {
    this.setState({
      slideWidth: window.innerWidth
    })
  }

  render() {
    return (
          <div className='slider-wrap'>
            <div id='slider'
              onTouchStart={this.handleTouchStart}
              onTouchMove={this.handleTouchMove}
              onTouchEnd={this.handleTouchEnd}
              style={{
                'transform': `translate3d(-${this.state.index*this.state.slideWidth + this.state.touchDelta}px, 0, 0)`,
                'transition' : this.state.enableAnimation ? 'all .4s ease-out' : 'none'
              }}>
              <div  style={{ 'width': window.innerWidth + 'px' }} className='slide' >
                <CatSlide1 />
              </div>
              <div  style={{ 'width': window.innerWidth + 'px' }} className='slide' >
                <CatSlide2 />
              </div>
            </div>
          </div>
    );
  }
}

export default Cats
