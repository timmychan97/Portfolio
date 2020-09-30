import React from 'react';
import Art from '../canvasComponents/Art';
import "../css/ArtPropertyPanel.css";

interface Props {
  art: Art,
}

interface States {
  collapsed: boolean,
}

export default class ArtPropertyPanel extends React.Component<Props, States> {
  state = {
    collapsed: false,
  }

  togglePanel() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  onChangeProperty(property: string, value: string) {
    this.props.art.publicProperties[property] = value;
    sessionStorage.setItem(this.props.art.id + "-" + property, value);
  }


  render() {
    return (
      <div className="ArtPropertyPanel" onClick={(e) => e.stopPropagation()}>
        <div className={"property-list" + (this.state.collapsed ? " collapse" : "")} >
          <div className={"leftToggle"} onClick={(e) => this.togglePanel()}>
            <div className="arrow-icon">
              <span /><span />
            </div>
          </div>
          <ul>
            {Object.keys(this.props.art.publicProperties).map((property, i) => {
              return (
                <li key={i}>
                  <label htmlFor={property}>{property + ":"}</label>
                  <input name={property} type="text"
                    defaultValue={this.props.art.publicProperties[property]}
                    onChange={(e) => this.onChangeProperty(property, e.target.value)
                    } />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={"rightToggle" + (this.state.collapsed ? "" : " collapse")} onClick={(e) => this.togglePanel()}>
          <div className="icon-wrapper">
            <div className="arrow-icon">
              <span /><span />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
