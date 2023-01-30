import moongose, { Schema, model, connect  } from 'mongoose';

export class Moongose {
    async connect(){
        try {
            console.log('Start conecction')
            connect('mongodb+srv://george:root@cluster0.n6lhxlp.mongodb.net/?retryWrites=true&w=majority'); // mongodb+srv://<george>:<root>@cluster0.n6lhxlp.mongodb.net/test
            console.log('Connected')
        } catch (error) {
            return {message:"moongose conecction error"}
        }
    }

    async disconnect(){
        try {
            await moongose.connection.close();
            console.log('disconnected')
        } catch (error) {
            return {message:"moongose conecction error"}
        }
    }
}

const moongoseController = new Moongose; 

export default moongoseController;