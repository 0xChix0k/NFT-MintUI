import {  usePrepareContractWrite } from "wagmi";
import { ethers } from "ethers";

type Props = {
  address?: string
  abi:any,
  functionName: string,
  args?: Array<string | number>,
  totalPrice: string;
}

const usePreparWrite = ({ address, abi, functionName,args,totalPrice }:Props) => { 
  const { config } = usePrepareContractWrite({
    address: address,
    abi: abi,
    functionName: functionName,
    args: [args],
    onError(err) {
      console.log(`ErrName: ${err.name}`)
    },
    overrides: {
      value: ethers.utils.parseEther(totalPrice)
    }
  })
  return config
}

export default usePreparWrite;