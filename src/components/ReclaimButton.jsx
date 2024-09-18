import React, { useState } from 'react';
import QRCode from "react-qr-code";
import { Reclaim } from '@reclaimprotocol/js-sdk';

const providerId = '6d3f6753-7ee6-49ee-a545-62f1b1822ae5';

function ReclaimButton() {
  const [url, setUrl] = useState('');

  const getVerificationReq = async () => {
    const reclaimClient = new Reclaim.ProofRequest(import.meta.env.VITE_RECLAIM_APP_ID);

    await reclaimClient.buildProofRequest(providerId);

    // this is an MVP, you should not generate the signature on the frontend
    reclaimClient.setSignature(
      await reclaimClient.generateSignature(import.meta.env.VITE_RECLAIM_SECRET)
    );

    const { requestUrl, statusUrl } = await reclaimClient.createVerificationRequest();

    setUrl(requestUrl);

    await reclaimClient.startSession({
      onSuccessCallback: (proof) => {
        console.log('Verification success', proof);
        const data = proof.claimData.context.extractedParameters
        // Your business logic here
        console.log(data)
      },
      onFailureCallback: (error) => {
        console.error('Verification failed', error);
        // Your business logic here to handle the error
      },
    });
  };

  return (
    <div>
      { !url && (

        <button
        onClick={getVerificationReq}
        className="border border-black text-black font-regular py-2 px-4 bg-yellow-300 hover:bg-yellow-500"
      > 
       Create Claim QRCode 
      </button> 
      )}
      { url && (
       <QRCode value={url} />
      )}
    </div>
  );
}

export default ReclaimButton;
