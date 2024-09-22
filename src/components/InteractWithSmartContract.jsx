import React, { useMemo, useState } from 'react';
import { useContract, useSendTransaction, useTransactionReceipt, useAccount } from '@starknet-react/core';
import { ABI } from '../ABI/abi';

const contractAddress = '0x1c758616421a10f9df071a5d985c72e3907cf98d553204cf8dee354647c736';

function InteractWithSmartContract() {
  const [amount, setAmount] = useState(0);

  const { address: userAddress } = useAccount();

  const handleSubmit = async (event) => {
    event.preventDefault();

    writeAsync();
  };

  const typedABI = ABI;
  const { contract } = useContract({ address: contractAddress, abi: typedABI });
  const calls = useMemo(() => {
    if (!userAddress || !contract) return [];

    const safeAmount = amount || 0;

    return [contract.populate('increase_balance', [safeAmount])];
  }, [contract, userAddress, amount]);

  const {
    send: writeAsync,
    data: writeData,
    isPending: writeIsPending,
  } = useSendTransaction({ calls });
  const {
    data: waitData,
    status: waitStatus,
    isLoading: waitIsLoading,
  } = useTransactionReceipt({ hash: writeData?.transaction_hash, watch: true });

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(Number(value));
  };

  const LoadingState = ({ message }) => (
    <div className="flex items-center space-x-2">
      <div className="animate-spin">
        <svg
          className="h-5 w-5 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
      <span>{message}</span>
    </div>
  );

  const buttonContent = () => {
    if (writeIsPending) {
      return <LoadingState message="Send..." />;
    }

    if (waitIsLoading) {
      return <LoadingState message="Waiting for confirmation..." />;
    }

    if (waitStatus === 'error') {
      return <LoadingState message="Transaction rejected..." />;
    }

    if (waitStatus === 'success') {
      return 'Transaction confirmed';
    }

    return 'Send';
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 border-black border mt-4">
      <h3 className="text-lg font-bold mb-2">Write to Contract</h3>
      <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
        Amount:
      </label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={handleAmountChange}
        className="block w-full px-3 py-2 text-sm leading-6 border-black focus:outline-none focus:border-yellow-300 black-border-p"
      />
      <button
        type="submit"
        className="mt-3 border border-black text-black font-regular py-2 px-4 bg-yellow-300 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={!userAddress || writeIsPending}
      >
        {buttonContent()}
      </button>
      {writeData?.transaction_hash && (
        <a
          href={`https://sepolia.voyager.online/tx/${writeData?.transaction_hash}`}
          target="_blank"
          className="block mt-2 text-blue-500 hover:text-blue-700 underline"
          rel="noreferrer"
        >
          Check TX on Sepolia
        </a>
      )}
    </form>
  );
}

export default InteractWithSmartContract;