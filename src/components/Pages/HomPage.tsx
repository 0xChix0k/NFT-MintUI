import './HomPage.css'
import Image from '../../hooks/useImage'
import NftInfo from '../../mySetting'
import React, { useState } from 'react'
import SocialMedias from '../SocialBar/SocialMedias'
import Purchase from '../Button/Purchase'
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi'
import useReadContract from '../../hooks/useReadContract'
import usePreparWrite from '../../hooks/usePreparWrite'
import { useWeb3Modal } from '@web3modal/react'

interface HeadProps {
  total: string;
}
const InfoHeader: React.FC<HeadProps> = ({ total }) => {
  return (
    <div className="header-text">
      <h4 id="header-title">{NftInfo.nftName}</h4>
      <p id="total-Supply">{total} / {NftInfo.maxSupply}</p>
    </div>
  )
}
const InfoMain = () => {
  return (
    <div id="info-main">
      <Image src={NftInfo.nftPreview} className="image" height="200px" id="info-img" />
      <div id="main-text">
        <p>Price Per NFT</p>
        <p className="main-title">{NftInfo.nftPrice} ETH + gas</p>
        <p id="dateString" className="launch-date">{NftInfo.launchDate}</p>
      </div>
    </div>
  )
}

type ControlProps = {
  count: number;
  handleAddCount: (count: number) => void;
  handleRemCount: (count: number) => void;
}

const InfoCountControl: React.FC<ControlProps> = ({ count, handleAddCount, handleRemCount }) => {
  return (
    <div id="info-control">
      <div className="calcs">
        <div role="button" id="remCount" onClick={() => handleRemCount(count)}>
          <svg width="16" height="2" viewBox="0 0 16 2" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z"
              fill="white"></path>
          </svg>
        </div>
        <h5 id="nftsNumber" className="nftsNumber">{count}</h5>
        <h5>/</h5>
        <h5 id="maxNumber">{NftInfo.maxMint}</h5>
        <div role="button" id="addCount" onClick={() => handleAddCount(count)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
              fill="white"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
type TotalProps = {
  totalPrice: number;
}
const InfoTotalPrice: React.FC<TotalProps> = ({ totalPrice }) => {
  return (
    <div id="info-total">
      <p className="total-text">Total</p>
      <h5 className="total-price">{totalPrice} ETH + gas</h5>
    </div>
  )
}

const HomPage = () => {
  const [count, setCount] = useState(1);
  const { address, isConnected } = useAccount()
  const getContractData: any = useReadContract({
    address: String(NftInfo.nftContract),
    abi: NftInfo.nftAbi,
    functionName: 'totalSupply'
  });
  const totalPrice = parseFloat(String(count * NftInfo.nftPrice));
  const handleAddCount = (count: number) => {
    if (count < NftInfo.maxMint) {
      setCount(count + 1);
    }
  }
  const handleRemCount = (count: number) => {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  const config = usePreparWrite({
    address: NftInfo.nftContract,
    abi: NftInfo.nftAbi,
    functionName: 'pubMint',
    args: [count],
    totalPrice: String(totalPrice)
  })
  const useWrite: any = useContractWrite(config)
  const { open } = useWeb3Modal()
  const handleMint = () => {
    !isConnected ? open() : useWrite.write();
  }
  const useWait: any = useWaitForTransaction({
    hash: useWrite.data?.hash,
  })
  return (
    <>
      <SocialMedias
        connectAddr={isConnected ? String(address).slice(0, 10) + '...' : 'UNCONNECT...'}
      />
      <InfoHeader total={String(getContractData.data)} />
      <InfoMain />
      <InfoCountControl
        count={count}
        handleAddCount={handleAddCount}
        handleRemCount={handleRemCount}
      />
      <InfoTotalPrice totalPrice={totalPrice} />
      <Purchase
        mintBtnText={
          isConnected ? 'Mint Now' : 'Connect Wallet'
        }
        mintNFT={handleMint}
        isLoading={useWait.isLoading}
      />
    </>
  )
}
export default HomPage;