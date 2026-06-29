async function analyzeMarket(){

    const status = document.getElementById("apiStatus");

    status.innerHTML = "🟡 Menghubungkan...";

    document.getElementById("xauSignal").innerHTML =
        "Mengambil data...";

    document.getElementById("btcSignal").innerHTML =
        "Mengambil data...";

    try{

        const btc = await fetch(
            "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
        );

        const btcData = await btc.json();

        document.getElementById("btcSignal").innerHTML =
            "Harga BTC : $" + Number(btcData.price).toFixed(2);

        document.getElementById("xauSignal").innerHTML =
            "⏳ XAU akan dihubungkan pada Sprint 2.";

        status.innerHTML = "🟢 API Online";

    }catch(e){

        status.innerHTML = "🔴 API Offline";

        document.getElementById("btcSignal").innerHTML =
            "❌ Gagal mengambil harga BTC";

    }

    document.getElementById("lastUpdate").innerHTML =
        new Date().toLocaleTimeString("id-ID");

}
