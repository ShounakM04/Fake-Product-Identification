import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://opt-sepolia.g.alchemy.com/v2/gQhgNmxUa1rjYbFTBn71N2XQjZbgHKG6"
  );
  web3 = new Web3(provider);
}

export default web3;
