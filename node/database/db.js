import mongoose from 'mongoose';

const url = `mongodb://127.0.0.1:27017/ecommerce`;

const connect = async () => {
    try {
        await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB!!");
    } catch (error) {
    console.error(error);
    }
};

export default connect;
