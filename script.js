async function analyzeMarket(){

        document.getElementById("xauSignal").innerHTML="Mengambil data...";
            document.getElementById("btcSignal").innerHTML="Mengambil data...";

                try{

                        const btc=await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");
                                const btcData=await btc.json();

                                        document.getElementById("btcSignal").innerHTML=
                                                "Harga BTC : $"+Number(btcData.price).toFixed(2);

                                                    }catch(e){

                                                            document.getElementById("btcSignal").innerHTML=
                                                                    "Gagal mengambil harga BTC";

                                                                        }

                                                                            document.getElementById("xauSignal").innerHTML=
                                                                                "XAU akan kita hubungkan pada tahap berikutnya.";

                                                                                }
}