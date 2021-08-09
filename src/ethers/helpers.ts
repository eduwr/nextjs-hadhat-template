import SAMPLE from "../../artifacts/contracts/Sample.sol/Sample.json";

export async function requestAccount() {
  try {
    await (window as any).ethereum.request({ method: "eth_requestAccounts" });
  } catch (error) {
    console.log("error");
    console.error(error);

    alert("Login to Metamask first");
  }
}

export const getSampleAbi = () => SAMPLE.abi;
