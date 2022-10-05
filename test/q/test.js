// Nu i nazvaniya blyat
function getBTC(){
  zxc();
  zxc1();
}

function zxc(){
  const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  axios.get(apiUrl).then(res => {
	const data = res.data;
	const btcPriceInUsd = data.bpi.USD.rate;
    console.log(btcPriceInUsd);	
  });
}

function zxc1(){
        fetch("https://api.coindesk.com/v1/bpi/historical/close.json",
        {
            "start": "2022-10-03",
            "end": "2022-10-04"
        },
        )
        data = JSON.parse(data);
        console.log(data);

        
       // fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
//         .then(res => res.json())
//         .then(data => 
           
//            console.log(Object(data)),
    
//             ).catch(erorr =>{
//                console.log(erorr)
//            })
 }


// function getBTC(){
//     getRate();
//     getHistoryRate();
// }

// function getRate(){
//     $.get("https://api.coindesk.com/v1/bpi/currentprice.json",
//         function(data){
//             data = JSON.parse(data);
//             console.log(data)}
//             );
// }

// function getHistoryRate(){
//     $.get ("https://api.coindesk.com/v1/bpi/historical/close.json",
//     {
//         "start" : "2022-10-03",
//         "end" : "2022-10-04"
//     },
//     function(data){
//         data = JSON.parse(data);
//         console.log(data);
//     }
//     )
// }



