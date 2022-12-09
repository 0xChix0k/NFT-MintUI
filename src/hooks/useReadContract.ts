import { useContractRead } from "wagmi";

type Props = {
  address?: string
  abi:any,
  functionName: string,
}

const useReadContract= ({address,abi,functionName}:Props) => { 
  const getContractData = useContractRead({
    address: address,
    abi:abi,
    functionName: functionName,
    // onSettled(data, error) {
    //   console.log('Settled', { data, error })
    // },
    onError(err) {
      console.log('Error Message', err)
    },    
  })
  
  return getContractData;
} 

export default useReadContract;