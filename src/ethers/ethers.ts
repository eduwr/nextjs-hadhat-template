import { providers } from "ethers";

const HARDHAT_TEST_URL = "http://127.0.0.1:8545/";

let provider: providers.JsonRpcProvider | providers.Web3Provider;

if (
  typeof window !== "undefined" &&
  typeof (window as any).ethereum !== "undefined"
) {
  (window as any).ethereum.request({ method: "eth_requestAccounts" });
  provider = new providers.Web3Provider((window as any).ethereum);
} else {
  provider = new providers.JsonRpcProvider(HARDHAT_TEST_URL);
}

export default provider;
