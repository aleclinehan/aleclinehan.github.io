import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Menu from '../Menu';
import Links from '../Links';
import Headroom from 'react-headroom'

import profilePic from '../../pages/photo.jpg';
import './style.scss';

class Sidebar extends React.Component {
  render() {
    const { location } = this.props;
    const { author, subtitle, copyright, menu,} = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        
        <p className="sidebar__author-subtitle">Robot Brain Media helps brands explore, <br /> curate and fuel their virtual presence. 
        <br /> 
        <br /> <br /> <br /> <br /> You can see the future, we help you change it. <br /><br /><br /><br /><br /></p>
        
        <Menu data={menu} />
        
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        { isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
          </h1>
        ) :
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
          </h2>
        }
        
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">
            {authorBlock}
          </div>
          <div>
            
            <Links data={author} />
            <footer>
            <p className="sidebar__copyright">
              {}
            </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
