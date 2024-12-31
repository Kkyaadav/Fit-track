// import http from 'http';
// const options = {
// 	method: 'GET',
// 	hostname: 'exercisedb.p.rapidapi.com',
// 	port: null,
// 	path: '/status',
// 	headers: {
// 		'x-rapidapi-key': '3abc4134bemshed87f5d54b8dcbbp1d3fedjsn9892e614c36f',
// 		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on('data', function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on('end', function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();




export const fetchData=async (url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();
    console.log(data);
    return data;

}

