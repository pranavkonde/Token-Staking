import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { STAKING_CONTRACT_ABI } from "./stakingContractABI";

// Replace <contract_address> with the contract address of your contract
const stakeTokenContractAddress = "0x7832cbCd67d75C0C9D1aE39CA622dD995fC0e2C9";
const rewardTokenContractAddress = "0x5D7E30c3d0547a66f758e08ff6F4Ab87caE263b9";
const stakingContractAddress = "0xB5E40296Fd29C8296a261B7283918E4856eeec65";

export const STAKE_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakeTokenContractAddress,
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress,
});


export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: STAKING_CONTRACT_ABI
});