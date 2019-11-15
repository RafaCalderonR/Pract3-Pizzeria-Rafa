import express, { Application} from 'express';
import morgan from 'morgan';

import cors from 'cors';

import indexRoutes from './routes/routes'

const app: Application = express();

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', indexRoutes);


export default app;