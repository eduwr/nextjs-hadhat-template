import { providers } from "ethers";

const HARDHAT_TEST_URL = "http://127.0.0.1:8545/";

let ether: providers.JsonRpcProvider | providers.Web3Provider;

if (
  typeof window !== "undefined" &&
  typeof (window as any).ethereum !== "undefined"
) {
  (window as any).ethereum.request({ method: "eth_requestAccounts" });
  ether = new providers.Web3Provider((window as any).ethereum);
} else {
  ether = new providers.JsonRpcProvider(HARDHAT_TEST_URL);
}

export default ether;
