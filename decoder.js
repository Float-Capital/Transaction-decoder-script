    const ethers = require('ethers');
    const ABI = require('./abis/LongShort.json'); // Contract ABI

    const inter = new ethers.utils.Interface(ABI);

    (async() => {
	const  provider = await new ethers.providers.JsonRpcProvider(
    "https://polygon-rpc.com"
  );
      const tx = await provider.getTransaction('0x5a48225cf640eaf6b623a36fd0ea9ac0b64f19b36e490b921b5ebd4708f4d889');
        const decodedInput = inter.parseTransaction({ data: tx.data, value: tx.value});

        // Decoded Transaction
        console.log({
            function_name: decodedInput.name,
            from: tx.from,
          });  
	    console.log(JSON.stringify(decodedInput.args))
    })();
