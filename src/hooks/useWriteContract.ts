import {  usePrepareContractWrite ,useContractWrite} from "wagmi";
import { ethers } from "ethers";

type Props = {
  address?: string
  abi:any,
  functionName: string,
  args?: Array<string | number>,
  totalPrice: string;
}

const useWriteContract = ({ address, abi, functionName,args,totalPrice }:Props) => { 
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
  const useWrite = useContractWrite(config);
  return useWrite
}


export default useWriteContract;