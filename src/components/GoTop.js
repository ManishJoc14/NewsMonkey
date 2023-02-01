import React, { Component } from 'react'

export default class GoTop extends Component {
    state={
        showGoTop:false
    }
    handleScrollUp = () => {
        window.scrollTo( { left: 0, top: 0,behavior: 'smooth'})
      }
    handleVisibleButton = () => {
        this.setState({showGoTop: window.pageYOffset > 50})
    }
    componentDidMount =()=>{
        window.addEventListener( 'scroll', this.handleVisibleButton )
    }

  render() {
    return (
        <button className="btn btn-outline-warning position-fixed "onClick={ this.handleScrollUp } style={{right:'1%',bottom:'12%',fontSize:'1.8rem',borderRadius:'50%',outline:'none',display:this.state.showGoTop?'block':'none'}}><i class="fa-solid fa-angles-up"></i></button>
    )
  }
}
