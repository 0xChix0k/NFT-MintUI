
import ABI from './abi.json'

const NftInfo = {
  //Add you social links,or hold url to empty from socialIcon
  socialIcons: [
    {
      name: 'Discord',
      url: 'https://discord.gg/',
    },
    {
      name: 'Twitter',
      url: '',
    }
  ],
  //put in "public/bg/
  background: 'background2.jpg',
  //put in "public/"
  //jpg/png/gif
  nftPreview: 'preview.gif',
  nftContract: '0x6C804dA2aF8C353b6cd3a2Add8045BBD163CC026',
  nftAbi: ABI,
  infura_Id: 'c780b7e9416640ac8550712b8ed6c1ac',
  nftName: 'Skulls NFT',
  maxSupply: 10000,
  //eth
  nftPrice: 0.008,
  maxMint: 3,
  launchDate: '2022.12.01',
}
export default NftInfo;