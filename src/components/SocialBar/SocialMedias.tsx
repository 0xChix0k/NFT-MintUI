import './SocialMedias.css';
import Image from '../../hooks/useImage';
import NftInfo from '../../mySetting';
import React from 'react';


type Social = {
  name: string;
  url?: string;
}

interface Props {
  connectAddr?: string;
}

const SocialMedias: React.FC<Props> = ({ connectAddr }) => {
  const socials: Social[] = NftInfo.socialIcons;
  const checkSocial = (socail: Social): any => {
    if (socail.url) {
      return (
        <a key={socail.name} id={socail.name} href={socail.url} target="_blank" rel="noreferrer" className='item'>
          <Image alt={socail.name} src={`./socials/${socail.name}_Icon.svg`} className="img" />
        </a>
      )
    }
  }

  return (
    <>
      <div className='socialBox'>
        <div>
          {socials.map((socail): any => checkSocial(socail))}
        </div>
        <span id='connetInfo'>{connectAddr}</span>
      </div>
    </>
  )
}
export default SocialMedias;