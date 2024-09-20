import React, { useState } from 'react';
import QRCode from "react-qr-code";
import { Reclaim } from '@reclaimprotocol/js-sdk';
import { useAccount } from '@starknet-react/core';

import DisplayJson from './UI/DisplayJson';

import { githubProvider } from '../utils/providers';

function ReclaimButton() {
  const { address: userAddress } = useAccount();

  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);

  const getVerificationReq = async () => {
    const reclaimClient = new Reclaim.ProofRequest(import.meta.env.VITE_RECLAIM_APP_ID);

    await reclaimClient.buildProofRequest(githubProvider);

    // this is an MVP, you should not generate the signature on the frontend
    reclaimClient.setSignature(
      await reclaimClient.generateSignature(import.meta.env.VITE_RECLAIM_SECRET)
    );

    const { requestUrl, statusUrl } = await reclaimClient.createVerificationRequest();

    setUrl(requestUrl);

    await reclaimClient.startSession({
      onSuccessCallback: (proof) => {
        console.log('Verification success', proof);
        // const reclaimData = proof[0].claimData.context.parameters;
        // Your business logic here
        setData(proof);
      },
      onFailureCallback: (error) => {
        console.error('Verification failed', error);
        // Your business logic here to handle the error
      },
    });
  };

  return (
    <div className="border border-black p-4 bg-white">
      <div className="flex justify-between items-center">
        <div>
          <p>domain: github;</p>
          <p>data: username;</p>
        </div>
        <div>
          {!url ? (
            <button
              onClick={getVerificationReq}
              className="border border-black text-black font-regular py-2 px-4 bg-yellow-300 hover:bg-yellow-500"
            >
              Create Claim QRCode
            </button>
          ) : (
            <QRCode value={url} />
          )}
        </div>
      </div>
      <div className="mt-4">
        {data ? (
          <div className="flex flex-col gap-y-4">
            <DisplayJson data={exampleData} />
            <button
              disabled={!userAddress}
              className="mt-3 border border-black text-black font-regular py-2 px-4 bg-yellow-300 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
              onClick={() => alert("saving proof to smart contract")}
            >
              Save proof
            </button>
          </div>
        ) : (
          <div>No data available yet</div>
        )}
      </div>
    </div>
  );
}

export default ReclaimButton;
