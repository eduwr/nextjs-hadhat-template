import React from "react";
import { sampleContract } from "../ethers/sample";

interface Props {
  contractName: string;
}

const App = ({ contractName }: Props): JSX.Element => {
  return (
    <div>
      <h1>Hello Contract: {contractName}</h1>
    </div>
  );
};

export default App;

export async function getServerSideProps(context) {
  const contractName = await sampleContract.showName();

  return {
    props: {
      contractName,
    },
  };
}
