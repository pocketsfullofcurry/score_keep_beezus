import React from 'react';


export default class TitleBar extends React.Component{ //need to have uppercase In first position for JSX complicance.
    renderSubTitle(){
      if(this.props.subTitle) {
        return <h6 className="title-bar__subtitle">{this.props.subTitle}</h6>
      } //no else statement since if you dont return anything or return a null f(x) implicitly returns undefined. and there not executed s4l35
    }
    render() {
      return (
        <div className="title-bar">
          <div className="wrapper">
            <h1>{this.props.title}</h1>
            {this.renderSubTitle()}
          </div>
        </div>
      )
    }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string
};
TitleBar.defaultProps = {
  title: 'Default Title'
};
