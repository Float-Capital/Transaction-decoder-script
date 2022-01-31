const ethers = require("ethers");
const ABI = require("./abis/Staker.json"); // Contract ABI

const inter = new ethers.utils.Interface(ABI);

(async () => {
  const provider = await new ethers.providers.JsonRpcProvider(
    "https://polygon-rpc.com"
  );
  // "https://matic-mumbai.chainstacklabs.com"
  const tx = await provider.getTransaction(
    "0x694cb5395d99b8b63bf09aee4b678990cc541804351920962d7e41c020e9e709"
  );

  const decodedInput = inter.parseTransaction({
    data: tx.data,
    value: tx.value,
  });

  // Decoded Transaction

  console.log({
    function_name: decodedInput.name,
    from: tx.from,
  });
  console.log(JSON.stringify(decodedInput.args));
  console.log(decodedInput.args[2].toString());
})();
