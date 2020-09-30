import React, { useCallback } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import '../css/Card.css';
import { useHistory } from 'react-router-dom';

interface Props {
  title: string;
  url: string;
  thumbnail: string;
}

export default function ProjectCard(props: Props) {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(props.url), [history]);

  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <div className={"Card " + themeContext.theme} onClick={handleOnClick}>
          <div className="thumbnail">
            <div className="img-wrapper">
              <img src={props.thumbnail} />
            </div>
          </div>
          <h3 className="title">{props.title}</h3>
          <div className="caption">Read More</div>
        </div >
      )}
    </ThemeContext.Consumer>
  );
}
