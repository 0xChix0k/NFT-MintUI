import './Purchase.css'
import React from 'react'

type ButtonProps = {
  mintBtnText: string;
  mintNFT: () => void;
  isLoading: boolean;
}
const BtnText = () => {
  return (
    <div className='loader-div'>
      Mint
      <span className="loader"></span>
    </div>
  )
}
const Purchase: React.FC<ButtonProps> = ({ mintBtnText, mintNFT, isLoading }) => {

  return (
    <>
      <button
        className="purchase-button"
        id="connectW"
        disabled={isLoading}
        onClick={mintNFT}
      >{isLoading ? BtnText() : mintBtnText}</button>
    </>

  )
}
export default Purchase;