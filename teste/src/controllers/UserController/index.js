export default class UserController {
    create(request, response) {
        const {nome, login, senha} = request.body;
        console.log(request.query);
        console.log(request.params);
        console.log(request.body, nome, login, senha);


        // response.header("Access-Control-Allow-Origin", "*");
        // response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return response.json({nome: "seanynha"});
    }
}