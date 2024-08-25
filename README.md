# ERC-20 Staking App

ERC-20 staking app where a user can stake a token and earn an ERC-20 in return.

## Getting Started

To use the ERC-20 staking app, you'll need to clone this repository, install dependencies, set up environment variables, and deploy the application. Below are the steps to follow:

### Deploy Smart Contracts

You will need to deploy the following smart contracts to be used:
[ERC-20 Token(Staking Token)](https://thirdweb.com/thirdweb.eth/TokenERC20)
[ERC-20 Token(Reward Token)](https://thirdweb.com/thirdweb.eth/TokenERC20)
[ERC-20 Staking Contract](https://thirdweb.com/thirdweb.eth/TokenStake)

### Cloning the Repository

To get started, clone the repository to your local machine:

```
git clone https://github.com/web3hacks/staking

```

### Installing Dependencies

This application requires several dependencies to function, including thirdweb Connect SDK. Install them using npm or yarn:

```
npm install
```

or

```
yarn install
```

### Setting Environment Variables

Set the following variables in the `.env` file

- `NEXT_PUBLIC_CLIENT_ID`: thirdweb API key.
