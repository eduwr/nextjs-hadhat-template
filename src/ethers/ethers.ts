declare let window: any;

import { providers } from "ethers";

const HARDHAT_TEST_URL = "http://127.0.0.1:8545/";

const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};
let ether;

if (isMetaMaskInstalled()) {
  window.ethereum.request({ method: "eth_requestAccounts" });
  ether = new providers.Web3Provider(window.ethereum);
} else {
  ether = new providers.JsonRpcProvider(HARDHAT_TEST_URL);
}

export default ether;
