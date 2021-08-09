import { ethers } from "ethers";
import React, { useState } from "react";
import { getSampleAbi, requestAccount } from "../ethers/helpers";
import { CONTRACT_ADDRESS, sampleContract } from "../ethers/sample";
import provider from "../ethers/ethers";
interface Props {
  contractName: string;
  contractOwner: string;
}

const App = ({ contractName, contractOwner }: Props): JSX.Element => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("SUBMIT", value);
    await requestAccount();
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      getSampleAbi(),
      signer
    );

    try {
      await contract.sendMeEthers({
        value: ethers.utils.parseEther(value),
      });
    } catch (err) {
      alert(err.message);
    }

    setValue("");
  };

  return (
    <div>
      <div>
        <h1>Hello Contract: {contractName}</h1>
        <p>Owner: {contractOwner}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button type="submit">Send me ether</button>
        </form>
      </div>
    </div>
  );
};

export default App;

export async function getServerSideProps(context) {
  const contractName = await sampleContract.showName();
  const contractOwner = await sampleContract.getOwnerAddress();

  console.log(contractOwner);

  return {
    props: {
      contractName,
      contractOwner,
    },
  };
}
