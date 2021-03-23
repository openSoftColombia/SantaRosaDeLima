import React from 'react';
import './social.css'

let link = [
  {
    href: 'https://www.instagram.com/opensoftcolombia/',
    icon: 'icon fab fa-facebook-f'
  }, {
    href: 'https://www.instagram.com/opensoftcolombia/',
    icon: 'icon fab fa-twitter'
  }, {
    href: 'https://www.instagram.com/opensoftcolombia/',
    icon: 'icon fab fa-youtube'
  }, {
    href: 'https://www.instagram.com/opensoftcolombia/',
    icon: 'icon fab fa-instagram'
  },
]

const SocialMedia = () => {
  return (
    <div className="social-bar">
      {
        link.map(({ href, icon }) => {
          return (
            <a key={icon} href={href} className={icon} rel="noopener noreferrer" target="_blank"></a>
          )
        })
      }
    </div>
  )
}

export default SocialMedia;