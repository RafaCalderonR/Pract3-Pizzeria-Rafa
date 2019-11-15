import { connect } from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb://rafa:32chiclessinazucar@ds153974.mlab.com:53974/pizzas',{
        useNewUrlParser: true,
        useFindAndModify: false 
    });
    console.log('Database is running');
}